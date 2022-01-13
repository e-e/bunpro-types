export type JapaneseTargetSentence = {
  id: number;
  text: string;
  html: string;
  target: string;
};

export type JapaneseExampleSentence = {
  id: number;
  text: string;
  target: string;
  html: string;
};

export type EnglishExampleSentence = {
  id: number;
  text: string;
  target: string;
  html: string;
};

export type ExampleSentence = {
  japanese: JapaneseExampleSentence;
  english: EnglishExampleSentence;
};

export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export type GrammarNumber = {
  number: number;
  total: number;
};

export type GrammarPoint = {
  id: number;
  level: JLPTLevel;
  lesson: string;
  number: number;
  kanji: string;
  reading: string;
  meaning: string;
  meaningExtra: string;
};

export type EnglishTargetSentence = string;
export type StudyTarget = string;

export type RelatedGrammars = {
  synonyms: RelatedGrammar[];
  antonyms: RelatedGrammar[];
};

export type RelatedGrammar = {
  grammar: string;
  url: string;
};

export type TargetSentence = {
  japanese: JapaneseTargetSentence;
  english: EnglishTargetSentence;
  target: StudyTarget;
};

export type ReviewData = {
  grammar: GrammarPoint;
  sentence: TargetSentence;
  examples: ExampleSentence[];
  related: RelatedGrammars;
};

export type RelatedGrammarType = 'antonyms' | 'synonyms';
