import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import JobsDataProvider from "./context-provider/JobsDataProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* tanstack query */}
    <QueryClientProvider client={queryClient}>
      {/* context */}
      <JobsDataProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </JobsDataProvider>
    </QueryClientProvider>
  </StrictMode>
);
