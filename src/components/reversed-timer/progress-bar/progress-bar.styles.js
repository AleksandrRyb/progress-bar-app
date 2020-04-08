import styled from "styled-components";

export const ProgressContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 96%;
`;

export const ProgressDone = styled.div`
  background: linear-gradient(to left, #ffbcbc, #fde2e2);
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* width: ${(props) => (props.percentage ? props.percentage + "%" : 0)}; */
  opacity: 1;
  transition: 1s ease 0.3s;
`;
