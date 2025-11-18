"use client";

import React from "react";
import useGsapTiltEffect from "@/hooks/useGsapTiltEffect";

export default function CardTiltWrapper({ children }) {
  useGsapTiltEffect(); // activa el tilt automáticamente
  return <div className="tilt-wrapper">{children}</div>;
}
