import { useState } from "react";

import { getCategoriesService } from "../services";

const useCategoriesHook = () => {
  const initialState = [];

  const [categories, setCategories] = useState(initialState);

  const getCategories = () => {
    getCategoriesService().then(res => {
      setCategories(res);
    });
  };

  return {
    categories,
    getCategories
  };
};

export { useCategoriesHook };
