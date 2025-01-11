import {
  ResultStatement,
  Statement,
} from "@/components/interactive/psy2/belbinuv-test/types/Statement";

export type Section = {
  text: string;
  statements: Statement[];
};

export type ResultSection = {
  text: string;
  statements: ResultStatement[];
};
