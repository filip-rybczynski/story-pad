import { getUserByClerkID } from "@/utils/auth";
import { EditorPageProps } from "./EditorPageProps";
import { Story, User } from "@prisma/client";
import { getUsersStoryByID } from "@/utils/getStoryByID";
import { EditableStory } from "./EditableStory.type";
import { initStory } from "./utils";
import EditorWithAnalysis from "@/components/EditorWithAnalysis/EditorWithAnalysis";

const EditorPage = async ({ params }: EditorPageProps) => {
  const storyID = params.id?.[0]; // TODO - error handling for paths with more than one id param

  const {id} = (await getUserByClerkID()) as User; // will never be null here

  const initialStoryData = await initStory(id, storyID)

  return (
    <EditorWithAnalysis initialStoryData={initialStoryData} />
  );
};

export default EditorPage;
