import Link from "next/link"

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
                Logo
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