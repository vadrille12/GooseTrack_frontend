import ReactStars from "react-rating-stars-component";
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
    ErrorMessage } from "./FeedbackForm.styled";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFeedback } from "redux/reviews/selectors";
import { addReview, deleteReview, editReview, fetchReviews } from "redux/reviews/operations";


const FeedbackSchema = Yup.object().shape({
    review: Yup.string()
      .min(10, 'review is too short')
      .max(300, 'review is too long')
      .required('review is required')
    })

export const FeedbackForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const isFeedback = useSelector(selectIsFeedback);

    const [ratingValue, setRatingValue] = useState(0);
    const [isEditActive, setIsEditActive] = useState(false);
    // const [isFeedback, setIsFeedback] = useState(false);

    const ratingChanged = (newRating) => {
        setRatingValue(newRating);
    };

    const handleSubmit = (values, actions) => {
        const reviews = dispatch(fetchReviews());
        console.log(reviews);
        values.rating = ratingValue;
        if(isEditActive){
            dispatch(editReview(values));
        }
        dispatch(addReview(values));

        // setIsFeedback(true);
        setIsEditActive(false);
        actions.resetForm();
        onClose();
    };

    const handleEdit = ()=> {
        setIsEditActive(!isEditActive);
        // if(isEditActive) {
        //     setIsEditActive(false);
        // }else{
        //     setIsEditActive(true)
        // };
    };

    const handleDelete = ()=> {
        // setIsFeedback(false);
        dispatch(deleteReview());
        setIsEditActive(false);
        onClose();
    }

    return (
        <Wrap>
            <Formik initialValues={{
                rating: '',
                review: '',
            }}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
            >
                <Form>
                    <Label>Rating</Label>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#FFAC33"
                        color="#CEC9C1"
                        value={ratingValue}
                        edit={!isEditActive}
                        style={{marginBottom:"20px"}}/>
                        
                    <WrapForReview>
                        <Label htmlFor="review">Review</Label>
                        {isFeedback && <WrapForEdit>
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
                        // isActive={isEditActive} 
                        disabled={!isEditActive && isFeedback}/>
                    <ErrorMessage name="review" component="div" />

                    {(!isFeedback || isEditActive )&& <FormBtnWrap>
                        <FormBtn type="submit">{isEditActive?"Edit":"Save"}</FormBtn>
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