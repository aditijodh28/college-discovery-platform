import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const body = await req.json();

  const saved = await prisma.savedCollege.create({
    data: {
      collegeId: body.collegeId,
      userId: user!.id,
    },
  });

  return Response.json(saved);
}