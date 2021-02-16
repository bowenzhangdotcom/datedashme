import React from 'react'
import styles from './HingeTreeMap.module.css';


class HingeTreeMap extends React.Component {
  render() {
    let hingeData = this.props.data
    console.log(hingeData);
    return (
    <div className={styles.v4_61}>
        <div className={styles.v3_0}></div>
        <div className={styles.v4_0}></div>
        <div className={styles.v4_4}></div>
        <div className={styles.v4_5}></div>
        <div className={styles.v4_2}></div>
        <div className={styles.v4_41}></div>
        <div className={styles.v4_42}></div>
        <span className={styles.v3_1}>total interactions (3,580)</span>
        <span className={styles.v4_1}>matched (33.6%, 1,203)</span>
        <span className={styles.v4_3}>no match (66.4%, 2,377)</span>
        <div className={styles.v27_11}>
          <span className={styles.v27_2}>523</span>
          <span className={styles.v4_6}>I liked (43.5%)</span>
          <span className={styles.v27_4}>people</span>
        </div>
        <div className={styles.v27_12}>
          <span className={styles.v4_7}>They liked (56.5%)</span>
          <span className={styles.v27_5}>people</span>
          <span className={styles.v27_8}>680</span>
        </div>
        <div className={styles.v27_13}>
          <span className={styles.v4_43}>I liked (47.2%)</span>
          <span className={styles.v27_6}>people</span>
          <span className={styles.v27_9}>1,121</span>
        </div>
        <div className={styles.v27_14}>
          <span className={styles.v4_44}>I passed on (52.8%)</span>
          <span className={styles.v27_7}>people</span>
          <span className={styles.v27_10}>1,256</span>
        </div>
      </div>
    )
  }
}

export default HingeTreeMap