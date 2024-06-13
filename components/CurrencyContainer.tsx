"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CurrencySendCalculator from "./CurrencySendCalculator";
import CurrencyConverter from "./CurrencyConverter";

export default function CurrencyContainer() {
  const [activeTab, setActiveTab] = useState("send");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="flex items-center justify-center bg-white">
    <div className="h-full my-20 ">
      <div className="w-full h-full overflow-hidden">
        <div className="w-full max-w-screen-2xl relative px-12 min-h-[calc(55vh)] mx-auto flex flex-col md:flex-row justify-center items-center h-full lg:gap-28 gap-12">
          <div className="flex flex-col items-center justify-center gap-4 order-1 md:order-2">
            <h1 className="text-6xl font-extrabold lg:text-6xl tracking-tighter max-w-xl text-left font-regular">
              Your Personal Currency Assistant
            </h1>
            <p className="text-gray-700 text-sm">
              Effortlessly calculate exchange rates, estimate transfer fees, and
              more with our intuitive tool.
            </p>
          </div>
          <div className="w-full md:w-4/4 p-4 order-1 md:order-2">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="max-w-lg pb-4 lg:max-w-xl py-4 lg:mx-12 mx-auto pt-0"
            >
              <TabsList className="grid w-full grid-cols-2 border-[2px] border-gray-100 rounded-xl bg-white">
                <TabsTrigger
                  value="send"
                  className={`${
                    activeTab === "send"
                      ? "bg-blue-500 py-1 text-white rounded-xl"
                      : "text-black py-0"
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "send" ? "#2563EB" : "transparent",
                    color: activeTab === "send" ? "#fff" : "#000",
                    borderRadius: activeTab === "send" ? "0.75rem" : "0",
                  }}
                >
                  Send
                </TabsTrigger>
                <TabsTrigger
                  value="convert"
                  className={`py-2 ${
                    activeTab === "convert"
                      ? "bg-blue-500 text-white rounded-xl py-1"
                      : "text-black py-0"
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "convert" ? "#2563EB" : "transparent",
                    color: activeTab === "convert" ? "#fff" : "#000",
                    borderRadius: activeTab === "convert" ? "0.75rem" : "0",
                  }}
                >
                  Converter
                </TabsTrigger>
              </TabsList>
              <TabsContent value="send">
                <CurrencySendCalculator />
              </TabsContent>
              <TabsContent value="convert">
                <CurrencyConverter />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
