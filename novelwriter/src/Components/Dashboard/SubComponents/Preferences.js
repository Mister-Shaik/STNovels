import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:"column"
      },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    },
    dense: {
    marginTop: theme.spacing(2),
    },
    menu: {
    width: 200,
    },
}));

  export default function Preferences() {

    const classes = useStyles();
        const [values, setValues] = React.useState({
            mode:"day",
            fontSize:18,
            chapNums:false,
            indent:false,
            cursewords: false,
            autofill: true,
            name:"Shaik sha",
            email:"mr.shaiksha@gmail.com"
          });

        function handleChange(event) {
            setValues(oldValues => ({
                ...oldValues,
                [event.target.name]: event.target.value,
            }));
        }
        
        const handlecheck = name => event => {
            setValues({ ...values, [name]: event.target.checked });
          };

        return (
            <div className="flex justify-around pa3">
                <div className="w-50 mh2 pv4 ph3 card h-100">
                    <h4>Editor Settings</h4>
                    <div className="border mv2 w-100" />
                    <form className="pa3 flex flex-column flex-wrap mw9">
                        <FormControl className="pv4">
                            <InputLabel htmlFor="mode">Writing Mode</InputLabel>
                            <Select
                            value={values.mode}
                            onChange={handleChange}
                            displayEmpty
                            name="mode"
                            className="pl3"
                            >
                            <MenuItem value="day">Day</MenuItem>
                            <MenuItem value="evening">Evening</MenuItem>
                            <MenuItem value="night">Night</MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{minHeight:"25px"}} />
                        <FormControl>
                            <InputLabel htmlFor="fontSize">Font Size</InputLabel>
                            <Select
                            value={values.fontSize}
                            onChange={handleChange}
                            displayEmpty
                            name="fontSize"
                            className="pl3"
                            >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            </Select>
                        </FormControl>  
                        <div style={{minHeight:"45px"}} />   
                        <FormControlLabel
                            control={
                            <Switch
                                checked={values.plotToolbar}
                                value={values.plotToolbar}
                                onChange={handlecheck('cursewords')}
                                name="cursewords"
                                color="primary"
                            />
                            }
                            label="Filter Curse/Bad words"
                        /> 
                        <FormControlLabel
                            control={
                            <Switch
                                checked={values.plotToolbar}
                                value={values.plotToolbar}
                                onChange={handlecheck('autofill')}
                                name="autofill"
                                color="primary"
                            />
                            }
                            label="Auto Fill tracker content into chapters using @TrackerName%"
                        /> 
                        <FormControlLabel
                            control={
                            <Switch
                                checked={values.chapNums}
                                value={values.chapNums}
                                onChange={handlecheck('chapNums')}
                                name="chapNums"
                                color="primary"
                            />
                            }
                            label="Display Chapter Numbers for Chapter Titles"
                        />   
                        <FormControlLabel
                            control={
                            <Switch
                                checked={values.indent}
                                value={values.indent}
                                onChange={handlecheck('indent')}
                                name="indent"
                                color="primary"
                            />
                            }
                            label="Create Indents automatically for new paragraphs"
                        />
                    </form>
                </div>
                <div className="w-50 mh2 pv4 ph3 card h-100">
                    <h4>Profile Settings</h4>
                    <div className="border mv2 w-100" />
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                        value={values.name}
                        className={classes.textField}
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        disabled
                        />
                        <TextField
                        value={values.email}
                        className={classes.textField}
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        disabled
                        />
                        <a className="ml2 mv2 btn btn-primary w-40" href="/">Change Password</a>
                    </form>
                </div>
            </div>
        );
}