import "./App.css";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./routes/Companies";
import CreateCompany from "./routes/CreateCompany";
import CompanyCard from "./views/CompanyCard";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav className="nav">
      <Link className="site-title" to="/"> Terra Quest</Link>
        <ul>
          <li><Link to="/Companies"> Companies</Link></li>
          <li><Link to="/CreateCompany"> CreateCompany</Link></li>
          <li>  <Link to="/CompanyCard"> CompanyCard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/CreateCompany" element={<CreateCompany />} />
        <Route path="/CompanyCard" element={<CompanyCard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
