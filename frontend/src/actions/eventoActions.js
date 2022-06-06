import axios from "axios";

import {
  EVENTO_LIST_REQUEST,
  EVENTO_LIST_FAIL,
  EVENTO_LIST_SUCCESS,
  EVENTO_DETAILS_REQUEST,
  EVENTO_DETAILS_SUCCESS,
  EVENTO_DETAILS_FAIL,
  
  EVENTO_DELETE_REQUEST,
  EVENTO_DELETE_FAIL,
  EVENTO_DELETE_SUCCESS,
  EVENTO_CREATE_FAIL,
  EVENTO_CREATE_REQUEST,

  EVENTO_CREATE_SUCCESS,
  EVENTO_UPDATE_REQUEST,
  EVENTO_UPDATE_FAIL,

  EVENTO_UPDATE_SUCCESS,
  EVENTO_CREATE_DIAS_FAIL, EVENTO_CREATE_DIAS_REQUEST, EVENTO_CREATE_DIAS_SUCCESS
} from "../constants/eventoConstants";

export const listEventos = () => async (dispatch) => {
  try {
    dispatch({ type: EVENTO_LIST_REQUEST });

    const { data } = await axios.get("/api/eventos");

    dispatch({ type: EVENTO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENTO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGradeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENTO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/grades/${id}`);

    dispatch({ type: EVENTO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENTO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteGrade = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENTO_DELETE_REQUEST,
    });

    const {
      docenteLogin: { docenteInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    await axios.delete(`/api/grades/${id}`, config);

    dispatch({
      type: EVENTO_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: EVENTO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createEvento = (titulo,
  descricao,
  convidados,
  data1,
  data2,
  hora1,
  hora2,
  bloco,
  sala,
  img,
  link) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTO_CREATE_REQUEST,
    });


    const { data } = await axios.post(`/api/eventos/`, {titulo,
      descricao,
      convidados,
      data1,
      data2,
      hora1,
      hora2,
      bloco,
      sala,
      img,
      link});

    dispatch({
      type: EVENTO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateEvento = (evento) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTO_UPDATE_REQUEST,
    });


    const { data } = await axios.put(`/api/eventos/${evento._id}`, evento);

    dispatch({
      type: EVENTO_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createGradeDia = (gradeId, dia) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENTO_CREATE_DIAS_REQUEST,
    });

    const {
      docenteLogin: { docenteInfo },
    } = getState();

    const config = {
      headers: {  
        'Content-Type': 'application/json',
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    await axios.post(`/api/grades/${gradeId}/dias`, dia, config);

    dispatch({
      type: EVENTO_CREATE_DIAS_SUCCESS,
   
    });
  } catch (error) {
    dispatch({
      type: EVENTO_CREATE_DIAS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




