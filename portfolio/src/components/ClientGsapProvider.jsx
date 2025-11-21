"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useGsapGlobalScrollAnimations from "@/hooks/useGsapGlobalScrollAnimations";

gsap.registerPlugin(ScrollToPlugin);

export default function ClientGsapProvider({ children }) {
  useGsapGlobalScrollAnimations();

  return <>{children}</>;
}