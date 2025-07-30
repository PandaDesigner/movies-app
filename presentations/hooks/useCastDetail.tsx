import {useQuery} from "@tanstack/react-query";
import {getMovieCastAction} from "@/core/actions/cast/get-cast-movie.action";


export const useCastDetail = (movieId: number ) => {

    const castQuery = useQuery({
        queryKey: ['cast', movieId],
        queryFn: () => getMovieCastAction(movieId),
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        castQuery
    }
}