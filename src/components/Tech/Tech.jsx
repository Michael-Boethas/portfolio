import Image from 'next/image';

export default function Tech({ techData }) {
  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <i className={techData.icon_light}></i>

      <p className="fs-6 fw-bold fst-italic">{techData.name}</p>
    </div>
  );
}
