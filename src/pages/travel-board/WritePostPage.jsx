import { TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { PostCity } from "../planning/plan";
import { FlexLayoutDiv } from "./board";
import { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import styled from "@emotion/styled";

const ReviewContentDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 30px;
  line-height: 2em;
  margin-top: 30px;
  margin-bottom: 30px;
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 24px;
  }
`;

function WritePostPage() {
  const [review, setReview] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
        ],
      },
    }),
    [],
  );
  return (
    <WrapDiv>
      <form>
        <TitleDiv>다녀ON</TitleDiv>
        <FlexLayoutDiv style={{ position: "relative", height: 60 }}>
          <PostCity style={{ position: "absolute", zIndex: 9, marginLeft: 10 }}>
            부산
          </PostCity>
          <input
            placeholder="제목을 입력해주세요"
            style={{
              fontSize: 24,
              fontWeight: 700,
              position: "absolute",
              paddingLeft: 70,
              maxWidth: 1200,
              width: "100%",
              height: 60,
              borderRadius: 10,
            }}
          />
        </FlexLayoutDiv>
        <PlanListResult />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            height: 500,
            marginBottom: 70,
          }}
        >
          <ReactQuill
            style={{
              maxWidth: "1200px",
              width: "100%",
              border: "none",
            }}
            placeholder="후기를 입력해주세요"
            onChange={e => setReview(e)}
            modules={modules}
          />
        </div>

        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "flex-end",
            width: 1200,
          }}
        >
          <button
            type="submit"
            style={{
              width: 100,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#B8D8E4",
              color: "#fff",
              border: "none",
            }}
          >
            등록
          </button>
        </div>
        <ReviewContentDiv>
          <h2>입력중인 데이터(서버에 보내줄 글자)</h2>
          <p>{review}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(String(review)),
            }}
          />
        </ReviewContentDiv>
      </form>
    </WrapDiv>
  );
}

export default WritePostPage;
