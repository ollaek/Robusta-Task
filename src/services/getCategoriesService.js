import { categoriesApi } from "../apis/categoriesApi";

export const getCategoriesService = async () => {
    const data =  await categoriesApi.getAllCategories();
    return data;
};