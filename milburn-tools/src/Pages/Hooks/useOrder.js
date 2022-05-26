import  { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://ancient-falls-05343.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])
    return [orders]
};

export default useOrder;