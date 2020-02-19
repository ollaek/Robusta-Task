import React, { useEffect, useState } from "react";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useCategoriesHook, useEditMovieHook } from "../../hooks";

const MovieDetails = props => {
  const { categories, getCategories } = useCategoriesHook();
  const { editMovie } = useEditMovieHook();
  const movieId = props.match.params.id;
  const movie = JSON.parse(localStorage.getItem("movie"));
  const [genres, setGenres] = useState(movie.category_ids);

  useEffect(
    () => {
      if (movieId) {
        //GET MOVIE BY ID
        //as per my email , the api is not working as the screenshoot shows
        //so i managed the data preview by storing the movie in local storage
      }
      getCategories();
    },
    // eslint-disable-next-line
    []
  );
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter a title"),
    year: Yup.number()
      .min(1800, "Year must be between 1800 to 2020")
      .max(2020, "Year must be between 1800 to 2020")
      .required("Please enter a year"),
    budget: Yup.number()
      .min(1, "Please enter a valid budget")
      .required("Please enter a budget")
  });

  const onGenreChange = (id, checked) => {
    if (checked) {
      if (!genres.includes(id)) setGenres([...genres, id]);
    } else {
      setGenres([
        genres.filter(genre => {
          return genre !== id;
        })
      ]);
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui" style={{ textAlign: "center", margin: "2rem" }}>
        New Movie
      </h1>
      <div className="ui segment">
        <Formik
          initialValues={{
            title: movie.title,
            year: movie.year,
            budget: movie.budget
          }}
          onSubmit={values => {
            const movie = {
              title: values.title,
              year: values.year,
              budget: values.budget,
              category_ids: genres
            };
            editMovie(movieId, movie);
            props.history.push("/");
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
                      name="title"
                      type="text"
                      placeholder="Enter Movie Name .."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    <ErrorMessage name="title">
                      {msg => <div className="error error-message">{msg}</div>}
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
                      {msg => <div className="error error-message">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
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
                      <i className="circular dollar sign icon"></i>
                    </div>
                    <ErrorMessage name="budget">
                      {msg => <div className="error error-message">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="field">
                    <label>Genres</label>
                    {categories.map(category => {
                      return (
                        <div
                          className="ui checkbox"
                          style={{ margin: 10 }}
                          key={category.id}
                        >
                          <input
                            id={category.id}
                            type="checkbox"
                            name="genere"
                            onChange={event => {
                              onGenreChange(category.id, event.target.checked);
                            }}
                            checked={genres.includes(category.id)}
                          />
                          <label>{category.title}</label>
                        </div>
                      );
                    })}
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

export default MovieDetails;
