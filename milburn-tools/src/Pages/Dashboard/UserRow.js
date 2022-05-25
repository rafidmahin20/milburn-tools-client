import React from "react";

const UserRow = ({user}) => {
    const {email} = user;
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        1
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {email}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <button className="btn btn-xs">Make Admin</button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
