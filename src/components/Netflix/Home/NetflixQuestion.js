import React from "react";
import { Fragment } from "react";

import classes from "./NetflixQuestion.module.css";

import footerImg from "../../../assets/images/footer-plusimg.png";

const DUMMY_QUESTIONS = [
  { id: 1, name: "넷플릭스란 무엇인가요?" },
  { id: 2, name: "넷플릭스 요금은 얼마인가요?" },
  { id: 3, name: "어디에서 시청할 수 있나요?" },
  { id: 4, name: "멤버쉽을 해지하려면 어떻게 하나요?" },
  { id: 5, name: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?" },
  { id: 6, name: "아이들이 넷플릭스를 봐도 좋을까요?" },
];
const NeflixQuestion = (props) => {
  const questionList = DUMMY_QUESTIONS.map((question) => {
    return (
      <div className={classes["questions-wrap"]} key={question.id}>
        {question.name}
        <div>
          <img src={footerImg} />
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className={classes.question}>
        <div>
          <h2>자주 묻는 질문</h2>

          <div className={classes.questionslist}>{questionList}</div>

          <div className={classes.onemoretime}>
            <p>
              시청할 준비가 되셨나요? 멤버쉽을 등록하거나 재시자가려면 이메일
              주소를 입력하세요.
            </p>
            <div>
              <input placeholder="이메일주소" />
              <button>시작하기</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NeflixQuestion;
