import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
// import Home from '../src/pages/LandingPage';
import ProductPage from "../src/pages/ProductPage";
import Login from "./pages/LoginPage";
import SigupPage from "./pages/sigupPage";
import LoginForm from "./pages/LoginPage";
import GetProducts from "./pages/GetProductPage";


function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/product-page" element={<ProductPage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SigupPage/>}/>
          <Route path="/get-product" element={<GetProducts/>} />
       
        </Routes>
    </Router>
    </div>
  );
}
export default App;