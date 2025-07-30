import {View, Text} from 'react-native'
import {CompleteMovie} from "@/infrasestructure/interfaces/movie.interface";
import {FC} from "react";
import {Formatter} from "@/config/helper/formatter";

interface Props {
    movie: CompleteMovie
}


const MovieDescription:FC<Props> = ({movie}) => {
    return (
    <View className="mx-5">
        <View className="flex flex-row items-center mt-2 gap-2">
            <Text>{movie.rating.toFixed(1)}</Text>
            { movie.genres.map((genre, index) => (
                <Text key={index} className="text-stone-50 bg-stone-600 px-2 py-1 rounded-full text-xs">
                    {genre}
                </Text>
            ))}
        </View>
        <Text className="font-bold text-lg mt-5">Historia</Text>
        <Text className="mt-1 text-stone-500">
            {movie.description}
        </Text>
        <Text className="font-bold text-lg mt-5">Presupuesto</Text>
        <Text className="mt-1 text-stone-500">
            {Formatter.currency(movie.budget)}
        </Text>
    </View>
    )
 }
 
 export default MovieDescription