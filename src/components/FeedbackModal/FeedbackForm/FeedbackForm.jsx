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


const FeedbackSchema = Yup.object().shape({
    review: Yup.string()
      .max(3000, 'review is too long')
      .required('review is required')
    })

export const FeedbackForm = ({ onClose }) => {
    const [ratingValue, setRatingValue] = useState(0);
    const [isEditActive, setIsEditActive] = useState(false);
    const [isFeedback, setIsFeedback] = useState(false);

    const ratingChanged = (newRating) => {
        setRatingValue(newRating);
        console.log(newRating);
    };

    const handleSubmit = (values, actions) => {
        setIsEditActive(false);
        values.rating = ratingValue;
        console.log(values);
        setIsFeedback(true);
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
        setIsFeedback(false);
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
                        component="textarea"/>
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