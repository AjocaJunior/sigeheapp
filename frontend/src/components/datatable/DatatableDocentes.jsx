import React from "react";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { gradeColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import Message from "../../componentes/Message";
import Loader from "../../componentes/Loader";

import { listDocentes, deleteDocente, register } from "../../actions/userActions";

const DatatableDocentes = () => {

  const [name, setName] = useState('');
  const [codigo, setCodigo] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  const docenteList = useSelector((state) => state.docenteList);
  const { loading, error, docentes } = docenteList;

  const docenteDelete = useSelector((state)=> state.docenteDelete);
  const {success: successDelete} = docenteDelete;

const docenteRegister = useSelector((state)=> state.docenteRegister);
const{success: successRegister, docenteInfo:docenteInfoRegister} = docenteRegister;

  useEffect(() => {
    if (docenteInfo && docenteInfo.isAdmin) {
      dispatch(listDocentes());
    }
    if (successRegister) {
      navigate(`/docentes`);
    } else {
      dispatch(listDocentes());
    }
    
  }, [dispatch, docenteInfo, successDelete, successRegister]);

  const handleDelete = (id) => {
    if (window.confirm("Tem a certeza que quer apagar?")) {
      //DELETE GRADES
      dispatch(deleteDocente(id));
    }
  };

  const createDocenteHandler = () => {
    dispatch(register(name, codigo, email, contacto, password))
  };

  const handleView = (_id) => {
    
  };


  const actionColumn = [
    { field: "codigo", headerName: "Codigo", width: 130 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contacto", headerName: "Contacto", width: 170 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
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
                  to={`/docentes/${params.row._id}`}
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
     

      <div className="bottom">
        <form action="">
          <div className="formInput">
            <label htmlFor="">Código</label>
            <input type="text" value={codigo} onChange={(e)=>setCodigo(e.target.value)} placeholder="6 digitos numéricos" />
          </div>
          <div className="formInput">
            <label htmlFor="">Nome</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Nome" />
          </div>
          <div className="formInput">
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" />
          </div>
          <div className="formInput">
            <label htmlFor="">Telefone</label>
            <input type="tel" value={contacto} onChange={(e)=>setContacto(e.target.value)}  placeholder="Telefone" />
          </div>
          <input type="tel" value={codigo} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"  hidden/>
          <button onClick={createDocenteHandler}>
            <i className="fas fa-plus"></i>Adicionar
          </button>
        </form>
      </div>

      <DataGrid
        className="datagrid"
        rows={docentes || []}
        animateRows={true}
        columns={gradeColumns.concat(actionColumn)}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
    
      // <Table striped bordered hover responsive className="table-sm">
      //   <thead>
      //     <tr>
      //       <th>ID</th>
      //       <th>Codigo</th>
      //       <th>Nome</th>
      //       <th>Email</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {docentes.map((docente) => (
      //       <tr key={docente._id}>
      //         <td>{docente._id}</td>
      //         <td>{docente.codigo}</td>
      //         <td>{docente.name}</td>
      //         <td>{docente.email}</td>
      //         <td>{docente.isAdmin ? (<i className='fas fa-check' style={{color:'green'}}></i>) : (<i className="fas fa-times" style={{color:'red'}}></i>)}</td>
      //         <td><Link to={`/docentes/${docente._id}/edit`}>
      //           <Button variant='light' className='fas fa-edit'></Button>
      //         </Link>
      //         <Button variant='danger' className='btn-sm' onClick={()=>handleDelete(docente._id)}><i className='fas fa-trash'></i></Button>
      //         </td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </Table>
    
  );
};

export default DatatableDocentes;
