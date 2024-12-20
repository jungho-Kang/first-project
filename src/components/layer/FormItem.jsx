import styled from "@emotion/styled";

const FormItem = ({ label, userName }) => {
  const FormItemDiv = styled.div`
    /* border: 1px solid #555; */
    margin-bottom: 22px;
    p {
      font-weight: 600;
      margin-bottom: 0.5em;
    }
    span {
      display: block;
      border: 1px solid #dedede;
      border-radius: 4px;
      padding: 12px 10px;
    }
  `;
  return (
    <FormItemDiv>
      <p>{label}</p>
      <span>{userName}</span>
    </FormItemDiv>
  );
};
export default FormItem;
