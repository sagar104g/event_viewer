import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {selectTab} from '../actions/tabSelection.js';
import EventList from '../components/eventList';

const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
var campaignView = (props) => {
    const classes = styles();
    return (
        <React.Fragment>
            <h1>Manage Campaign</h1>
            <div className={classes.root}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => props.tabSelection(0)}>Upcomming Campaign</Button>
                    <Button onClick={() => props.tabSelection(1)}>Live Campaign</Button>
                    <Button onClick={() => props.tabSelection(2)}>Past Campaign</Button>
                </ButtonGroup>
            </div>
            <EventList tab={props.selectedTab}/>
        </React.Fragment>
  );
}

const mapStateToProps = state => ({
    selectedTab: state.tabSelection.selectedTab
})

const mapDispatchToProps = dispatch => ({
    tabSelection: id => dispatch(selectTab(id))
})
  

export default  connect(mapStateToProps, mapDispatchToProps)(campaignView);
