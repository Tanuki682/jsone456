import Link from "next/link"
import Image from "next/image";

const menus = [
    {name: "home",path: "#"},
    {name: "about us",path: "#"},
    {name: "page1",path: "page1"},
    {name: "page2",path: "page2"},
    {name: "page3",path: "page3"},
   
]

export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-gray-400">
            <div>
                <Image src={"/logo.png"} width={100} height={100 } alt={""}></Image>
            </div>
            <div>
            <ul className="flex gap-x-6">
    {menus.map((menu, index) => (
        <li key={index}>
            <Link href={menu.path}>{menu.name}</Link>
        </li>
    ))}
</ul>
            </div>
         
           
        </div>
    );
}