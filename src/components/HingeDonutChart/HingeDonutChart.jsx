import React from 'react'
import { ChartDonut } from '@patternfly/react-charts';
import styles from './HingeDonutChart.module.css';

class HingeChart extends React.Component {
  render() {
    let hingeData = this.props.data
    console.log(hingeData);
    return (
      <ChartDonut
      ariaDesc="Hinge Match Breakdown"
      ariaTitle="Matches"
      constrainToVisibleArea={true}
      data={[
        { x: 'I ghosted', y: hingeData["I Ghosted"] }, 
        { x: 'They ghosted', y: hingeData["They Ghosted"] }, 
        { x: 'Conversation with a phone number', y: hingeData["Phone Conversation"] }, 
        { x: 'Conversation fizzled out', y: hingeData["Fizzle"] }, 
        { x: 'Conversation without a phone number', y: hingeData["Conversation"] }
      ]}
      legendData={[
        { name: 'Cats: 35' }, 
        { name: 'Dogs: 55' }, 
        { name: 'Birds: 10' }
      ]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140,
        top: 20
      }}
      // colorScale={["#D6E865"]}
      innerRadius={69}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Total Matches"
      title={hingeData["Matched"]}
      className={styles.DonutChart}
    />
   )
  }
}

export default HingeChart