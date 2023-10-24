import { Story, User } from "@prisma/client";

export interface EditorFormProps {
  user: User;
  story?: Story;
}
