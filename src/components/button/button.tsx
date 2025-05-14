import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant ?: TVariant;
};

export default function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button {...rest} style={{padding: "4px 8px", borderRadius: "6px" ...style, ...checkVariant(variant) }}>
      {children}
    </button>
  );
}

function checkVariant(variant?: TVariant) {
  if (variant == "primary") {
    return { backgroundColor: "#008bff", color: "white" };
  } else if (variant == "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant == "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant == "warning") {
    return { backgroundColor: "yellow", color: "white" };
  } else if (variant == "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
