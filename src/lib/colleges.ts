import colleges from "@/data/colleges.json";

export function getColleges() {
  return colleges;
}

export function getCollegeById(id: string) {
  return colleges.find((c) => c.id === id);
}