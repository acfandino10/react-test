import { axiosAuth } from "./axios";

export const getMovie = (id: string) => {
  return axiosAuth.get(`movie/movie_id/image?movie_id=${id}`);
};

export const getAllmovies = () => {
  return axiosAuth.get(`/discover/movie`);
};

