import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Legend,Cell,Tooltip, ResponsiveContainer} from "recharts";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


// ChartJS.register(ArcElement, Tooltip,);


export function Charts() {

 
  
  return (
    <div className="container-fluid">
<div>
      <div>
      <h1 className="h3 mb-2 text-gray-800 dashboard">Charts</h1>
      </div>

      <p className="mb-4 mt-2 ms-2">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the{" "} <span style={{color:'blue'}}>official Chart.js documentation.</span>
        {/* <a target="_blank" href="https://www.chartjs.org/docs/latest/">
          official Chart.js documentation
        </a> */}
        
      </p>
      </div>
    <div className="row">
      {/* <div className="col-lg-6 col-md-6 col-sm-12">
    
      <Piechart/>
      </div>
       <div className="col-lg-6 col-md-6 col-sm-12">
       <AreaChart/>
      </div>  */}

    </div>
      
     

    </div>
  );
}



function Piechart(){

  const data = {
    labels: ['Social','Referral','Direct'],
    datasets: [
      {
        label: '# of Votes',
        data: [15,55,30],
        backgroundColor: [
          '#1cc98a', 
          '#4e73de', 
          '#36b9cd',
        ],
         borderColor: [
         
          '#1cc98a', 
          '#4e73de', 
          '#36b9cd',
        ],
        borderWidth: 1,
        radius : 115,
        outerRadius : 140,
      },
    ],
  };
  
  
  return(
    <div>
    
    <Doughnut data={data} width={300} height={300} />
    </div>
  )
 }

// function Donutchart(){
//   const data = [
//     { name: 'Social', value: 15  },
//     { name: 'Referral', value: 30 },
//     { name: 'Direct', value: 55},
   
//   ];
//   const COLORS = [ '#36b9cd','#1cc98a', '#4e73de',];   

//   // #36b9cd - light green
//   // #1cc98a - green
//   // #4e73de - blue

//   return(
    
//   <PieChart width={600} height={300} >
      
//       <Pie 
//         dataKey="value"
//         data={data}
//         // cx={250}
//         // cy={200}
      
//         innerRadius={115}
//         outerRadius={140}
//         fill="#82ca9d"
//         paddingAngle={1}
//         startAngle={75}

//         endAngle={435}
//  >{data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       ))}
//     </Pie>
// <Tooltip/>
//     </PieChart>
  

  
//   )
//  }


//  export function Areachart(){
  
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Nov'];
//    const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [0,10000,5000,20000,15000,30000,25000,40000,35000,50000,45000,60000],
//     fill: true,
//     borderColor: '#4e73de',
//     backgroundColor: "#f7f8fd",
//      pointBackgroundColor:"#4e73de",
//     tension: 0.3,
    
//   }]
// };

//   return(
//     <div>
//        <Line data={data}/>
//     </div>
//   )
// }






export function Areachart() {
   const options = {
    responsive: true,
    plugins: {
     
    }
  };
  
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov"
  ];
  
   const data = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data: [
          0,
          10000,
          5000,
          20000,
          15000,
          30000,
          25000,
          40000,
          35000,
          50000,
          45000,
          60000
        ],
        borderColor: "#4e73de",
        backgroundColor: "#f7f8fd",
        pointBackgroundColor: "#4e73de",
        tension: 0.3
      }
    ]
  };


  return <Line options={options} data={data} />;
}










