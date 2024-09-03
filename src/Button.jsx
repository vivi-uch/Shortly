export default function Button({ name, styling }) {
  return (
    <div
      className={`flex px-8 py-4 bg-green-900 text-white font-bold text-[24px] ${styling}`}
    >
      {name}
    </div>
  );
}
