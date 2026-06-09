import { prisma } from "../lib/prisma";

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Bombay",
        location: "Mumbai",
        rating: 4.9,
        fees: 200000,
        branch: "Engineering",
      },
      {
        name: "COEP Pune",
        location: "Pune",
        rating: 4.5,
        fees: 120000,
        branch: "Engineering",
      },
      {
        name: "VJTI Mumbai",
        location: "Mumbai",
        rating: 4.6,
        fees: 150000,
        branch: "Engineering",
      },
    ],
  });
}

main();