import styled from "styled-components";
import { ReactComponent as SelectButton} from "../../assets/images/Vector 30.svg";
import {useRef, useState} from "react";


const Regist1Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 790px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Regist1BIStyled = styled.div`
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

const Regist1BI2Styled = styled.div`
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

const Regist1BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 27px;
`

const Regist1BoxContainer1Styled = styled.div`
    display: flex;
    padding: 13px 0;
    margin: 0 30px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
`

const Regist1Box1Styled = styled.div`
    width: 172px;
    height: 48px;

    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Box2Styled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
    width: 457px;
    height: 48px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1TextBoxStyled = styled.textarea`
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

const Regist1EmptyBoxStyled = styled.div`
    padding: 9px 0;
    width: 100%;
`


const Regist1BoxContainer2Styled = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px 0;
    margin: 0 30px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`

const Regist1Box3Styled = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 457px;
    align-items: center;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    padding: 0 45px;
`

const Regist1Box4Styled = styled.img`
    width: 122px;
    height: 122px;
    background: rgba(242, 244, 248, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Regist1InputButtonStyled = styled.label`
    box-sizing: border-box;
    width: 157px;
    height: 49px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Box6Styled = styled.div`
    display: grid;
    grid-template-rows: 48px 48px;
    grid-template-columns: 275px 121px;
    grid-gap: 30px; /* 그리드 아이템 사이의 간격 설정 */
    padding-right: 30px
`

const Regist1Box7Styled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box8Styled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box9Styled = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Submit = styled.div`
    width: 732px;
    height: 70px;
    margin: 83.5px auto 70px;
    background: rgba(96, 78, 248, 1);

    font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);

`

const Regist1SelectBoxStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 457px;
    top: 0px;
    box-sizing: border-box;
    z-index: 100;
    border: 1px solid rgb(200, 200, 200);
`

const Regist1SelectBoxItemStyled = styled.div`
    height: 50px;
    background: #FFF;
    padding: 0 21px;
 
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;   
    color: rgba(0, 0, 0, 0.5);
`

const Regist1SelectEmptyStyled = styled.div`
    height: 49px;
    background-color: transparent; /* 배경색을 투명하게 설정 */
`

const Regist1SelectedButtonContainerStyled = styled.div`
    margin-right: 23px;
    height: 17px;
`

export default function Regist1() {
    const [isHovered, setIsHovered] = useState(false)
    const [clickSectors, setClickSectors] = useState(false);
    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [previewImage3, setPreviewImage3] = useState(null);
    const [previewImage4, setPreviewImage4] = useState(null);
    const [previewImage5, setPreviewImage5] = useState(null);
    const previewImageSetters = [setPreviewImage1, setPreviewImage2, setPreviewImage3, setPreviewImage4, setPreviewImage5];
    const fileInput1 = useRef();
    const fileInput2 = useRef();
    const fileInput3 = useRef();
    const fileInput4 = useRef();
    const fileInput5 = useRef();

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

    const handleImageChange = (event, number) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (fileCheck(event.target)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    previewImageSetters[number](imageUrl);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };



    return (
        <Regist1Styled>
            <Regist1BIStyled>
                기본정보
            </Regist1BIStyled>
            <Regist1BI2Styled>
                가게정보등록후 심사가 끝나면 서비스 이용이 가능합니다. 심사는 24시간 이내에 이루어집니다.
            </Regist1BI2Styled>
            <Regist1BorderStyled />
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    기업명(상호명)
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="cu 편의점 울산 문수점" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 업종
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled
                        readOnly
                        value={clickSectors ? clickSectors : ''}
                        placeholder="업종 선택하기"
                        maxLength={25}
                    />
                    <Regist1SelectedButtonContainerStyled
                        onMouseEnter={() => {
                            setIsHovered(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                        }}>
                        <SelectButton />
                    </Regist1SelectedButtonContainerStyled>
                    {isHovered && (<Regist1SelectBoxStyled>
                        <Regist1SelectEmptyStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }} />
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("백화점")
                                setIsHovered(false)
                            }}>
                            백화점
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("편의점")
                                setIsHovered(false)
                            }}>
                            편의점
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("디저트")
                                setIsHovered(false)
                            }}>
                            디저트
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("샐러드")
                                setIsHovered(false)
                            }}>
                            샐러드
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("초밥")
                                setIsHovered(false)
                            }}>
                            초밥
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("카페")
                                setIsHovered(false)
                            }}>
                            카페
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("대형마트")
                                setIsHovered(false)
                            }}>
                            대형마트
                        </Regist1SelectBoxItemStyled>
                    </Regist1SelectBoxStyled>
                    )}
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    사업주 휴대번호
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="010-9778-8973" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    사업주 이메일
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="sdfsdfsdfsd@gmail.com" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    사업자 등록증
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage1 ? previewImage1 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput1.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image1"
                        accept="image/jpeg, image/png"
                        ref={fileInput1}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 0) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    영업자 등록증
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage2 ? previewImage2 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput2.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image2"
                        accept="image/jpeg, image/png"
                        ref={fileInput2}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 1) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    통장 사본
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage3 ? previewImage3 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput3.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image3"
                        accept="image/jpeg, image/png"
                        ref={fileInput3}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 2) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    운영시간
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="08:00 ~ 12:00" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    휴무일
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="홀수주 화요일, 공휴일" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 전화번호
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="055-1234-5678" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 주소
                </Regist1Box1Styled>
                <Regist1Box6Styled>
                    <Regist1Box7Styled>
                        <Regist1TextBoxStyled readOnly placeholder="050505" />
                    </Regist1Box7Styled>
                    <Regist1Box9Styled>
                        우편번호
                    </Regist1Box9Styled>
                    <Regist1Box7Styled>
                        <Regist1TextBoxStyled placeholder="울산 남구 대학로 33번길 18-4" />
                    </Regist1Box7Styled>
                    <Regist1Box8Styled>
                        <Regist1TextBoxStyled placeholder="2층" />
                    </Regist1Box8Styled>
                </Regist1Box6Styled>
            </Regist1BoxContainer1Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    가게 로고
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage4 ? previewImage4 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput4.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={fileInput4}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 3) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    매장간판 사진
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage5 ? previewImage5 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput5.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={fileInput5}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 4) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1Submit>
                가게 정보 신청하기
            </Regist1Submit>
        </Regist1Styled>
    );
}
