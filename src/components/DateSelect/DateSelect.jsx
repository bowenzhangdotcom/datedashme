import React from 'react'
import styles from "./DateSelect.module.css";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';

export default function DateSelect(props){ 
    return (
      <div className={styles.DateSelectRow}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Start Date"
              value={props.startDate}
              onChange={props.handleStartDateChange}
              className={styles.StartDatePicker}
            />  
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="End Date"
              value={props.endDate}
              onChange={props.handleEndDateChange}
            />  
          </MuiPickersUtilsProvider>
      </div>
   )
}