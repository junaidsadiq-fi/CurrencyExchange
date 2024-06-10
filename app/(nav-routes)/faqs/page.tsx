"use client";
import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const faqData = [
    {
      question: "What services does our TELEFONOPIÚ exchange provides?",
      answer: "We offer Currency Exchange and Money Transfer services to 200+ countries across the globe.",
    },
    {
      question: "Can I perform transactions online with TELEFONOPIÚ Exchange?",
      answer: "Currently we do not have facility to serve the customers online, therefore all the customers must visit our outlets to complete transactions",
    },
    {
      question: "Is there an commission fee for currency exchange?",
      answer: "No, we charges 0% commission for its services",
    },
    {
        question: "How much currency can an individual purchase from our exchange?",
        answer: "Each individual can purchase a maximum of $10,000 in one day and a maximum of $100,000 in one calender year as per the instructions of the State Bank of Pakistan.",
      },
      {
        question: "How much currency can an individual purchase for their international travel?",
        answer: "International travelers can purchase up to $5,000 for each trip and can purchase a maximum of $30,000 in one year for travelling purposes.",
      },
      {
        question: "How will I receive confirmation of the transfer?",
        answer: "We will provide you with a confirmation and receipt once the funds have been successfully transferred. You can keep it for your records.",
      },
      {
        question: "is there a customer support team available to assist me?",
        answer: "Yes, our friendly and knowledgeable customer support team is available at +39-327-668-8805 to assist you with any questions or concerns you may have regarding the transfer process.",
      }
    
  ];   
export default function page() {
  return (
    <>
      <div className="relative w-full h-64 lg:h-96 flex items-center">
        <Image
          src="/images/faq.png"
          alt="Faq banner image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute left-8 lg:left-24 text-6xl lg:text-8xl text-gray-50 font-extrabold z-10">
          FAQS
        </div>
      </div>
      <div className="w-full py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="max-w-8xl w-full mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={"index-" + index}>
                    <AccordionTrigger>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                     {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
