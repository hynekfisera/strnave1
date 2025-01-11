export type PersonID = "VY" | "VŮ" | "US" | "IN" | "ZD" | "PO" | "TÝ" | "DO";

export type Person = {
  id: PersonID;
  name: string;
  description: string;
};
