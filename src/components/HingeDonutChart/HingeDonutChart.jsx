import React from 'react'
import styles from './HingeDonutChart.module.css';
import { VictoryPie } from 'victory';


class HingeDonutChart extends React.Component {
  render() {
    let hingeData = this.props.data
    console.log(hingeData);
    function matchPercentage (subsection) {
      let num = subsection/hingeData["Matched"]*100
      return Math.round(num * 10) / 10
    }
    return (
      <div className={styles.DonutContainer}>
        <div className={styles.DonutChart}>
          <VictoryPie
            data={[
              { x: 'I ghosted', y: hingeData["I Ghosted"], fill: "#E1E4D0" }, 
              { x: 'They ghosted', y: hingeData["They Ghosted"], fill: "#CBD0AD"}, 
              { x: 'Fizzled out', y: hingeData["Fizzle"], fill: "#BAC193"}, 
              { x: 'Conversation', y: hingeData["Conversation"], fill: "#ADB57F"},
              { x: 'Phone # given', y: hingeData["Phone Conversation"], fill: "#97A05C"}, 
            ]}
            innerRadius={69}
            labels={({ datum }) => `${datum.x} \n ${datum.y} (${matchPercentage(datum.y)}%)`}
            style={{
              data: {
                fill: ({ datum }) => datum.fill,
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