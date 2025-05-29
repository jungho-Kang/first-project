import { atom } from "recoil";

// 선택된 일차 state
export const selectedOptionState = atom({
  key: "selectedOptionState",
  default: "1일차",
});

// 일차 정보 state
export const dayListState = atom({
  key: "dayListState",
  default: [],
});

// 일차별 가격 state
export const datePriceState = atom({
  key: "datePriceState",
  default: 0,
});

// 총 가격 state
export const allPriceState = atom({
  key: "allPriceState",
  default: 0,
});
