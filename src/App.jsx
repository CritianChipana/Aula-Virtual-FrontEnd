import React from "react";
import { AppRouter } from "./Router/AppRouter";

import "./App.css";
import { theme } from "./styles/themes";
import { ThemeProvider } from "@material-ui/core";

export const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};
