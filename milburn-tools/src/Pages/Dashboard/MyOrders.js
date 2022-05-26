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
      <h1>my orders: {orders.length}</h1>
    );
};

export default MyOrders;