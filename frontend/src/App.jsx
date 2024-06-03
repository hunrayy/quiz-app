import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import AdminDashboard from "./pages/adminDashboard/AdminDashboard"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/:token" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default App
