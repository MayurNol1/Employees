import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import EditEmployee from "./pages/EditEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import { EmployeeProvider } from "./context/EmployeeContext";

export default function App() {
  return (
    <EmployeeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees/create" element={<CreateEmployee />} />
        <Route path="/employees/details/:id" element={<ShowEmployee />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
      </Routes>
    </EmployeeProvider>
  );
}
