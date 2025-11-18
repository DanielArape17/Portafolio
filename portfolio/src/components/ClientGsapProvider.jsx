"use client";

import useGsapGlobalScrollAnimations from "@/hooks/useGsapGlobalScrollAnimations";

export default function ClientGsapProvider({ children }) {
  useGsapGlobalScrollAnimations();

  return <>{children}</>;
}