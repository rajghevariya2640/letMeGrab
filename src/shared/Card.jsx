function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-[10px] bg-white p-4 sm:p-6 overflow-hidden ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
