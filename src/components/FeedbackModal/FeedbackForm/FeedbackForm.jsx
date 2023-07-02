// import ReactStars from "react-rating-stars-component";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { ReactComponent as IconEdit } from "images/reviews/editPen.svg";
import { ReactComponent as IconTrash } from "images/reviews/trash.svg";
import { ReactComponent as IconClose } from 'images/close.svg';
import { 
    Input, 
    Label, 
    FormBtn, 
    Wrap, 
    FormBtnWrap, 
    FormBtnCancel, 
    EditBtn, 
    DeleteBtn, 
    WrapForEdit, 
    WrapForReview, 
    BtnCloseWrap, 
    ErrorMessage, 
    WrapForInput} from "./FeedbackForm.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserReview } from "redux/reviews/selectors";
import { addReview, deleteReview, editReview } from "redux/reviews/operations";
import { changeRating } from "redux/reviews/reviewSlice";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const rateIcon = (
    <path d="M791.706 1024c-12.164 0-24.269-3.906-34.692-11.681l-245.007-183.662-245.007 183.662c-10.151 7.636-22.35 11.717-34.855 11.674s-24.677-4.22-34.777-11.922c-10.109-7.665-17.65-18.461-21.549-30.866-3.899-12.398-3.956-25.768-0.166-38.21l91.377-308.266-242.807-178.847c-10.063-7.763-17.536-18.636-21.363-31.082s-3.813-25.835 0.039-38.272c3.883-12.407 11.397-23.225 21.482-30.925s22.229-11.892 34.717-11.984l300.724-0.473 95.743-300.619c3.951-12.384 11.53-23.155 21.662-30.787s22.304-11.739 34.793-11.739c12.489 0 24.662 4.107 34.794 11.739s17.71 18.403 21.661 30.787l94.117 300.619 302.263 0.473c12.5 0.074 24.664 4.263 34.757 11.975s17.605 18.552 21.475 30.982c3.862 12.429 3.884 25.816 0.051 38.257-3.825 12.442-11.308 23.306-21.38 31.049l-242.805 178.847 91.37 308.266c3.803 12.434 3.752 25.805-0.139 38.21-3.899 12.398-11.432 23.201-21.541 30.866-10.13 7.768-22.374 11.944-34.94 11.93v0z"></path>
);

const rateStyled = {
    itemShapes: rateIcon,
    activeFillColor: '#FFAC33',
    inactiveFillColor: '#CEC9C1',
};

const FeedbackSchema = Yup.object().shape({
    review: Yup.string()
      .min(10, 'review is too short')
      .max(300, 'review is too long')
      .required('review is required')
})


export const FeedbackForm = ({ onClose }) => {
    
    const dispatch = useDispatch();
    const userReview = useSelector(selectUserReview);
    const [isEditActive, setIsEditActive] = useState(false);

    const ratingChanged = (newRating) => {
        // setRatingValue(newRating);
        dispatch(changeRating(newRating))
    };

    const handleSubmit = (values, actions) => {
        values.rating = Number(userReview.rating);
        if(isEditActive){
            const reviewRequest = {id: userReview._id, review: values}
            dispatch(editReview(reviewRequest));
        }
        else{
            dispatch(addReview(values));
        }
        actions.resetForm();
        if(userReview.rating){
            onClose();
        }
    };

    const handleEdit = ()=> {
        setIsEditActive(!isEditActive);
    };

    const handleDelete = ()=> {
        dispatch(deleteReview(userReview._id));
        onClose();
    }

    return (
        <Wrap>
            <Formik initialValues={{
                rating: userReview.rating || '',
                review: userReview.review || '',
            }}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
            >
                <Form>
                    <Label name="rating">Rating</Label>
                    <Rating 
                        name="rating"
                        component="div" 
                        value={Number(userReview.rating)}
                        itemStyles={rateStyled}
                        style={{ maxWidth: 110, gap: 4, marginBottom:"20px"}}
                        onChange={ratingChanged}
                        readOnly={Boolean(userReview.rating) && !isEditActive}
                        />
                    <WrapForInput>
                    <WrapForReview>
                        <Label htmlFor="review">Review</Label>
                        {Boolean(userReview.review) && <WrapForEdit>
                            <EditBtn onClick={handleEdit} isActive={isEditActive} type="button">
                                <IconEdit/>
                            </EditBtn>
                            <DeleteBtn type="button" onClick={handleDelete}>
                                <IconTrash/>
                            </DeleteBtn>
                        </WrapForEdit>
                        }
                    </WrapForReview>
                    
                    <Input 
                        type="text" 
                        placeholder="Enter text" 
                        id="review" 
                        name="review" 
                        component="textarea"
                        disabled={!isEditActive && Boolean(userReview.review)}/>
                    <ErrorMessage name="review" component="div" />
                    </WrapForInput>

                    {(!Boolean(userReview.review) || isEditActive )&& <FormBtnWrap>
                        <FormBtn type="submit" disabled={!userReview.rating}>{isEditActive?"Edit":"Save"}</FormBtn>
                        <FormBtnCancel type="button" onClick={onClose}>Cancel</FormBtnCancel>
                    </FormBtnWrap>
                    }
                    
                    <BtnCloseWrap type="button" aria-label="close button" onClick={onClose}>
                        <IconClose style={{ width: 24, height: 24 }} />
                    </BtnCloseWrap>
                </Form>
            </Formik>
      </Wrap>
    );
  };