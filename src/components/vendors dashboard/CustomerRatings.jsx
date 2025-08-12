import { AreaChart, Area, Tooltip } from "recharts";

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

function CustomerRatings() {
    return (
    <>
        <div id='customerRatingsContainer'>
            <div className='customerRatingsTitle'>
                <span>No of Customers Ratings</span>
                <h6>350</h6>
                <p>vs lasts month</p>
            </div>
            <AreaChart
                style={{height: '100px', top: -20, left: 20, right: 12, bottom: 0, fontSize: 12}}
                width={244}
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
                <Area type="monotone" dataKey="pv" stroke="#FF7622" fill="#FF7622" fillOpacity={0.2} />
            </AreaChart>
        </div>
    </>
    )
  }
  
  export default CustomerRatings