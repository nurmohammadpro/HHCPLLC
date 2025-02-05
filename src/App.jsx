import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </div>
  );
};
export default App;
