import React from "react";
import styles from "./App.module.css";

import FileSubmit from "./components/FileSubmit/FileSubmit";
import HingeDonutChart from "./components/HingeDonutChart/HingeDonutChart";
import HingeTreeMap from "./components/HingeTreeMap/HingeTreeMap";
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

  //Generate summary stats from rawHingeData
  // JY figure out label crowding?
  // Add some error bits
  //TODO handle file validation, no virus pls
  // footer for my linkedin / personal website

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
            Brief explanation of what this data is and represents!
          </div>
          <FileSubmit handleFileChange={this.handleFileChange} />
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
