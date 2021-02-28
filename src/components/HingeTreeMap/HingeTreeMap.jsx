import React from 'react'
import styles from './HingeTreeMap.module.css';


class HingeTreeMap extends React.Component {
  render() {
    let hingeData = this.props.data
    function interactionPercentage (subsection) {
      let num = subsection/hingeData["Total Interactions"]*100
      let result = Math.round(num * 10) / 10
      return isNaN(result) ? 0 : result
    }
    return (
      <div className={styles.TreeMapContainer}>
        <div className={styles.TreeMap}>
          <span className={styles.TotalInteractionsLabel}>{`Total Interactions ${hingeData["Total Interactions"]}`}</span>
        </div>
        <div className={styles.MatchNoMatch}>
          <div className={styles.Matched} style={{flexGrow: `${hingeData["Matched"]}`}}>
            <span className={styles.MatchedLabel}>
              {`Matches ${hingeData["Matched"]} (${interactionPercentage(hingeData["Matched"])}%)`}
            </span>
          </div>
          <div className={styles.NoMatched} style={{flexGrow: `${hingeData["No Match"]}`}}>
            <span className={styles.NoMatchedLabel}>
            {`Non-Matches ${hingeData["No Match"]} (${interactionPercentage(hingeData["No Match"])}%)`}
            </span>
          </div>
        </div>
        <div className={styles.IndividualBoxes}>
          <div className={styles.MatchedILike} style={{flexGrow: `${hingeData["I Liked Them"]}`}}>
            <span className={styles.MatchedILikeLabel}>
              {`I Liked (${interactionPercentage(hingeData["I Liked Them"])})%`}
            </span>
            <span className={styles.NumLabel}>
            {hingeData["I Liked Them"]}
            </span>
          </div>
          <div className={styles.MatchedTheyLike} style={{flexGrow: `${hingeData["They Liked Me"]}`}}>
            <span className={styles.MatchedTheyLikeLabel}>
              {`They Liked (${interactionPercentage(hingeData["They Liked Me"])})%`}
            </span>
            <span className={styles.NumLabel}>
            {hingeData["They Liked Me"]}
            </span>
          </div>
          <div className={styles.NoMatchedILike} style={{flexGrow: `${hingeData["Swipe Right"]}`}}>
            <span className={styles.NoMatchedILikeLabel}>
              {`I Liked (${interactionPercentage(hingeData["Swipe Right"])})%`}
            </span>
            <span className={styles.NumLabel}>
            {hingeData["Swipe Right"]}
            </span>
          </div>
          <div className={styles.NoMatchedTheyLike} style={{flexGrow: `${hingeData["Swipe Left"]}`}}>
            <span className={styles.NoMatchedTheyLikeLabel}>
              {`I Passed (${interactionPercentage(hingeData["Swipe Left"])})%`}
            </span>
            <span className={styles.NumLabel}>
            {hingeData["Swipe Left"]}
            </span>
        </div>
      </div>
    </div>
    )
  }
}

export default HingeTreeMap