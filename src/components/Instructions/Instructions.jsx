import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styles from "./Instructions.module.css";


const materialStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(materialStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Instructions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className = {styles.InstructionsContainer}>
      <Button variant="outlined" style={{color: "#734492", borderColor: "#734492"}} onClick={handleClickOpen}>
        What do the labels mean?
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          What do the labels mean?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              I ghosted: I did not send a message after a match
          </Typography>
          <Typography gutterBottom>
            They ghosted: They did not send a message after the match
          </Typography>
          <Typography gutterBottom>
            Fizzled out: I sent less than five messages
          </Typography>
          <Typography gutterBottom>
            Conversation: I sent five or more messages
          </Typography>
          <Typography gutterBottom>
            Phone # given: DateDash detected a phone number in your message
          </Typography>
          <Typography gutterBottom>
            They Liked: They liked you first
          </Typography>
          <Typography gutterBottom>
            I Liked: You liked them first
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}