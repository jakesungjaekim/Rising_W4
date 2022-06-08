import React from "react";
import styled from "styled-components";

const Button = styled.button`
  line-height: normal;
  text-decoration: none;
  cursor: pointer;

  color: white;
  font: inherit;
  font-weight: 400px;
  padding: 7px 17px;
  
  border: none;
  border-radius: 5px;
  
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.color};
`;

export default Button;
