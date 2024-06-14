import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

function ServicesSection() {
  return (
    <div className="w-full py-10 lg:py-20 bg-gradient-to-br  from-yellow-50 to gray-50">
    <div className="container mx-auto ">
      <div className="flex text-center justify-center items-center gap-4  flex-col">
        <div className="flex gap-2 flex-col ">
          <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl xl:text-5xl tracking-tighter text-center font-regular">
            Our Exchange Features
          </h2>
          <p className="text-md leading-relaxed tracking-tight text-muted-foreground  text-xl md:text-lg text-center">
            Exchanging forex has never been easier.
          </p>
        </div>
        <div className="grid pt-10  text-center grid-cols-1 lg:grid-cols-3 w-full gap-8">
          <Card className="w-full rounded-xl bg-white">
            <CardHeader>
              <Image
                src="/images/services5.webp"
                alt="feature 1"
                className="object-cover mx-auto"
                width={220}
                height={220}
              />
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-bold justify-center">
                  Lowest Rates in the Market
                </span>
              </CardTitle>
              <CardDescription>
                We offer the cheapest rates for any currency in the market.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Save money on your forex transactions with our
                industry-leading rates. Our commitment to providing the best
                value means you get more for your money, whether you’re
                traveling abroad or conducting international business.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full shadow-2xl rounded-xl bg-white">
            <CardHeader>
              <Image
                src="/images/services2.webp"
                alt="feature 2"
                className="object-cover mx-auto"
                width={220}
                height={220}
              />
              <CardTitle>
                <span className="flex flex-row gap-4 font-bold items-center justify-center">
                  Fast and Secure Transactions
                </span>
              </CardTitle>
              <CardDescription>
                Our platform ensures quick and secure transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Experience the peace of mind that comes with fast and secure
                forex transactions. Our advanced technology and robust
                security measures ensure your funds are transferred safely
                and efficiently, minimizing any risk of fraud.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full rounded-xl bg-white">
            <CardHeader>
              <Image
                src="/images/features7.webp"
                alt="feature 3"
                className="object-cover mx-auto"
                width={220}
                height={220}
              />
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-bold justify-center">
                  Wide Range of Currencies
                </span>
              </CardTitle>
              <CardDescription>
                We support a wide range of currencies for your convenience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Whether you need euros, yen, or pesos, we’ve got you
                covered. Our extensive range of supported currencies makes
                it easy to exchange the money you need, no matter where
                you're going or what you're doing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesSection