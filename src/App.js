import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginSignUp from './Pages/LoginSignUp/index'
import ForgotPassword from "./Pages/ForgetPassword";
import ForgotPasswordNext from "./Pages/ForgetPassword/ForgotPasswordNext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>  
          <Route index element={<LoginSignUp/>}></Route>
          <Route path='forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='forgot-password-next' element={<ForgotPasswordNext/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
