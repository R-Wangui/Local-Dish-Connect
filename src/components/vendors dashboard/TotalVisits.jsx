import { FaAngleDown } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

// const data = [
//   {
//     name: "Jan",
//     uv: 4000,
//     visits: 30000,
//     amt: 30000
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     visits: 20000,
//     amt: 2000
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     visits: 48000,
//     amt: 48000
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     visits: 24000,
//     amt: 2400
//   },
//   {
//     name: "May",
//     uv: 1890,
//     visits: 30000,
//     amt: 3000
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//     visits: 38000,
//     amt: 3
//   }
// ];

 function TotalVisits({data}) {
   // Initially known as Total Revenue
   return (
     <>
       <div id="revenueContainer">
         <div className="revenueTitle">
           <h5>Total NO. of visits</h5>
           <p>Order activity this year</p>
           <span className="month">
             Monthly <FaAngleDown />{" "}
           </span>
         </div>
         <div>
           <BarChart
             style={{
               height: "272px",
               top: 44,
               left: 0,
               right: 0,
               bottom: 0,
               gap: 8,
               position: "absolute",
               fontSize: 12,
             }}
             width={400}
             height={242}
             data={data}
             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
             barSize={20}
           >
             <XAxis
               dataKey="name"
               scale="point"
               padding={{ left: 10, right: 10 }}
             />
             <YAxis />
             <Tooltip />
             <Legend />
             <CartesianGrid strokeDasharray="3 3" />
             <Bar
               dataKey="visits"
               fill="#006B61"
               background={{ fill: "#eee" }}
             />
           </BarChart>
         </div>
       </div>
     </>
   );
 }

 TotalVisits.propTypes = {
   children: PropTypes.node.isRequired,
 };

export default TotalVisits;