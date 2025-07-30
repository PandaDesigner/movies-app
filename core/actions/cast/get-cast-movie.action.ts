import {movieApi} from "@/core/api/movie-api";
import {MovieMapper} from "@/infrasestructure/mappers/movie.mapper";
import {CastResponse, MovieDBCast} from "@/infrasestructure/interfaces/credits.response";
import {ICast} from "@/infrasestructure/interfaces/cast.interface";


export const getMovieCastAction = async (movieId: number ):Promise<ICast[]
> => {
    try {
        const { data } = await movieApi.get<CastResponse>( `/${movieId}/credits` )
        //console.log('Movie data:', JSON.stringify(data.cast, null, 2));
        return data.cast.map((actor: MovieDBCast) => MovieMapper.frontMovieDBCastToEntity(actor));
    } catch (error) {
        console.error(error)
        throw `Cannot load now playing movie: ${error}`;
    }
}