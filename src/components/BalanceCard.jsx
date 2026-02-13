import Card from "../shared/Card";
import Button from "../shared/Button";
import { DotsIcon, TopUpIcon, TransferIcon } from "../shared/Icons";

function BalanceCard() {
  return (
    <Card className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-dark-gray">Your balance</h3>
        <Button
          variant="ghost"
          size="icon"
          aria-label="More options"
          className="bg-transparent"
        >
          <DotsIcon />
        </Button>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-[32px] font-bold text-dark-gray mb-4 flex items-end gap-2.5">
          $120,435.00{" "}
          <span className="text-sm font-semibold text-gray inline-block mb-2.5">
            (USD)
          </span>
        </p>
        <p className="text-xs text-gray mb-10 font-semibold">
          From Jan 01, 2022 to Jan 31, 2022
        </p>
        <div className="flex xl:flex-col 2xl:flex-row gap-4 3xl:gap-6 mt-auto">
          <Button
            variant="default"
            size="default"
            className="flex items-center gap-3 px-2! w-full"
          >
            <TopUpIcon size={24} />
            Top Up
          </Button>
          <Button
            variant="outline"
            size="default"
            className="flex items-center gap- px-2!3 w-full"
          >
            <TransferIcon />
            Transfer
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default BalanceCard;
