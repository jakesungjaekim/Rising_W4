import styled from "styled-components";

const CardDiv = styled.div`
  padding: 75px 45px;
  color: white;
  background-color: black;
  border-radius: 8px;
  boder-bottom: 8px solid #222;
`;

const Card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default Card;
