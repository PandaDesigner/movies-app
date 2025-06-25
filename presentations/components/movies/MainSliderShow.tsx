import {Text, useWindowDimensions, View} from 'react-native';
import {Movie} from "@/infrasestructure/interfaces/movie.interface";
import {FC, useRef} from "react";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import MoviePoster from "@/presentations/components/movies/MoviePoster";

interface Props {
  movies: Movie[]
};

const MainSliderShow = ({movies}:Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;
    return (
        <View className={"w-full h-[250px]"}>
            <Carousel
                ref={ref}
                width={200}
                height={350}
                data={movies}
                mode={"parallax"}
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                renderItem={({item}) => (
                    <MoviePoster id={item.id} posterUrl={item.posterPath} />
                )}
                defaultIndex={1}
            >

            </Carousel>
        </View>
    );
};

export default MainSliderShow;