import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  gradeListReducer,
  gradeDetailReducer,
  gradeGetReducer,
  gradeDeleteReducer,
  gradeCreateReducer,
  gradeUpdateReducer,
  gradeDiaCreateReducer,
} from "./reducers/gradeReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  docenteLoginReducer,
  docenteRegisterReducer,
  docenteDetailsReducer,
  docenteUpdateProfileReducer,
  docenteUpdateReducer,
  docenteListReducer,
  docenteDeleteReducer,
  docenteDetailsDataReducer,
  docenteUpdateDataReducer,
} from "./reducers/userReducers";
import {
  cursoDetailReducer,
  cursoListReducer,
  blocoDetailReducer,blocoListReducer,
} from "./reducers/cursoblocoanoReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

import { eventoListReducer, eventoDetailReducer,eventoCreateReducer,eventoUpdateReducer } from './reducers/eventoReducers';
  

const reducer = combineReducers({
  gradeList: gradeListReducer,
  gradeDetails: gradeDetailReducer,
  getGrade: gradeGetReducer,
  docenteList: docenteListReducer,
  gradeDelete: gradeDeleteReducer,
  gradeCreate: gradeCreateReducer,
  gradeUpdate: gradeUpdateReducer,
  gradeDiaCreate: gradeDiaCreateReducer,
  cart: cartReducer,
  docenteDelete: docenteDeleteReducer,
  docenteUpdate: docenteUpdateReducer,
  docenteLogin: docenteLoginReducer,
  docenteRegister: docenteRegisterReducer,
  docenteDetails: docenteDetailsReducer,
  docenteDetailsData: docenteDetailsDataReducer,
  docenteUpdateData: docenteUpdateDataReducer,
  docenteUpdateProfile: docenteUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  cursoList: cursoListReducer,
  cursoDetail: cursoDetailReducer,
  blocoList: blocoListReducer,
  blocoDetail: blocoDetailReducer,
  eventoList:eventoListReducer,
  eventoDetail:eventoDetailReducer,
  eventoCreate: eventoCreateReducer,
  eventoUpdate:eventoUpdateReducer
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const gradeDadosFromLocalStorage = localStorage.getItem("gradeDados")
  ? JSON.parse(localStorage.getItem("gradeDados"))
  : {};

const docenteInfoFromLocalStorage = localStorage.getItem("docenteInfo")
  ? JSON.parse(localStorage.getItem("docenteInfo"))
  : null;

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  docenteLogin: { docenteInfo: docenteInfoFromLocalStorage },
  grade: {
    gradeDados: gradeDadosFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
