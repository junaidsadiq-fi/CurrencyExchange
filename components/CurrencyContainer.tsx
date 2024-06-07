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
import CurrencyConverter from "./CurrencyConverter"; // Make sure the path is correct

export function CurrencyContainer() {
  return (
    <Tabs defaultValue="converter" className="w-[900px]">
      <TabsList className="grid bg-blue-50 border rounded-xl w-full grid-cols-2">
        <TabsTrigger value="converter">Converter</TabsTrigger>
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
      </TabsList>
      <TabsContent value="converter">
        <CurrencyConverter />
      </TabsContent>
      <TabsContent value="calculator">
        <Card className="border rounded-xl">
          <CardHeader>
            <CardTitle>Currency Rate Calculator</CardTitle>
            <CardDescription>
              Calculate the exchange rate between different currencies.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="fromCurrency">From</Label>
              <Input id="fromCurrency" placeholder="Enter currency" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="toCurrency">To</Label>
              <Input id="toCurrency" placeholder="Enter currency" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Calculate</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
