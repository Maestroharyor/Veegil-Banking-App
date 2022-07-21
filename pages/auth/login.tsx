import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

const Login: NextPage = () => {
  return (
    <DefaultLayout title="Login to your Account">
      <div>Login</div>
    </DefaultLayout>
  );
};

export default Login;
