import React from 'react'
import styles from "./DateSelect.module.css";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';

class DateSelect extends React.Component {
  render() {
    return (
      <div className={styles.DateSelectRow}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-start"
                label="Start Date"
                value={this.props.startDate}
                onChange={this.props.handleStartDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />  
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-end"
                label="End Date"
                value={this.props.endDate}
                onChange={this.props.handleEndDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />  
          </MuiPickersUtilsProvider>
      </div>
   )
  }
}

export default DateSelect