import React from "react";
import styles from "./App.module.css";
import "typeface-roboto";

import FileSubmit from "./components/FileSubmit/FileSubmit";
import Description from "./components/Description/Description";
import DateSelect from "./components/DateSelect/DateSelect";
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
      processedHingeData: {
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
      },
      header: null,
      startDate: new Date(2013, 0, 1),
      endDate: Date.now(),
    };
  }

  handleFileChange = (event) => {
    if (event.length > 0) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let obj = JSON.parse(e.target.result);
        this.setState({ rawHingeData: obj }, () => {
          this.setState({
            processedHingeData: processHingeData(
              this.state.rawHingeData,
              this.state.startDate,
              this.state.endDate
            ),
            header: "Your Dating Dashboard",
          });
        });
      };
      reader.readAsText(event[0]);
    }
  };

  handleStartDateChange = (event) => {
    this.setState({ startDate: event }, () => {
      try {
        this.setState({
          processedHingeData: processHingeData(
            this.state.rawHingeData,
            this.state.startDate,
            this.state.endDate
          ),
        });
      } catch {
        console.log("Invalid startDate");
      }
    });
  };

  handleEndDateChange = (event) => {
    this.setState({ endDate: event }, () => {
      try {
        this.setState({
          processedHingeData: processHingeData(
            this.state.rawHingeData,
            this.state.startDate,
            this.state.endDate
          ),
        });
      } catch {
        console.log("Invalid endDate");
      }
    });
  };

  render() {
    return (
      <div className={styles.BodyRow}>
        <div className={styles.InfoColumn}>
          <div className={styles.Logo}>
            <span className={styles.DateLogo}>Date</span>
            <span className={styles.DashLogo}>Dash</span>
          </div>
          <Description />
          <div className={styles.SubmitContainer}>
            <FileSubmit handleFileChange={this.handleFileChange} />
          </div>
          <Contact className={styles.ContactContainer} />
        </div>
        <div className={styles.ChartColumn}>
          <div className={styles.ChartHeader}>
            <span className={styles.ChartHeaderText}>
              {this.state.header || "Example Dashboard"}
            </span>
          </div>
          <DateSelect
            handleStartDateChange={this.handleStartDateChange}
            handleEndDateChange={this.handleEndDateChange}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <HingeDonutChart data={this.state.processedHingeData} />
          <HingeTreeMap data={this.state.processedHingeData} />
        </div>
      </div>
    );
  }
}

export default App;
