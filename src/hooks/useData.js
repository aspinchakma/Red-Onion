import { useEffect, useState } from "react";

const useData = () => {
    const [food, setFood] = useState({});
    useEffect(() => {
        fetch('./foods.json')
            .then(response => response.json())
            .then(data => setFood(data))
    }, [])
    return [food]
}
export default useData;