import { Container, CircularProgress, Stack } from "@mui/material";

import { useEffect, useState } from "react";
import { getAllmovies } from "../services/movieService";
import MovieCard from "components/MovieCard";
import { MoviesContext } from "../context/movie";
import MainAppBar from "components/MainAppBar";

const imagesUrl = "https://image.tmdb.org/t/p/w500/";

export default function MainPage() {
  const [movies, setMovies] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [count, setCount] = useState<number>(0);

  const getInitialData = async () => {
    try {
      const elems = (await getAllmovies()).data.results;
      setMovies(
        elems.map((el: any) => ({
          ...el,
          imageLink: `${imagesUrl}${el.poster_path}`,
        }))
      );
    } catch (e: any) {
      setError(e?.message);
    } finally {
      setLoading(false);
    }
  };

  const addCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <MainAppBar />
      <Container sx={{ padding: 5 }}>
        {error && (
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {error}
          </Stack>
        )}
        {loading && !error && (
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              horizontalAlign: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="inherit" size={36} />{" "}
          </Stack>
        )}
        {!loading && !error && (
          <>
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Clicks counted: {count}
            </Stack>
            <MoviesContext.Provider value={{ count }}>
              <Stack
                spacing={{ xs: 1, sm: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                {movies?.map((el) => (
                  <MovieCard
                    key={el.id}
                    onButtonAction={addCount}
                    imageLink={el.imageLink}
                    originalTitle={el.original_title}
                    overview={el.overview}
                    releaseDate={el.releaseDate}
                    voteAverage={el.vote_average}
                    voteCount={el.vote_count}
                  />
                ))}
              </Stack>
            </MoviesContext.Provider>
          </>
        )}
      </Container>
    </>
  );
}
