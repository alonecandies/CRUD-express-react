import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
