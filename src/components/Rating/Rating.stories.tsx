import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";


export default {
    title: 'rating stories',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const EmptyRating1 = () => <Rating value={1} onClick={x => x}/>
export const EmptyRating2 = () => <Rating value={2} onClick={x => x}/>
export const EmptyRating3 = () => <Rating value={3} onClick={x => x}/>
export const EmptyRating4 = () => <Rating value={4} onClick={x => x}/>
export const EmptyRating5 = () => <Rating value={5} onClick={x => x}/>
export const RatingChanged = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return <Rating value={rating} onClick={setRating}/>
}