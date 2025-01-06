import { Link } from "react-router-dom";
import { NotFoundDiv } from ".";

function NotFoundPage() {
  return (
    <NotFoundDiv>
      <div className="inner">
        <div className="img-box">
          <img src="../images/404/fa_cloud.svg" alt="왼쪽구름" />
          <img src="../images/404/fa_paper-plane.svg" alt="비행기" />
          <img src="../images/404/icomoon-free_cloud.svg" alt="오른쪽구름" />
        </div>
        <div className="txt-box">
          <h2>404</h2>
          <p>길을 잃은 페이지</p>
          <span>출발지로 돌아가 다시 여행을 시작해보세요!</span>
          <Link to={"/"}>다녀ALL 출발지로 돌아가기</Link>
        </div>
      </div>
    </NotFoundDiv>
  );
}

export default NotFoundPage;
