"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoading from "@/components/PageLoading";

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const [navState, setNavState] = useState<{
    fromPath: string;
    showFull: boolean;
  } | null>(null);

  const isNavigating = navState !== null && navState.fromPath === pathname;

  useEffect(() => {
    let fullLoaderTimer: ReturnType<typeof setTimeout> | null = null;
    let safetyResetTimer: ReturnType<typeof setTimeout> | null = null;

    const clearTimers = () => {
      if (fullLoaderTimer) clearTimeout(fullLoaderTimer);
      if (safetyResetTimer) clearTimeout(safetyResetTimer);
      fullLoaderTimer = null;
      safetyResetTimer = null;
    };

    const handleDocumentClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as Element | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      if (
        (anchor.target && anchor.target !== "_self") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      let nextUrl: URL;
      try {
        nextUrl = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      if (nextUrl.origin !== window.location.origin) return;

      const currentPath = window.location.pathname;
      if (nextUrl.pathname === currentPath) return;

      clearTimers();
      setNavState({ fromPath: currentPath, showFull: false });

      fullLoaderTimer = setTimeout(() => {
        setNavState((prev) =>
          prev && prev.fromPath === currentPath
            ? { ...prev, showFull: true }
            : prev,
        );
      }, 65);

      safetyResetTimer = setTimeout(() => {
        setNavState(null);
      }, 8000);
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      clearTimers();
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  if (!isNavigating) return null;

  if (!navState.showFull) {
    return (
      <div
        aria-hidden="true"
        className="fixed top-16 inset-x-0 z-50 h-1 overflow-hidden bg-primary/15 pointer-events-none"
      >
        <div className="h-full w-2/5 rounded-full bg-linear-to-r from-primary via-blue-500 to-brand-orange animate-fiber-progress" />
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-background/95 backdrop-blur-xl">
      <PageLoading />
    </div>
  );
}
