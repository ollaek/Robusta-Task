import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateMovie = ({ history }) => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter a name"),
    year: Yup.number()
      .min(1800, "Year must be between 1800 to 2020")
      .max(2020, "Year must be between 1800 to 2020")
      .required("Please enter a year"),
    budget: Yup.number()
      .min(1, "Please enter a valid budget")
      .required("Please enter a budget")
  });

  const SaveMovie = movie => {
    const movies = JSON.parse(localStorage.getItem("movies") || "[]");
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
  };

  return (
    <div className="ui container">
      <h1 className="ui" style={{ textAlign: "center", margin: "2rem" }}>
        New Movie
      </h1>
      <div className="ui segment">
        <Formik
          initialValues={{
            name: "",
            year: "",
            budget: ""
          }}
          onSubmit={values => {
            const movie = {
              Name: values.name,
              Year: values.year,
              Budget: values.budget
            };
            SaveMovie(movie);
            history.push("/");
          }}
          validationSchema={ValidationSchema}
        >
          {props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;
            return (
              <form className="ui form" onSubmit={handleSubmit} noValidate>
                <div className="two fields">
                  <div className="field">
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter Movie Name .."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <ErrorMessage name="name">
                      {msg => (
                        <div classNameName="error error-message">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="field">
                    <label>Year</label>
                    <input
                      name="year"
                      type="number"
                      placeholder="1990"
                      step="1"
                      onKeyDown={evt => evt.key === "." && evt.preventDefault()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                    />
                    <ErrorMessage name="year">
                      {msg => (
                        <div classNameName="error error-message">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="two fields">
                  <div className="  field ">
                    <label>Budget</label>
                    <div className="ui input icon">
                      <input
                        name="budget"
                        type="number"
                        placeholder="2000"
                        step=".1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.budget}
                      />
                      <i class="circular dollar sign icon"></i>
                    </div>
                    <ErrorMessage name="budget">
                      {msg => (
                        <div classNameName="error error-message">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="ui container center aligned">
                  <button className="ui primary button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateMovie;
