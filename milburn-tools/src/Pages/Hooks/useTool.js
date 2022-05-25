import { useEffect, useState } from 'react';

const useTool = () => {
    const [tools, setTools] = useState([]);
    useEffect(() =>{
        fetch('https://ancient-falls-05343.herokuapp.com/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [tools])
    return [tools]
};

export default useTool;