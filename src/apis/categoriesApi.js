import baseApi from "./baseApi";

const categoriesApi = {
  getAllCategories: () =>
    baseApi.get("categories").then(res => {
      return res.data;
    }),
};

export { categoriesApi };
