"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import CurrencyConverter from "./CurrencyConverter";
import CurrencySendCalculator from "./CurrencySendCalculator";

export function CurrencyContainer() {
  const [activeTab, setActiveTab] = useState("converter");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-[600px]">
      <TabsList className="grid border rounded-xl w-full grid-cols-2 bg-gray-100 p-1">
        <TabsTrigger
          value="converter"
          className={`py-2 ${activeTab === "converter" ? "bg-blue-500 text-white rounded-xl" : "text-black"}`}
          style={{ 
            backgroundColor: activeTab === "converter" ? "#2563EB" : "transparent",
            color: activeTab === "converter" ? "#fff" : "#000",
            borderRadius: activeTab === "converter" ? "0.75rem" : "0"
          }}
        >
          Converter
        </TabsTrigger>
        <TabsTrigger
          value="send"
          className={`py-2 ${activeTab === "send" ? "bg-blue-500 text-white rounded-xl" : "text-black"}`}
          style={{ 
            backgroundColor: activeTab === "send" ? "#2563EB" : "transparent",
            color: activeTab === "send" ? "#fff" : "#000",
            borderRadius: activeTab === "send" ? "0.75rem" : "0"
          }}
        >
          Send
        </TabsTrigger>
      </TabsList>
      <TabsContent value="converter">
        <CurrencyConverter />
      </TabsContent>
      <TabsContent value="send">
        <CurrencySendCalculator />
      </TabsContent>
    </Tabs>
  );
}
