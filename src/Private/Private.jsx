import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {

     const { user } = useContext(AuthContext);
     if(user){
          return children;
     }else{
          <Navigate to={"/login"}/>
     }
};

export default Private;