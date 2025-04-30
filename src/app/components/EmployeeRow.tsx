import React from "react";

type EmployeeStatus = "Active" | "Inactive";

interface EmployeeRowProps {
  employee: {
    id: number;
    name: string;
    position: string;
    email: string;
    status: EmployeeStatus;
  };
}

const getStatusStyles = (status: EmployeeStatus) => {
  switch (status) {
    case "Active":
      return "bg-[#a6cee3] text-blue-700";
    case "Inactive":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-4 md:items-center py-3 px-4 bg-white border-b border-gray-200 last:border-b-0">
      <div className="text-sm text-gray-900 font-medium text-left md:text-center">
        {employee.name}
      </div>

      <div className="text-sm text-gray-900 text-left md:text-center">
        <span className="font-normal md:hidden">Position: </span>
        {employee.position}
      </div>

      <div className="text-sm text-gray-900 text-left md:text-center">
        <span className="font-normal md:hidden">Email: </span>
        {employee.email}
      </div>

      <div className="text-left md:text-center">
        <span className="font-normal md:hidden">Status: </span>
        <span
          className={`text-xs font-normal px-2.5 py-0.5 rounded-full ${getStatusStyles(
            employee.status
          )}`}
        >
          {employee.status}
        </span>
      </div>

      <div className="md:justify-self-center pt-2 md:pt-0 flex justify-end md:justify-center">
        <button className="text-xs border border-gray-300 rounded px-3 py-1 text-gray-900 hover:bg-gray-100 transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeRow;
