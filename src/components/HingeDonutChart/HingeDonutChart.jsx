import React from 'react'
import { ChartDonut } from '@patternfly/react-charts';
import styles from './HingeDonutChart.module.css';

class HingeChart extends React.Component {
  render() {
    let hingeData = this.props.data
    console.log(hingeData);
    return (
      <div className={styles.DonutChart}>
        <ChartDonut
        ariaDesc="Hinge Match Breakdown"
        ariaTitle="Matches"
        constrainToVisibleArea={true}
        data={[
          { x: 'I ghosted', y: hingeData["I Ghosted"], label: "test1" }, 
          { x: 'They ghosted', y: hingeData["They Ghosted"], label: "test1" }, 
          { x: 'Conversation fizzled out', y: hingeData["Fizzle"], label: "test1" }, 
          { x: 'Conversation without a phone number', y: hingeData["Conversation"], label: "test1" },
          { x: 'Conversation with a phone number', y: hingeData["Phone Conversation"], label: "test1" }, 
        ]}
        // legendData={[
        //   { name: `I ghosted ${hingeData["I Ghosted"]}` }, 
        //   { name: `They ghosted ${hingeData["They Ghosted"]}`}, 
        //   { name: `Conversation fizzled out ${hingeData["Fizzle"]}` },
        //   { name: `Conversation without a phone number ${hingeData["Conversation"]}` },
        //   { name: `Conversation with a phone number ${hingeData["Phone Conversation"]}` }
        // ]}
        // legendOrientation="vertical"
        // legendPosition="right"
        // padding={{
        //   bottom: 20,
        //   left: 20,
        //   right: 140,
        //   top: 20
        // }}
        //colorScale={["#E1E4D0", "#CBD0AD", "#BAC193", "#ADB57F", "#97A05C"]}
        innerRadius={69}
        // labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        subTitle="Total Matches"
        title={hingeData["Matched"]}
        />
      </div>
    )
  }
}

export default HingeChart