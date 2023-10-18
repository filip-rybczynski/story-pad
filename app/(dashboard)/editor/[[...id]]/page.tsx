import { getUserByClerkID } from "@/utils/auth";
import { EditorPageProps } from "./EditorPageProps";
import { Story, User } from "@prisma/client";
import { getUsersStoryByID } from "@/utils/getStoryByID";
import EditorForm from "@/components/EditorForm/EditorForm";

const EditorPage = async ({ params }: EditorPageProps) => {
  const user = (await getUserByClerkID()) as User; // will never be null here

  const existingStory = await getUsersStoryByID(user.id, params.id?.[0]); // TODO - error handling for paths with more than one id param

  return <EditorForm user={user} story={existingStory} />;
};

export default EditorPage;
