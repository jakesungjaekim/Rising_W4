import React from "react";
import NetflixMainItem from "./NetflixMainItem";

import classes from "./NetflixMain.module.css";

import Img1 from "../../../assets/images/main-contents1.png";
import Img2 from "../../../assets/images/main-contents2.jpeg";
import Img3 from "../../../assets/images/main-contents3.png";
import Img4 from "../../../assets/images/main-contents4.png";

const DUMMY_CONTENTS = [
  {
    id: "1",
    title: "TV로 즐기세요",
    content:
      "스마트 TV, PlayStation, Xbox, Chomecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
    image: Img1,
  },
  {
    id: "2",
    title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.",
    content: "간편하게 저장하고 빈틈없이 즐겨보세요.",
    image: Img2,
  },
  {
    id: "3",
    title: "다양한 디바이스에서 시청하세요.",
    content:
      "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.",
    image: Img3,
  },
  {
    id: "4",
    title: "어린이 전용 프로필을 만들어 보세요.",
    content:
      "자기만의 공가네서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
    image: Img4,
  },
];

const NetflixMain = (props) => {
  const contentsList = DUMMY_CONTENTS.map((content) => {
    return (
      <NetflixMainItem
        key={content.id}
        title={content.title}
        content={content.content}
        image={content.image}
      />
    );
  });

  return <main className={classes.contents}> {contentsList}</main>;
};

export default NetflixMain;
