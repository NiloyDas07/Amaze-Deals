import { BrandLogo } from "@/components";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-6 shadow-xl fixed top-0 w-full z-50 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>

        <Link className="text-lg" href="#features">
          Features
        </Link>

        <Link className="text-lg" href="#pricing">
          Pricing
        </Link>

        <Link className="text-lg" href="#about">
          About
        </Link>

        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>Log In</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
