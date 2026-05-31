import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";

import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { useState, useEffect } from "react";


const Header = () => {
  const [showSignIn, setshowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();

  useEffect(()=>{
    if(search.get('sign-in')){
      setshowSignIn(true);
    }
  },[search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget){
      setshowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-16 rounded-full" alt="Logo"/>
        </Link>



        <div className="flex gap-4">
          <SignedOut>
            <Button variant="outline" onClick={() => setshowSignIn(true)}>
              Login
            </Button>

          </SignedOut>



          <SignedIn>
            {/* add a condition here */}
            <Button variant="destructive" className="rounded-full">
               
            <Link to="/post-job" className="flex items-center">
                <PenBox size={20} className="mr-2" />
                Post a job
            </Link>
            </Button>
            <UserButton appearance={{
              elements:{
                avatarBox:"w-10 h-10",
              },
            }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15}/>}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15}/>}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
        <SignIn
        signUpForceRedirectUrl="/onboarding"
        fallbackRedirectUrl="/onboarding"
        />
      </div>)}
    </>
  );
};

export default Header;