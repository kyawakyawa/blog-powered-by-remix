import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import "./styles/globals.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "prism-themes/themes/prism-dracula.min.css";
import { AnimatePresence } from "framer-motion";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AnimatePresence>
          <Header />
        </AnimatePresence>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
        <AnimatePresence>
          <Footer />
        </AnimatePresence>
      </body >
    </html >
  );
}

export default function App() {
  return <Outlet />;
}
