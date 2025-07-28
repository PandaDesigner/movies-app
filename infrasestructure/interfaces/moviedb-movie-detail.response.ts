export interface MovieDBGenre {
  id: number;
  name: string;
}

export interface MovieDBProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDBProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface MovieDBSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDBMovieDetailResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown | null;
  budget: number;
  genres: MovieDBGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieDBProductionCompany[];
  production_countries: MovieDBProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieDBSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}