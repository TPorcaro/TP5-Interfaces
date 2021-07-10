import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {KeyboardDatePicker} from '@material-ui/pickers';
const useStyles = makeStyles((theme) => ({

}));
export default function FilterDate(props) {
    return (
        <div>
            <label for={props.title}> {props.title}</label>
        </div>
    )
}
