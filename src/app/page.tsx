"use client";

import Button from "./components/ui/Button";
import "../styles/globals.scss";

export default function Home() {
  return (
    <div className="container">
      <Button text="Click me" onClick={() => console.log("Button clicked")} disabled={false} />
      <Button type="secondary" text="Click me" onClick={() => console.log("Button clicked")} disabled={false} />
      <Button type="accent" text="Click me" onClick={() => console.log("Button clicked")} disabled={false} />
    </div>
  );
}
