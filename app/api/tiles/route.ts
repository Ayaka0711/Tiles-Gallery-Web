// This is a simple API that sends back our tile data as JSON.
// The frontend pages will call this using fetch("/api/tiles")

import { NextResponse } from "next/server";
import tiles from "@/data/tiles.json";

export async function GET() {
  return NextResponse.json(tiles);
}
