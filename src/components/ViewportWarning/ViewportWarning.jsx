export default function ViewportWarning() {
  return (
    <div className="viewport-warning alert alert-warning mt-5 fs-4 text-center">
      <div className="d-flex flex-column align-items-center">
        <i className="bi bi-exclamation-octagon p-4 fs-1"></i>
        <span>This website is not optimized for screens under 320px wide</span>
      </div>
    </div>
  );
}
