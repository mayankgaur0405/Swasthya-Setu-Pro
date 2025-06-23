import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    //check if user already Exist
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
    //if Not Then Create New User
    if (users?.length == 0) {
      const result = await db
        .insert(usersTable)
        .values({
          //@ts-ignore
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          credits: 10,
        })
        .returning({
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
          credits: usersTable.credits,
        });
      return NextResponse.json(result[0]);
    }

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
