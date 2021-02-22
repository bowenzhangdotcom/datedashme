import React from 'react'
import styles from "./Description.module.css";

class Description extends React.Component {

  render() {
    return (
        <div className={styles.Description}>
        <p>
          <span>
            Ever wanted to see the numbers breakdown from your Hinge
            activity? Simply upload the{" "}
          </span>
          <span className={styles.MatchesJSON}>matches.json</span>
          <span>
            {" "}
            from your Hinge export and let DateDash generate your Dating
            Dashboard!
          </span>
        </p>
        <p>
          Download your Hinge data{" "}
          <a
            href="https://hingeapp.zendesk.com/hc/en-us/articles/360011235813-How-do-I-request-a-copy-of-my-personal-data-"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Don't worry, none of your hinge data leaves your computer. If you
          don't believe a line of text on the internet, feel free to
          disconnect from the internet before clicking that upload button.
        </p>
      </div>
   )
  }
}

export default Description