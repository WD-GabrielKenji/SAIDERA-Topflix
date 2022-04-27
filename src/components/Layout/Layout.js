import React from "react";

import { Sidebar } from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

export function Layout({ children }) {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
}