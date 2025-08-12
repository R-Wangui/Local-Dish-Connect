import AnalyticsContextProvider from '../../context/AnalyticsContextProvider'
import PropTypes from "prop-types";
import { useContext } from "react";
import { AnalyticsContext } from "../context/AnalyticsContextProvider";
import VendorDashboard from '../../pages/VendorsDashboard';

function DashboardLayout() {
  
  const { visits, clicks, orders } = useContext(AnalyticsContext);
  console.log("Context from VendorDashboard:", { visits, clicks, orders });
  return (
    <AnalyticsContextProvider>
      <div>
        <VendorDashboard /> 
      </div>
    </AnalyticsContextProvider>
  );
}
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DashboardLayout