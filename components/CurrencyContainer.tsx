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
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="max-w-md pb-4 lg:max-w-lg py-4 lg:mx-12 mx-auto pt-0"
    >
       <TabsList className="grid w-full grid-cols-2 border-[2px] border-gray-100 rounded-xl bg-white">
        <TabsTrigger
          value="send"
          className={`${
            activeTab === "send"  ? "bg-blue-500 py-1 text-white rounded-xl" : "text-black py-0"
          }`}
          style={{
            backgroundColor: activeTab === "send" ? "#2563EB" : "transparent",
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
  );
}
