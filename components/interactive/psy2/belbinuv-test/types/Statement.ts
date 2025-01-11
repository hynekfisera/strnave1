import { PersonID } from "@/components/interactive/psy2/belbinuv-test/types/Person";

export type Statement = {
  text: string;
  pointsTo: PersonID;
};

export interface ResultStatement extends Statement {
  points: number;
}
