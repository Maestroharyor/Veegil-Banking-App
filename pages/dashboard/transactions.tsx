import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

// Components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Transactions: NextPage = () => {
  return (
    <DashboardLayout title="My Transactions">
      <div className=" py-5 px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-5">All Transactions </h2>
          <button className="bg-[#3182ce] hover:bg-[#2b6cb0] transition duration-300 ease-in-out inline-flex items-center gap-3  text-white px-5 py-2 rounded">
            <span>Make a new Transactions</span>
            <FaPlus />
          </button>
        </div>

        <section className="bg-white rounded-xl p-5 shadow ">
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
            </Table>
          </TableContainer>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
