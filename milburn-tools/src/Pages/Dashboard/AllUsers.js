import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AllUsers = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('https://ancient-falls-05343.herokuapp.com/user').then(res => res.json()))
    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
            <h1>all users: {users.length}</h1>
        </div>
    );
};

export default AllUsers;