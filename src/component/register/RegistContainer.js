import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";

import Regist1 from "./Regist1";
import Regist2 from "./Regist2";
import Regist3 from "./Regist3";
import Modify1 from "../main/Modify1";
import SideBar from "../sidebar/SideBar";

const RegistContainerStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 72px;
  height: calc(100% - 188px);
  overflow: scroll;
`

function RegistRoute({ element }) {
    return (
        <RegistContainerStyled>
            {element}
        </RegistContainerStyled>
    );
}

export default function RegistContainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/regist1' element={<RegistRoute element={<Regist1 />} />} />
                <Route path='/regist2' element={<RegistRoute element={<Regist2 />} />} />
                <Route path='/regist3' element={<RegistRoute element={<Regist3 />} />} />
                <Route path='/modify1' element={
                    <>
                        <SideBar />
                        <Modify1 />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}
