import axios from "axios";

import {
  CURSO_LIST_REQUEST,
  CURSO_LIST_FAIL,
  CURSO_LIST_SUCCESS,
  CURSO_DETAILS_REQUEST,
  CURSO_DETAILS_SUCCESS,
  CURSO_DETAILS_FAIL,
  BLOCO_DETAILS_FAIL,BLOCO_DETAILS_REQUEST,BLOCO_DETAILS_SUCCESS,BLOCO_LIST_FAIL,BLOCO_LIST_REQUEST,BLOCO_LIST_SUCCESS,
  GRADE_URL_GET,
  GRADE_DELETE_REQUEST,
  GRADE_DELETE_FAIL,
  GRADE_DELETE_SUCCESS,
  GRADE_CREATE_FAIL,
  GRADE_CREATE_REQUEST,

  GRADE_CREATE_SUCCESS,
  GRADE_UPDATE_REQUEST,
  GRADE_UPDATE_FAIL,

  GRADE_UPDATE_SUCCESS,
  GRADE_CREATE_DIAS_FAIL, GRADE_CREATE_DIAS_REQUEST, GRADE_CREATE_DIAS_SUCCESS
} from "../constants/cursoblocoanoConstants";

export const listCursos = () => async (dispatch) => {
  try {
    dispatch({ type: CURSO_LIST_REQUEST });

    const { data } = await axios.get("/api/cursos");

    dispatch({ type: CURSO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CURSO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCursoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CURSO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/cursos/${id}`);

    dispatch({ type: CURSO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CURSO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listBlocos = () => async (dispatch) => {
  try {
    dispatch({ type: BLOCO_LIST_REQUEST });

    const { data } = await axios.get("/api/blocos");

    dispatch({ type: BLOCO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOCO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBlocoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOCO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/blocos/${id}`);

    dispatch({ type: BLOCO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOCO_DETAILS_FAIL,
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
      type: GRADE_DELETE_REQUEST,
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
      type: GRADE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: GRADE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createGrade = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GRADE_CREATE_REQUEST,
    });

    const {
      docenteLogin: { docenteInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/grades/`, {}, config);

    dispatch({
      type: GRADE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GRADE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateGrade = (grade) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GRADE_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/grades/${grade._id}`, grade, config);

    dispatch({
      type: GRADE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GRADE_UPDATE_FAIL,
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
      type: GRADE_CREATE_DIAS_REQUEST,
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
      type: GRADE_CREATE_DIAS_SUCCESS,
   
    });
  } catch (error) {
    dispatch({
      type: GRADE_CREATE_DIAS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const getUrlGrade = () => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/grades/?`);

  dispatch({
    type: GRADE_URL_GET,
    payload: {
      bloco: data.bloco,
      sala: data.sala,
      dias: data.dias,
    },
  });

  localStorage.setItems(
    "gradeDados",
    JSON.stringify(getState().grade.gradeDados)
  );
};
