import {View, Text, ActivityIndicator, FlatList} from 'react-native'
import {useCastDetail} from "@/presentations/hooks/useCastDetail";
import {FC} from "react";
import CastCard from "@/presentations/components/move/CastCard";

interface CastProps {
    idMovie: number;
}

const CastCreditsDetails:FC<CastProps> = ({ idMovie }) => {

    const { castQuery } = useCastDetail(idMovie)

    if (castQuery.isLoading || !castQuery.data) {
            return (
                <View className="flex-1 flex-row gap-4 items-center justify-center">
                    <ActivityIndicator color="purple" size={30} />
                    <Text>Loading...</Text>
                </View>
            );
        }

    return (
    <View className="mx-5 mt-5 mb-2">
        <Text className="font-bold text-lg">Actores</Text>
        <FlatList
            data={castQuery.data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => `${item.id}-${i}`}
            className="my-4"
            horizontal
            renderItem={({item})=><CastCard cast={item}/>}
        />
    </View>
    )
 }
 
 export default CastCreditsDetails