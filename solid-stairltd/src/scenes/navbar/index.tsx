import { useState } from "react"; 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
  selectedPage: SelectedPage; 
  setSelectedPage: (value: SelectedPage) => void; 
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return <nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left side */}
          <img alt="logo" src={Logo} />

          {/* Right side */}
         {isAboveMediumScreens ? ( 
         
         <div className={`${flexBetween} w-3/5`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link 
                page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page="About us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8 text-sm`}>
                <ActionButton setSelectedPage={setSelectedPage}>Join Us</ActionButton>
            </div>
          </div> ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggle(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
        </div>
      </div>
    </div>


    {/* Mobile menu modal */}

    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* close icon */}
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggle(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    )}
  </nav>
}

export default Navbar