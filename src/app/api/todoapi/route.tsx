import { TodoApiData } from "@/app/apiData/todoApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(TodoApiData);
}
