import styled from "styled-components";
import {useRef, useState} from "react";

const Regist2Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1115px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Regist2BIStyled = styled.div`
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

const Regist2BI2Styled = styled.div`
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

const Regist2BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 11px;
`

const Regist2FlexContainer1Styled = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    
`

const Regist2FlexContinaer2Styled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
`

const Regist2FlexBox1Styled = styled.div`
    width: 17px;
    height: 35px;
    
    font-family: Pretendard-Regular;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
`

const Regist2FlexBox2Styled = styled.div`
    display: flex;
    align-items: center;

    width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist2FlexBox3Styled = styled.div`
    display: flex;
    align-items: center;

    width: 275px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist2FlexBox4Styled = styled.div`
    display: flex;
    flex-direction: column;
`

const Regist2FlexBox5Styled = styled.img`
    box-sizing: border-box;
    width: 122px;
    height: 89px;
    background: rgba(242, 244, 248, 1);
    border: 1px solid rgba(194, 195, 198, 1);
    border-bottom: none;
`

const Regist2InputButtonStyled = styled.div`
    width: 122px;
    height: 34px;
    background: rgba(96, 78, 248, 1);
    
    font-family: Pretendard-Regular;
    font-size: 13px;
    font-weight: 300;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

const Regist2FlexTextArea1Styled = styled.textarea`
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

const Regist2Add = styled.div`
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

const Regist2SubmitContatiner = styled.div`
    position: relative;
    width: 100%;
    height: 163px;
`

const Regist2Submit = styled.div`
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

const Regist2FlexBox7Styled = styled.div`
    width: 182px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist2FlexBox8Styled = styled.div`
    width: 275px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`


const Regist2FlexBox9Styled = styled.div`
    width: 122px;
    height: 22px;
    
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist2FlexEmptyBoxStyled = styled.div`
    width: auto;
    height: 157px;
`



export default function Regist2() {
    const [grid1Items, setGrid1Items] = useState([0, 1, 2]);
    const [grid2Items, setGrid2Items] = useState([0, 1, 2]);
    const [previewImageSetters, setPreviewImageSetters] = useState(false);
    const previewImage1 = useRef({ 0: null, 1: null, 2: null });
    const previewImage2 = useRef({ 0: null, 1: null, 2: null });
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
                    if (type == 1)
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
        <Regist2Styled>
            <Regist2BIStyled>
                메인메뉴
            </Regist2BIStyled>
            <Regist2BI2Styled>
                소비자에게 보여지는 메인메뉴들입니다. 메뉴명, 가격, 구성, 설명, 사진 다 기입해주세요.
            </Regist2BI2Styled>
            <Regist2BorderStyled />
            <Regist2FlexContainer1Styled>
                <Regist2FlexContinaer2Styled>
                    <Regist2FlexBox1Styled />
                    <Regist2FlexBox7Styled>
                        메뉴명
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        가격
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        구성
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox8Styled>
                        설명
                    </Regist2FlexBox8Styled>
                    <Regist2FlexBox9Styled>
                        사진
                    </Regist2FlexBox9Styled>
                </Regist2FlexContinaer2Styled>
                {grid1Items.map((index) => (
                    <Regist2FlexContinaer2Styled key='grid1-{index}'>
                        <Regist2FlexBox1Styled>
                            {index + 1}
                        </Regist2FlexBox1Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox3Styled>
                            <Regist2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Regist2FlexBox3Styled>
                        <Regist2FlexBox4Styled>
                            <Regist2FlexBox5Styled src={previewImage1.current[index] ? previewImage1.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
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
                            <Regist2InputButtonStyled
                                onClick={() => {
                                    tempList1[index].click();
                                }}>
                                이미지 업로드
                            </Regist2InputButtonStyled>
                        </Regist2FlexBox4Styled>
                    </Regist2FlexContinaer2Styled>
                ))}
            </Regist2FlexContainer1Styled>
            <Regist2Add onClick={() => { setGrid1Items([...grid1Items, grid1Items.length]) }}>
                항목 추가하기
            </Regist2Add>
            <Regist2FlexEmptyBoxStyled />
            <Regist2BIStyled>
                사이드 메뉴
            </Regist2BIStyled>
            <Regist2BI2Styled>
                소비자에게 보여지는 사이드메뉴들입니다.
                <p />
                메뉴명, 가격, 구성 필수로 등록입니다. 설명과 사진은 선택입니다.
            </Regist2BI2Styled>
            <Regist2BorderStyled />
            <Regist2FlexContainer1Styled>
                <Regist2FlexContinaer2Styled>
                    <Regist2FlexBox1Styled />
                    <Regist2FlexBox7Styled>
                        메뉴명
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        가격
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        구성
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox8Styled>
                        설명
                    </Regist2FlexBox8Styled>
                    <Regist2FlexBox9Styled>
                        사진
                    </Regist2FlexBox9Styled>
                </Regist2FlexContinaer2Styled>
                {grid2Items.map((index) => (
                    <Regist2FlexContinaer2Styled key='grid2-{index}'>
                        <Regist2FlexBox1Styled>
                            {index + 1}
                        </Regist2FlexBox1Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox3Styled>
                            <Regist2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Regist2FlexBox3Styled>
                        <Regist2FlexBox4Styled>
                            <Regist2FlexBox5Styled src={previewImage2.current[index] ? previewImage2.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
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
                            <Regist2InputButtonStyled
                                onClick={() => {
                                    tempList2[index].click();
                                }}>
                                이미지 업로드
                            </Regist2InputButtonStyled>
                        </Regist2FlexBox4Styled>
                    </Regist2FlexContinaer2Styled>
                ))}
            </Regist2FlexContainer1Styled>
            <Regist2Add onClick={() => { setGrid2Items([...grid2Items, grid2Items.length]) }}>
                항목 추가하기
            </Regist2Add>
            <Regist2SubmitContatiner>
                <Regist2Submit>
                    메뉴등록 완료하기
                </Regist2Submit>
            </Regist2SubmitContatiner>
        </Regist2Styled>
    );
}
