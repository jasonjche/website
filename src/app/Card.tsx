export function Card({ title, children }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-4">
      {title && <h2 className="text-3xl font-bold">{title}</h2>}
      {children}
    </div>
  );
}