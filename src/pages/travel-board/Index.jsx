import { Link, useNavigate } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";
import {
  ActionButton,
  ButtonDiv,
  FlexDiv,
  PostCity,
  PostDate,
  PostImg,
  PostLi,
  PostTitle,
  PostUl,
} from "../planning/plan";

function Index() {
  const navigate = useNavigate();
  return (
    <WrapDiv>
      <TitleDiv>여행로그</TitleDiv>
      <PostUl>
        <Link to={navigate("/board/detail")}>
          <PostLi>
            <PostImg>지역 이미지</PostImg>
            <PostTitle>게시글 제목</PostTitle>
            <FlexDiv>
              <PostDate>2024.12.18</PostDate>
              <PostCity>부산</PostCity>
            </FlexDiv>
          </PostLi>
        </Link>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
      </PostUl>
      <PostUl>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
      </PostUl>
      <PostUl>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
        <PostLi>
          <PostImg>지역 이미지</PostImg>
          <PostTitle>게시글 제목</PostTitle>
          <FlexDiv>
            <PostDate>2024.12.18</PostDate>
            <PostCity>부산</PostCity>
          </FlexDiv>
        </PostLi>
      </PostUl>
      <ButtonDiv>
        <Link to={"/board/writepost"}>
          <ActionButton>글쓰기</ActionButton>
        </Link>
      </ButtonDiv>
    </WrapDiv>
  );
}

export default Index;
