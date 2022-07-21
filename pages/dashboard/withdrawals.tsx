import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Withdrawals: NextPage = () => {
  return (
    <DashboardLayout title="My Withdrawals">
      <div className="">Withdrawals</div>
    </DashboardLayout>
  );
};

export default Withdrawals;
