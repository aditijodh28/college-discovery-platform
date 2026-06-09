import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function SavedPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
    include: { savedColleges: true },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Saved Colleges
      </h1>

      <ul className="mt-4">
        {user?.savedColleges.map((c) => (
          <li key={c.id}>
            College ID: {c.collegeId}
          </li>
        ))}
      </ul>
    </div>
  );
}