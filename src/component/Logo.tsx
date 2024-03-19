import styled from "styled-components";

export const Logo = () => (
  <LogoWrapper>
    <Wrapper2></Wrapper2>
  </LogoWrapper>
);

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  font-family: Mr Dafoe, sans-serif;
  text-align: center;
  text-shadow: 0 -3px 0 #333, 0 6px 8px rgba(255, 255, 255, 0.4),
    0 9px 10px rgba(255, 255, 255, 0.15);
`;

const Wrapper2 = styled.div`
  margin-bottom: 24px;
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
  justify-content: center;
  display: flex;
  text-align: center;
  text-shadow: 0 -3px 0 #333, 0 6px 8px rgba(255, 255, 255, 0.4),
    0 9px 10px rgba(255, 255, 255, 0.15);
`;
