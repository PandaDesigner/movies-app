import {View, Text, useWindowDimensions, Image, Pressable} from 'react-native'
import {FC} from "react";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";


interface MovieHeaderProps {
    posterPath: string;
    originalTitle: string;
    title: string;
}

const MovieHeader:FC<MovieHeaderProps> = ({
      posterPath,
      originalTitle,
    title
}) => {
    const { height:screenHeight } = useWindowDimensions();
    return (
    <>
        <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={{
                zIndex: 99,
                position: "absolute",
                height: screenHeight * 0.4,
                width: "100%",
            }}
            start={[0,0]}
            locations={[0, 0.5]}

        />
        <View style={{
            position:"absolute",
            zIndex:9999,
            elevation:9,
            top: 35,
            left: 20,
        }}>
            <Pressable onPress={() => router.dismiss()}>
            <Ionicons name="arrow-back" size={30} color={"white"} className="shadow"/>
            </Pressable>
        </View>
        <View
            style={{ height: screenHeight * 0.9 }}
            className="shadow-xl shadow-black/20">
            <View className="flex-1 rounded-b-[25px] overflow-hidden flex">
                <Image
                source={{uri: posterPath}}
                resizeMode="cover"
                className="flex-1 h-full w-full self-start"
                />
            </View>
            <View className="mt-5 px-5">
                <Text className="text-stone-400 text-sm">
                    {originalTitle}
                </Text>
                <Text className="text-stone-800 text-xl font-bold">
                    {title}
                </Text>
            </View>
        </View>
    </>
    )
 }
 
 export default MovieHeader