import { BrowserRouter } from "react-router-dom";
import { Routes } from "pages/routes";
import "./global-styles.scss"
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
