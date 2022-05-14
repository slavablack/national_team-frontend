import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Home-page</h1>
      <Link to="/nationalteam">Nationalteam</Link>
    </div>
  );
}

export default App;
