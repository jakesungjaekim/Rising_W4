import React from "react";

// UI
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Card from "../components/UI/Card";

const Test = (props) => {
  return (
    <div>
      Hello World
      <Button backgroundColor="true">하이루</Button>
      <Input placeholder="이메일주소를 입력해주세요" />
      <Input placeholder="비밀번호를 입력해주세요" />
      <Card>
        <h2>Title</h2>
        <p>Contents</p>
      </Card>
    </div>
  );
};

export default Test;
