import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NewMember from "./components/NewMember";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/new" element={<NewMember />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
