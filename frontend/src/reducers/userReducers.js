import {
  DOCENTE_LOGIN_REQUEST,
  DOCENTE_LOGIN_SUCCESS,
  DOCENTE_LOGIN_FAIL,
  DOCENTE_LOGOUT,
  DOCENTE_UPDATE_PROFILE_FAIL,
  DOCENTE_UPDATE_PROFILE_SUCCESS,
  DOCENTE_UPDATE_PROFILE_REQUEST,
  DOCENTE_DELETE_FAIL,
  DOCENTE_DELETE_REQUEST,
  DOCENTE_DELETE_SUCCESS,
} from "../constants/userConstants";
import {
  DOCENTE_REGISTER_REQUEST,
  DOCENTE_REGISTER_SUCCESS,
  DOCENTE_REGISTER_FAIL,
  DOCENTE_UPDATE_FAIL,
  DOCENTE_UPDATE_REQUEST,
  DOCENTE_UPDATE_SUCCESS,
  DOCENTE_UPDATE_RESET,
  DOCENTE_LIST_FAIL,
  DOCENTE_LIST_REQUEST,
  DOCENTE_LIST_SUCCESS,
  DOCENTE_LIST_RESET,
  DOCENTE_DETAILS_DATA_FAIL,
  DOCENTE_DETAILS_DATA_REQUEST,
  DOCENTE_DETAILS_DATA_SUCCESS,
  DOCENTE_UPDATE_DATA_FAIL,
  DOCENTE_UPDATE_DATA_REQUEST,
  DOCENTE_UPDATE_DATA_SUCCESS,
  DOCENTE_UPDATE_DATA_RESET
} from "./../constants/userConstants";
import {
  DOCENTE_DETAILS_SUCCESS,
  DOCENTE_DETAILS_REQUEST,
  DOCENTE_DETAILS_FAIL,
} from "./../constants/userConstants";

export const docenteLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCENTE_LOGIN_REQUEST:
      return { loading: true };
    case DOCENTE_LOGIN_SUCCESS:
      return { loading: false, docenteInfo: action.payload };
    case DOCENTE_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case DOCENTE_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const docenteRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCENTE_REGISTER_REQUEST:
      return { loading: true };
    case DOCENTE_REGISTER_SUCCESS:
      return { loading: false, docenteInfo: action.payload };
    case DOCENTE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const docenteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCENTE_DELETE_REQUEST:
      return { loading: true };
    case DOCENTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DOCENTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const docenteDetailsReducer = (state = { docente: {} }, action) => {
  switch (action.type) {
    case DOCENTE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case DOCENTE_DETAILS_SUCCESS:
      return { loading: false, docente: action.payload };
    case DOCENTE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const docenteDetailsDataReducer = (state = { docente: {} }, action) => {
  switch (action.type) {
    case DOCENTE_DETAILS_DATA_REQUEST:
      return { ...state, loading: true };
    case DOCENTE_DETAILS_DATA_SUCCESS:
      return { loading: false, docente: action.payload };
    case DOCENTE_DETAILS_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const docenteUpdateDataReducer = (state = { docente: {} }, action) => {
  switch (action.type) {
    case DOCENTE_UPDATE_DATA_REQUEST:
      return { loading: true };
    case DOCENTE_UPDATE_DATA_SUCCESS:
      return { loading: false, success: true, docente: action.payload };
    case DOCENTE_UPDATE_DATA_FAIL:
      return { loading: false, error: action.payload };
    case DOCENTE_UPDATE_DATA_RESET:
      return { docente: {} };
    default:
      return state;
  }
};

export const docenteUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCENTE_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case DOCENTE_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, docenteInfo: action.payload };
    case DOCENTE_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const docenteListReducer = (state = { docentes: [] }, action) => {
  switch (action.type) {
    case DOCENTE_LIST_REQUEST:
      return { loading: true };
    case DOCENTE_LIST_SUCCESS:
      return { loading: false, docentes: action.payload };
    case DOCENTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DOCENTE_LIST_RESET:
      return { docentes: [] };
    default:
      return state;
  }
};

export const docenteUpdateReducer = (state = { docente: {} }, action) => {
  switch (action.type) {
    case DOCENTE_UPDATE_REQUEST:
      return { loading: true };
    case DOCENTE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DOCENTE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DOCENTE_UPDATE_RESET:
      return {
        docente: {},
      };
    default:
      return state;
  }
};
