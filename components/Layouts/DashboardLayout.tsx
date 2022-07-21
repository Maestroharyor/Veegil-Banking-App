import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("../Headers/Mainheader"));

const MobileHeader = dynamic(() => import("../Headers/Mobileheader"));

import Metadata from "../Headers/Partials/Metadata";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <div className="min-h-[100vh] bg-gray-100 grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-2 bg-white h-full">Hello</div>
        <div className="md:col-span-10 h-full">{props.children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
