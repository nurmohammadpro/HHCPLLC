import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;
