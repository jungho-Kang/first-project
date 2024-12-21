import styled from "@emotion/styled";

const LogoDiv = styled.div`
  width: 100px;
  height: 50px;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <LogoDiv>
      <LogoImg src="/images/logo.svg" alt="로고" />
    </LogoDiv>
  );
};
export default Logo;
