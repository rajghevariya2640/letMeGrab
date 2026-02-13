import Card from "../shared/Card";
import { ArrowUpIcon, ArrowDownIcon } from "../shared/Icons";

function IncomeExpenseCards() {
  return (
    <Card className="flex  p-6">
      <div className="w-full">
        <div className="flex gap-2  justify-between">
          <h3 className="text-base font-semibold text-dark-gray">
            Total Income
          </h3>
          <div className="w-[42px] h-[42px] rounded-lg bg-background flex items-center justify-center">
            <ArrowUpIcon size={24} color="var(--color-success)" />
          </div>
        </div>
        <p className="text-[32px] font-bold text-dark-gray mb-3.5 flex items-end gap-2.5">
          $50,530.00
          <span className="text-sm font-semibold text-gray inline-block mb-2.5">
            (USD)
          </span>
        </p>
        <p className="text-sm text-gray font-semibold">
          <span className="text-sm font-bold text-success inline-block mr-1">
            20%
          </span>
          increase compared to last week
        </p>
      </div>

      <span className="w-px h-full mx-6 bg-gray-300"></span>

      <div className="w-full">
        <div className="flex gap-2  justify-between">
          <h3 className="text-base font-semibold text-dark-gray">
            Total Income
          </h3>
          <div className="w-[42px] h-[42px] rounded-lg bg-background flex items-center justify-center">
            <ArrowDownIcon size={24} color="var(--color-success)" />
          </div>
        </div>
        <p className="text-[32px] font-bold text-dark-gray mb-3.5 flex items-end gap-2.5">
          $19,760.00
          <span className="text-sm font-semibold text-gray inline-block mb-2.5">
            (USD)
          </span>
        </p>
        <p className="text-sm text-gray font-semibold">
          <span className="text-sm font-bold text-danger inline-block mr-1">
            20%
          </span>
          decrease compared to last week
        </p>
      </div>
    </Card>
  );
}

export default IncomeExpenseCards;
