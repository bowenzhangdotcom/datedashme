import React from 'react'
import styles from "./Description.module.css";
import Button from '@material-ui/core/Button';

class Description extends React.Component {

  render() {
    return (
        <div className={styles.Description}>
        <p>
          Ever wanted to see the numbers breakdown from your Hinge
          activity? Simply upload the matches.json
          from your Hinge export and let DateDash generate your Dating
          Dashboard!
        </p>
        <Button variant="outlined" style={{color: "#04957D", borderColor: "#04957D"}} target="_blank" href="https://hingeapp.zendesk.com/hc/en-us/articles/360011235813-How-do-I-request-a-copy-of-my-personal-data-">Download your Hinge Data</Button>
        <p>
          Don't worry, none of your hinge data leaves your computer. If you
          don't believe a line of text on a website, feel free to
          disconnect from the internet before clicking that upload button or check out the 
          <span> <a target="_blank" rel="noopener noreferrer" href="https://github.com/bowenzhangdotcom/datedashme">repository</a>.</span>
        </p>
      </div>
   )
  }
}

export default Description