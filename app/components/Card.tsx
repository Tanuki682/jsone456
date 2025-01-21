import Link from "next/link";
import Image from "next/image";

export default function Card({ src, title } :{src: string ,title :string}) {
    return (
        <div className="flex gap-x-6">
            <Image src={src} width={100} height={100} alt={title} />
            <div>{title}</div>
            <div><Link href="#">Click</Link></div>
            
        </div>
    );
}