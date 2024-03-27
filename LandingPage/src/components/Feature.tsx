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
import { Chrome } from "lucide-react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    icon: "📰",
    title: "Headline Stance Detection",
    description:
      "Headline Stance Detection is a feature of Verisight that categorizes article headlines into Agree, Disagree, or Unrelated. This helps users understand the perspective or bias of the article at a glance, allowing for more informed and critical reading.",
    image: image4,
  },
  {
    icon: "🔍",
    title: "Article Summarization",
    description:
      "Verisight can generate concise summaries of articles using OpenAI's GPT-3.5 model. Users can input the article content, and the system will provide a summarized version of the article, making it easier to understand the main points and key information.",
    image: image3,
  },
  {
    icon: "🔍",
    title: "Cross-checking of Information",
    description:
      "Verisight uses advanced AI algorithms to cross-check the information within articles for inconsistencies or discrepancies. This helps users identify any misleading or false information presented in the articles, ensuring the accuracy and reliability of the content.",
    image: image,
  },
];

export const Feature = () => {
  return (
    <section id="features" className="container py-24 sm:py-20 space-y-4">
      <div className="flex justify-center">
        <Badge variant="secondary" className="text-sm pl-10 pr-10">
          Features
        </Badge>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Elevate Your News Feed
      </h2>
      <p className="text-xl text-center pb-5">
        And uncover the truth you've been missing out on
      </p>

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
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title} className="w-full md:w-64 lg:w-80 h-80">
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
        <p className="text-xl pt-6 pb-1 font-bold">Ready to Install?</p>
      </div>

      <div className="space-y-4 md:space-y-0 md:space-x-4 text-center">
        <a
          href="https://chromewebstore.google.com/detail/verisight/hakkkgoancaobbmlmngfclkdggkdnolk"
          target="_blank"
          className={`w-full md:w-1/5 bg-white text-black ${buttonVariants({
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
