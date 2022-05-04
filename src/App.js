import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import RegistrationII from "./components/RegistrationII";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/register"} element={<RegistrationII/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
