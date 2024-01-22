import styled from "styled-components";

export const Logo = () => (
  <LogoWrapper>
    <LOGOTEXT_D>D</LOGOTEXT_D>
    <LOGOTEXT_EVLOG>EVLOG</LOGOTEXT_EVLOG>
  </LogoWrapper>
);

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const LOGOTEXT_D = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;

  &::after {
    content: "a";
    font-size: 14px;
    color: #f7b500;
  }
`;

const LOGOTEXT_EVLOG = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`;
