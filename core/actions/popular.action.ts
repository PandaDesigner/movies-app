import {movieApi} from "@/core/api/movie-api";
import {MovieDBResponse} from "@/infrasestructure/interfaces/moviedb.response";
import {MovieMapper} from "@/infrasestructure/mappers/movie.mapper";
import {Movie} from "@/infrasestructure/interfaces/movie.interface";

interface  Options {
    page?: number;
    limit?: number;
}


export const popularMovieAction = async ({page = 1, limit = 20}:Options):Promise<Movie[]> =>{
    try {
    const {data} = await movieApi.get<MovieDBResponse>('/popular',{
        params: {
            page,
            limit
        }
    })
    // @ts-ignore
        return data.results.map(MovieMapper.frontTheMovieDBResponseToMovie);
    } catch (error) {
        console.error("Error fetching now playing movies:", error);
        throw error;
    }
}