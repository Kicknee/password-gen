import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Navbar } from "./components/Navbar";
import { PasswordContextProvider } from "./context/passwordContext";
import "./App.css";

function App() {
  return (
    <PasswordContextProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Container>
    </PasswordContextProvider>
  );
}

export default App;
