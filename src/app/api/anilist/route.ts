import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get the GraphQL query from the client request
    const body = await request.json();

    // Get API URL from environment variable (or use default)
    const apiUrl = process.env.ANILIST_URI || "https://graphql.anilist.co";

    // Send the request to AniList API from the server
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    // Check if the request was successful
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from AniList API" },
        { status: response.status }
      );
    }

    // Parse and return the data
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Handle any errors that occurred
    console.error("AniList API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
