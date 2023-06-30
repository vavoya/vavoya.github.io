import styled from "styled-components";
import { ReactComponent as DeleteButton} from "../../assets/images/Group 8.svg";
import {useRef, useState} from "react";
import SideBar from "../sidebar/SideBar";

const Modify1Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1110px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Modify1BIStyled = styled.div`
    font-family: Pretendard-Regular;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 25px;
    padding-left: 30px
`

const Modify1BI2Styled = styled.div`
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Modify1BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 27px;
`

const Modify1BoxContainer1Styled = styled.div`
    display: flex;
    padding: 13px 0;
    margin: 0 215px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
`

const Modify1Box1Styled = styled.div`
    width: 172px;
    height: 48px;

    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify1Box2Styled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
    width: 457px;
    height: 48px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Modify1TextBoxStyled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 22px;
    padding: 0 21px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

const Modify1EmptyBoxStyled = styled.div`
    padding: 9px 0;
    width: 100%;
`


const Modify1BoxContainer2Styled = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px 0;
    margin: 0 215px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`

const Modify1Box3Styled = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 457px;
    align-items: center;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    padding: 0 45px;
`

const Modify1Box4Styled = styled.img`
    width: 122px;
    height: 122px;
    background: rgba(242, 244, 248, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Modify1InputButtonStyled = styled.label`
    box-sizing: border-box;
    width: 157px;
    height: 49px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    
    //styleName: Body/L;
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify1SubmitContainer = styled.div`
    position: relative;
    height: 218.5px;
    width: 100%;
`

const Modify1Submit = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 301px;
    height: 70px;
    margin: 64.5px auto 84px;
    background: rgba(96, 78, 248, 1);

    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);

`

const Modify2Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1110px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Modify2BIStyled = styled.div`
    font-family: Pretendard-Regular;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 52px;
    padding-left: 30px
`

const Modify2BI2Styled = styled.div`
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Modify2BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 11px;
`

const Modify2FlexContainer1Styled = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    
`

const Modify2FlexContinaer2Styled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
`

const Modify2FlexBox1Styled = styled.div`
    width: 17px;
    height: 35px;
    
    font-family: Pretendard-Regular;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
`

const Modify2FlexBox2Styled = styled.div`
    display: flex;
    align-items: center;

    width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Modify2FlexBox3Styled = styled.div`
    display: flex;
    align-items: center;

    width: 275px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Modify2FlexBox4Styled = styled.div`
    display: flex;
    flex-direction: column;
`

const Modify2FlexBox5Styled = styled.img`
    box-sizing: border-box;
    width: 122px;
    height: 89px;
    background: rgba(242, 244, 248, 1);
    border: 1px solid rgba(194, 195, 198, 1);
    border-bottom: none;
`

const Modify2FlexBox6Styled = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(242, 244, 248, 1);
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modify2InputButtonStyled = styled.div`
    box-sizing: border-box;
    border: 2px solid rgba(96, 78, 248, 1);
    width: 122px;
    height: 34px;
    background: rgba(255, 255, 255, 1);
    
    font-family: Pretendard-Regular;
    font-size: 13px;
    font-weight: 300;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Modify2FlexTextArea1Styled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 18px;
    padding: 0 12px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Pretendard-Regular;
    font-size: 13px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2Add = styled.div`
    box-sizing: border-box;
    width: 427px;
    height: 70px;
    margin: 103px auto 87px;
    border: 2px solid rgba(96, 78, 248, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Modify2SubmitContatiner = styled.div`
    position: relative;
    width: 100%;
    height: 163px;
`

const Modify2Submit = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 301px;
    height: 70px;
    right: 0px;
    
    background: rgba(96, 78, 248, 1);

    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

const Modify2FlexBox7Styled = styled.div`
    width: 182px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2FlexBox8Styled = styled.div`
    width: 275px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`


const Modify2FlexBox9Styled = styled.div`
    width: 122px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2FlexEmptyBoxStyled = styled.div`
    width: auto;
    height: 157px;
`

const Modify1ContainerStyled = styled.div`
    left: 202px;
    position: fixed;
    width: calc(100% - 202px);
    height: calc(100% - 188px);
    overflow: scroll;
    top: 72px;
`

export default function Modify1() {
    const [grid1Items, setGrid1Items] = useState([0, 1, 2]);
    const [grid2Items, setGrid2Items] = useState([0, 1, 2]);
    const [previewImageSetters, setPreviewImageSetters] = useState(false);
    const previewImage0 = useRef({ 0: null, 1: null });
    const previewImage1 = useRef({ 0: null, 1: null, 2: null });
    const previewImage2 = useRef({ 0: null, 1: null, 2: null });
    const tempList0 = [];
    const tempList1 = [];
    const tempList2 = [];

    const fileCheck = (obj) => {
        const pathPoint = obj.value.lastIndexOf(".");
        const filePoint = obj.value.substring(pathPoint + 1, obj.value.length);
        const fileType = filePoint.toLowerCase();

        if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
            return true;
        } else {
            alert("jpg, jpeg, png 파일만 선택할 수 있습니다.");
            return false;
        }
    };

    const handleImageChange = (event, number, type) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (fileCheck(event.target)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    if (type === 0)
                        previewImage0.current[number] = imageUrl;
                    else if (type === 1)
                        previewImage1.current[number] = imageUrl;
                    else
                        previewImage2.current[number] = imageUrl;
                    setPreviewImageSetters(!previewImageSetters);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };

    return (
        <Modify1ContainerStyled>
        <Modify1Styled>
            <Modify1BIStyled>
                기본정보
            </Modify1BIStyled>
            <Modify1BI2Styled>
                오늘 메인메뉴 중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요.
            </Modify1BI2Styled>
            <Modify1BorderStyled />
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    기업명(상호명)
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="cu 편의점 울산 문수점" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    사업주 휴대번호
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="010-9778-8973" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    사업주 이메일
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="sdfsdfsdfsd@gmail.com" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    운영시간
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="08:00 ~ 12:00" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    휴무일
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="홀수주 화요일, 공휴일" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1BoxContainer1Styled>
                <Modify1Box1Styled>
                    가게 전화번호
                </Modify1Box1Styled>
                <Modify1Box2Styled>
                    <Modify1TextBoxStyled placeholder="055-1234-5678" maxLength={25} />
                </Modify1Box2Styled>
            </Modify1BoxContainer1Styled>
            <Modify1EmptyBoxStyled />
            <Modify1BoxContainer2Styled>
                <Modify1Box1Styled>
                    가게 로고
                </Modify1Box1Styled>
                <Modify1Box3Styled>
                    <Modify1Box4Styled src={previewImage0.current[0] ? previewImage0.current[0] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Modify1InputButtonStyled
                        onClick={() => {
                            tempList0[0].click();
                        }}>
                        이미지 업로드
                    </Modify1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={(a) => {
                            if (a) {
                                console.log(a, "마운트됨");
                                tempList0.push(a);
                            }
                            else { console.log("언마운트됨") }
                        }
                        }
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 0, 0) }}
                    />
                </Modify1Box3Styled>
            </Modify1BoxContainer2Styled>
            <Modify1BoxContainer2Styled>
                <Modify1Box1Styled>
                    매장간판 사진
                </Modify1Box1Styled>
                <Modify1Box3Styled>
                    <Modify1Box4Styled src={previewImage0.current[1] ? previewImage0.current[1] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Modify1InputButtonStyled
                        onClick={() => {
                            tempList0[1].click();
                        }}>
                        이미지 업로드
                    </Modify1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={(a) => {
                            if (a) {
                                console.log(a, "마운트됨");
                                tempList0.push(a);
                            }
                            else { console.log("언마운트됨") }
                        }
                        }
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 1, 0) }}
                    />
                </Modify1Box3Styled>
            </Modify1BoxContainer2Styled>
            <Modify1SubmitContainer>
                <Modify1Submit>
                    가게정보 수정완료
                </Modify1Submit>
            </Modify1SubmitContainer>
        </Modify1Styled>
        <Modify2Styled>
            <Modify2BIStyled>
                메인메뉴
            </Modify2BIStyled>
            <Modify2BorderStyled />
            <Modify2FlexContainer1Styled>
                <Modify2FlexContinaer2Styled>
                    <Modify2FlexBox1Styled />
                    <Modify2FlexBox7Styled>
                        메뉴명
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox7Styled>
                        가격
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox7Styled>
                        구성
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox8Styled>
                        설명
                    </Modify2FlexBox8Styled>
                    <Modify2FlexBox9Styled>
                        사진
                    </Modify2FlexBox9Styled>
                </Modify2FlexContinaer2Styled>
                {grid1Items.map((index) => (
                    <Modify2FlexContinaer2Styled key='grid1-{index}'>
                        <Modify2FlexBox1Styled>
                            {index + 1}
                        </Modify2FlexBox1Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox3Styled>
                            <Modify2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Modify2FlexBox3Styled>
                        <Modify2FlexBox4Styled>
                            <Modify2FlexBox5Styled src={previewImage1.current[index] ? previewImage1.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList1.push(a);
                                        if (index == grid1Items.length - 1) {
                                            console.log(tempList1)
                                        }
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, index, 1) }}
                            />
                            <Modify2InputButtonStyled
                                onClick={() => {
                                    tempList1[index].click();
                                }}>
                                이미지 업로드
                            </Modify2InputButtonStyled>
                        </Modify2FlexBox4Styled>
                        <Modify2FlexBox6Styled>
                            <DeleteButton />
                        </Modify2FlexBox6Styled>
                    </Modify2FlexContinaer2Styled>
                ))}
            </Modify2FlexContainer1Styled>
            <Modify2Add onClick={() => { setGrid1Items([...grid1Items, grid1Items.length]) }}>
                항목 추가하기
            </Modify2Add>
            <Modify2FlexEmptyBoxStyled />
            <Modify2BIStyled>
                사이드 메뉴
            </Modify2BIStyled>
            <Modify2BorderStyled />
            <Modify2FlexContainer1Styled>
                <Modify2FlexContinaer2Styled>
                    <Modify2FlexBox1Styled />
                    <Modify2FlexBox7Styled>
                        메뉴명
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox7Styled>
                        가격
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox7Styled>
                        구성
                    </Modify2FlexBox7Styled>
                    <Modify2FlexBox8Styled>
                        설명
                    </Modify2FlexBox8Styled>
                    <Modify2FlexBox9Styled>
                        사진
                    </Modify2FlexBox9Styled>
                </Modify2FlexContinaer2Styled>
                {grid2Items.map((index) => (
                    <Modify2FlexContinaer2Styled key='grid2-{index}'>
                        <Modify2FlexBox1Styled>
                            {index + 1}
                        </Modify2FlexBox1Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox2Styled>
                            <Modify2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Modify2FlexBox2Styled>
                        <Modify2FlexBox3Styled>
                            <Modify2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Modify2FlexBox3Styled>
                        <Modify2FlexBox4Styled>
                            <Modify2FlexBox5Styled src={previewImage2.current[index] ? previewImage2.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList2.push(a);
                                        if (index == grid2Items.length - 1) {
                                            console.log(tempList2)
                                        }
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, index, 2) }}
                            />
                            <Modify2InputButtonStyled
                                onClick={() => {
                                    tempList2[index].click();
                                }}>
                                이미지 업로드
                            </Modify2InputButtonStyled>
                        </Modify2FlexBox4Styled>
                        <Modify2FlexBox6Styled>
                            <DeleteButton />
                        </Modify2FlexBox6Styled>
                    </Modify2FlexContinaer2Styled>
                ))}
            </Modify2FlexContainer1Styled>
            <Modify2Add onClick={() => { setGrid2Items([...grid2Items, grid2Items.length]) }}>
                항목 추가하기
            </Modify2Add>
            <Modify2SubmitContatiner>
                <Modify2Submit>
                    메뉴 수정 완료
                </Modify2Submit>
            </Modify2SubmitContatiner>
        </Modify2Styled>
        </Modify1ContainerStyled>
    );
}
