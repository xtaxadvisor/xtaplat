import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
const DataComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                // fetchData now returns SomeData[], so 'response' is typed
                const response = await fetchData();
                setData(response);
            }
            catch (err) {
                setError(err.message || 'Error fetching data');
            }
        };
        getData();
    }, []);
    // Show any error
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    // Show "Loading..." if no data yet
    if (!data.length)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Fetched Data" }), _jsx("ul", { children: data.map((item, index) => (_jsx("li", { children: JSON.stringify(item) }, index))) })] }));
};
export default DataComponent;
