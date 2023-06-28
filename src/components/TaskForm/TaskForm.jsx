import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as IconAdd } from 'images/addIcon.svg';
import { ReactComponent as IconEdit } from 'images/tasksSvg/edit.svg';

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
  CloseIcon,
  ErrorMessage,
  Form,
  InputTime,
  InputTitle,
  Label,
  RadioField,
  RadioLabel,
  RadioSpan,
  RadioWrapper,
  TimeWrapper,
} from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .max(250, 'Title is too long')
    .required('Title is required'),
  start: Yup.string().required('Start time is required'),
  end: Yup.string()
    .required('End time is required')
    .test(
      'is-greater',
      'End time should be greater than start time',
      function (value) {
        const { start } = this.parent;
        if (start && value) {
          const startTime = new Date(`2000-01-01T${start}`);
          const endTime = new Date(`2000-01-01T${value}`);
          return endTime > startTime;
        }
        return true;
      }
    ),
  priority: Yup.string()
    .oneOf(['low', 'medium', 'high'])
    .required('Priority is required'),
  date: Yup.date()
    .required('Date is required')
    // .min(new Date('1900-01-01'), 'Date must be after 1900-01-01')
    // .max(new Date(), 'Date must be before or equal to the current date')
    .transform((value, originalValue) => {
      if (originalValue) {
        const [year, month, day] = originalValue.split('-');
        return new Date(
          `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        );
      }
      return value;
    }),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Category is required'),
});

export const TaskForm = ({ onClose, action, column }) => {
  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addTask(values));
    actions.resetForm();
    onClose();
  };

  const setCategory = () => {
    if (column === 'To do') return 'to-do';
    if (column === 'In progress') return 'in-progress';
    if (column === 'Done') return 'done';
  };

  return (
    <Formik
      initialValues={{
        title: '',
        start: '09:00',
        end: '14:00',
        priority: 'low',
        date: currentDay,
        category: setCategory(),
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Title
          <InputTitle type="text" name="title" placeholder="Enter text" />
          <ErrorMessage name="title" component="div" />
        </Label>

        <TimeWrapper>
          <Label>
            Start
            <InputTime type="time" name="start" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            End
            <InputTime type="time" name="end" />
            <ErrorMessage name="end" component="div" />
          </Label>
        </TimeWrapper>

        <RadioWrapper role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <RadioField type="radio" name="priority" value="low" />
            <RadioSpan value="low" />
            Low
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="medium" />
            <RadioSpan value="medium" />
            Medium
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="high" />
            <RadioSpan value="high" />
            High
          </RadioLabel>
        </RadioWrapper>

        <ButtonWrapper>
          {action === 'add' ? (
            <ButtonAction type="submit">
              <IconAdd />
              Add
            </ButtonAction>
          ) : (
            <ButtonAction type="submit">
              <IconEdit stroke="#fff" />
              Edit
            </ButtonAction>
          )}

          <ButtonCancel type="button" onClick={onClose}>
            Cancel
          </ButtonCancel>
        </ButtonWrapper>

        <ButtonCloseWrap
          type="button"
          aria-label="close button"
          onClick={onClose}
        >
          <CloseIcon />
        </ButtonCloseWrap>
      </Form>
    </Formik>
  );
};
