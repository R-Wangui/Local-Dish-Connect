import React from 'react'
import { AreaChart, Area, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
function Income() {
  return (
    <>
        <div id='incomeContainer'>
            <div className='incomeTitle'>
                <span>Income</span>
                <h6>$500,000</h6>
                <p>vs lasts month</p>
            </div>
            <AreaChart
                style={{height: '100px', top: -20, left: 20, right: 12, bottom: 0, fontSize: 12}}
                width={280}
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
                <Area type="monotone" dataKey="pv" stroke="#006B61" fill="#006B61" fillOpacity={0.2} />
            </AreaChart>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="172" height="79" viewBox="0 0 172 79" fill="none">
                <path d="M6.13856 32.9444C4.82491 34.2372 2.50879 35.0099 2.50879 35.0099L2.50879 78.7937L171.656 78.7937V32.9444C171.656 32.9444 163.794 5.16466 155.322 5.81178C148.119 6.36198 147.316 21.5735 140.803 27.4363C134.995 32.6648 131.106 37.6772 124.832 35.0099C116.863 31.6217 118.819 6.99279 110.676 5.81178C103.738 4.80556 102.014 19.027 95.431 23.3053C91.3284 25.9718 88.8722 27.8783 84.5417 27.4363C75.1132 26.474 70.3856 -2.85806 64.9409 0.584486C59.4962 4.02703 56.7427 57.1035 44.2512 50.1571C38.3768 46.8905 38.5088 33.4666 32.6359 30.1904C28.8281 28.0662 26.3773 31.5397 22.4725 30.1904C17.7847 28.5704 15.6163 17.7522 11.2202 21.2397C8.34025 23.5246 8.90957 30.2174 6.13856 32.9444Z" fill="url(#paint0_linear_931_2902)" fill-opacity="0.2"/>
                <path d="M1.65625 36.8864C1.65625 36.8864 3.97237 36.1137 5.28602 34.8209C8.05703 32.0939 7.48771 25.4011 10.3677 23.1162C14.7637 19.6286 16.9321 30.4468 21.62 32.0668C25.5248 33.4162 27.9756 29.9426 31.7834 32.0668C37.6563 35.343 37.5243 48.7669 43.3987 52.0336C55.8902 58.9799 58.6437 5.90349 64.0884 2.46095C69.533 -0.981591 74.2606 28.3505 83.6892 29.3128C88.0197 29.7548 90.4759 27.8482 94.5785 25.1817C101.161 20.9035 102.886 6.68203 109.824 7.68825C117.967 8.86926 116.01 33.4981 123.98 36.8864C130.253 39.5536 134.143 34.5413 139.951 29.3128C146.464 23.45 147.267 8.23845 154.47 7.68825C162.942 7.04112 170.804 34.8209 170.804 34.8209" stroke="#006B61" stroke-width="1.75217" stroke-linecap="round"/>
                <animate attributeName="stroke-dasharray"
                    // calcMode="spline"
                     from="0" to="1000"
                     begin="0s" dur="5s"
                    //  repeatCount="indefinite"
                     />
                <defs>
                    <linearGradient id="paint0_linear_931_2902" x1="87.0825" y1="0.303711" x2="87.0825" y2="78.7937" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#006B61"/>
                    <stop offset="1" stop-color="#006B61" stop-opacity="0.05"/>
                    </linearGradient>
                </defs>
            </svg> */}
        </div>
    </>
  )
}

export default Income