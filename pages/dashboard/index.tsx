import type { NextPage } from "next";
import Link from "next/link";

// Components
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FaWallet, FaPlus } from "react-icons/fa";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="My Dashboard">
      <div className=" py-5 px-6">
        <div>
          <h2 className="text-4xl font-bold mb-3">Welcome User </h2>
          <p className="text-xl">
            Check your activity with the quick online banking. Create your new
            way of management.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-5 my-10">
          <div className="bg-white rounded-xl p-5 shadow md:col-span-8 flex flex-col flex-wrap md:flex-row items-center gap-5 justify-between">
            <div>
              <p className="font-medium text-gray-700">Current Balance</p>
              <p className="font-bold text-5xl mt-2 mb-1">$0.00</p>
              <p className="text-md text-gray-500">Total Amount Left</p>
            </div>

            <button className="bg-[#3182ce] hover:bg-[#2b6cb0] transition duration-300 ease-in-out inline-flex items-center gap-3  text-white px-5 py-2 rounded">
              <span>Make a new Transactions</span>
              <FaPlus />
            </button>
          </div>
          <div className="bg-white rounded-xl p-5 shadow md:col-span-4 flex flex-col justify-center gap-1">
            <p className="text-gray-500">Account Type</p>
            <p className="font-bold text-5xl">Savings</p>
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 shadow ">
          <h3 className="text-4xl font-bold mb-5">Most Recent Transactions</h3>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Transaction Type</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Currency</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>
                    {" "}
                    <span className="rounded-full bg-gray-100 py-1 px-2 inline-block font-bold mr-3 text-blue-600">
                      $
                    </span>{" "}
                    <span>Dollar USD</span>
                  </Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                  <Td>
                    {" "}
                    <span className="rounded-full bg-gray-100 py-1 px-2 inline-block font-bold mr-3 text-blue-600">
                      $
                    </span>{" "}
                    <span>Dollar USD</span>
                  </Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                  <Td>
                    {" "}
                    <span className="rounded-full bg-gray-100 py-1 px-2 inline-block font-bold mr-3 text-blue-600">
                      $
                    </span>{" "}
                    <span>Dollar USD</span>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Date</Th>
                  <Th>Transaction Type</Th>
                  <Th isNumeric>Amount</Th>
                  <Td>
                    {" "}
                    <span className="rounded-full bg-gray-100 py-1 px-2 inline-block font-bold mr-3 text-blue-600">
                      $
                    </span>{" "}
                    <span>Dollar USD</span>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Link href={"/dashboard/transactions"}>
            <a className="text-white bg-blue-500 hover:bg-blue-600 rounded px-5 py-2 flex items-center justify-center transition duration-300 ease-in-out cursor-pointer mt-5">
              <p className="inline-flex items-center  text-lg gap-3">
                <FaWallet />
                <span>See All Transactions</span>
              </p>
            </a>
          </Link>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
