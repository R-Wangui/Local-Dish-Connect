import { useState, useEffect, createContext } from "react";
import { getClicksPerFood, getTopFoods, getVisitCountPerDay } from "../services/analytics";
import PropTypes from "prop-types";

export const AnalyticsContext = createContext();
// export const useAnalytics = () => useContext(AnalyticsContext);

function AnalyticsContextProvider({ children }) {
    
    const [visits, setVisits] = useState([]);
    const [clicks, setClicks] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getVisitCountPerDay().then(setVisits);
        getClicksPerFood().then(setClicks);
        getTopFoods().then(setOrders);

    }, []);
    console.log("Context value:", { visits });


    return (
        <AnalyticsContext.Provider value={{visits, clicks, orders }}>
            {children}
        </AnalyticsContext.Provider>
    )
}
AnalyticsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AnalyticsContextProvider;