import Link from "next/link";
import { useRouter } from "next/router";

// Components
import {
  FaPiggyBank,
  FaTachometerAlt,
  FaWallet,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    link: "/dashboard",
  },
  {
    title: "All Transactions",
    icon: <FaPiggyBank />,
    link: "/dashboard/transactions",
  },
  {
    title: "Deposits",
    icon: <FaWallet />,
    link: "/dashboard/deposits",
  },
  {
    title: "Withdrawals",
    icon: <FaMoneyBillWave />,
    link: "/dashboard/withdrawals",
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <aside className="md:col-span-3 lg:col-span-2 bg-white h-full md:block py-8 hidden rounded-r-2xl shadow relative">
        <div className="flex flex-col gap-5 sticky top-8">
          <div className="px-3">
            <Link href={"/"}>
              <a className="text-white bg-blue-500 hover:bg-blue-600 rounded-xl px-3 py-4 flex items-center justify-center transition duration-300 ease-in-out">
                <h1 className="inline-flex items-center  text-2xl font-bold gap-3">
                  <FaPiggyBank />
                  <span>Veegil</span>
                </h1>
              </a>
            </Link>
          </div>

          <div className=" flex flex-col gap-3 pt-4">
            {sidebarLinks.map((sidebar) => (
              <Link key={sidebar.title} href={sidebar.link}>
                <a
                  className={`text-gray-600 items-center flex gap-3 w-full px-8 hover:text-blue-600 hover:border-r-4 hover:border-blue-500  transition duration-300 ease-in-out py-2 ${
                    router.pathname === sidebar.link
                      ? "border-r-4 border-blue-500 text-blue-500 bg-gray-50"
                      : ""
                  }`}
                >
                  {" "}
                  <span>{sidebar.icon}</span> <span>{sidebar.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <button className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out hidden md:inline-flex items-center gap-3 fixed bottom-[20px] left-[20px] text-white px-5 py-2 rounded">
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      </aside>
      <nav className="flex md:hidden px-5 py-2 justify-between items-center bg-white sticky top-0">
        <Link href={"/"}>
          <a className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
            <h1 className="inline-flex items-center  text-2xl font-bold gap-3">
              <FaPiggyBank />
              <span>Veegil</span>
            </h1>
          </a>
        </Link>
        <Menu>
          <MenuButton className="">
            <MdMenu size={30} />
          </MenuButton>
          <MenuList>
            {sidebarLinks.map((sidebar) => (
              <MenuItem key={sidebar.title}>
                <Link href={sidebar.link}>
                  <a
                    className={`text-gray-600 items-center flex gap-3 w-full px-8 hover:text-blue-600 transition duration-300 ease-in-out py-2`}
                  >
                    {" "}
                    <span>{sidebar.icon}</span> <span>{sidebar.title}</span>
                  </a>
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              <button className="text-gray-600 items-center flex gap-3 w-full px-8 hover:text-red-600 transition duration-300 ease-in-out py-2">
                <FaSignOutAlt />
                <span>Log Out</span>
              </button>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </>
  );
};

export default Sidebar;
