import Chart from 'chart.js/auto'
import { useContext } from 'react'
import { Bar } from 'react-chartjs-2'
import { GlobalContext } from './contexts/GlobalContext'

const BarChart = () => {
  const [state] = useContext(GlobalContext)
  const tradingCode = state.trading.map(item => item.code)
  const tradingLtp = state.trading.map(item => item.ltp)

  const data = {
    labels: tradingCode,
    datasets: [
      {
        label: 'Last Traded Price',
        data: tradingLtp,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <Bar
      data={ data }
      width={ 100 }
      height={ 50 }
      options={ { maintainAspectRatio: false } }
    />
  )
}


export default BarChart
