"use client";

import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BorderBeam } from "@/components/ui/border-beam";

const page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Get in Touch
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Have questions or need assistance? Reach out to our customer
                  service team.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to reach</p>
                <p className="text-muted-foreground text-sm">
                  Our team is just a message away.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast response</p>
                <p className="text-muted-foreground text-sm">
                  We respond quickly to all inquiries.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Supportive team</p>
                <p className="text-muted-foreground text-sm">
                  Our team is here to help you with any questions or concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center w-full py-2 max-h-[40rem] sm:max-w-md lg:max-w-full rounded-xl shadow-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-gray-200 border-opacity-25">
            <BorderBeam /> 
            <div className="flex flex-col gap-4 w-full px-12 py-2">
              <p>Contact Us</p>
              <div className="grid w-full items-center gap-4">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  className="border rounded-full w-full"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  className="border rounded-full w-full"
                  id="lastname"
                  type="text"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="border rounded-full w-full"
                  id="email"
                  type="email"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  className="border rounded-full w-full"
                  id="subject"
                  type="text"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="border rounded-xl w-full"
                  id="message"
                  rows={4}
                />
              </div>
              <Button className="border rounded-full gap-4 w-full mt-4">
                Send Message <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
