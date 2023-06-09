import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../Redux/Login/slice";

function useLogin() {
  const { loading } = useSelector((state) => state.login);
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      const response = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
        formValues
      );
      dispatch(loginSuccess(response.data));
      alert("Berhasil Login ... ");
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValues,
    loading,
    setFormValues,
    handleSubmit,
  };
}

export default useLogin;
