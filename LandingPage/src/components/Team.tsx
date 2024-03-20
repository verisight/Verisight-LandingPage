import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin } from "lucide-react";

import JohnCena from '../assets/JohnCena.avif';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: JohnCena,
    name: "John Cena",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: JohnCena,
    name: "John Cena",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: JohnCena,
    name: "John Cena",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: JohnCena,
    name: "John Cena",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: JohnCena,
    name: "John Cena",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
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
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"> */}
        <span className="text-[#1D7D81]">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
