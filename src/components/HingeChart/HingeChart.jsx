import React from 'react'
import Chart from "react-google-charts";

class HingeChart extends React.Component {
  render() {
    let sankeyData = this.props.data
    return (
        <Chart
        width={600}
        height={"300px"}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={sankeyData}
        />
   )
  }
}

export default HingeChart