export default function Button({ name, styling }) {
  return (
    <div
      className={`flex px-4 py-2 bg-green-900 text-white font-bold text-[16px] ${styling}`}
    >
      {name}
    </div>
  );
}
