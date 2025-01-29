import { Href } from "@/Constants";
import Link from "next/link";
import React from "react";
import { useReactToPrint } from "react-to-print";

export default function Print({ handlePrint }: { handlePrint: VoidFunction }) {
  return (
    <span style={{ display: "flex", justifyContent: "end", gap: 15 }}>
      <Link onClick={handlePrint} style={{ background: "#009DB5", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {"Print Invoice"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
      <Link style={{ background: "#009DB533", color: "#009DB5", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href} download>
        {"Download"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
}
