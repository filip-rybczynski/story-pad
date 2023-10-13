import Link from "next/link";
import { PageLinkDetails } from "./types";

const dashboardPages: PageLinkDetails[] = [
  {
    href: "/home",
    label: "Home",
  },
  {
    href: "/editor",
    label: "Editor",
  },
  {
    href: "/analysis",
    label: "Analysis",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul className="flex items-center justify-start">
          {dashboardPages.map(({ href, label }) => (
            <li
              className="px-4 py-2 hover:text-teal-700 hover:font-bold"
              key={href}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">{children}</div>
    </>
  );
};

export default DashboardLayout;
