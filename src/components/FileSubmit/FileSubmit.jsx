import React from 'react'
import styles from "./FileSubmit.module.css";

class FileSubmit extends React.Component {

  render() {
    return (
      <div className={styles.FileSubmitRow}>
      <span className={styles.ButtonLabel}>Add Your Own Data</span>
      <div className={styles.FileSubmit}>
        <label className={styles.CustomFileUpload}>
          <input className={styles.Input} type="file" onChange={this.props.handleFileChange} />        
          Upload
        </label>
      </div>
      </div>
   )
  }
}

export default FileSubmit