import { z } from "zod";

const rawEnv = {
    EXPO_PUBLIC_MOVIE_DB_URL: process.env.EXPO_PUBLIC_MOVIE_DB_URL || "https://api.themoviedb.org/3/movie",
    EXPO_PUBLIC_MOVIE_DB_KEY: process.env.EXPO_PUBLIC_MOVIE_DB_KEY || "9b3b653f785a4562f055cdb5b6708c38",
};

const envSchema = z.object({
    EXPO_PUBLIC_MOVIE_DB_URL: z.string().url(),
    EXPO_PUBLIC_MOVIE_DB_KEY: z.string().min(1),
});

export const env = envSchema.parse(rawEnv);
