import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useEmployees } from "../context/EmployeeContext";

export default function ShowEmployee() {
  const { id } = useParams();
  const { employees } = useEmployees();

  const emp = employees.find((e) => e.id === id);

  if (!emp) return <p className="p-4">Employee not found</p>;

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Employee Details</h1>

      <div className="border shadow p-6 rounded max-w-xl">
        <p><b>First Name:</b> {emp.first}</p>
        <p><b>Last Name:</b> {emp.last}</p>
        <p><b>Job Title:</b> {emp.title}</p>
        <p><b>Job Role:</b> {emp.role}</p>
        <p><b>Description:</b> {emp.description}</p>
      </div>
    </div>
  );
}
