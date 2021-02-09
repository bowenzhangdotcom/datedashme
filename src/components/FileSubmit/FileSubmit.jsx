import React from 'react'

class FileSubmit extends React.Component {
  state = {
    selectedFile: null
  };
  
  render() {
    return (
      <input type="file" onChange={this.props.handleFileChange} />
   )
  }
}

export default FileSubmit