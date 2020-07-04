import React from 'react';
import { connect } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withAlert } from 'react-alert'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const styles = makeStyles({
  table: {
    minWidth: 700,
  },
});

var EventList = (props) => {

  const classes = styles();
  var events = [];
 
    events = props.list.filter(row => {
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0)
        let rowTime = new Date(row.createdOn);
        rowTime.setHours(0, 0, 0, 0) 
        if(props.tab===0){
          return currentDate < rowTime;
        }else{
          if(props.tab===1){
            console.log(currentDate);
            console.log(rowTime);
            console.log(currentDate === rowTime);
            console.log("=====================");
            return currentDate.getTime() === rowTime.getTime();
          }else{
            return currentDate > rowTime;
          }
        }
    });
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="left">Campaign</StyledTableCell>
              <StyledTableCell align="left">View</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { events && events.length ? events.map((row) => (
              <StyledTableRow key={row.name}>
                <React.Fragment>  
                  <StyledTableCell align="left">
                  <p>{new Date(row.createdOn).toDateString()}</p>
                  {(new Date().setHours(0,0,0,0) - new Date(row.createdOn)) > 0 ?
                    <p align="left">{Math.ceil((new Date().setHours(0,0,0,0) - new Date(row.createdOn))/(1000 * 60 * 60 * 24))+" DAYS AGO"}</p>
                    :
                    <p align="left">{Math.abs(Math.ceil((new Date().setHours(0,0,0,0) - new Date(row.createdOn))/(1000 * 60 * 60 * 24)))+" DAYS LEFT"}</p>
                  }
                  </StyledTableCell>
                </React.Fragment>  
                <StyledTableCell align="left">
                  <React.Fragment>
                    <img alt="stats"style={{float: "left",  "marginRight": "30px"}} width="50" height="50" src={require('../images/'+row.image_url)}/>
                    <p>{row.region}</p>
                    <p>{row.name}</p>
                  </React.Fragment>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div style={{float: "left",  "marginRight": "30px"}}>
                  <img alt="price" src={require('../images/Price.png')}  width="30" height="30" style={{float: "left",  "marginRight": "5px"}} onClick={() => {props.alert.show('Price Result For '+row.name)}}/>
                  <p style={{float: "left",  "marginRight": "5px"}}>Price</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">
                <React.Fragment>
                  <div style={{float: "left",  "marginRight": "30px"}}>
                    <img alt="stats" src={require('../images/statistics-report.png')} width="30" height="30" style={{float: "left",  "marginRight": "5px"}} onClick={() => {props.alert.show('stats Result For '+row.name)}}/>
                    <p style={{float: "left",  "marginRight": "5px"}}>Report</p>
                  </div>
                  <div style={{float: "left",  "marginRight": "30px"}}>
                    <img alt="file" src={require('../images/file.png')} width="30" height="30" style={{float: "left",  "marginRight": "5px"}} onClick={() => {props.alert.show('csv Result For '+row.name)}}/>
                    <p style={{float: "left",  "marginRight": "5px"}}>CSV</p>
                  </div>
                  <div style={{float: "left",  "marginRight": "30px"}}>
                    <img alt="schedule" src={require('../images/calendar.png')} width="30" height="30" style={{float: "left",  "marginRight": "5px"}} onClick={() => {props.alert.show('schedule Result For '+row.name)}}/>
                    <p style={{float: "left",  "marginRight": "5px"}}>Schedule Again</p>
                  </div>
                </React.Fragment>
                </StyledTableCell>
              </StyledTableRow>
            )): <p>no Event present</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
    list: state.events.data
});

export default connect(mapStateToProps)(withAlert()(EventList));
