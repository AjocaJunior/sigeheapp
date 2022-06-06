import {
  EVENTO_LIST_FAIL,
  EVENTO_LIST_SUCCESS,
  EVENTO_LIST_REQUEST,
  EVENTO_DETAILS_REQUEST,
  EVENTO_DETAILS_SUCCESS,
  EVENTO_DETAILS_FAIL,
 
  EVENTO_DELETE_FAIL,
  EVENTO_DELETE_REQUEST,
  EVENTO_DELETE_SUCCESS,
  EVENTO_CREATE_FAIL,
  EVENTO_CREATE_REQUEST,
  EVENTO_CREATE_SUCCESS,
  EVENTO_CREATE_RESET,
  EVENTO_UPDATE_FAIL,
  EVENTO_UPDATE_REQUEST,
  EVENTO_UPDATE_RESET,
  EVENTO_UPDATE_SUCCESS,EVENTO_CREATE_DIAS_FAIL,
  EVENTO_CREATE_DIAS_REQUEST,
  EVENTO_CREATE_DIAS_SUCCESS,
  EVENTO_CREATE_DIAS_RESET,
} from "../constants/eventoConstants";

export const eventoListReducer = (state = { eventos: [] }, action) => {
  switch (action.type) {
    case EVENTO_LIST_REQUEST:
      return { loading: true, eventos: [] };
    case EVENTO_LIST_SUCCESS:
      return { loading: false, eventos: action.payload };
    case EVENTO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventoDetailReducer = (state = { evento: { } }, action) => {
  switch (action.type) {
    case EVENTO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case EVENTO_DETAILS_SUCCESS:
      return { loading: false, evento: action.payload };
    case EVENTO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const gradeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTO_DELETE_REQUEST:
      return { loading: true };
    case EVENTO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EVENTO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTO_CREATE_REQUEST:
      return { loading: true };
    case EVENTO_CREATE_SUCCESS:
      return { loading: false, success: true, evento: action.payload };
    case EVENTO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EVENTO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const eventoUpdateReducer = (state = { evento: {} }, action) => {
  switch (action.type) {
    case EVENTO_UPDATE_REQUEST:
      return { loading: true };
    case EVENTO_UPDATE_SUCCESS:
      return { loading: false, success: true, evento: action.payload };
    case EVENTO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case EVENTO_UPDATE_RESET:
      return { evento: {} };
    default:
      return state;
  }
};

export const gradeDiaCreateReducer = (state = { }, action) => {
  switch (action.type) {
    case EVENTO_CREATE_DIAS_REQUEST:
      return { loading: true };
    case EVENTO_CREATE_DIAS_SUCCESS:
      return { loading: false, success: true };
    case EVENTO_CREATE_DIAS_FAIL:
      return { loading: false, error: action.payload };
    case EVENTO_CREATE_DIAS_RESET:
      return { };
    default:
      return state;
  }
};
