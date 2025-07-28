import {movieApi} from "@/core/api/movie-api";
import {MovieDBMovieDetailResponse} from "@/infrasestructure/interfaces/moviedb-movie-detail.response";
import {CompleteMovie} from "@/infrasestructure/interfaces/movie.interface";
import {MovieMapper} from "@/infrasestructure/mappers/movie.mapper";


export const getMovieByIdAction = async (id:number | string ):Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieDetailResponse>( `/${id}` )
        //console.log('Movie data:', JSON.stringify(data, null, 2));
        return MovieMapper.frontTheMovieDBResponseToMovies(data)
    } catch (error) {
        console.error(error)
        throw `Cannot load now playing movie: ${error}`;
    }
}