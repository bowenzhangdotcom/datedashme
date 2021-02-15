import React from 'react'
import { ChartDonut } from '@patternfly/react-charts';
import styles from './HingeDonutChart.module.css';

class HingeChart extends React.Component {
  render() {
    let sankeyData = this.props.data
    return (
      <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
    />
   )
  }
}

export default HingeChart