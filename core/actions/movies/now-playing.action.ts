import {movieApi} from "@/core/api/movie-api";
import {MovieDBResponse} from "@/infrasestructure/interfaces/moviedb.response";
import {MovieMapper} from "@/infrasestructure/mappers/movie.mapper";
import {Movie} from "@/infrasestructure/interfaces/movie.interface";


export const nowPlayingAction = async ():Promise<Movie[]> =>{
    try {
    const {data} = await movieApi.get<MovieDBResponse>('/now_playing')
    // @ts-ignore
        return data.results.map(MovieMapper.frontTheMovieDBResponseToMovie);
    } catch (error) {
        console.error("Error fetching now playing movies:", error);
        throw error;
    }
}