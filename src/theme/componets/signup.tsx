import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Provider, useDispatch } from "react-redux";
import { setSignupDetails } from "./../Redux/signupreducer"; // Import the action creator from your signupSlice file
import { useNavigate } from "react-router-dom";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log(values);
    dispatch(setSignupDetails(values));
    navigate("/Login");
    // Perform any necessary actions with the form values
    // Example: Make an API call to submit the form data

    // Set submitting to false when your actions are complete
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password:""
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

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

export default Signup;
