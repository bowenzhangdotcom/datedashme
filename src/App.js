import React from "react";
import styles from "./App.module.css";

import FileSubmit from "./components/FileSubmit/FileSubmit";
import HingeDonutChart from "./components/HingeDonutChart/HingeDonutChart";
import HingeTreeMap from "./components/HingeTreeMap/HingeTreeMap";
import Contact from "./components/Contact/Contact";
import processHingeData from "./api/processHingeData.js";
class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      rawHingeData: null,
      processedHingeData: null,
      header: null,
    };
  }

  // Add error handling to matches.json upload
  // Gap from the bottom on charts
  // update the header for the charts to suck less
  // Update description with more details
  // flex contact to the bottom of the page always
  //Add some summary stats from rawHingeData under description

  handleFileChange = (event) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      let obj = JSON.parse(e.target.result);
      this.setState({ rawHingeData: obj }, () => {
        this.setState({
          processedHingeData: processHingeData(this.state.rawHingeData),
          header: "Your Dating Dashboard",
        });
      });
    };
    reader.readAsText(event.target.files[0]);
  };

  render() {
    const defaultHingeData = {
      Conversation: 34,
      Fizzle: 48,
      "I Ghosted": 22,
      "I Liked Them": 85,
      Matched: 149,
      "No Match": 1082,
      "Phone Conversation": 24,
      "Swipe Left": 859,
      "Swipe Right": 223,
      "They Ghosted": 21,
      "They Liked Me": 64,
      "Total Interactions": 1231,
    };
    return (
      <div className={styles.BodyRow}>
        <div className={styles.InfoColumn}>
          <div className={styles.Logo}>DateDash</div>
          <div className={styles.Description}>
            Ever wanted to see the data of things were going with your latest
            Hinge spree? DateDash is here with the dashboard for your dating
            analytics. Nothing is uploaded so you have data privacy on the local
            side. Instructions on how to download your Hinge data{" "}
            <a
              href="https://hingeapp.zendesk.com/hc/en-us/articles/360011235813-How-do-I-request-a-copy-of-my-personal-data-"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </div>
          <div className={styles.SubmitContainer}>
            <FileSubmit handleFileChange={this.handleFileChange} />
          </div>
          <Contact />
        </div>
        <div className={styles.ChartColumn}>
          <div className={styles.ChartHeader}>
            {this.state.header || "Example Dashboard"}
          </div>
          <HingeDonutChart
            data={this.state.processedHingeData || defaultHingeData}
          />
          <HingeTreeMap
            data={this.state.processedHingeData || defaultHingeData}
          />
        </div>
      </div>
    );
  }
}

export default App;
