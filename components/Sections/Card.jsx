import cn from "@/lib/cn";

function Card({ children, className, active }) {
  return (
    <div
      className={cn(`card w-96 rounded bg-base-100 shadow-xl`, className, {
        "bg-opacity-70": active,
      })}
    >
      <div className="card-body px-2 py-1">{children}</div>
    </div>
  );
}

export default Card;
