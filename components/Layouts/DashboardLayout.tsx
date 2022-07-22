import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("../Headers/Mainheader"));

const MobileHeader = dynamic(() => import("../Headers/Mobileheader"));

import Metadata from "../Headers/Partials/Metadata";
import Sidebar from "../Partials/Sidebar";
import { FaPlus } from "react-icons/fa";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <div className="min-h-[100vh] bg-gray-100 md:grid md:grid-cols-12 ">
        <Sidebar />
        <main className="md:col-span-9 lg:col-span-10 h-full p-5">
          {props.children}
        </main>

        <button className="fixed bottom-[40px] right-[40px] shadow-lg rounded-full h-[50px] w-[50px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white animate-bounce border border-white border-2">
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default DefaultLayout;
