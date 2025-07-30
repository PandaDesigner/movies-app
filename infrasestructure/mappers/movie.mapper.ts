import {Results} from "@/infrasestructure/interfaces/moviedb.response";
import {CompleteMovie, Movie} from "@/infrasestructure/interfaces/movie.interface";
import {MovieDBMovieDetailResponse} from "@/infrasestructure/interfaces/moviedb-movie-detail.response";
import {ICast} from "@/infrasestructure/interfaces/cast.interface";
import { MovieDBCast } from "@/infrasestructure/interfaces/credits.response";


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

    static frontTheMovieDBResponseToMovies(movie: MovieDBMovieDetailResponse): CompleteMovie{
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdropPath: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name)
        }
    }

    static frontMovieDBCastToEntity(actor: MovieDBCast ):ICast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character,
            avatarPath: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://i.stack.imgur.com/l60Hf.png',
        };
    }
}