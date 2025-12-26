import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";


export default function CreateEmployee() {
  const { addEmployee } = useEmployees();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const [form, setForm] = useState({
    first: "",
    last: "",
    title: "",
    role: "",
    description: "",
  });

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Add Employee</h1>

      <div className="grid gap-3 max-w-xl">
        {Object.keys(form).map((k) => (
          <input
            key={k}
            className="border p-2"
            placeholder={k}
            value={form[k]}
            onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          />
        ))}

        <button
          className="bg-blue-500 text-white py-2 rounded"
          onClick={() => {

            if (!form.first || !form.last || !form.title) {
                enqueueSnackbar("Please fill all required fields", { 
                variant: "error" 
                });
                return;
            }

            addEmployee(form);

            enqueueSnackbar("Employee added successfully!", { 
                variant: "success" 
            });

            navigate("/");
            }}

        >
          Save
        </button>
      </div>
    </div>
    
  );

  
}
