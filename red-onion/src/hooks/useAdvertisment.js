import { useEffect, useState } from "react";

const useAdvertisment = () => {
    const [advertisments, setAdvertisments] = useState([]);
    useEffect( () => {
        fetch('advertisment.json')
        .then(res => res.json())
        .then(data => setAdvertisments(data));
    }, []);

    return [advertisments, setAdvertisments];
}

export default useAdvertisment;