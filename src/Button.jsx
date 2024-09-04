export default function Button({ name, styling }) {
  return (
    <div
      className={`flex px-6 py-2 bg-green-900 text-white font-bold text-[14px] md:text-[16px] ${styling}`}
    >
      {name}
    </div>
  );
}
