export default function Navbar({ connected }) {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-200">
      <div
        className={`w-4 h-4 rounded-full transition-all duration-300 ${connected ? 'bg-green-500' : 'bg-red-500'}`}
      />
      <div>za</div>
    </div>
  );
}
