import { useEffect, useState } from "react";

const useLunch = () => {
    const [lunches, setLunches] = useState([]);
    useEffect( () => {
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunches(data));
    }, []);

    return [lunches, setLunches];
}

export default useLunch;