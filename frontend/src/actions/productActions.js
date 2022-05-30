import axios from "axios";
import {
  GRADE_LIST_REQUEST,
  GRADE_LIST_FAIL,
  GRADE_LIST_SUCCESS,
  GRADE_DETAILS_REQUEST,
  GRADE_DETAILS_SUCCESS,
  GRADE_DETAILS_FAIL,
} from "../constants/gradeConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GRADE_LIST_REQUEST });

    const { data } = await axios.get("/api/grades");

    dispatch({ type: GRADE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GRADE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GRADE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: GRADE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GRADE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
