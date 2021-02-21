import React from 'react'
import styles from './HingeDonutChart.module.css';
import { VictoryPie } from 'victory';


class HingeDonutChart extends React.Component {
  render() {
    let hingeData = this.props.data
    function matchPercentage (subsection) {
      let num = subsection/hingeData["Matched"]*100
      return Math.round(num * 10) / 10
    }
    return (
      <div className={styles.DonutContainer}>
        <div className={styles.DonutChart}>
          <VictoryPie
            data={[
              { x: 'They ghosted', y: hingeData["They Ghosted"], fill: "#C4C4C4"}, 
              { x: 'Fizzled out', y: hingeData["Fizzle"], fill: "#E1E4D0"}, 
              { x: 'Phone # given', y: hingeData["Phone Conversation"], fill: "#734492"}, 
              { x: 'Conversation', y: hingeData["Conversation"], fill: "#889244"},
              { x: 'I ghosted', y: hingeData["I Ghosted"], fill: "#e5e5e5" }, 
            ]}
            innerRadius={69}
            labels={({ datum }) => `${datum.x} \n ${datum.y} (${matchPercentage(datum.y)}%)`}
            style={{
              data: {
                fill: ({ datum }) => datum.fill
              },
              labels: {
                fontFamily: "Roboto"
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