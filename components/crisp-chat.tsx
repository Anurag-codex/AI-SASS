"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

    if (!websiteId) {
      console.error("Crisp website ID is not set. Check your environment variables.");
      return;
    }

    try {
      Crisp.configure(websiteId);
      console.log("Crisp configured successfully.");
    } catch (error) {
      console.error("Failed to configure Crisp:", error);
    }
  }, []);

  return null;
};
