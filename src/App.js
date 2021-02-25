import React from "react";
import styles from "./App.module.css";
import "typeface-roboto";

import FileSubmit from "./components/FileSubmit/FileSubmit";
import Description from "./components/Description/Description";
import DateSelect from "./components/DateSelect/DateSelect";
import HingeDonutChart from "./components/HingeDonutChart/HingeDonutChart";
import HingeTreeMap from "./components/HingeTreeMap/HingeTreeMap";
import Contact from "./components/Contact/Contact";
import Instructions from "./components/Instructions/Instructions";
import { processHingeData, getStartEndDate } from "./api/processHingeData.js";
import generic_matches from "./api/generic_matches.js";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      rawHingeData: generic_matches,
      processedHingeData: {
        Conversation: 0,
        Fizzle: 0,
        "I Ghosted": 0,
        "I Liked Them": 0,
        Matched: 0,
        "No Match": 0,
        "Phone Conversation": 0,
        "Swipe Left": 0,
        "Swipe Right": 0,
        "They Ghosted": 0,
        "They Liked Me": 0,
        "Total Interactions": 0,
      },
      header: "Example Dashboard",
      startDate: new Date(2013, 0, 1),
      endDate: Date.now(),
    };
  }

  componentDidMount() {
    let dates = getStartEndDate(this.state.rawHingeData);
    let pHingeData = processHingeData(
      this.state.rawHingeData,
      dates["startDate"],
      dates["endDate"]
    );
    this.setState({
      processedHingeData: pHingeData,
      startDate: dates["startDate"],
      endDate: dates["endDate"],
    });
  }

  handleFileChange = (event) => {
    if (event.length > 0) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let obj = JSON.parse(e.target.result);
        this.setState({ rawHingeData: obj }, () => {
          let dates = getStartEndDate(this.state.rawHingeData);
          let pHingeData = processHingeData(
            this.state.rawHingeData,
            dates["startDate"],
            dates["endDate"]
          );
          this.setState({
            processedHingeData: pHingeData,
            startDate: dates["startDate"],
            endDate: dates["endDate"],
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
          <Instructions />
          <Contact className={styles.ContactContainer} />
        </div>
        <div className={styles.ChartColumn}>
          <div className={styles.ChartHeader}>
            <span className={styles.ChartHeaderText}>{this.state.header}</span>
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
