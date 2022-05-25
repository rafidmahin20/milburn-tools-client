import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const onSubmit = data =>{
        const url = `http://localhost:5000/tool`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>{
                navigate('/')
            });
    }
    return (
        
   <form onSubmit={handleSubmit(onSubmit)}>
       <input name='number' {...register("number")}className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="put rating" aria-label="Email Address"  required/>
       <textarea name='text' {...register("text")} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="add your review" aria-label="Email Address"  required/>
       <div className="flex items-center justify-between mt-4">
       <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">Submit</button>
       </div>
   </form>
    );
};

export default AddReview;