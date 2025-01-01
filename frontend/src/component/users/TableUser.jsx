import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from "prop-types";
// import ActionUpdateUser from './ActionUpdateUser';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import ActionUpdateUser from './ActionUpdateUser';  
import DialogDelete from './DialogDelete';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableUser({userData}) {
  const [actionUpdate, setActionUpdate] = useState(false);
  const [actionDelete, setActionDelete] = useState(false);
  const [userUpdate, setUserUpdate] = useState(null);

  const handleUpdateUser = (data) => {
    setUserUpdate(data);
    setActionUpdate(true);
  };

  const handleClose = () => {
    setActionUpdate(false);
    setUserUpdate(null);
  }

  const handleDeleteUser = (data) => {
    setActionDelete(true);
    setUserUpdate(data);
  }
  const handleDeleteClose = () => {
    setActionDelete(false);
    setUserUpdate(null);
  }

  
  // const [clickUpdate, setClickUpdate] = useState();

  return (
    <>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell align="right">USER ID</StyledTableCell>
            <StyledTableCell align="right">Nama</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"> {index + 1} </StyledTableCell>
              <StyledTableCell align="right">{item.userid}</StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">{item.email}</StyledTableCell>
              <StyledTableCell align="right"> {<CreateIcon onClick={() => handleUpdateUser(item)}/>} {<DeleteIcon onClick={() => handleDeleteUser(item)}/>}  </StyledTableCell>  
             
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {actionUpdate && (<ActionUpdateUser 
      openDialog = {actionUpdate}
      onClose = {handleClose}
      userData = {userUpdate}
    />)}

    {actionDelete && (
      <DialogDelete
      openDialog={actionDelete}
      userData = {userUpdate}
      onClose={handleDeleteClose}
    />)}

    
  
    <button style={{marginTop :"10px", float:"right"}}><Link to="/">Back</Link></button>
    </>
  );
}
 TableUser.propTypes = {
    userData : PropTypes.arrayOf (
        PropTypes.shape ( {
            name : PropTypes.string.isRequired,
            email : PropTypes.string.isRequired
        })
    )
 }