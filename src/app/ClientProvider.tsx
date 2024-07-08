"use client";

import { Provider } from "react-redux";
import store from "@/app/lib/store"; // Ajustez le chemin d'importation si nécessaire

function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ClientProvider;
