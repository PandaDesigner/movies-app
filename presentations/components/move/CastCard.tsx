import {View, Text, Image} from 'react-native'
import {ICast} from "@/infrasestructure/interfaces/cast.interface";
import {FC} from "react";
interface CastCardProps {
    cast: ICast
}
const CastCard:FC<CastCardProps> = ({cast}) => {
    return (
    <View className="flex flex-col justify-start items-start w-32 gap-2 ml-1">
            <Image
                source={{uri: cast.avatarPath}}
                resizeMode="cover"
                className="rounded-2xl w-full h-full"
                style={{
                    width: 100,
                    height: 150,
                }}
            />
        <Text className="text-body font-bold">{cast.name}</Text>
        <Text className="text-xs text-stone-500">{cast.character}</Text>
    </View>
    )
 }

 export default CastCard