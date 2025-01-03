import { useEffect } from "react";
// comp
import { useParams } from "react-router-dom";
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
import axios from "axios";
// styled
import { MyPageWrapDiv } from "../my-info/myinfo";
import { ChoiceDiv, DetailContentDiv, TableDiv, TitleAreaDiv } from "./myplan";
import { TitleDiv } from "../../../components/common";

function MyPlanDetail() {
  const { id } = useParams();
  console.log(id);
  const getPlanDetail = async _id => {
    // http://112.222.157.156:5212/api/plan?planMasterId=1

    try {
      const res = await axios.get(`/api/plan?planMasterId=${_id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlanDetail(id);
  }, []);
  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        <TitleAreaDiv>
          <h3>상세정보</h3>
        </TitleAreaDiv>
        <DetailContentDiv>
          <ChoiceDiv>
            <select className="date" name="" id="">
              <option value="1">1일차</option>
              <option value="2">2일차</option>
              <option value="3">3일차</option>
            </select>
            <div className="cate-btn">
              <button>전체</button>
              <button>명소</button>
              <button>음식점</button>
              <button>숙소</button>
            </div>
          </ChoiceDiv>
          <TableDiv>
            <ul className="t-title">
              <li>
                <p>시간</p>
              </li>
              <li>
                <p>일정</p>
              </li>
              <li>
                <p>위치</p>
              </li>
              <li>
                <p>1인 비용</p>
              </li>
              <li>
                <p>총 비용</p>
              </li>
              <li>
                <p>메모</p>
              </li>
            </ul>
            <ul className="t-content">
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <ul>
                  <li>
                    <p>09:00 - 10:00</p>
                  </li>
                  <li>
                    <p>
                      <em>숙소</em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>신라호텔</b>
                      <strong>서울 중구 동호로 249</strong>
                    </p>
                  </li>
                  <li>
                    <p>250,000 원</p>
                  </li>
                  <li>
                    <p>500,000 원</p>
                  </li>
                  <li>
                    <p>메모</p>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="t-result">
              <li>
                <p>전체</p>
              </li>
              <li>
                <p>1인당 비용</p>
              </li>
              <li>
                <p>500,000 원</p>
              </li>
              <li>
                <p>총 비용</p>
              </li>
              <li>
                <p>1,000,000 원</p>
              </li>
            </ul>
          </TableDiv>
        </DetailContentDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanDetail;
