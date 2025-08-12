import { AreaChart, Area, Tooltip } from "recharts";
import  PropTypes  from "prop-types";

// const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100
//     }
//   ];

function Clicks({data}) {
    return (
      <>
          <div id='clicksContainer'>
              <div className='clicksTitle'>
                  <span>Clicks</span>
                  <h6>237</h6>
                  <p>vs lasts month</p>
              </div>
              <AreaChart
                style={{height: '100px', top: -20, left: 20, right: 12, bottom: 0, fontSize: 12}}
                width={300}
                height={160}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#F5C83B" fill="#F5C83B" fillOpacity={0.2} />
                </AreaChart>

              {/* <svg xmlns="http://www.w3.org/2000/svg" width="172" height="71" viewBox="0 0 172 71" fill="none">
                  <path d="M6.13856 29.6198C4.82491 30.7728 2.50879 31.4619 2.50879 31.4619L2.50879 70.5098L171.656 70.5098V29.6198C171.656 29.6198 163.794 4.84492 155.322 5.42205C148.119 5.91273 147.316 19.4789 140.803 24.7075C134.995 29.3704 131.106 33.8406 124.832 31.4619C116.863 28.4402 118.819 6.47531 110.676 5.42205C103.738 4.52467 102.014 17.2078 95.431 21.0233C91.3284 23.4014 88.8722 25.1017 84.5417 24.7075C75.1132 23.8493 70.3856 -2.31 64.9409 0.76017C59.4962 3.83034 56.7427 51.1657 44.2512 44.9707C38.3768 42.0574 38.5088 30.0855 32.6359 27.1637C28.8281 25.2693 26.3773 28.3671 22.4725 27.1637C17.7847 25.7189 15.6163 16.0709 11.2202 19.1812C8.34025 21.2189 8.90957 27.1878 6.13856 29.6198Z" strokeWidth="1.75217" strokeLinecap="round" fill="url(#paint0_linear_931_2914)" fillOpacity="0.2"/>
                  <path d="M1.65625 33.1353C1.65625 33.1353 3.97237 32.4461 5.28602 31.2932C8.05703 28.8611 7.48771 22.8923 10.3677 20.8546C14.7637 17.7442 16.9321 27.3923 21.62 28.837C25.5248 30.0404 27.9756 26.9426 31.7834 28.837C37.6563 31.7589 37.5243 43.7307 43.3987 46.644C55.8902 52.839 58.6437 5.50368 64.0884 2.43351C69.533 -0.636663 74.2606 25.5227 83.6892 26.3809C88.0197 26.7751 90.4759 25.0747 94.5785 22.6967C101.161 18.8812 102.886 6.19801 109.824 7.09539C117.967 8.14865 116.01 30.1135 123.98 33.1353C130.253 35.514 134.143 31.0438 139.951 26.3809C146.464 21.1522 147.267 7.58607 154.47 7.09539C162.942 6.51826 170.804 31.2932 170.804 31.2932" stroke="#F5C83B" strokeWidth="1.75217" strokeLinecap="round"/>
                  <animate attributeName="stroke-dasharray"
                    // calcMode="spline"
                     from="0" to="1000"
                     begin="0s" dur="5s"
                    //  repeatCount="indefinite"
                     />
                  <defs>
                      <linearGradient id="paint0_linear_931_2914" x1="87.0825" y1="0.509766" x2="87.0825" y2="70.5098" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5C83B"/>
                      <stop offset="1" stopColor="#F5C83B" stopOpacity="0.82"/>
                      </linearGradient>
                  </defs>
              </svg> */}
          </div>
      </>
    )
}
  
Clicks.propTypes = {
    children: PropTypes.node.isRequired,
}
  
  export default Clicks;
