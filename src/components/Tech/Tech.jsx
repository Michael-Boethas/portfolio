
import Image from "next/image";

export default function Tech({ techData, className}) {
    return (
        <div className="d-flex flex-column align-items-center">
            <Image
                className={`tech__img ${className}`}
                src={techData.icon_url}
                alt={techData.name}
                width={300}
                height={300}
            />
            <p className="fs-6 fw-bold">{techData.name}</p>
        </div >
    );
}