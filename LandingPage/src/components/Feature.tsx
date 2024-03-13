import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

import { buttonVariants } from "./ui/button";
import {Chrome} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

export const Feature = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-20 space-y-4"
    >
      <div className="flex justify-center">
        <Badge variant="secondary" className="text-sm pl-10 pr-10">Features</Badge>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">Elevate Your News Feed</h2>
      <p className="text-xl text-center pb-5">And uncover the truth you've been missing out on</p>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {features.map(({ title, description}: FeatureProps) => (
          <Card key={title}  className="w-full md:w-64 lg:w-80 h-80">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            {/* <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter> */}
          </Card>
        ))}
      </div>

      <div className="text-center">
          <p className="text-xl pt-6 pb-1 font-bold">
            Ready to Install?
          </p>
      </div>
        

      <div className="space-y-4 md:space-y-0 md:space-x-4 text-center">
        <a
          href="https://verisightlabs.com/"
          target="_blank"
          className={`w-full md:w-1/4 ${buttonVariants({
            variant: "outline",
          })}`}
        >
          <Chrome className="w-5 h-5 mr-3" />
          Install for Chrome
        </a>
      </div>
    </section>
  );
};
