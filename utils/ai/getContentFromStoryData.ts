import { AnalysisQuestionData, StoryQuestionData } from "@/types/QuestionData";

const getStringFromAnalysis = (analysis: AnalysisQuestionData | null) => {
    let analysisString: string;

    if(!analysis) analysisString = "No analysis was performed for this story"
    else {
        const genreString = (analysis.genreTags as string[]).join(", ");
        const themeString = (analysis.keyThemes as string[]).join(", ");
        const moralString = !analysis.moral ? 'The story has no moral' : `The moral of the story is: ${analysis.moral}`;
    
        analysisString = `Analysis for this story:
        
        Literary genres of the story: ${genreString},
        Key themes of the story: ${themeString},
        ${moralString},
        Story atmosphere: ${analysis.atmosphere}
        `
    }
    return `STORY ANALYSIS
    
    ${analysisString}`
}

export const getContentFromStoryData = ({storyTitle, storyContent, analysis}: StoryQuestionData) => `Below is a story I wrote

Title: ${storyTitle}

${storyContent}

THE END
--------------------------
${getStringFromAnalysis(analysis)}
`

export const summarizeAnalysis = (analysis: AnalysisQuestionData, title: string) => {
    const genreString = (analysis.genreTags as string[]).join(", ");
        const themeString = (analysis.keyThemes as string[]).join(", ");
        const moralString = !analysis.moral ? 'The story has no moral' : `The moral of the story is: ${analysis.moral}`;
    
    return `Analysis for the story titled "${title}":
        
        - Literary genres of the story: ${genreString},
        - Key themes of the story: ${themeString},
        - ${moralString}, 
        - Story atmosphere: ${analysis.atmosphere}
        __________________________________________
        `
}