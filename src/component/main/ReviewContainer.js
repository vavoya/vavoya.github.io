import style from './ReviewContainer.module.css'
import ReviewItem from './ReviewItem';

const ReviewContainer = (props) => {
    return (
        <div className={style.reviewContainer}>
            {props.reviews.map((review, index) => (
                <ReviewItem
                    key={index}
                    user={review.user}
                    score={review.score}
                    buy={review.buy}
                    review={review.review}
                />
            ))}
        </div>
    )
}

export default ReviewContainer;