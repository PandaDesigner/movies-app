import { Movie } from "@/infrasestructure/interfaces/movie.interface";
import MoviePoster from "@/presentations/components/movies/MoviePoster";
import { useEffect, useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
interface Props {
    movies: Movie[]
    label?: string;
    className?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, label, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        isLoading.current = false;
    }, [movies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
        if (!isEndReached) return;
        isLoading.current = true;
        loadNextPage && loadNextPage();
    }

    return (
        <View className={`w-full mb-4 ${className}`}>
            {label && <Text className="text-2xl px-4 mb-2">{label}</Text>}
            <FlatList
                data={movies}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) =>
                    <MoviePoster id={item.id} posterUrl={item.posterPath} smallPoster />
                }
                onScroll={onScroll}
            />
        </View>
    );
};

export default MovieHorizontalList;