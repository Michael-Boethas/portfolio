import Image from 'next/image';

export default function Tech({ techData, className }) {
  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <Image
        className={`tech__img ${className}`}
        src={techData.icon_url}
        alt={""}
        width={300}
        height={300}
      />
      <p className="fs-6 fw-bold fst-italic">{techData.name}</p>
    </div>
  );
}
