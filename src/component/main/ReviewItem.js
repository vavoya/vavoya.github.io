import style from './ReviewItem.module.css'
import starRatingUp from '../../image/star_rating_up.png'
import starRatingDown from '../../image/star_rating_down.png'
import { useState } from 'react'

const ReviewItem = (props) => {
    const [hasReply, setHasReply] = useState(false)
    const [isBtnVisible, setIsBtnVisible] = useState(true)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [reply, setReply] = useState('')

    const addReplyBtnHandler = () => {
        setIsBtnVisible(false)
        setIsFormVisible(true)
        setHasReply(false)
    }

    const submintBtnHandler = (event) => {
        event.preventDefault();
        setHasReply(true)
        setIsFormVisible(false)
    }

    const replyInputHandler = (event) => {
        setReply(event.target.value)
    }

    const deleteReplyBtnHandler = () => {
        setIsBtnVisible(true)
        setIsFormVisible(false)
        setHasReply(false)
        setReply('')
    }

    return (
        <div className={style.reviewItem}>
            <div className={style.review}>
                <div className={style.reviewWrite}>
                    <div className={style.reviewUser}>{props.user.slice(0, -1) + "*"}</div>
                    <div className={style.ratingNBuy}>
                        <div className={style.starRating}>
                            <div className={style.starRatingDown}>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                            </div>
                            <div className={style.starRatingUp} style={{ width: `${props.score * 20}%` }}>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                            </div>
                        </div>
                        <div>{props.buy.map(item => {
                            return `${item.type} ${item.num}개`;
                        }).join(', ')} 구매</div>
                    </div>
                    <div className={style.userReview}>{props.review}</div>
                </div>
                <div className={style.reviewPic}>

                </div>
            </div>
            <hr className={style.reviewItemHr} />
            <div className={style.commentContainer}>
                {isBtnVisible && <button onClick={addReplyBtnHandler} className={style.replyBtn}>답글달기</button>}
                {isFormVisible && <form className={style.replyForm}>
                    <input type='text' className={style.replyInput} onChange={replyInputHandler} value={reply}></input>
                    <button onClick={submintBtnHandler} className={style.submintBtn}>확인</button>
                </form>}
                {hasReply && <div className={style.reply}>
                    <div>{reply}</div>
                    <div className={style.replyModifyBtn}>
                        <button onClick={addReplyBtnHandler}>수정</button>
                        <button onClick={deleteReplyBtnHandler}>삭제</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ReviewItem;