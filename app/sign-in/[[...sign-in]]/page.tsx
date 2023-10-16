import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black/90">
      <SignIn />
    </div>
  );
};

export default SignInPage;
