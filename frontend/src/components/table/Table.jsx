import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGradeDetails, createGradeDia } from "../../actions/gradeActions";
import Loader from "./../../componentes/Loader";
import Message from "./../../componentes/Message";
import {
  GRADE_UPDATE_RESET,
  GRADE_CREATE_DIAS_RESET,
} from "./../../constants/gradeConstants";

const List = () => {
  const id = localStorage.getItem("idGrade");

  const dispatch = useDispatch();

  const DefaultId = "628563a24d85a054d0a870a5";
  const gradeDetails = useSelector((state) => state.gradeDetails);
  const { loading, error, grade } = gradeDetails;
  const gradeDiaCreate = useSelector((state) => state.gradeDiaCreate);
  const { success: successDia, error: errorDia } = gradeDiaCreate;
  useEffect(() => {
    if (id) {
      dispatch(listGradeDetails(id));
    } else {
      dispatch(listGradeDetails(DefaultId));
    }
  }, [dispatch]);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Periodo</TableCell>
            <TableCell className="tableCell">Segunda-feira</TableCell>
            <TableCell className="tableCell">Terça-feira</TableCell>
            <TableCell className="tableCell">Quarta-feira</TableCell>
            <TableCell className="tableCell">Quinta-feira</TableCell>
            <TableCell className="tableCell">Sexta-feira</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {grade.dias.map((dia) => (
              <TableRow key={dia._id}>
                <TableCell className="tableCell">{dia.periodo}</TableCell>
                <TableCell className="tableCell">{dia.segunda}</TableCell>
                <TableCell className="tableCell">{dia.terca}</TableCell>
                <TableCell className="tableCell">{dia.quarta}</TableCell>
                <TableCell className="tableCell">{dia.quinta}</TableCell>
                <TableCell className="tableCell">{dia.sexta}</TableCell>
              </TableRow>
            ))}
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
