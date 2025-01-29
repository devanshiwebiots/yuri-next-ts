"use client"
import React, { FunctionComponent, useEffect, useState } from "react";

const ECommerce = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/General/Dashboard/ECommerce")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default ECommerce;