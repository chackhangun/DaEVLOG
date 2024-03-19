import { useLocation } from "react-router";
import styled from "styled-components";

export default function SideNavMenu(props: {
  name: string;
  onClickNavMenu: () => void;
}) {
  const { name, onClickNavMenu } = props;
  const location = useLocation();

  return (
    <Wrapper
      style={{
        color: location.pathname === "/" + name ? "#ffffff" : "#797979",
      }}
      onClick={onClickNavMenu}
    >
      {props.name}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 35px;
  font-size: 24px;
  font-weight: bold;
  color: #797979;
  cursor: pointer;
  margin-bottom: 12px;
`;
