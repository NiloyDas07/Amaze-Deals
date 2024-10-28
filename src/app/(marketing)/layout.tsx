import { ReactNode } from "react";
import { Navbar } from "./_components";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-highlight">
      <Navbar />
      {children}
    </div>
  );
}
