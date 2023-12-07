import { Chart, Box, DocumentText1 } from "iconsax-react";
import Link from "next/link";

const menu = [
  { label: "Dashboard", route: "/dashboard", icon: <Chart /> },
  { label: "Product", route: "/dashboard/product", icon: <Box /> },
  { label: "Order", route: "/dashboard/order", icon: <DocumentText1 /> },
];

export const DashboardTemplates = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className=" w-[230px] border-r-2 p-6 gap-8 border-zinc-900 space-y-6 bg-zinc-950/30">
        {menu.map(({ label, route, icon }, index) => {
          return (
            <Link
              key={index}
              href={route}
              className="flex items-center gap-4 p-3 bg-black/5 w-full hover:bg-primary rounded-xl hover:text-white transition duration-100 "
            >
              <div>{icon}</div>
              <div>{label}</div>
            </Link>
          );
        })}
      </aside>
      <main className="w-[calc(100vw-230px)] p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};
