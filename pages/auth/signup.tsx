import type { NextPage } from "next";
import Link from "next/link";

// Components
import { FaPiggyBank } from "react-icons/fa";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const Signup: NextPage = () => {
  return (
    <DefaultLayout title="Signup to your Account">
      <div className="py-10">
        <div className="mx-auto max-w-[500px] bg-white rounded-lg shadow px-5 py-8 flex flex-col gap-7">
          <div className="text-center flex justify-center items-center flex-col gap-3">
            <FaPiggyBank size={80} className="text-blue-500" />
            <h1 className="text-2xl font-bold">
              Create an account to get started
            </h1>
          </div>
          <form className="flex flex-col gap-5">
            <FormControl isRequired>
              <FormLabel>Full name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="First name" type={"email"} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder="First name" type={"password"} />
            </FormControl>
            <Button
              //   mt={4}
              colorScheme="blue"
              className="w-full"
              //   isLoading={props.isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <Link href={"/auth/login"}>
                <a className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Signup;
