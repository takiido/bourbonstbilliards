"use client";

import Button from "./components/ui/Button";
import "../styles/globals.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      <Button text="Click me" onClick={handleThemeChange} disabled={false} />
      <Button type="secondary" text="Click me" onClick={() => console.log("Button clicked")} disabled={false} />
      <Button type="accent" text="Click me" onClick={() => console.log("Button clicked")} disabled={false} />
    </div>
  );
}
