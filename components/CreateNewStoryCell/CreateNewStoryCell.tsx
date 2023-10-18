import Link from "next/link";

export const CreateNewStoryCell = () => {
  return (
    <Link href="/editor">
      <div className="h-[200px] border-black/70 border-2 rounded-2xl px-6 py-4">
        <h2 className="text-3xl pt-4 text-teal-600">Create new story</h2>
      </div>
    </Link>
  );
};
