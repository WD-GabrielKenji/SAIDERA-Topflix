import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AiOutlineLeft,
  AiOutlineSearch,
} from "react-icons/ai";

import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  NameLogo,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { logoSVG, iconEUA, iconBR, iconUK, iconKOR, iconCAN, iconJP, analiseIcon, sideGlobo } from "../../assets";
import { ThemeContext } from "./../../App";

export function Sidebar() {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>

      <SLogo style={!sidebarOpen ? { width: `fit-content` } : {}}>
        <SLink to={"/"} >
          <img src={logoSVG} alt="logo" />
          {sidebarOpen && (
            <NameLogo>
              <span class="logo1">SAIDEIRA</span>
              <span class="logo2">TopFlix</span>
            </NameLogo>
          )}
        </SLink>
      </SLogo>

      <SDivider />

      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
      
    </SSidebar>
  );
}

const linksArray = [
  {
    label: "Global",
    icon: <img src={sideGlobo} alt="Página principal" />, 
    to: "/mundi",
  },
  {
    label: "Brasil",
    icon: <img src={iconBR} alt="Brasil" />,
    to: "/br",
  },
  {
    label: "Estados Unidos",
    icon: <img src={iconEUA} alt="Estados Unidos da América" />,
    to: "/eua",
  },
  {
    label: "Reino Unido",
    icon: <img src={iconUK} alt="Reino Unido" />,
    to: "/uk",
  },
  {
    label: "Coreia do Sul",
    icon: <img src={iconKOR} alt="Coreia do Sul" />,
    to: "/kor",
  },
  {
    label: "Canadá",
    icon: <img src={iconCAN} alt="Canadá" />,
    to: "/can",
  },
  {
    label: "Japão",
    icon: <img src={iconJP} alt="Japão" />,
    to: "/jp",
  }
];

const secondaryLinksArray = [
  {
    label: "Análise de IA",
    icon: <img src={analiseIcon} alt="Ajuda" />, 
    to: "/analise",
  },
];