import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import styled from "@emotion/styled";
import { TitleDiv } from "../../components/common";
import { PickDateDiv } from "./plan";
import "./react-datepicker.css";

import { ko } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
import { API_URL } from "../../constants/login";
import { AboutTopDiv } from "../about/about";

const FlexBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  padding-top: 30px;
`;

const NextBtn = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 5px;
  background-color: #5469d4;
  color: #fff;
  border: none;
  line-height: 45px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;

function CalendarPickerPage({
  setResData,
  setParamPath,
  resDetailData,
  setResDetailData,
  setPlanMasterId,
  setPeopleCnt,
}) {
  const { user } = useContext(LoginContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const initData = {
    userId: 0,
    cityId: 0,
    startDate: "",
    endDate: "",
    peopleCnt: "",
  };
  // 날짜 관련
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  // 보낼 데이터
  const [formData, setFormData] = useState(initData);

  // 인원수 state
  const [count, setCount] = useState(0);

  const onChange = dates => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const { handleSubmit } = useForm();

  const postPlan = async item => {
    try {
      const res = await axios.post(`${API_URL}/plan`, item);
      setResData({ ...item, planDate: res.data.resultData.planDate });
      setPlanMasterId(res.data.resultData.planMasterId);
      setPeopleCnt(item.peopleCnt);
      setResDetailData({
        ...resDetailData,
        planMasterId: res.data.resultData.planMasterId,
      });
      setFormData(initData);

      navigate(`/planning/makeplanner/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitDate = () => {
    if (count > 0) {
      postPlan({ ...formData });
    }
    if (
      moment(endDate).format("YYYY-MM-DD") ===
      moment(startDate).format("YYYY-MM-DD")
    ) {
      alert("여행기간을 선택해주세요.");
    } else if (endDate === null) {
      alert("여행기간을 선택해주세요.");
    }
    if (count <= 0) {
      alert("인원수를 입력해주세요.");
    }
  };

  useEffect(() => {
    setParamPath(id);
  }, []);

  useEffect(() => {
    if (moment(startDate).isSame(endDate, "day")) {
      setMaxDate(null);
    } else {
      setMaxDate(moment(startDate).add(4, "days").toDate());
    }
    if (endDate) {
      setMaxDate(null);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    setFormData({
      userId: user.userId,
      cityId: id,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      peopleCnt: count,
    });
  }, [endDate, count]);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitDate)}
      style={{ marginBottom: 160 }}
    >
      <AboutTopDiv>
        <h2 className="txt">다녀ALL 일정 계획</h2>
      </AboutTopDiv>
      <PickDateDiv>
        <TitleDiv>
          <h3>날짜 및 인원 선택</h3>
          <p>여행 기간 및 여행 인원을 선택해주세요</p>
        </TitleDiv>

        <DatePicker
          locale={ko}
          selected={startDate}
          onChange={onChange}
          minDate={new Date()}
          maxDate={maxDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          showDisabledMonthNavigation
        />
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            margin: "10px auto",
            maxWidth: "620px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              width: 70,
              position: "absolute",
              left: 10,
            }}
          >
            여행 인원
          </span>
          <input
            type="number"
            min={0}
            max={50}
            value={count || ""}
            onChange={e => setCount(parseInt(e.target.value))}
            placeholder="인원수를 입력하세요"
            style={{
              maxWidth: "80%",
              width: "100%",
              height: 50,
              textAlign: "center",
              borderRadius: 5,
              border: "1px solid #ddd",
            }}
          />
          <NextBtn
            type="submit"
            style={{ width: 140, backgroundColor: "#1270b0" }}
          >
            다음
          </NextBtn>
        </div>
      </PickDateDiv>
    </form>
  );
}
export default CalendarPickerPage;
