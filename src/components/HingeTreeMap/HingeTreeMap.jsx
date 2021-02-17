import React from 'react'
import styles from './HingeTreeMap.module.css';


class HingeTreeMap extends React.Component {
  render() {
    let hingeData = this.props.data
    function interactionPercentage (subsection) {
      let num = subsection/hingeData["Total Interactions"]*100
      return Math.round(num * 10) / 10
    }
    return (
    //Yeah this sucks- redo with nested divs. Flexgrow for width with a minimum
    <div className={styles.TreeMap}>
      <span className={styles.TotalInteractionsLabel}>{`Total Interactions ${hingeData["Total Interactions"]}`}</span>
      <div className={styles.Matched}>
        <span className={styles.MatchedLabel}>
          {`Matches ${hingeData["Matched"]} (${interactionPercentage(hingeData["Matched"])}%)`}
        </span>
        <div className={styles.MatchedILike}>
          <span className={styles.MatchedILikeLabel}>
            {`I Liked ${interactionPercentage(hingeData["I Liked Them"])}%`}
          </span>
          <span className={styles.NumLabel}>
          {hingeData["I Liked Them"]}
          </span>
        </div>
        <div className={styles.MatchedTheyLike}>
          <span className={styles.MatchedTheyLikeLabel}>
            {`They Liked ${interactionPercentage(hingeData["They Liked Me"])}%`}
          </span>
          <span className={styles.NumLabel}>
          {hingeData["They Liked Me"]}
          </span>
        </div>
      </div>
      <div className={styles.NoMatched}>
        <span className={styles.NoMatchedLabel}>
        {`Non-Matches ${hingeData["No Match"]} (${interactionPercentage(hingeData["No Match"])}%)`}
        </span>
        <div className={styles.NoMatchedILike}>
          <span className={styles.NoMatchedILikeLabel}>
            {`I Liked ${interactionPercentage(hingeData["Swipe Right"])}%`}
          </span>
          <span className={styles.NumLabel}>
          {hingeData["Swipe Right"]}
          </span>
        </div>
        <div className={styles.NoMatchedTheyLike}>
          <span className={styles.NoMatchedTheyLikeLabel}>
            {`I Passed ${interactionPercentage(hingeData["Swipe Left"])}%`}
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