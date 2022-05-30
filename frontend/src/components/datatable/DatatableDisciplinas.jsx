import React from "react";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { gradeColumns } from "../../datatablesource";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listCursos,
  listCursoDetails
} from "../../actions/cursoblocoanoActions";

import Message from "../../componentes/Message";
import Loader from "../../componentes/Loader";
import { GRADE_CREATE_RESET } from "../../constants/gradeConstants";
const DatatableDisciplinas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const cursoDetail = useSelector((state) => state.cursoDetail);
  const { loading:loadingDetail, error, curso } = cursoDetail;

  const cursoList = useSelector((state) => state.cursoList);
  const { loading, cursos } = cursoList;



  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  useEffect(() => {
    listCursoDetails(params)
    console.log(params)
  }, [dispatch, params]);

  const handleDelete = (id) => {
    if (window.confirm("Tem a certeza que quer apagar?")) {
      //DELETE GRADES
      console.log("APAGADO")
    }
  };

 

  const handleView = (_id) => {};

  const actionColumn = [
    { field: "codigo", headerName: "Codigo", width: 120 },
    { field: "name", headerName: "Disciplina", width: 280 },
 
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <div className="cellAction">
                <Link
                  to={`/disciplinas/${params.row._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    onClick={() => handleView(params.row._id)}
                    className="viewButton"
                  >
                    View
                  </div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row._id)}
                >
                  Delete
                </div>
              </div>
            )}
          </>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      {/* Adicionar Nova Grade
        <Link to="/grades/new" className="link">
          Adicionar
        </Link> */}


      <DataGrid
        className="datagrid"
        rows={cursos}
        animateRows={true}
        columns={gradeColumns.concat(actionColumn)}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DatatableDisciplinas;
