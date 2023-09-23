import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes basename="/">
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
