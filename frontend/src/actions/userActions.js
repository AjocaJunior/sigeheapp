import axios from "axios";

import {
  DOCENTE_DETAILS_SUCCESS,
  DOCENTE_LOGIN_SUCCESS,
  DOCENTE_LOGIN_REQUEST,
  DOCENTE_LOGIN_FAIL,
  DOCENTE_LOGOUT,
  DOCENTE_REGISTER_REQUEST,
  DOCENTE_REGISTER_SUCCESS,
  DOCENTE_REGISTER_FAIL,
  DOCENTE_DETAILS_REQUEST,
  DOCENTE_DETAILS_FAIL,
  DOCENTE_UPDATE_PROFILE_REQUEST,
  DOCENTE_UPDATE_PROFILE_FAIL,
  DOCENTE_UPDATE_PROFILE_SUCCESS,
  DOCENTE_LIST_FAIL,
  DOCENTE_LIST_REQUEST,
  DOCENTE_LIST_SUCCESS,
  DOCENTE_LIST_RESET,
  DOCENTE_DELETE_FAIL,
  DOCENTE_DELETE_REQUEST,
  DOCENTE_DELETE_SUCCESS,
  DOCENTE_DETAILS_DATA_FAIL,
  DOCENTE_DETAILS_DATA_REQUEST,
  DOCENTE_DETAILS_DATA_SUCCESS,
  DOCENTE_UPDATE_DATA_FAIL,
  DOCENTE_UPDATE_DATA_REQUEST,
  DOCENTE_UPDATE_DATA_RESET,
  DOCENTE_UPDATE_DATA_SUCCESS
} from "../constants/userConstants";

export const login = (codigo, password) => async (dispatch) => {
  try {
    dispatch({
      type: DOCENTE_LOGIN_REQUEST,
    });

    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await axios.post(
      "/api/docentes/login",
      { codigo, password },
      config
    );

    dispatch({ type: DOCENTE_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("docenteInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DOCENTE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("docenteInfo");
  dispatch({ type: DOCENTE_LOGOUT });
  dispatch({ type: DOCENTE_LIST_RESET });
};

export const register =
  (name, codigo, email, contacto, password) => async (dispatch) => {
    try {
      dispatch({
        type: DOCENTE_REGISTER_REQUEST,
      });

      const config = { headers: { "Content-type": "application/json" } };

      const { data } = await axios.post(
        "/api/docentes",
        { name, codigo, email, contacto, password },
        config
      );

      dispatch({ type: DOCENTE_REGISTER_SUCCESS, payload: data });

      dispatch({ type: DOCENTE_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("docenteInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: DOCENTE_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteDocente = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCENTE_DELETE_REQUEST,
    });

    const {
      docenteLogin: { docenteInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    await axios.delete(`/api/docentes/${id}`, config);

    dispatch({
      type: DOCENTE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DOCENTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDocenteDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCENTE_DETAILS_REQUEST,
    });
    const {
      docenteLogin: { docenteInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/docentes/${id}`, config);

    dispatch({ type: DOCENTE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DOCENTE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET DOCENTE DETAILS, NOT FOR PROFILE
export const docenteDetailsDados = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOCENTE_DETAILS_DATA_REQUEST });

    const { data } = await axios.get(`/api/docentes/${id}`);

    dispatch({ type: DOCENTE_DETAILS_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DOCENTE_DETAILS_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateDocente = (docente) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCENTE_UPDATE_DATA_REQUEST,
    });

    const {
      docenteLogin: { docenteInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/docentes/${docente._id}`, docente, config);

    dispatch({
      type: DOCENTE_UPDATE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCENTE_UPDATE_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateDocenteProfile = (docente) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCENTE_UPDATE_PROFILE_REQUEST,
    });
    const {
      docenteLogin: { docenteInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/docentes/profile`, docente, config);

    dispatch({ type: DOCENTE_UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DOCENTE_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDocentes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCENTE_LIST_REQUEST,
    });
    const {
      docenteLogin: { docenteInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${docenteInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/docentes`, config);

    dispatch({ type: DOCENTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DOCENTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
