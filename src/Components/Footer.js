import styled from "styled-components";
import logo from '../assets/CY-MATHS-IN-Logo.jpeg';

const StyledFooter = styled.footer`
  background: rgb(255, 255, 255);
  border-top: 1px solid black;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5vw;
  z-index: 100;
`;

const StyledImg = styled.img`
  height: 100%;
`;


export default function Footer() {

  return (
    <StyledFooter>
      <StyledImg src={logo} alt='logo' />
      <span style={{fontSize: '10px'}} >© CY-MATHS-IN | All Rights Reserved</span>
    </StyledFooter>
  );
};