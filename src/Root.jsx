import { Routes, Route } from "react-router";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header/index.jsx";
import Prova from "./pages/Prova/index.jsx";
import Historia from "./pages/Historia/index.jsx";

function Root() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00c4f0",
      },
    },
    typography: {
      fontFamily: `"Edu AU VIC WA NT Hand", cursive`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/prova" element={<Prova />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Root;
