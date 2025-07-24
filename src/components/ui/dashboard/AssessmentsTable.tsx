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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid ohefio owhf oifj p eifhe oiheihwf oihefoi iheifn opef",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

// const invoices = undefined;

const ActivitiesTable = () => {
  return (
    <BentoBox>
      <h2 className="mb-4 font-semibold leading-5">My Assessments</h2>

      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead className="w-2/5">Topic</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices ? (
            invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell className="w-2/5 truncate">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
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
