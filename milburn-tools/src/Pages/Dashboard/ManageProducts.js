import React from 'react';
import { toast } from 'react-toastify';
import bin from '../../Images/delete.png'
import useTool from '../Hooks/useTool';

const ManageProducts = () => {
    const [tools, setTools] = useTool();

    const handleDelete = id =>{
        const proceed = window.confirm('you sure');
        if(proceed){
            const url = `https://ancient-falls-05343.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                toast(data);
                const remaining = tools.filter(tool => tool._id !== id);
                setTools(remaining);
            })
        }
    }
    return (
        <div className="flex mt-10 mx-auto ml-10">
        <div
          className="flex mx-auto shadow-md sm:rounded-lg "
          style={{ height: "100%" }}
        >
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Sold
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <>
                  <tr
                    key={tool._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                      <td className="px-6 py-4 whitespace-nowrap">
                          <img className="h-12 w-12 rounded-full" src={tool.picture} alt=""/>
                      </td>
                    <td
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {tool.name}
                    </td>
                    <td className="px-6 py-4">{tool.price}</td>
                    <td className="px-6 py-4">{tool.quantity}</td>
                    <td className="px-6 py-4">{tool.sold}</td>
                    <td className="px-6 py-4">{tool.short_description}</td>
                    <td className="px-6 py-4">{tool.supplier_name}</td>
                    <td className="px-6 py-4 text-right ">
                      <button onClick={() => handleDelete(tool._id)} className=" bg-red-500 w-8 h-8 rounded">
                        <img
                          src={bin}
                          alt=""
                          className="w-6 h-6 flex mx-auto"
                        />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProducts;