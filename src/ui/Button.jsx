import { Link } from "react-router";

function Button({ children, disabled, to, type = "normal", onClick }) {
  const baseClassName =
    "text=stone-800 text-sm inline-block rounded-full bg-yellow-400  font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const style = {
    normal: " px-4 py-3 sm:px-6 sm:py-4 ",
    small: " px-4 py-2 sm:px-5 sm:py-2.5 text-xs",
    round: " px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm",
    secondary:
      "text-stone-400 text-sm inline-block rounded-full border-2 border-stone-300  text-stone-400 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-stone-300 focus:ring focus:bg-stone-300ؤ focus:ring-stone-200 focus:ring-offset-2 hover:text-stone-800 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5 ",
  };

  const className =
    type == "secondary" ? style[type] : baseClassName + style[type];

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button
        onClick={(e) => onClick?.(e)}
        className={className}
        disabled={disabled}
      >
        {children}
      </button>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
