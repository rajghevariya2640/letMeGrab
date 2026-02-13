import Button from "../shared/Button";
import Card from "../shared/Card";
import {
  BankTransferIcon,
  CalendarIcon,
  FigmaIcon,
  PaypalIcon,
} from "../shared/Icons";
import Table from "../shared/Table";

const columns = [
  { key: "transactions", label: "Transactions" },
  { key: "date", label: "Date", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

const transactions = [
  {
    id: 1,
    name: "Bank Transfer",
    date: "Jan 01, 2022",
    amount: "2,000.00",
    status: "Completed",
    statusColor: "bg-success",
    statusLightBg: "bg-success/20",
    icon: BankTransferIcon,
  },
  {
    id: 2,
    name: "Paypal Account",
    date: "Jan 04, 2022",
    amount: "2,000.00",
    status: "Pending",
    statusColor: "bg-warning",
    statusLightBg: "bg-warning/20",
    icon: PaypalIcon,
  },
  {
    id: 3,
    name: "Bank Transfer",
    date: "Jan 06, 2022",
    amount: "2,000.00",
    status: "On Hold",
    statusColor: "bg-danger",
    statusLightBg: "bg-danger/20",
    icon: FigmaIcon,
  },
];

function TransactionHistory() {
  return (
    <Card className="pb-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h3 className="text-base font-semibold text-dark-gray">
          Transaction History
        </h3>
        <Button
          variant="outline"
          className="flex items-center gap-2 w-fit border! border-gray-100! py-2! px-4! text-xs! font-semibold rounded-md!"
        >
          <CalendarIcon size={18} />1 Jan - 1 Feb 2022
        </Button>
      </div>
      <Table columns={columns}>
        {transactions.map((tx) => {
          return (
            <tr key={tx.id} className="text-sm font-semibold text-dark-gray">
              <td>
                <div className="flex items-center gap-2.5">
                  <tx.icon size={36} />
                  <span className="">{tx.name}</span>
                </div>
              </td>
              <td>{tx.date}</td>
              <td>${tx.amount}</td>
              <td>
                <div className="inline-flex items-center gap-2">
                  <div className={`p-1 rounded-full ${tx.statusLightBg}`}>
                    <span
                      className={`w-2 h-2 block rounded-full ${tx.statusColor}`}
                    />
                  </div>
                  <span className="text-xs font-semibold">{tx.status}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </Table>
    </Card>
  );
}

export default TransactionHistory;
