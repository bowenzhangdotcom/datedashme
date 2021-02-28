import React from 'react'
import styles from "./FileSubmit.module.css";
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  myDropZone: {
    background: '#f1f1f1',
    borderColor: '#04957D',
    minHeight: '200px',
    borderWidth: "1px",
    borderStyle: "dashed"
  },
  myDropZoneText: {
    fontSize: "20px",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    marginTop: "10%",
  }
});

export default function FileSubmit(props) {
  const classes = useStyles();
  return (
    <div className={styles.DropzoneAreaContainer}>
      <DropzoneArea
        onChange={props.handleFileChange}
        dropzoneText={"Select your matches.json or drag here"}
        filesLimit={1}
        showPreviewsInDropzone = {true}
        useChipsForPreview ={true}
        dropzoneClass={classes.myDropZone}
        dropzoneParagraphClass={classes.myDropZoneText}
      />
    </div>
   )
  }