import React from 'react'
import styles from "./FileSubmit.module.css";
import { DropzoneArea } from 'material-ui-dropzone';
import { Publish } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  myDropZone: {
    background: '#e5e5e5',
    borderColor: '#734492',
  },
  myDropZoneText: {
    fontSize: "20px", 
    paddingLeft: "2.5%", 
    paddingRight: "2.5%",
  }
});

export default function FileSubmit(props) {
  const classes = useStyles();
  return (
    <div className={styles.DropzoneAreaContainer}>
      <DropzoneArea
        onChange={props.handleFileChange}
        dropzoneText={"Drag and drop your matches.json here or click"}
        filesLimit={1}
        showPreviewsInDropzone = {true}
        Icon={Publish}
        useChipsForPreview ={true}
        dropzoneClass={classes.myDropZone}
        dropzoneParagraphClass={classes.myDropZoneText}
      />
    </div>
   )
  }