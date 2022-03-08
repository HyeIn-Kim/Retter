import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Card from "./routes/card/Card";
import Message from "./routes/card/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card">
          <Route path="" element={<Message />} />
          <Route path="edit" element={<Card />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
