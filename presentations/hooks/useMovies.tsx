import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {nowPlayingAction} from "@/core/actions/movies/now-playing.action";
import {popularMovieAction} from "@/core/actions/movies/popular.action";
import {topRatedMovieAction} from "@/core/actions/movies/top-rated.action";
import {upcomingMovieAction} from "@/core/actions/movies/upcoming.action";


export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlayingMovies'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','popular'],
        queryFn: ({pageParam}) =>
                popularMovieAction({page: pageParam, limit: 20}),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_lastPage, pages) => pages.length + 1,
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','topRated'],
        queryFn: ({pageParam}) => {
            return topRatedMovieAction({page: pageParam, limit: 20})
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_lastPage, pages) => pages.length + 1
    })

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','upcoming'],
        queryFn: ({pageParam}) => {
            return upcomingMovieAction({page: pageParam, limit: 20})
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_lastPage, pages) => pages.length + 1
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}