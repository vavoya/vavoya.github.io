import Input from "../../UI/Input";
import classes from './Items.module.css'

const Items = (props) => {
    return (
        <div className={classes['items-container']}>
            <div className={classes['title-container']}>
                <div className={classes['inner-container']}>
                    <h1>{props.title}</h1>
                    <p>{props.subTitle}</p>
                </div>
            </div>
            <div className={classes['table-container']}>
                <table className={classes.type07}>
                    <thead>
                        <tr>
                            <th scope="cols"></th>
                            <th scope="cols">메뉴명</th>
                            <th scope="cols">가격</th>
                            <th scope="cols">할인율</th>
                            <th scope="cols">수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                            <td><Input placeholder='연어 샐러드' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Items;