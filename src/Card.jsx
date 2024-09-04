export default function Card({ src, name, content, mTop }) {
  return (
    <div
      className={`relative flex flex-col bg-white pt-4 px-4 md:px-8 pb-4 rounded-lg w-full max-w-[18rem] md:max-w-[20rem] ${mTop}`}
    >
      <div className="border bg-blue-700 rounded-full p-3 md:p-4 absolute top-[-2rem]">
        <img src={src} alt={name} className="w-6 h-auto md:w-8" />
      </div>
      <h1 className="text-lg md:text-xl font-bold mt-8 text-blue-900">
        {name}
      </h1>
      <p className="text-sm text-slate-500 mt-4 leading-[20px] md:leading-[24px]">
        {content}
      </p>
    </div>
  );
}
