type JapaneseTargetSentence = {
  id: number;
  text: string;
  html: string;
  target: string;
};

type JapaneseExampleSentence = {
  id: number;
  text: string;
  target: string;
  html: string;
};

type EnglishExampleSentence = {
  id: number;
  text: string;
  target: string;
  html: string;
};

type ExampleSentence = {
  japanese: JapaneseExampleSentence;
  english: EnglishExampleSentence;
};

type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

type GrammarNumber = {
  number: number;
  total: number;
};

type GrammarInfo = {
  id: number;
  level: JLPTLevel;
  lesson: string;
  grammar: GrammarNumber;
};

type EnglishTargetSentence = string;
type StudyTarget = string;

type RelatedGrammars = {
  synonyms: RelatedGrammar[];
  antonyms: RelatedGrammar[];
};

type RelatedGrammar = {
  grammar: string;
  url: string;
};

type TargetSentence = {
  japanese: JapaneseTargetSentence;
  english: EnglishTargetSentence;
  target: StudyTarget;
};

type ReviewData = {
  grammar: GrammarInfo;
  sentence: TargetSentence;
  examples: ExampleSentence[];
  related: RelatedGrammars;
};

type RelatedGrammarType = 'antonyms' | 'synonyms';
