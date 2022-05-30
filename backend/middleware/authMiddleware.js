import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Docente from "../models/docenteModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.docente = await Docente.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized,token error");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) =>{
  if(req.docente && req.docente.isAdmin){
    next()
  }else{
    res.status(401)
  throw new Error('Não autorizado, não é director de curso')
  }
}

export { protect, admin };
