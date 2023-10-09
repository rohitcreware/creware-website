import { NextResponse } from "next/server";
import { sendMail } from "../../../../service/mailService";

export async function POST(request) {
  const body = await request.json();

  await sendMail(body);

  return NextResponse.json(body);
}

export const dynamic = "force-static";
