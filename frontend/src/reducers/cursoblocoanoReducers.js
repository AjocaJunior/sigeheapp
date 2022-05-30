import {
  CURSO_LIST_FAIL,
  CURSO_LIST_SUCCESS,
  CURSO_LIST_REQUEST,
  CURSO_DETAILS_REQUEST,
  CURSO_DETAILS_SUCCESS,
  CURSO_DETAILS_FAIL,
  BLOCO_DETAILS_FAIL,
  BLOCO_DETAILS_REQUEST,BLOCO_DETAILS_SUCCESS, BLOCO_LIST_FAIL,BLOCO_LIST_REQUEST,BLOCO_LIST_SUCCESS,
  GRADE_URL_GET,
  GRADE_DELETE_FAIL,
  GRADE_DELETE_REQUEST,
  GRADE_DELETE_SUCCESS,
  GRADE_CREATE_FAIL,
  GRADE_CREATE_REQUEST,
  GRADE_CREATE_SUCCESS,
  GRADE_CREATE_RESET,
  GRADE_UPDATE_FAIL,
  GRADE_UPDATE_REQUEST,
  GRADE_UPDATE_RESET,
  GRADE_UPDATE_SUCCESS,GRADE_CREATE_DIAS_FAIL,
  GRADE_CREATE_DIAS_REQUEST,
  GRADE_CREATE_DIAS_SUCCESS,
  GRADE_CREATE_DIAS_RESET,
} from "../constants/cursoblocoanoConstants";

export const cursoListReducer = (state = { cursos: [] }, action) => {
  switch (action.type) {
    case CURSO_LIST_REQUEST:
      return { loading: true, cursos: [] };
    case CURSO_LIST_SUCCESS:
      return { loading: false, cursos: action.payload };
    case CURSO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cursoDetailReducer = (state = { curso: { disciplinas: [] } }, action) => {
  switch (action.type) {
    case CURSO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case CURSO_DETAILS_SUCCESS:
      return { loading: false, curso: action.payload };
    case CURSO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blocoListReducer = (state = { blocos: [] }, action) => {
  switch (action.type) {
    case BLOCO_LIST_REQUEST:
      return { loading: true, blocos: [] };
    case BLOCO_LIST_SUCCESS:
      return { loading: false, blocos: action.payload };
    case BLOCO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blocoDetailReducer = (state = { bloco: { salas: [] } }, action) => {
  switch (action.type) {
    case BLOCO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BLOCO_DETAILS_SUCCESS:
      return { loading: false, bloco: action.payload };
    case BLOCO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gradeGetReducer = (state = { gradeDados: {} }, action) => {
  switch (action.type) {
    case GRADE_URL_GET:
      const dados = action.payload;

      const existDados = state.gradeDados.find((x) => x.grade === dados.grade);

      if (existDados) {
        return {
          ...state,
          gradeDados: state.gradeDados.map((x) =>
            x.grade === existDados.grade ? dados : x
          ),
        };
      } else {
        return {
          ...state,
          gradeDados: { ...state.gradeDados, dados },
        };
      }

    default:
      return state;
  }
};

export const gradeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GRADE_DELETE_REQUEST:
      return { loading: true };
    case GRADE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case GRADE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gradeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case GRADE_CREATE_REQUEST:
      return { loading: true };
    case GRADE_CREATE_SUCCESS:
      return { loading: false, success: true, grade: action.payload };
    case GRADE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case GRADE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const gradeUpdateReducer = (state = { grade: {} }, action) => {
  switch (action.type) {
    case GRADE_UPDATE_REQUEST:
      return { loading: true };
    case GRADE_UPDATE_SUCCESS:
      return { loading: false, success: true, grade: action.payload };
    case GRADE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case GRADE_UPDATE_RESET:
      return { grade: {} };
    default:
      return state;
  }
};

export const gradeDiaCreateReducer = (state = { }, action) => {
  switch (action.type) {
    case GRADE_CREATE_DIAS_REQUEST:
      return { loading: true };
    case GRADE_CREATE_DIAS_SUCCESS:
      return { loading: false, success: true };
    case GRADE_CREATE_DIAS_FAIL:
      return { loading: false, error: action.payload };
    case GRADE_CREATE_DIAS_RESET:
      return { };
    default:
      return state;
  }
};
