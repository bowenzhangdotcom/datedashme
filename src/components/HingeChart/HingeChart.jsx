import React from 'react'
import Chart from "react-google-charts";
import styles from './HingeChart.module.css';

class HingeChart extends React.Component {
  render() {
    let sankeyData = this.props.data
    return (
        <Chart
        width={969}
        height={969}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={sankeyData}
        options={{
            sankey: {
                node: {
                  label: {
                    fontSize: 16,
                    color: '#000',
                    },
                  interactivity: true, // Allows you to select nodes.
                  labelPadding: 6,     // Horizontal distance between the label and the node.
                  nodePadding: 10,     // Vertical distance between nodes.
                  width: 12,            // Thickness of the node.
                  colors: [
                    '#a6cee3',         // Custom color palette for sankey nodes.
                    '#1f78b4',         // Nodes will cycle through this palette
                    '#b2df8a',         // giving each node its own color.
                    '#33a02c'
                  ]
                }
              }
        }}
        className={styles.HingeChart}
        />
   )
  }
}

export default HingeChart