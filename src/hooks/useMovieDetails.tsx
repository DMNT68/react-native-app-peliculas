import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}
export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castlPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailPromise,
      castlPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
