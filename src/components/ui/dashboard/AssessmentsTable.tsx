import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BentoBox from "./BentoBox";
import noData from "../../../assets/images/empty-table.png";

const topics = [
  {
    sn: "001",
    topic: "Comprehension - Main and Supporting Ideas",
    score: "12%",
    status: "Ongoing",
  },
  {
    sn: "002",
    topic: "Grammar - Parts of Speech",
    score: "15%",
    status: "Ongoing",
  },
  {
    sn: "003",
    topic: "Writing - Formal and Informal Letters",
    score: "16%",
    status: "Ongoing",
  },
  {
    sn: "004",
    topic: "Literature - Figures of Speech",
    score: "20%",
    status: "Ongoing",
  },
  // {
  //   invoice: "INV002",
  //   paymentStatus: "Pending",
  //   totalAmount: "$150.00",
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV003",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$350.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Credit Card",
  // },
  // {
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: "$550.00",
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: "$200.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$300.00",
  //   paymentMethod: "Credit Card",
  // },
];

// const invoices = undefined;

const ActivitiesTable = () => {
  return (
    <BentoBox>
      <h2 className="mb-4 font-semibold leading-5 z-20">Recommended topics</h2>

      <Table className="table-fixed  min-w-150">
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead className="w-2/5">Topic</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {topics ? (
            topics.map((topic) => (
              <TableRow key={topic.sn}>
                <TableCell className="font-medium">{topic.sn}</TableCell>
                <TableCell className="w-2/5 truncate">
                  {topic.topic}
                </TableCell>
                <TableCell>{topic.score}</TableCell>
                <TableCell>{topic.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="w-full" colSpan={4}>
                <div className="w-full flex items-center flex-col gap-4 pb-8 pt-6">
                  <p className="text-gray-6 text-sm font-medium leading-5">
                    No Assessment taken yet
                  </p>
                  <img src={noData} alt="No Assessments" />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </BentoBox>
  );
};

export default ActivitiesTable;
