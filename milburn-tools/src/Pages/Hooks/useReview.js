import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState({})
    useEffect(() => {
        fetch('https://ancient-falls-05343.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [review])
    return [review]
};

export default useReview;