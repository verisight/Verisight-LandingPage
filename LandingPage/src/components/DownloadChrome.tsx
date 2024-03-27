// import { Radar } from "lucide-react";

// interface SponsorProps {
//   icon: JSX.Element;
//   name: string;
// }

// const sponsors: SponsorProps[] = [
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 1",
//   },
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 2",
//   },
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 3",
//   },
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 4",
//   },
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 5",
//   },
//   {
//     icon: <Radar size={34} />,
//     name: "Sponsor 6",
//   },
// ];

// export const Sponsors = () => {
//   return (
//     <section
//       id="sponsors"
//       className="container pt-24 sm:py-32"
//     >
//       <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
//         Investors and founders
//       </h2>

//       <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
//         {/* {sponsors.map(({ icon, name }: SponsorProps) => (
//           <div
//             key={name}
//             className="flex items-center gap-1 text-muted-foreground/60"
//           >
//             <span>{icon}</span>
//             <h3 className="text-xl  font-bold">{name}</h3>
//           </div>
//         ))} */}
//       </div>
//     </section>
//   );
// };

import laptop from "../assets/laptop.png";
import { buttonVariants } from "./ui/button";
// import {Chrome} from 'lucide-react';
import chromeLogo from "../assets/chrome.png";

export const DownloadChrome = () => {
  return (
    <section className="py-10 bg-[#181818]">
      <div className="container grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-4xl md:text-4xl font-bold">
            Check wherever,
            <br className="md:hidden" />
            <span className="md:block">whenever</span>
          </h2>

          <p className="text-lg mt-4 mb-6">
            With our browser extension, online readers can assess the<br></br>
            credibility of articles - on the go.
          </p>

          <div className="">
            <p className="text-sm pb-2">DOWNLOAD FOR CHROME</p>
          </div>

          <div className="space-y-4 w-[525px] md:space-y-0 md:space-x-4">
            <a
              href="https://chromewebstore.google.com/detail/verisight/hakkkgoancaobbmlmngfclkdggkdnolk"
              target="_blank"
              className={`w-full md:w-1/3 gap-2 font-semibold bg-white text-black ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              {/* <Chrome className="w-5 h-5 mr-3" /> */}
              <img src={chromeLogo} className="w-5 h-5" alt="Chrome Logo" />
              Install for Chrome
            </a>
          </div>
        </div>

        <img
          src={laptop}
          className="w-[300px] md:w-[500px] lg:w-[400px] object-contain"
          alt="Laptop"
        />
      </div>
    </section>
  );
};
