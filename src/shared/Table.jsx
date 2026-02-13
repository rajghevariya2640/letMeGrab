import { RightArrowIcon } from "./Icons";

const thClass = "py-2.5 px-6 font-medium text-left text-gray text-xs";
const headRowClass =
  "border-b border-t border-gray-200 text-left text-gray text-xs";
function Table({
  columns = [],
  children,
  className = "",
  wrapperClassName = "",
  ...props
}) {
  return (
    <div className={`overflow-x-auto -mx-4 lg:-mx-6 ${wrapperClassName}`}>
      <table className={`w-full common-table text-sm ${className}`} {...props}>
        <thead>
          <tr className={headRowClass}>
            {columns.map((col) => (
              <th key={col.key} className={thClass}>
                {col.sortable ? (
                  <span className="inline-flex items-center gap-2.5">
                    {col.label}
                    <RightArrowIcon
                      size={12}
                      className="rotate-90"
                      color="var(--color-gray)"
                    />
                  </span>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
export default Table;
