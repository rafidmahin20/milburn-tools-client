import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if(user){
            fetch(`https://ancient-falls-05343.herokuapp.com/order?customerEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        }
    },[user])
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Phone</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map(o => <tr>
                    <th>1</th>
                    <td>{o.customerName}</td>
                    <td>{o.customerEmail}</td>
                    <td>{o.quantity}</td>
                    <td>{o.phone}</td>
                  </tr>)
              }
           
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;