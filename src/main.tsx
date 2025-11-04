import "@mantine/core/styles.css";
import "@/assets/styles/main.scss";

import App from "./App.tsx";
import { StrictMode } from "react";
import { getApiError } from "@/core/utils";
import { createRoot } from "react-dom/client";
import {
  QueryCache,
  QueryClient,
  MutationCache,
  QueryClientProvider,
} from "@tanstack/react-query";

const showApiError = (error: any) => {
  const data = getApiError(error);

  if (data.validations.length > 0) {
    data.validations.forEach((item: string) => {
      console.error(item);
    });
    return;
  }

  data.message && console.error(data.message);
};

const onQueryError = (error: any, query: any) => {
  if (query.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const onMutationError = (
  error: any,
  _variables: any,
  _context: any,
  mutation: any
) => {
  if (mutation.options.meta?.customErrorHandling) return;

  if (["ECONNABORTED", "ERR_NETWORK"].includes(error?.code)) {
    if (!navigator.onLine) {
      console.error("Internetga ulanmagansiz!");
      return;
    }

    console.error("Serverga bog'lanib bo'lmayapti!");
    return;
  }

  showApiError(error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },

  mutationCache: new MutationCache({
    onError: onMutationError,
  }),
  queryCache: new QueryCache({
    onError: onQueryError,
  }),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
