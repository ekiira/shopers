import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import './Tab.css'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

});

const MainTab = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
          <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        	<Tab label="All" />
          <Tab label="Men" />
          <Tab label="Women" />
          <Tab label="Kids" />
        </Tabs>
      </Paper>
       
        </div>
    )
}

export default MainTab;

{/* <Paper className={classes.root}>
<Tabs
  value={value}
  onChange={handleChange}
  indicatorColor="primary"
  textColor="primary"
  centered
>
  <Tab label="All" />
  <Tab label="Men" />
  <Tab label="Women" />
  <Tab label="Kids" />
</Tabs>
</Paper> */}