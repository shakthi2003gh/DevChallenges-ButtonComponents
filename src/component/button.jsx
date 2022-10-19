const Button = ({
  text,
  autoFocus,
  size,
  color,
  disableShadow,
  startIcon,
  endIcon,
  ...rest
}) => {
  const focus = autoFocus ? "focus " : "";
  const shadow = disableShadow ? "no-shadow " : "";
  const btnSize = size ? size + " " : "md ";
  const btnColor = color ? color : "default";
  const btnIcon = startIcon || endIcon ? "icon " : "";

  const iconStart = <span className="material-icons">{startIcon}</span>;
  const iconEnd = <span className="material-icons">{endIcon}</span>;

  const classes = focus + shadow + btnSize + btnIcon;

  return (
    <button {...rest} color={btnColor} className={classes}>
      {startIcon ? iconStart : ""}Default{endIcon ? iconEnd : ""}
    </button>
  );
};

export default Button;
