import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Verisight?",
    answer: "Verisight is a comprehensive fake news detection system that combines advanced AI and machine learning techniques with a user-friendly interface to help users analyze and verify the authenticity of articles.",
    value: "item-1",
  },
  {
    question: "How does Verisight analyze articles for fake news?",
    answer: "Verisight uses advanced AI and machine learning algorithms to analyze the content, source, and context of articles. The system checks for misleading information, biased reporting, and other indicators of fake news to provide users with accurate and reliable information.",
    value: "item-2",
  },
  {
    question: "Can Verisight summarise articles?",
    answer: "Yes, Verisight can generate concise summaries of articles using OpenAI's GPT-3.5 model. Users can input the article content, and the system will provide a summarized version of the article.",
    value: "item-3",
  },
  {
    question: "What is Headline Stance Detection?",
    answer: "Headline Stance Detection is a feature of Verisight that categorizes article headlines into Agree, Disagree, or Unrelated. This helps users understand the perspective or bias of the article at a glance.",
    value: "item-4",
  },
  {
    question: "How does Verisight cross-check information within articles?",
    answer: "Verisight uses advanced AI algorithms to cross-check the information within articles for inconsistencies or discrepancies. This helps users identify any misleading or false information presented in the articles.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="mailto:support@verisightlab.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
