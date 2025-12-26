import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export default function EmployeeTable({ employees }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 ">First Name</th>
            <th className="p-3 ">Last Name</th>
            <th className="p-3 ">Job Title</th>
            <th className="p-3 ">Jobe Role</th>
            <th className="p-3 text-center ">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr
              key={e.id}
              className="boader hover:bg-gray-50 transition"
            >
              <td className="p-3 border">{e.first}</td>
              <td className="p-3 border">{e.last}</td>
              <td className="p-3 border">{e.title}</td>
              <td className="p-3 border">{e.role}</td>

              <td className="p-3 border">
                <div className="flex items-center justify-center gap-5 text-xl">
                  <Link
                    to={`/employees/details/${e.id}`}
                    className="text-blue-600 hover:scale-110 transition"
                  >
                    <BsInfoCircle />
                  </Link>

                  <Link
                    to={`/employees/edit/${e.id}`}
                    className="text-green-600 hover:scale-110 transition"
                  >
                    <AiOutlineEdit />
                  </Link>

                  <Link
                    to={`/employees/delete/${e.id}`}
                    className="text-red-600 hover:scale-110 transition"
                  >
                    <MdOutlineDelete />
                  </Link>
                </div>
              </td>
            </tr>
          ))}

          {employees.length === 0 && (
            <tr>
              <td
                className="p-4 text-center text-gray-500 border"
                colSpan="5"
              >
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
