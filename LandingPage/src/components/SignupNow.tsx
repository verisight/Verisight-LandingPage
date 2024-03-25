// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

// interface FeatureProps {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// const features: FeatureProps[] = [
//   {
//     icon: <MedalIcon />,
//     title: "Accesibility",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <MapIcon />,
//     title: "Community",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <PlaneIcon />,
//     title: "Scalability",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <GiftIcon />,
//     title: "Gamification",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
// ];

// export const HowItWorks = () => {
//   return (
//     <section
//       id="howItWorks"
//       className="container text-center py-24 sm:py-32"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold ">
//         How It{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Works{" "}
//         </span>
//         Step-by-Step Guide
//       </h2>
//       <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit!
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map(({ icon, title, description }: FeatureProps) => (
//           <Card
//             key={title}
//             className="bg-muted/50"
//           >
//             <CardHeader>
//               <CardTitle className="grid gap-4 place-items-center">
//                 {icon}
//                 {title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>{description}</CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };


import clock from "../assets/Clock.png";
import { buttonVariants } from "./ui/button";

export const SignupNow = () => {
  return (
    <section className="py-10">
      <div className="bg-[#D9D9D9]">
        <div className="container grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
          <img
            src={clock}
            className="w-[300px] md:w-[500px] lg:w-[400px] object-contain"
            alt="Clock"
          />
        
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Save hours on filtering
              <br className="md:hidden" />
              <span className="md:block">misinformed news everyday</span>
            </h2>

            <p className="text-xl mt-4 mb-8 text-gray-500">
              Sign up for a free account now.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="https://auth.verisightlabs.com/signup"
                target="_blank"
                className={`w-full md:w-1/3 bg-white text-black ${buttonVariants({
                  variant: "outline",
                })}`}
              >
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
