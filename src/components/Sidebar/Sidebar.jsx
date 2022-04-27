import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";

import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import { logoSVG, iconEUA, iconBR, iconUK, iconKOR, iconCAN, iconJP } from "../../assets";
import { ThemeContext } from "./../../App";

export function Sidebar() {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality *Adicionar*
    }
  };

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
        <img src={logoSVG} alt="logo" />
        {sidebarOpen && (
          <h2>SAIDERA <span>TopFlix</span></h2>
        )}
      </SLogo>

      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>

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
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estados Unidos",
    icon: <img src={iconEUA} alt="Estados Unidos da América" />,
    to: "/eua",
  },
  {
    label: "Brasil",
    icon: <img src={iconBR} alt="Brasil" />,
    to: "/br",
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
    label: "Opicional",
    icon: <AiOutlineSetting />,
    to: "/MUDAR",
  },
];