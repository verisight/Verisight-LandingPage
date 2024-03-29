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

import Pragash from "../assets/Pragesh.jpg";
import Aashif from "../assets/Aashif.jpg";
import Ishma from "../assets/Ishma.jpg";
import Santosh from "../assets/Santosh.jpeg";
import Tharoosh from "../assets/Tharoosh.jpg";

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
    position: "DevOps Developer",
    description: "You can't see me",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pragash-sasitharan/",
      },
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
    position: "ML Developer",
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
    position: "Frontend Developer",
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
    position: "Full Stack Developer",
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
    position: "Frontend Developer",
    description: "You can't see me",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/santosh-manoharadas/",
      },
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
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-[#1D7D81]">
          Supervised By
        </span>
      </h2>
      <Card className="bg-muted/50 relative mt-5 mb-8 flex flex-col justify-center items-center">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <CardTitle>Sahan Priyanayana</CardTitle>
        </CardHeader>
        <CardContent className="text-primary font-semibold">
          <p>Lecturer</p>
        </CardContent>
        <CardFooter>
          <a
            href="https://www.linkedin.com/in/sahan-kodikara-33892697/"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Linkedin size="20" />
          </a>
        </CardFooter>
      </Card>

      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        <span className="text-[#1D7D81]">
          Our Dedicated Crew
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
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
                <CardTitle className="text-center leading-7">{name}</CardTitle>
                <CardDescription className="text-primary text-center font-semibold">
                  {position}
                </CardDescription>
              </CardHeader>
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
