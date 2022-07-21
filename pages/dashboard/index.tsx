import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="My Dashboard">
      <div className="">Dashboard</div>
    </DashboardLayout>
  );
};

export default Dashboard;
