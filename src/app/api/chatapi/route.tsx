import { ChatApiData } from "@/app/apiData/chatApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ChatApiData);
}
