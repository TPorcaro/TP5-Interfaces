import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export default function FilterElement(props) {
    return (
        <div>
            <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                color="primary"
                inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
            <label for={props.title}> {props.title}</label>
        </div>
    )
}
