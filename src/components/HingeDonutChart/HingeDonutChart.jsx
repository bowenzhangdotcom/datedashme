import React from 'react'
import styles from './HingeDonutChart.module.css';
import { VictoryPie } from 'victory';


class HingeDonutChart extends React.Component {
  render() {
    let hingeData = this.props.data
    function matchPercentage (subsection) {
      let num = subsection/hingeData["Matched"]*100
      let result = Math.round(num * 10) / 10
      return isNaN(result) ? 0 : result
    }
    return (
      <div className={styles.DonutContainer}>
        <div className={styles.DonutChart}>
          <VictoryPie
            data={[
              { x: 'They ghosted', y: hingeData["They Ghosted"], fill: "#C0DED9"}, 
              { x: 'Fizzled out', y: hingeData["Fizzle"], fill: "#7BAAA2"}, 
              { x: 'Phone # given', y: hingeData["Phone Conversation"], fill: "#003D33"}, 
              { x: 'Conversation', y: hingeData["Conversation"], fill: "#2E7E71"},
              { x: 'I ghosted', y: hingeData["I Ghosted"], fill: "#E5F4F2" }, 
            ]}
            innerRadius={69}
            labels={({ datum }) => `${datum.x} \n ${datum.y} (${matchPercentage(datum.y)}%)`}
            style={{
              data: {
                fill: ({ datum }) => datum.fill
              },
              labels: {
                fontFamily: "Roboto",
                display: ({datum}) => datum.y > 0 ? "block": "none",
                alignText: "center"
              }
            }}
          />
        </div>
        <div className={styles.DonutLabel}>
          <span className={styles.DonutHole}>{hingeData["Matched"]}</span>
          <span className={styles.DonutHole}>Total Matches</span>
        </div>
      </div>
    )
  }
}

export default HingeDonutChart