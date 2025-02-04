import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";


const Charts = ({datos}) => {
  return (
    <Bar  data={datos} className='my-10'/>
  )
}

export default Charts