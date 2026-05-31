import { Link, NavLink, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";

import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import {
  BriefcaseBusiness,
  Heart,
  PenBox,
  Home,
} from "lucide-react";

import { useState, useEffect } from "react";

const Header = () => {
  const [showSignIn, setshowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setshowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setshowSignIn(false);
      setSearch({});
    }
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-red-400 hover:scale-105 ${
      isActive ? "text-white" : "text-gray-300"
    }`;

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            className="h-16 rounded-full"
            alt="Logo"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            <Home size={18} />
            Home
          </NavLink>

          <NavLink to="/jobs" className={navLinkClass}>
            <BriefcaseBusiness size={18} />
            Jobs
          </NavLink>

          <SignedOut>
            <Button
              variant="outline"
              onClick={() => setshowSignIn(true)}
            >
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            <Button
              variant="destructive"
              className="rounded-full transition-transform hover:scale-105"
            >
              <Link
                to="/post-job"
                className="flex items-center gap-2"
              >
                <PenBox size={18} />
                Post a Job
              </Link>
            </Button>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;