//next
import Link from "next/link";

//components
import { Button } from "@/components/ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Olivier<span className="text-accent">.</span></h1>
        </Link>


        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
          <Button>
            Embauchez-moi
          </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className=" xl:hidden flex items-center gap-8">
           <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;