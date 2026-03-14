import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen w-full items-start">
      <div className="flex flex-col sticky top-0 h-screen w-5/12 py-24 px-32">
        {/* TODO: replace text-colour with values from globals */}
        {/* TODO: can these be separate files? */}
        <h1 className="max-w-xs mb-2 text-5xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
          Varun Chadha
        </h1>

        <h2 className="max-w-xs my-2 text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Software Engineer
        </h2>

        <p className="mt-4 max-w-xs leading-normal">WHAT I DO</p>
      </div>

      <div className="flex flex-col w-7/12 overflow-y-auto py-24 px-32">

      </div>
    </main>
  );
}
