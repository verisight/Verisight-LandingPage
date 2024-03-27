import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin, Github } from "lucide-react";

import Pragash from '../assets/Pragesh.jpg';
import Aashif from '../assets/Aashif.jpg';
import Ishma from '../assets/Ishma.jpg';
import Santosh from '../assets/Santosh.jpeg';
import Tharoosh from '../assets/Tharoosh.jpg';


interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: Pragash,
    name: "Pragash Sasitharan",
    position: "Team Leader",
    description: "You can't see me",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/pragash-sasitharan/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/pragash_.s/",
      },
      {
        name: "Github",
        url: "https://github.com/PPT1001",
      },
    ],
  },

  {
    imageUrl: Aashif,
    name: "Mohamed Aashif",
    position: "Machine Learning Developer",
    description: "You can't see me",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/mohamed-aashif/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/im.aashif/ ",
      },
      {
        name: "Github",
        url: "https://github.com/aashif-m ",
      },
    ],
  },
  {
    imageUrl: Tharoosh,
    name: "Sudesh Tharoosh",
    position: "Web Developer",
    description: "You can't see me",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/sudeshtharoosh/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sudesh_tharoosh?igsh=MWZyZXBiNTZmNDQ1Mw==",
      },
      {
        name: "Github",
        url: "https://github.com/SudeshTharoosh",
      },
    ],
  },
  {
    imageUrl: Ishma,
    name: "Mohamed Ishma",
    position: "Machince Leaning Developer",
    description: "You can't see me",
    socialNetworks: [
      { name: "Linkedin", url: "www.linkedin.com/in/ishma-ifan-179428228" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ishmaifan/",
      },
      {
        name: "Github",
        url: "https://github.com/ishmaifan",
      },
    ],
  },
  {
    imageUrl: Santosh,
    name: "Santosh Manoharadas",
    position: "Web Developer",
    description: "You can't see me",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/santosh-manoharadas/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/santosh.manoharadas/",
      },
      {
        name: "Github",
        url: "https://github.com/MS1145",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Instagram":
        return <Instagram size="20" />;

      case "Github":
        return <Github size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"> */}
        <span className="text-[#1D7D81]">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      {/* <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-16 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
