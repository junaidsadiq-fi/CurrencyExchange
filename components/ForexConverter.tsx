import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import DotPattern from "./ui/dot-pattern"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6 relative">
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
     <div className="mb-12 shadow-sm relative z-10">
        <h2 className="mb-8 font-poppins text-2xl font-bold">Latest Exchange Rates</h2>
        <TableContainer />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 z-10 relative">
        <ConverterContainer /> 
      </div>
    </section>
  )
}

const currencies = {
  "USD": "United States Dollar (USD)",
  "EUR": "Euro (EUR)",
  "JPY": "Japanese Yen (JPY)",
  "GBP": "British Pound (GBP)",
  "CHF": "Swiss Franc (CHF)",
  "CAD": "Canadian Dollar (CAD)",
  "AUD": "Australian Dollar (AUD)",
  "NZD": "New Zealand Dollar (NZD)",
  "HKD": "Hong Kong Dollar (HKD)",
  "SEK": "Swedish Krona (SEK)",
  "NOK": "Norwegian Krone (NOK)",
  "DKK": "Danish Krone (DKK)",
  "ZAR": "South African Rand (ZAR)",
  "MXN": "Mexican Peso (MXN)",
  "BRL": "Brazilian Real (BRL)"
};

const TableContainer = () => {
  return (
  <div className="border rounded-lg bg-gray-50 opacity-70 overflow-hidden">
  <Table>
    <TableHeader>
      <TableRow className="bg-slate-200">
        <TableHead className="font-poppins text-xl">Currency</TableHead>
        <TableHead className="text-right font-poppins text-xl">Buying Price</TableHead>
        <TableHead className="text-right font-poppins text-xl">Selling Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>United States Dollar (USD)</TableCell>
        <TableCell className="text-right">1.00</TableCell>
        <TableCell className="text-right">1.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Euro (EUR)</TableCell>
        <TableCell className="text-right">0.92</TableCell>
        <TableCell className="text-right">0.93</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Japanese Yen (JPY)</TableCell>
        <TableCell className="text-right">0.0075</TableCell>
        <TableCell className="text-right">0.0076</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>British Pound (GBP)</TableCell>
        <TableCell className="text-right">1.23</TableCell>
        <TableCell className="text-right">1.24</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Swiss Franc (CHF)</TableCell>
        <TableCell className="text-right">1.09</TableCell>
        <TableCell className="text-right">1.10</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Canadian Dollar (CAD)</TableCell>
        <TableCell className="text-right">0.75</TableCell>
        <TableCell className="text-right">0.76</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Australian Dollar (AUD)</TableCell>
        <TableCell className="text-right">0.67</TableCell>
        <TableCell className="text-right">0.68</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>New Zealand Dollar (NZD)</TableCell>
        <TableCell className="text-right">0.63</TableCell>
        <TableCell className="text-right">0.64</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Hong Kong Dollar (HKD)</TableCell>
        <TableCell className="text-right">0.13</TableCell>
        <TableCell className="text-right">0.13</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Swedish Krona (SEK)</TableCell>
        <TableCell className="text-right">0.10</TableCell>
        <TableCell className="text-right">0.10</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Norwegian Krone (NOK)</TableCell>
        <TableCell className="text-right">0.10</TableCell>
        <TableCell className="text-right">0.10</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Danish Krone (DKK)</TableCell>
        <TableCell className="text-right">0.14</TableCell>
        <TableCell className="text-right">0.14</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>South African Rand (ZAR)</TableCell>
        <TableCell className="text-right">0.06</TableCell>
        <TableCell className="text-right">0.06</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Mexican Peso (MXN)</TableCell>
        <TableCell className="text-right">0.05</TableCell>
        <TableCell className="text-right">0.05</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Brazilian Real (BRL)</TableCell>
        <TableCell className="text-right">0.19</TableCell>
        <TableCell className="text-right">0.20</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
  )
}
const ConverterContainer = () => {
 

  return (
    <div className=" overflow-hidden">
      <div className="bg-gray-50 border rounded-lg dark:bg-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-4">Currency Converter</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="from">From</Label>
            <Select defaultValue="USD" id="from">
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className='bg-slate-100'>
                {Object.entries(currencies).map(([value, name]) => (
                  <SelectItem key={value} value={value}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Select defaultValue="USD" id="to">
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(currencies).map(([value, name]) => (
                  <SelectItem key={value} value={value}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="Enter amount" type="number" />
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Convert</Button>
        </div>
      </div>
    </div>
  )
}