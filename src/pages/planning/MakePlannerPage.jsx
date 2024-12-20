import styled from "@emotion/styled";
import { LayoutDiv } from "./plan";

const MenuDiv = styled.div`
  width: 125px;
  height: 100vh;
  background-color: #fff;
  padding-top: 10px;
`;
const LogoDiv = styled.div`
  width: 100px;
  height: 50px;
  background-color: #150;
  margin: 0 auto;
`;

function MakePlannerPage() {
  return (
    <LayoutDiv>
      <MenuDiv>
        <LogoDiv />
      </MenuDiv>
    </LayoutDiv>
  );
}
export default MakePlannerPage;
