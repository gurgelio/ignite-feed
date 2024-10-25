import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./tailwind.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root element not found!");
}

const queryClient = new QueryClient();

createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
