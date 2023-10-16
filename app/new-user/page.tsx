import Link from "next/link";

const NewUserPage = () => {
  return (
    <div>
      <h1>Welcome, New User!</h1>
      <Link href="/pad">Check out your own story pad</Link>
    </div>
  );
};

export default NewUserPage;
