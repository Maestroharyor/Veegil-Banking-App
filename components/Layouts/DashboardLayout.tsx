import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("../Headers/Mainheader"));

const MobileHeader = dynamic(() => import("../Headers/Mobileheader"));

import Metadata from "../Headers/Partials/Metadata";
import Sidebar from "../Partials/Sidebar";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <div className="min-h-[100vh] bg-gray-100 md:grid md:grid-cols-12">
        <Sidebar />
        <main className="md:col-span-9 lg:col-span-10 h-full">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default DefaultLayout;
