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
        <Button variant="outlined" style={{color: "#734492", borderColor: "#734492"}} target="_blank" href="https://hingeapp.zendesk.com/hc/en-us/articles/360011235813-How-do-I-request-a-copy-of-my-personal-data-">Download your Hinge Data</Button>
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