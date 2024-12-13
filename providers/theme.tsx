"use client"

import { useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Per https://github.com/pacocoursey/next-themes/issues/231 for "Warning: Extra attributes from the server: data-theme,style with App router"
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

