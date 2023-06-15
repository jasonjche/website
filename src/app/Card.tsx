type CardProps = {
  title?: string;
  className?: string;
  style?: React.CSSProperties; // <-- add this line
  children: React.ReactNode;
};

export function Card({ title, className, children } : CardProps) {
  return (
    <div className={`bg-gray-100 rounded-2xl p-4 box-border ${className}`}>
      {title && <h2 className="text-l text-center font-medium pb-2">{title}</h2>}
      {children}
    </div>
  );
}
