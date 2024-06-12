import Image from "next/image";
import Link from "next/link";

export default function NewFooter() {
  return (
    <footer className="bg-gray-50 py-12 ">
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:max-w-6xl px-4">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div
              style={{ position: "relative", width: "150px", height: "150px" }}
            >
              <Image
                src="/images/Logo.webp"
                alt="logo"
                fill
                sizes="(max-width: 200px) 100vw, 150px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
          <p className="text-gray-500 ">
              <span>Viale Antonio Gramsci</span>
              <span>97 Modena 41122, Italy</span>
                <Link href="mailto:openskypoint@gmail.com" className="text-gray-500 hover:text-gray-900 flex items-center gap-2">
                    <MailIcon className="h-5 w-5" />
                    <p>
                    openskypoint@gmail.com
                    </p>
                </Link>
                <Link href={`tel:+39059454430`} className="flex gap-2 items-center text-gray-500 hover:text-gray-900">
                    <PhoneIcon className="h-5 w-5" />
                    <p>
                    +39 059454430
                    </p>
                </Link>
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-900 ">
            Products
          </h4>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Currency Calculator
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Currency Converter
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 "
            prefetch={false}
          >
          Real-time Currency Rates 
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Funds Transfer
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-900">
            Services
          </h4>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Exchange Currencies
          </Link>
          <Link
            href="/locations"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Moeny Transfer
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Forex Trading
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-900">
            Company
          </h4>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Who We Are
          </Link>
          <Link
            href="/locations"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Branch Network
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-900 "
            prefetch={false}
          >
            Contact us
          </Link>
          <Link
            href="/faqs"
            className="text-gray-500 hover:text-gray-900"
            prefetch={false}
          >
            Faqs
          </Link>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row px-4">
          <p className="text-sm text-gray-500">
            &copy; 2024 Telefonopiú. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              <PhoneIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:openskypoint@gmail.com"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              <MailIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
