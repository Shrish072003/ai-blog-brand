import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  

function LineChart(props) {

    const options = {
      maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
      // 
      const labels = ['June 2022', 'July 2022', 'August 2022', 'September 2022', 'October 2022', 'November 2022', 'December 2022', 'January 2023', 'February 2023', "March 2023", 'April 2023', 'May 2023'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Search Volume',
            data: props.data,
            fill: true,
            borderColor: '#FF8480',
            borderWidth: 1,
            backgroundColor: '#FFCDCC',
          }],
      };
      
  return <Line options={options} data={data}  />;
}

export default LineChart;
