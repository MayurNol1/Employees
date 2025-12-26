import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (emp) =>
    setEmployees((prev) => [...prev, { ...emp, id: Date.now().toString() }]);

  const updateEmployee = (id, updated) =>
    setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, ...updated } : e)));

  const deleteEmployee = (id) =>
    setEmployees((prev) => prev.filter((e) => e.id !== id));

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
