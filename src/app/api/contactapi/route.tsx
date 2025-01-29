import { ContactApiData } from "@/app/apiData/contactApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json(ContactApiData);
}
