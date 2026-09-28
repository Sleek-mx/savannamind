"use client";

import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import confetti from "canvas-confetti";
import type {
  CreateTypes as ConfettiInstance,
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
} from "canvas-confetti";

import { Button, ButtonProps } from "@/components/ui/button";

export interface ConfettiRef {
  fire: (options?: ConfettiOptions) => void;
}

export type ConfettiContextType = {
  fire: (options?: ConfettiOptions) => void;
};

export const ConfettiContext = createContext<ConfettiContextType>({} as ConfettiContextType);

export interface ConfettiProps extends React.ComponentPropsWithRef<"canvas"> {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
  children?: React.ReactNode;
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>((props, ref) => {
  const {
    options,
    globalOptions = { resize: true, useWorker: true },
    manualstart = false,
    children,
    ...rest
  } = props;
  const instanceRef = useRef<ConfettiInstance | null>(null);

  const canvasRef = useCallback(
    (node: HTMLCanvasElement | null) => {
      if (node !== null) {
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true,
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions]
  );

  const fire = useCallback(
    (opts: ConfettiOptions = {}) => {
      try {
        if (instanceRef.current) {
          instanceRef.current({ ...options, ...opts });
        } else {
          confetti({ ...options, ...opts });
        }
      } catch {
        // Safe fallback in headless/SSR test environments
      }
    },
    [options]
  );

  const api = useMemo(
    () => ({
      fire,
    }),
    [fire]
  );

  useImperativeHandle(ref, () => api, [api]);

  useEffect(() => {
    if (!manualstart) {
      fire();
    }
  }, [manualstart, fire]);

  return (
    <ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest} />
      {children}
    </ConfettiContext.Provider>
  );
});

Confetti.displayName = "Confetti";

export interface ConfettiButtonProps extends ButtonProps {
  options?: ConfettiOptions &
    ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
  children?: React.ReactNode;
}

export const ConfettiButton = ({
  options,
  children,
  onClick,
  ...props
}: ConfettiButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    } catch {
      // Safe fallback if window or canvas-confetti context is missing
    }
    onClick?.(event);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

ConfettiButton.displayName = "ConfettiButton";

export function ConfettiButtonDemo() {
  return (
    <div className="relative">
      <ConfettiButton>Confetti 🎉</ConfettiButton>
    </div>
  );
}

export { confetti };
export default Confetti;
