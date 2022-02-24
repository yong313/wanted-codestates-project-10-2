import React, { useRef } from 'react';
import styled from 'styled-components';

export default function ReportModal({ setShowReport }) {
  return (
    <>
      <Background />
      <Container>
        <div className="top text">유저신고</div>
        <div className="text">해당 유저를 신고하시겠습니까?</div>
        <div className="text"> 신고하시려면 사유를 입력해주세요.</div>

        <textarea></textarea>

        <div className="rightAlign">
          <button onClick={() => setShowReport(false)}>아니오</button>
          <button>네</button>
        </div>
      </Container>
      ;
    </>
  );
}

const Background = styled.div`
  background-color: #1f334a;
  opacity: 0.6;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background-color: #fff;
  color: #1f334a;
  border-bottom: 3px solid #0077ff;
  width: 348px;
  height: 290px;
  padding: 30px 24px 24px 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  .text {
    font-size: 14px;
    margin-top: 5px;
  }

  .text.top {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    line-height: 16px;
  }
  textarea {
    width: 300px;
    height: 100px;
    border: 1px solid #1f334a;
    resize: none;
    margin: 20px 0;
    padding: 0 10px;
  }
  .rightAlign {
    text-align: right;
  }
  button {
    width: 50px;
    height: 32px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    background-color: #07f;
    border: none;
  }
`;
