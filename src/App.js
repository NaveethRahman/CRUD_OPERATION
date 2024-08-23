import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./CRUD/create"
import Read from "./CRUD/read";
import Update from "./CRUD/update";

function App() {
  return (
    <div>
      {/* <Create/> */}
      <Routes>
        <Route index element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
