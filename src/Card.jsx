export default function Card({ src, name, content, mTop }) {
  return (
    <div
      className={`relative flex flex-col bg-white pt-16 px-12 pb-4 rounded-lg w-full max-w-[30rem] ${mTop}`}
    >
      <div className="border bg-blue-700 rounded-full p-5 absolute top-[-2rem]">
        <img src={src} alt={name} className="w-12 h-auto" />
      </div>
      <h1 className="text-4xl font-bold mt-8 text-blue-900">{name}</h1>
      <p className="text-2xl text-slate-500 mt-4 leading-[36px]">{content}</p>
    </div>
  );
}
