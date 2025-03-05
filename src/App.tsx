import { Routes, Route } from "react-router";
import User from "./pages/User";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<User />} />
      </Routes>
    </>
  )
}

export default App
