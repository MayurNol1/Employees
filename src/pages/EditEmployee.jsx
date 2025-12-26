import { useNavigate, useParams } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useSnackbar } from "notistack";


export default function EditEmployee() {
  const { id } = useParams();
  const { employees, updateEmployee } = useEmployees();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const emp = employees.find((e) => e.id === id);

  const [form, setForm] = useState(emp || {});

  if (!emp) return <p className="p-4">Employee not found</p>;

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Employee</h1>

      <div className="grid gap-3 max-w-xl">
        {Object.keys(form).map(
          (k) =>
            k !== "id" && (
              <input
                key={k}
                className="border p-2"
                placeholder={k}
                value={form[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              />
            )
        )}

        <button
          className="bg-green-600 text-white py-2 rounded"
          onClick={() => {
            updateEmployee(id, form);
            enqueueSnackbar("Employee updated", { variant: "info" });
            navigate("/");

          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
