import { ChatMemberApiData } from "@/app/apiData/chatMemberApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ChatMemberApiData);
}
