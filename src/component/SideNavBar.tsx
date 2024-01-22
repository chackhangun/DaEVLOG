import styled from "styled-components";
import { Logo } from "./Logo";
import SideNavMenu from "./SideNavMenu";
import { useNavigate } from "react-router";

export default function SideNavBar() {
  const navigate = useNavigate();
  const onClickNavMenu = (menu: string) => {
    navigate(`/${menu}`);
  };
  const NAVMENU = ["Home", "Profile", "Project"];
  return (
    <Wrapper>
      <Logo />
      {NAVMENU.map((menu) => (
        <SideNavMenu
          key={menu}
          name={menu}
          onClickNavMenu={() => onClickNavMenu(menu)}
        />
      ))}
    </Wrapper>
  );
}

// make Wrapper's background-color to dark
const Wrapper = styled.div`
  width: 245px;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
