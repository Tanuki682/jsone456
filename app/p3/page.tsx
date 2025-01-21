import Image from "next/image";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-700 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl  "> Page 3 DT</h1>
            <Image className="mx-auto" src="/DT.jpg" width={600} height={600} alt="DT" ></Image>
           
        </div>
    );
}