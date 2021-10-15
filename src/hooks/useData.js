import { useEffect, useState } from "react";

const useData = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('./foods.JSON')
            .then(response => response.json())
            .then(data => setFood(data))
    }, [])
    return [food]
}
export default useData;