import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useMovieDetail} from "@/presentations/hooks/useMovieDetail";
import MovieHeader from "@/presentations/components/move/MovieHeader";

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
console.log('DETAIL MOVIE---> ',JSON.stringify(getMovieById.data, null, 2));

    return (
           <ScrollView className={'flex-1'}>
               <View className={'flex-1'}>
                   <MovieHeader
                      posterPath={getMovieById.data.posterPath}
                      originalTitle={getMovieById.data.originalTitle}
                      title={getMovieById.data.title}
                   />
               </View>
           </ScrollView>
    )
};

    export default MovieScreen;