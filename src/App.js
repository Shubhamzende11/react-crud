// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emplisting from "./Emplisting";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";
import EmpCreate from "./EmpCreate";

function App() {
  return (
    <div className="App">
      <h1>React js crud operation</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/"element={<Emplisting/>}></Route>
        <Route path="/employee/create"element={<EmpCreate/>}></Route>
        <Route path="/employee/detail/:empid"element={<EmpDetail/>}></Route>
        <Route path="/employee/edit/:empid"element={<EmpEdit/>}></Route>


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
