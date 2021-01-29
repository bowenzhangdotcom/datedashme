import React from "react";
import styles from "./App.module.css";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      hingeData: "",
    };
  }

  //   handleHingeDataSubmission(event) {
  //     this.setState({
  //       hingeData: event.target.data,
  //     });
  //     console.log(this.state);
  //   }

  render() {
    return (
      <>
        <div className={styles.Logo}>DateDash.Me</div>
        <div className={styles.HowToUse}>
          Some filler text on how to use this!
        </div>
      </>
    );
  }
}

export default App;
