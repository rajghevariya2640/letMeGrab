function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-[10px] bg-white p-6 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
