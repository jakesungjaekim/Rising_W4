import styled from "styled-components";

const CardDiv = styled.div`
  padding: 75px 45px;
  color: white;
  background-color: black;
  boder-bottom: 8px solid #222;

  display: flex;
  justify-content: center;
`;

const Card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default Card;
