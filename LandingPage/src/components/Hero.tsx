// import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Chrome, ChevronDown } from "lucide-react";
import backgroundImage from "../assets/bg.png"; // Import the background image

export const Hero = () => {
  return (
    // <section className="flex justify-center items-center py-20 md:py-32 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <section
      className="flex h-[650px] justify-center items-center py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="text-center leading-normal">
            Don't believe everything you read.
          </h1>{" "}
          <h2 className="text-center">Verify it with Verisight</h2>
        </main>

        <div className="text-center pb-3">
          <p className="text-xl font-semibold">
            Navigating Online News with Clarity
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 text-center">
          <a
            href="https://chromewebstore.google.com/detail/verisight/hakkkgoancaobbmlmngfclkdggkdnolk"
            target="_blank"
            className={`w-full md:w-1/4 gap-2 bg-white font-bold text-black ${buttonVariants(
              {
                variant: "outline",
              }
            )}`}
          >
            <Chrome className="w-5 h-5" />
            Install for Chrome
          </a>
        </div>
        <div className="text-center flex items-center justify-center pt-8">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </div>

      {/* Hero cards sections
      <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
