
import Image from "next/image";

export default function Tech({ techData }) {
    return (
        <div className="d-flex flex-column align-items-center">
            <Image 
            className=""
            src={techData.icon_url}
            alt={techData.name}
            width={100}
            height={100}
            layout="intrinsic"
            />
            <p>{techData.name}</p>
        </div >
    );
}