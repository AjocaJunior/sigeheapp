import React from "react";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { gradeColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listGrades,
  deleteGrade,
  createGrade,
} from "../../actions/gradeActions";

import Message from "../../componentes/Message";
import Loader from "../../componentes/Loader";
import { GRADE_CREATE_RESET } from "../../constants/gradeConstants";
const DatatableSalas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gradeList = useSelector((state) => state.gradeList);
  const { loading, error, grades } = gradeList;

  const gradeDelete = useSelector((state) => state.gradeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = gradeDelete;

  const gradeCreate = useSelector((state) => state.gradeCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    grade: createdGrade,
  } = gradeCreate;

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  useEffect(() => {
    dispatch({ type: GRADE_CREATE_RESET });
    if (docenteInfo && docenteInfo.isAdmin) {
      dispatch(listGrades());
    } else {
      navigate("/");
    }
    if (successCreate) {
      navigate(`/grades/${createdGrade._id}`);
    } else {
      dispatch(listGrades());
    }
  }, [dispatch, docenteInfo, successDelete, successCreate, createdGrade]);

  const handleDelete = (id) => {
    if (window.confirm("Tem a certeza que quer apagar?")) {
      //DELETE GRADES
      console.log("APAGADO")
    }
  };

  const createGradeHandler = () => {
    dispatch(createGrade());  
  };

  const handleView = (_id) => {};

  const actionColumn = [
    { field: "codigo", headerName: "Codigo", width: 120 },
    { field: "sala", headerName: "Sala", width: 280 },
 
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
                  to={`/grades/${params.row._id}`}
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
        rows={grades}
        animateRows={true}
        columns={gradeColumns.concat(actionColumn)}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DatatableSalas;
