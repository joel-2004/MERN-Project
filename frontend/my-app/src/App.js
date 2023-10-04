import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <h1>hello World</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
