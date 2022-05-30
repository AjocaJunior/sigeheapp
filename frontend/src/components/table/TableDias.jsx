import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import useFetchG from "../../hooks/useFetchG";

const TableDias = () => {

  const [curso,setCurso] = useState(undefined);
  const [semestre,setSemestre]= useState(undefined);
  const { data, loading, error,reFetch } = useFetchG(`/grade?curso=${curso || "Informática de Gestão"}&semestre=${semestre || "1"}`);
  
  const rows = [
    {
      periodo: "07:30 - 08:30",
      segunda: "ASC",
      terca: "Intro a Gestão",
      quarta: "Análise Matemática I",
      quinta: "Economia I",
      sexta: "Programação I",
      sabado: "-",
    },
    {
      periodo: "08:40 - 09:30",
      segunda: "ASC",
      terca: "Intro a Gestão",
      quarta: "Análise Matemática I",
      quinta: "Economia I",
      sexta: "Programação I",
      sabado: "-",
    },
    {
      periodo: "09:50 - 10:40",
      segunda: "ASC",
      terca: "Programação I",
      quarta: "Intro a Gestão",
      quinta: "Economia I",
      sexta: "Análise Matemática I",
      sabado: "-",
    },
    {
      periodo: "10:50 - 11:40",
      segunda: "Inglês I",
      terca: "Programação I",
      quarta: "Intro a Gestão",
      quinta: "ASC",
      sexta: "Análise Matemática I",
      sabado: "-",
    },
    {
      periodo: "11:50 - 12:40",
      segunda: "Inglês I",
      terca: "Programação I",
      quarta: "Intro a Gestão",
      quinta: "ASC",
      sexta: "Análise Matemática I",
      sabado: "-",
    },
  ];
  return (<TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
        <TableCell className="tableCell">Periodo</TableCell>
        <TableCell className="tableCell">Segunda-feira</TableCell>
        <TableCell className="tableCell">Terça-feira</TableCell>
        <TableCell className="tableCell">Quarta-feira</TableCell>
        <TableCell className="tableCell">Quinta-feira</TableCell>
        <TableCell className="tableCell">Sexta-feira</TableCell>
        <TableCell className="tableCell">Sábado</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow
          key={row._id}
        
        >
           <TableCell className="tableCell">{row.periodo}</TableCell>
          <TableCell className="tableCell" >{row.segunda}</TableCell>
          <TableCell className="tableCell">{row.terca}</TableCell>
          <TableCell className="tableCell">{row.quarta}</TableCell>
          <TableCell className="tableCell">{row.quinta}</TableCell>
          <TableCell className="tableCell">{row.sexta}</TableCell>
          <TableCell className="tableCell">{row.sabado}</TableCell>
        </TableRow>
      ))}


    </TableBody>
  </Table>
</TableContainer>

);


};

export default TableDias;
