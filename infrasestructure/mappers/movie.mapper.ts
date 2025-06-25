import {Results} from "@/infrasestructure/interfaces/moviedb.response";
import {Movie} from "@/infrasestructure/interfaces/movie.interface";


export class MovieMapper {
    static frontTheMovieDBResponseToMovie(movie: Results):Movie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdropPath: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        };
    }
}