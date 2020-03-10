import styled from "styled-components";

const Button = styled.button`
  display: block;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  height: 50px;
  width: 90px;
  padding: 10px 15px 10px 15px;
  background-color: ${({ color }) => color};
  border: none;
`;

export default Button;
