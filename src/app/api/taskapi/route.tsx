import { TaskApiData } from "@/app/apiData/taskApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(TaskApiData);
}
