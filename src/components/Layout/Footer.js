import React from "react";
import { Fragment } from "react";
import classes from "./Footer.module.css";

import FooterItem from "./FooterItem";

const DUMMY_INFOS = [
  { id: "1", name: "자주 묻는 질문" },
  { id: "2", name: "고객 센터" },
  { id: "3", name: "계정" },
  { id: "4", name: "미디어 센터" },
  { id: "5", name: "투자 정보(KR)" },
  { id: "6", name: "입사 정보" },
  { id: "7", name: "넷플릭스 지원 디바이스" },
  { id: "8", name: "이용 약관" },
  { id: "9", name: "개인정보" },
  { id: "10", name: "쿠기 설정" },
  { id: "11", name: "회사 정보" },
  { id: "12", name: "문의하기" },
  { id: "13", name: "속도 테스트" },
  { id: "14", name: "법적 고지" },
  { id: "15", name: "오직 넷플릭스에서" },
];

const Footer = (props) => {
  const infoList = DUMMY_INFOS.map((info) => {
    return <FooterItem key={info.id} name={info.name} />;
  });

  return (
    <Fragment>
      <div className={classes["footer-wrap"]}>
        <footer className={classes.footer}>
          <div>
            <p>질문이 있으신가요 ? 문의 전화: 080-001-9587 </p>
          </div>

          <div class={classes["footer-links"]}>
            <ul>{infoList}</ul>
          </div>
          <div class={classes["footer-information"]}>
            <h3>넷플릭스 대한민국</h3>
            <div>
              <p>
                넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                제2018-서울종로-0426호 전화번호:080-001-9587
              </p>
              <p>대표: 레지널드 숀 톰프슨</p>
              <p>이메일 주소: korea@netflix.com</p>
              <p>
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
                20층 우편번호 03161
              </p>
              <p>사업자등록번호: 165-87-00119</p>
              <p>클라우드 호스팅: Amazon Web Services Inc</p>
              <p>공정거래위원회 웹사이트</p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
