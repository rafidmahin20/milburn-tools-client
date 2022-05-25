import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://ancient-falls-05343.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
    })
    .then(res => {
        if(res.status === 403){
            toast.error('failed to make an admin');
        }
        return res.json()})
    .then(data =>{
       if(data.modifiedCount > 0){
        refetch();
        toast.success(`successfully made an admin`);
       }
    })
  };
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        1
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {email}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button className="btn btn-xs">Remove User</button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default UserRow;
