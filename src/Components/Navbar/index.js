import { useState } from "react";
import {
    Nav,
    StyledLogo,
    NavLinkImg,
    NavLinkTxt,
    ThreeBars,
    NavMenu,
    SidebarNav,
    SidebarWrap,
    SidebarClose,
    CloseIconWrapper,
    CloseIcon,
    SidebarLink,
    SidebarLabel,
    SidebarLogo,
    SidebarFooter
} from "./NavbarElements";
import logo from '../../assets/CY-MATHS-IN-Logo.jpeg';


export default function Navbar() {
  const [sidebar,setSitebar] = useState(false);

  return (
    <>
      <Nav>
        
        <NavLinkImg to="/" >
          <StyledLogo src={logo} alt="logo" />
        </NavLinkImg>

        <NavMenu>
          <NavLinkTxt to="/about-us" >
            About us
          </NavLinkTxt>
          <NavLinkTxt to="/services" >
            Services
          </NavLinkTxt>
          <NavLinkTxt to="/events" >
            Events
          </NavLinkTxt>
          <NavLinkTxt to="/contact" >
            Contact
          </NavLinkTxt>
          <NavLinkTxt to="/support" >
            Support
          </NavLinkTxt>
        </NavMenu>

        <ThreeBars onClick={() => {setSitebar(prev => !prev)}} />

        <SidebarNav sidebar={sidebar} >
          <SidebarWrap>

            <SidebarClose to="#">
              <CloseIconWrapper>
                <CloseIcon onClick={() => {setSitebar(prev => !prev)}} />
              </CloseIconWrapper>
            </SidebarClose>

            <SidebarLink to="/about-us" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                About us
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/services" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Services
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/events" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Events
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/contact" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Contact
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/support" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Support
              </SidebarLabel>
            </SidebarLink>

            <SidebarLogo>
              <StyledLogo src={logo} alt="logo" />
            </SidebarLogo>

            <SidebarFooter>
              © CY-MATHS-IN <br /> All Rights Reserved
            </SidebarFooter>

          </SidebarWrap>
        </SidebarNav>

      </Nav>
    </>
  );
};