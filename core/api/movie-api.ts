import axios from "axios";
import {env} from "@/config/env";


export const movieApi = axios.create({
    baseURL: env.EXPO_PUBLIC_MOVIE_DB_URL,
    params: {
        language: "es-MX",
        api_key: env.EXPO_PUBLIC_MOVIE_DB_KEY,
    },
})