import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as IconClose } from 'images/close.svg';
import { ReactComponent as IconAdd } from 'images/addIcon.svg';
import { ReactComponent as IconEdit } from 'images/tasksSvg/edit.svg';

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
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

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .max(250, 'title is too long')
    .required('Title is required'),
  start: Yup.string().required(),
  end: Yup.string().required(),
  priority: Yup.string()
    .oneOf(['low', 'medium', 'high'])
    .required('Priority is required'),
});

export const TaskForm = ({ onClose, action }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: '',
        start: '09:00',
        end: '14:00',
        priority: 'low',
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Title
          <InputTitle type="text" name="title" placeholder="Enter text" />
        </Label>

        <TimeWrapper>
          <Label>
            Start
            <InputTime type="time" name="start" />
          </Label>
          <Label>
            End
            <InputTime type="time" name="end" />
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
          <IconClose style={{ width: 24, height: 24 }} />
        </ButtonCloseWrap>
      </Form>
    </Formik>
  );
};
