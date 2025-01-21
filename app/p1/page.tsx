import Image from "next/image";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-700 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl "> Page 66162110045-4 Thanawat Noihadhad</h1>
            <Image className="mx-auto" src="/1.jpg" width={500} height={500} alt="elon" ></Image>
        </div>
    );
}