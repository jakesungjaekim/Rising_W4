import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  font: inherit;
  font-size: 24px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${(props) =>
    props.backgroundColor === "true" ? "red" : "pink"};
`;

export default Button;
