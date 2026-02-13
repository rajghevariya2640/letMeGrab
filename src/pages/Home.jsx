import SpendingChart from "../components/SpendingChart";
import BalanceCard from "../components/BalanceCard";
import IncomeExpenseCards from "../components/IncomeExpenseCards";
import SpendByCategoryChart from "../components/SpendByCategoryChart";
import TransactionHistory from "../components/TransactionHistory";

function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:gap-6 gap-4">
        <div className="xl:col-span-2 flex flex-col md:gap-6 gap-4">
          <SpendingChart />
          <IncomeExpenseCards />
          <TransactionHistory />
        </div>
        <div className="flex flex-col md:gap-6 gap-4">
          <BalanceCard />
          <SpendByCategoryChart />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Home;
