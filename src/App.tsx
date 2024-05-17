// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import FrontPage from "./components/FrontPage";
// import Weather from "./components/Weather";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/weather-app" element={<FrontPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}

export default App;


// slow loading enter a valid city
// image loading slow
// page reload not directing
