import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useMovieDetail} from "@/presentations/hooks/useMovieDetail";
import MovieHeader from "@/presentations/components/move/MovieHeader";
import MovieDescription from "@/presentations/components/move/MovieDescription";
import CastCreditsDetails from "@/presentations/components/move/CastCreditsDetails";

const MovieScreen = () =>{
    const { id } = useLocalSearchParams();
     const { getMovieById } = useMovieDetail(+id);

if (getMovieById.isLoading || !getMovieById.data) {
    return (
        <SafeAreaView className={'flex flex-1 items-center justify-center'}>
            <View className={'flex flex-row flex-1 items-center justify-center gap-2'}>
                    <ActivityIndicator color='purple' size={'small'}/>
                <Text>Loading...</Text>
            </View>
        </SafeAreaView>
    );
}

    return (
           <ScrollView className={'flex-1'}>
                   <MovieHeader
                      posterPath={getMovieById.data.posterPath}
                      originalTitle={getMovieById.data.originalTitle}
                      title={getMovieById.data.title}
                   />
               <MovieDescription movie={getMovieById.data} />
               <CastCreditsDetails idMovie={getMovieById.data.id} />
           </ScrollView>
    )
};

    export default MovieScreen;