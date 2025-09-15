import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
  visibility?: boolean;
};

function Input({ className, type, visibility = false, ...props }: InputProps) {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div className="relative">
      <input
        type={type === "password" && show ? "text" : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-5 py-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {visibility &&
        (show ? (
          <EyeIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60"
            onClick={() => setShow(!show)}
          />
        ) : (
          <EyeOffIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-1/60"
            onClick={() => setShow(!show)}
          />
        ))}
    </div>
  );
}

export { Input };
