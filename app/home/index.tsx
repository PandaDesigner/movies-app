import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useMovies} from "@/presentations/hooks/useMovies";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MainSliderShow from "@/presentations/components/movies/MainSliderShow";
import MovieHorizontalList from "@/presentations/components/movies/MovieHorizontalList";

const HomeScreen = () => {
    const safeAreaViewStyle = useSafeAreaInsets();
    const {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    } = useMovies()

    if (nowPlayingQuery.isLoading || popularQuery.isLoading || topRatedQuery.isLoading || upcomingQuery.isLoading) {
        return(
        <View className={"flex-1 items-center justify-center"}>
            <ActivityIndicator color="purple" size={40} />
        </View>
        )}

    // @ts-ignore
    return (
        <ScrollView>
            <View className="mt-2 h-full" style={{
                paddingTop: safeAreaViewStyle.top,
                paddingBottom: safeAreaViewStyle.bottom
            }}>
                <Text className="text-3xl font-bold px-4">Movie App</Text>
                { /* Carousel Movies Section can be added here later */}
                <MainSliderShow movies={ nowPlayingQuery.data ?? [] } />
                { /* A horizontal list of movies can be added here later */}
                <MovieHorizontalList
                    movies={popularQuery.data?.pages.flat() ?? []}
                    label="Populares"
                    loadNextPage={popularQuery.fetchNextPage}
                />
                {/* Mejores calcification section can be added here later */}
                <MovieHorizontalList
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    label="Mejores Calificadas"
                    loadNextPage={topRatedQuery.fetchNextPage}
                />
                {/* Proximamente section can be added here later */}
                <MovieHorizontalList
                    movies={upcomingQuery.data?.pages.flat() ?? []}
                    label={"Próximamente en cines"}
                    loadNextPage={upcomingQuery.fetchNextPage}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;