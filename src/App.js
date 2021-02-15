import React from "react";
import styles from "./App.module.css";

import FileSubmit from "./components/FileSubmit/FileSubmit";
import HingeChart from "./components/HingeChart/HingeChart";
import processHingeData from "./api/processHingeData.js";
class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      rawHingeData: null,
      processedHingeData: null,
    };
  }

  //Generate summary stats from rawHingeData
  // How to use renders if data is null
  // Try new dataset once chart renders
  // Add some error bits
  // Update the default data bits to AS?
  //TODO handle file validation, no virus pls
  // footer for my linkedin / personal website

  handleFileChange = (event) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      let obj = JSON.parse(e.target.result);
      this.setState({ rawHingeData: obj }, () => {
        this.setState({
          processedHingeData: processHingeData(this.state.rawHingeData),
        });
      });
    };
    reader.readAsText(event.target.files[0]);
  };

  render() {
    const defaultHingeData = [
      ["From", "To", "Count"],
      ["A", "X", 5],
      ["A", "Y", 7],
      ["A", "Z", 6],
      ["B", "X", 2],
      ["B", "Y", 9],
      ["B", "Z", 4],
    ];
    return (
      <>
        <div className={styles.Row}>
          <div className={styles.InfoColumn}>
            <div className={styles.Logo}>DateDash</div>
            <div className={styles.Description}>
              Brief explanation of what this data is and represents!
            </div>
            <FileSubmit handleFileChange={this.handleFileChange} />
          </div>
          <div className={styles.ChartColumn}>
            <div>Your Dating Dashboard</div>
            <HingeChart
              data={this.state.processedHingeData || defaultHingeData}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
