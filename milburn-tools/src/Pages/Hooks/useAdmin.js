import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoadng] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://ancient-falls-05343.herokuapp.com/admin/${email}`, {
               method: 'GET',
               headers: {
                   'content-type': 'application/json',
                   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
               }
           })
           .then(res => res.json())
           .then(data => {
           setAdmin(data.admin);
           setAdminLoadng(false);
        })
    }
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin