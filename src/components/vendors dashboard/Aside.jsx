// import React from 'react'
import { FaAward, FaBookOpen, FaComment, FaQuestion, FaSignOutAlt, FaStar, FaTools } from 'react-icons/fa'
import { FaBusinessTime, FaHouse } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types"; 


function Aside() {
  const location = useLocation();
  // Styling the active link
    const activePath = (path) => {
      const isActive = location.pathname === path
        return `aside-link-container ${isActive ? 'aside-link-active' : ''}`;
        //   backgroundColor: isActive ? "#FDC55E" : "none",
        //   borderRadius: isActive ? "16px" : "none"  
    }
    const AsideLink = ({ to, icon: Icon, label }) => {
      const className = activePath(to);

      return (
        // Use the Link component to wrap the entire block
        <Link to={to} className={className}>
          <span className="aside-icon">
            <Icon />
          </span>
          <span style={{ marginLeft: "12px" }}>{label}</span>
        </Link>
      );
    };

  return (
    <>
      <div id="vendorAside">
        {/* Using the new structure for the links */}
        <AsideLink to="/vendorsdashboard" icon={FaHouse} label="Dashboard" />
        <AsideLink
          to="/businessprofile"
          icon={FaBusinessTime}
          label="Business Profile"
        />
        <AsideLink
          to="/menumanagement"
          icon={FaBookOpen}
          label="Menu Management"
        />
        <div className="aside-link-container">
          <span className="aside-icon">
            <FaAward />
          </span>
          <span style={{ marginLeft: "12px" }}> Promotions</span>
        </div>

        <div className="aside-link-container">
          <span className="aside-icon">
            <FaStar />
          </span>
          <span style={{ marginLeft: "12px" }}> Reviews & Ratings</span>
        </div>

        <div className="aside-link-container">
          <span className="aside-icon">
            <FaTools />
          </span>
          <span style={{ marginLeft: "12px" }}> Settings</span>
        </div>

        <hr />
        <br />

        <h5>Help & Support</h5>
        <div className="aside-link-container">
          <span className="aside-icon">
            <FaQuestion />
          </span>
          <span style={{ marginLeft: "12px" }}> FAQ</span>
        </div>
        <div className="aside-link-container">
          <span className="aside-icon">
            <FaComment />
          </span>
          <span style={{ marginLeft: "12px" }}> Contact Us</span>
        </div>
        <br />
        <div className="aside-link-container">
          <span className="aside-icon">
            <FaSignOutAlt />
          </span>
          <span style={{ marginLeft: "12px" }}> Log out</span>
        </div>
      </div>
    </>
  );
}

Aside.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
}

export default Aside;