import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";
import Typography from '@material-ui/core/Typography';
import format from "date-fns/format";

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
      return format(date, "d MMM yyyy", { locale: this.locale });
    }
  }
const useStyles = makeStyles((theme) => ({

    root:{
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    datePicker:{
        width:150,
    },
    filterTitle:{
        position: 'relative',
        margin:'0 auto 0 auto',
        width:200,
      }
}));
export default function FilterDate(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const classes = useStyles();
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <div className={classes.root}>
             <Typography  align="center" className={classes.filterTitle}>
              {props.title}
            </Typography>
            <MuiPickersUtilsProvider  utils={LocalizedUtils} locale={esLocale}>
                <DatePicker variant="inline" className={classes.datePicker} value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
        </div>
    )
}
