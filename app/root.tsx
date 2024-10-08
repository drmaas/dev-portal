import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import Sidebar from "./components/Sidebar";

import "./tailwind.css";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <p className="p-4">Oops! You went off the rails :)</p>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
