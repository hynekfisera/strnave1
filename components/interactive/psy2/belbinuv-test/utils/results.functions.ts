import { ResultSection } from "@/components/interactive/psy2/belbinuv-test/types/Section";

export const sumSectionPoints = (section: ResultSection): number =>
  section.statements.reduce((prev, s) => prev + s.points, 0);

export const getPersonPoints = (
  personID: string,
  results: ResultSection[],
): number =>
  results.reduce((prev, s) => {
    const statement = s.statements.find((st) => st.pointsTo === personID);
    return prev + (statement ? statement.points : 0);
  }, 0);
