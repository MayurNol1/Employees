import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { useEmployees } from "../context/EmployeeContext";
import EmployeeTable from "../components/home/EmployeeTable";


export default function Home() {
  const { employees } = useEmployees();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Employees List</h1>

        <Link
            to="/employees/create"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
            <MdOutlineAddBox className="text-2xl" />
            <span className="text-lg">Add Employee</span>
            </Link>
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}