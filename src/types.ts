/**
 * AI Service Types
 */

export interface AIServiceConfig {
  openrouterApiKey?: string;
  openaiApiKey?: string;
  replicateApiToken?: string;
  openrouterBaseUrl?: string;
  openrouterReferer?: string;
  openrouterTitle?: string;
  // Model overrides
  imageModel?: string;
  ttsModel?: string;
  whisperModel?: string;
  moderationModel?: string;
  chatModel?: string;
}

export interface ImageGenerateResult {
  url?: string;
  base64?: string;
  revisedPrompt?: string;
}

export interface TranslationResult {
  translation: string;
  confidence: number;
}

export interface SentimentResult {
  sentiment: "positive" | "negative" | "neutral";
  score: number;
  emotions: string[];
}

export interface ModerationResult {
  flagged: boolean;
  categories: Record<string, boolean>;
  categoryScores: Record<string, number>;
  reasoning?: string;
}

export interface EntityResult {
  entities: Array<{
    text: string;
    type: string;
    position: number;
  }>;
}

export interface EmailResult {
  subject: string;
  body: string;
}

export interface CodeGenerateResult {
  code: string;
  explanation: string;
}

export interface CodeReviewResult {
  issues: string[];
  suggestions: string[];
  securityConcerns: string[];
}

export interface SQLResult {
  query: string;
  explanation: string;
}

export interface RegexResult {
  pattern: string;
  explanation: string;
  examples: string[];
}

export interface SEOResult {
  optimizedContent: string;
  analysis: string;
}

export interface APIDocsResult {
  documentation: string;
  openapi?: string;
}

export interface OCRResult {
  text: string;
  confidence: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizResult {
  questions: QuizQuestion[];
}

export type SummaryLength = "short" | "medium" | "long";
export type ReadingLevel = "elementary" | "middle" | "high";
export type EmailTone = "formal" | "casual" | "friendly";
export type Difficulty = "easy" | "medium" | "hard";
export type Voice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
