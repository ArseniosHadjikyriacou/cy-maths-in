import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link,NavLink } from "react-router";
import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  border-bottom: 2px solid black;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5vw;
  z-index: 100;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.40), 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledLogo = styled.img`
  height: 100%;
`;

export const NavLinkImg = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: 700px) {
      display: none;
  }
`;

export const ThreeBars = styled(FaBars)`
  display: none;
  color: #808080;
  transition: 150ms;
  @media screen and (max-width: 700px) {
      display: block;
      font-size: 1.6rem;
      cursor: pointer;
  }
  &:hover {
      color: #2A74B5;
  }
`;

export const NavLinkTxt = styled(NavLink)`
  color:rgb(155, 155, 155);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 150ms;
  &.active {
      color:rgb(0, 0, 0);
  }
  &:hover {
      color: #2A74B5;
  }
`;

export const SidebarNav = styled.nav`
  background: white;
  border-left: 2px solid black;
  width: 30vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  transition: 400ms;
  z-index: 200;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarClose = styled(Link)`
  padding: 0.5rem 1.5vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseIconWrapper = styled.div`
  background:rgb(99, 176, 243);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 1.3rem;
  color:rgb(0, 0, 0);
  transition: 150ms;
  &:hover {
    color:rgb(192, 40, 40);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: rgb(155, 155, 155);
  justify-content: flex-start;
  align-items: center;
  padding: 5px 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
  transition: 150ms;
  &:hover {
    color: #2A74B5;
    border-left: 6px solid #2A74B5;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin: 0;
  white-space: nowrap;
`;

export const SidebarLogo = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 40px;
`;

export const SidebarFooter = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 10px;
`;