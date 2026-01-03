"use client";

import { MouseEvent, ReactNode, useState } from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function RippleButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
}: RippleButtonProps) {
  const [rippleKey, setRippleKey] = useState(0);

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Avoid React inline styles: set CSS vars directly on the element.
    button.style.setProperty("--ripple-x", `${x}px`);
    button.style.setProperty("--ripple-y", `${y}px`);
    button.style.setProperty("--ripple-size", "20px");
    setRippleKey(Date.now());

    onClick?.();
  };

  // Make width utilities (e.g. w-full) work by default on both <a> and <button>
  const baseClassName = `relative inline-flex items-center justify-center overflow-hidden ui-motion ui-motion-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${disabled ? "opacity-70 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        onClick={createRipple}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
        {rippleKey ? (
          <span
            key={rippleKey}
            className="absolute bg-white/20 rounded-full animate-ripple pointer-events-none ui-ripple-bubble"
          />
        ) : null}
      </a>
    );
  }

  return (
    <button type={type} className={baseClassName} onClick={createRipple} disabled={disabled}>
      {children}
      {rippleKey ? (
        <span
          key={rippleKey}
          className="absolute bg-white/20 rounded-full animate-ripple pointer-events-none ui-ripple-bubble"
        />
      ) : null}
    </button>
  );
}
