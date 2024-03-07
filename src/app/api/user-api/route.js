import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ msg: "Hello Bangladesh" }, { status: 200 });
}
