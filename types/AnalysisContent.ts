export interface AnalysisContent {
  synopsis: string;
  atmosphere: string;
  atmosphereColor: string;
  moral: string | null;
  genreTags: string[];
  keyThemes: string[];
  upliftingScore: number;
}

export interface FormattedAnalysisContent {
    synopsis: string;
    atmosphere: string;
    atmosphereColor: string;
    moral: string | null;
    genreTags: string;
    keyThemes: string;
    upliftingScore: number;
}
