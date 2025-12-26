import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useEmployees } from "../context/EmployeeContext";
import { useSnackbar } from "notistack";


export default function DeleteEmployee() {
  const { id } = useParams();
  const { deleteEmployee, employees } = useEmployees();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const emp = employees.find((e) => e.id === id);

  if (!emp) return <p className="p-4">Employee not found</p>;

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-red-600">Delete Employee</h1>

      <p className="mb-6">
        Are you sure you want to delete
        <span className="font-semibold"> {emp.first} {emp.last}</span>?
      </p>

      <button
        className="bg-red-600 text-white px-6 py-2 rounded"
        onClick={() => {
          deleteEmployee(id);
          deleteEmployee(id);
          enqueueSnackbar("Employee deleted", { variant: "error" });
          navigate("/");
        }}
      >
        Yes, Delete
      </button>
    </div>
  );
}
