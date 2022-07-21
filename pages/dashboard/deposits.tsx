import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Deposits: NextPage = () => {
  return (
    <DashboardLayout title="My Deposits">
      <div className="">Deposits</div>
    </DashboardLayout>
  );
};

export default Deposits;
