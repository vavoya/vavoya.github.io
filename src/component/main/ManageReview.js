import style from './ManageReview.module.css'
import starRatingUp from '../../image/star_rating_up.png'
import starRatingDown from '../../image/star_rating_down.png'
import ReviewContainer from './ReviewContainer'

const ManageReview = () => {
    const reviews = [
        { user: '정한준', score: 5, buy: [{ type: '연어 샐러드', num: '1' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 4, buy: [{ type: '연어 샐러드', num: '2' }, { type: '오리엔탈 드레싱(추가)', num: '1' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 3, buy: [{ type: '연어 샐러드', num: '3' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 5, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 2, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 4, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 5, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 3, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 5, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 3, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 4, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 5, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 1, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' },
        { user: '정한준', score: 4, buy: [{ type: '연어 샐러드', num: '2' }], review: '연어 샐러드가 너무 부드럽고 맛있어요 연어도 싱싱하고 샐러드도 신선한게 맛있었어요. 그리고 소스가 너무 맛있었어요. 그리고 포장할때 사장님이 너무 친절하셔서 오늘 하루 기분좋게 마무리 했네요.' }
    ];
    const score = reviews.map(item => item.score);
    console.log(score);
    const rating = (score.reduce((acc, curr) => acc + curr, 0)) / score.length;
    const count5 = ((score.filter((num) => num === 5).length) / score.length * 100).toFixed(0);
    const count4 = ((score.filter((num) => num === 4).length) / score.length * 100).toFixed(0);
    const count3 = ((score.filter((num) => num === 3).length) / score.length * 100).toFixed(0);
    const count2 = ((score.filter((num) => num === 2).length) / score.length * 100).toFixed(0);
    const count1 = ((score.filter((num) => num === 1).length) / score.length * 100).toFixed(0);

    return (
        <div className={style.mainContainer}>
            <div className={style.reviewScope}>
                <div className={style.reviewStar}>
                    <div className={style.numRating}>{rating.toFixed(1)}</div>
                    <div className={style.starRating}>
                        <div className={style.starRatingDown}>
                            <img src={starRatingDown}></img>
                            <img src={starRatingDown}></img>
                            <img src={starRatingDown}></img>
                            <img src={starRatingDown}></img>
                            <img src={starRatingDown}></img>
                        </div>
                        <div className={style.starRatingUp} style={{ width: `${rating * 20}%` }}>
                            <img src={starRatingUp}></img>
                            <img src={starRatingUp}></img>
                            <img src={starRatingUp}></img>
                            <img src={starRatingUp}></img>
                            <img src={starRatingUp}></img>
                        </div>
                    </div>
                    <div>
                        총 {score.length}명이 리뷰를 달았습니다.
                    </div>
                </div>
                <hr className={style.reviewStarHr} />
                <div className={style.reviewBar}>
                    <div className={style.barRating}>
                        <div className={style.barRatingStar}>별 5개</div>
                        <div className={style.barRatingContainer}>
                            <div className={style.barRatingDown}></div>
                            <div className={style.barRatingUp} style={{ width: `${count5}%` }}></div>
                        </div>
                        <div className={style.barRatingPercent}>{count5}%</div>
                    </div>
                    <div className={style.barRating}>
                        <div className={style.barRatingStar}>별 4개</div>
                        <div className={style.barRatingContainer}>
                            <div className={style.barRatingDown}></div>
                            <div className={style.barRatingUp} style={{ width: `${count4}%` }}></div>
                        </div>
                        <div className={style.barRatingPercent}>{count4}%</div>
                    </div>
                    <div className={style.barRating}>
                        <div className={style.barRatingStar}>별 3개</div>
                        <div className={style.barRatingContainer}>
                            <div className={style.barRatingDown}></div>
                            <div className={style.barRatingUp} style={{ width: `${count3}%` }}></div>
                        </div>
                        <div className={style.barRatingPercent}>{count3}%</div>
                    </div>
                    <div className={style.barRating}>
                        <div className={style.barRatingStar}>별 2개</div>
                        <div className={style.barRatingContainer}>
                            <div className={style.barRatingDown}></div>
                            <div className={style.barRatingUp} style={{ width: `${count2}%` }}></div>
                        </div>
                        <div className={style.barRatingPercent}>{count2}%</div>
                    </div>
                    <div className={style.barRating}>
                        <div className={style.barRatingStar}>별 1개</div>
                        <div className={style.barRatingContainer}>
                            <div className={style.barRatingDown}></div>
                            <div className={style.barRatingUp} style={{ width: `${count1}%` }}></div>
                        </div>
                        <div className={style.barRatingPercent}>{count1}%</div>
                    </div>
                </div>
            </div>
            <hr className={style.reviewScopeHr} />
            <ReviewContainer reviews={reviews} />
        </div>
    )
}

export default ManageReview;