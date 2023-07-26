import React, { useState,useEffect } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from"../Redux/store"
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../Redux/loginreducer";

interface Values {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const signup = useSelector((state:RootState) => state.signup);
  console.log(signup);
  const [singupData,setSignupData]=useState(signup)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  // setSignupData(signup)
  // }, [signup])
  console.log(singupData);
  
  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log(values);
    if (singupData.email === values.email ) {
      console.log(singupData.email === values.email,singupData.email === values.email);
      
      
    }
    else if (singupData.password === values.password) {
      dispatch(setLoginDetails(values));
      navigate("/navbar");
    }
    else{
      alert("please enter correct email and password")
    }

    setSubmitting(false);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={{
          email: "",
          password:""
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <label htmlFor="Password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="Password"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
