

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    posterPath: string;
    backdropPath: string;
}

export interface CompleteMovie extends Movie {
    genres: string[];
    duration: number; // in minutes
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}