import { useEffect, useState } from "react";

const useDinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect( () => {
        fetch('../dinner.json')
        .then(res => res.json())
        .then(data => setDinners(data));
    }, []);

    return [dinners, setDinners];
}

export default useDinner;