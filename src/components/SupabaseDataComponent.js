import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';
import './SupabaseDataComponent.css';
const SupabaseDataComponent = () => {
    const [data, setData] = useState([]); // Use specific types if available
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Ensure loading is set to true at the start
            try {
                const { data, error } = await supabase.from('your-table-name').select('*');
                if (error) {
                    setError(error.message);
                }
                else {
                    setData(data || []); // Ensure null fallback is handled
                }
            }
            catch (err) {
                setError(err.message || 'Unexpected error occurred');
            }
            finally {
                setLoading(false); // Ensure loading stops
            }
        };
        fetchData();
    }, []);
    if (loading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsxs("div", { className: "error", children: ["Error: ", error] });
    if (error)
        return _jsxs("div", { className: "error", children: ["Error: ", error] });
    if (error)
        return _jsxs("div", { className: "error-red", children: ["Error: ", error] });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Supabase Data" }), _jsx("ul", { children: data.map((item, index) => (_jsx("li", { children: JSON.stringify(item) }, index))) })] }));
};
export default SupabaseDataComponent;
