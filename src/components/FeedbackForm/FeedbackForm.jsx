import ReactStars from "react-rating-stars-component";
import { Formik, Form } from 'formik';
import { Input, Label, FormBtn, Wrap, FormBtnWrap, FormBtnCancel, EditBtn, DeleteBtn, WrapForEdit, WrapForReview } from "./FeedbackForm.styled";
import { useState } from "react";

export const PopUpFeedback = () => {
    const [ratingValue, setRatingValue] = useState(0);

    const ratingChanged = (newRating) => {
        setRatingValue(newRating);
        console.log(newRating);
    };

    return (
        <Wrap>
            <Formik initialValues={{
                rating: '',
                review: '',
            }}
            onSubmit={async values => {
                values.rating = ratingValue;
                console.log(values)
            }}>
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
                        <WrapForEdit>
                        <EditBtn>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.375 16.125L5.53695 14.5242C5.80316 14.4218 5.93626 14.3707 6.06079 14.3038C6.1714 14.2444 6.27685 14.1759 6.37603 14.0989C6.48769 14.0123 6.58853 13.9115 6.79021 13.7098L15.25 5.24998C16.0784 4.42156 16.0784 3.07841 15.25 2.24998C14.4216 1.42156 13.0784 1.42156 12.25 2.24998L3.79021 10.7098C3.58853 10.9115 3.48769 11.0123 3.40104 11.124C3.32408 11.2231 3.25555 11.3286 3.19618 11.4392C3.12933 11.5637 3.07814 11.6968 2.97575 11.963L1.375 16.125ZM1.375 16.125L2.91859 12.1117C3.02905 11.8245 3.08428 11.6809 3.17901 11.6151C3.26179 11.5577 3.36423 11.5359 3.46322 11.5548C3.5765 11.5765 3.68529 11.6853 3.90286 11.9028L5.59718 13.5971C5.81475 13.8147 5.92354 13.9235 5.94517 14.0368C5.96408 14.1358 5.94234 14.2382 5.88486 14.321C5.81909 14.4157 5.67549 14.471 5.3883 14.5814L1.375 16.125Z" stroke="current" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </EditBtn>
                        <DeleteBtn><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4H3.33333H14" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.6663 4.00004V13.3334C12.6663 13.687 12.5259 14.0261 12.2758 14.2762C12.0258 14.5262 11.6866 14.6667 11.333 14.6667H4.66634C4.31272 14.6667 3.97358 14.5262 3.72353 14.2762C3.47348 14.0261 3.33301 13.687 3.33301 13.3334V4.00004M5.33301 4.00004V2.66671C5.33301 2.31309 5.47348 1.97395 5.72353 1.7239C5.97358 1.47385 6.31272 1.33337 6.66634 1.33337H9.33301C9.68663 1.33337 10.0258 1.47385 10.2758 1.7239C10.5259 1.97395 10.6663 2.31309 10.6663 2.66671V4.00004" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.66699 7.33337V11.3334" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.33301 7.33337V11.3334" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </DeleteBtn>
                        </WrapForEdit>
                    </WrapForReview>

                    <Input 
                        type="text" 
                        placeholder="Enter text" 
                        id="review" 
                        name="review" 
                        component="textarea"/>
                        
                    <FormBtnWrap>
                        <FormBtn type="submit">Save</FormBtn>
                        <FormBtnCancel type="reset" onClick={()=>{setRatingValue(0)}}>Cancel</FormBtnCancel>
                    </FormBtnWrap>
                </Form>
            </Formik>
      </Wrap>
    );
  };