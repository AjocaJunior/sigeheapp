import React, { useState, useEffect } from "react";

import "./perfil.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Message from "../../componentes/Message";
import Loader from '../../componentes/Loader'
import { useNavigate } from "react-router-dom";
import { getDocenteDetails,updateDocenteProfile } from "../../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { docenteUpdateProfileReducer } from "../../reducers/userReducers";
import { axios } from 'axios';
const Perfil = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contacto, setContacto] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const docenteDetails = useSelector((state) => state.docenteDetails);
  const { loading, error, docente } = docenteDetails;

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  
  const docenteUpdateProfile = useSelector((state) => state.docenteUpdateProfile);
  const { success } = docenteUpdateProfile;

  useEffect(() => {
    if (!docenteInfo) {
      navigate("/login");
    } else {
      if (!docente.name) {
        dispatch(getDocenteDetails("profile"));
      } else {
        setName(docente.name);
        setEmail(docente.email);
        setCodigo(docente.codigo);
        setContacto(docente.contacto);
        setImage(docente.image)
      }
    }
  }, [dispatch, navigate, docenteInfo, docente]);


const uploadFileHandler = async (e) =>{
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  setUploading(true)

  try {
    const config={
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    }
    const {data} = await axios.post('/api/upload', formData, config)

    setImage(data)
    setUploading(false)
  } catch (error) {
    console.error(error)
    setUploading(false)
  }
}

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Os passwords são diferentes");
    } else {
      dispatch(updateDocenteProfile({id:docente._id, name, email,contacto, password,image}));
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Perfil</h1>

         
        </div>
        <div>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Perfil Actualizado</Message>}
       
        </div>

        <div className="bottom">
        {loading ? <Loader/> : error? <Message variant='danger'>{error}</Message> :(
       
          <form action="">
             {/* <div className="formInput">
               <input type="text" id='image' placeholder="Foto link" value={image}
            onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="formInput">
<input type="file" id="image-file" onChange={uploadFileHandler}></input>
{uploading && <Loader/> }
            </div> */}
            <div className="formInput">
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Nome" value={name}
            onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="formInput">
              <label htmlFor="">Codigo</label>
              <input type="text" placeholder="Código" value={codigo}
            onChange={(e) => setCodigo(e.target.value)} disabled/>
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="formInput">
              <label htmlFor="">Contacto</label>
              <input type="tel" placeholder="Contacto" value={contacto}
            onChange={(e) => setContacto(e.target.value)} />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="formInput">
              <label htmlFor="">Confirmar Password</label>
              <input type="password" placeholder="Confirmar Password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button onClick={handleClick}>Actualizar</button>
          </form>
             
        )}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
