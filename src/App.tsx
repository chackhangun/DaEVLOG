import styled from "styled-components";
import "./App.css";
import SideNavBar from "./component/SideNavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

export default function App() {
  return (
    <Wrapper>
      <SideNavBar />
      <MainPage>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </MainPage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const MainPage = styled.div`
  padding: 23px 15px 15px 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
