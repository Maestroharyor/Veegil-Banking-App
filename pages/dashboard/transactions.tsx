import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Transactions: NextPage = () => {
  return (
    <DashboardLayout title="My Transactions">
      <div className="">Transactions</div>
    </DashboardLayout>
  );
};

export default Transactions;
