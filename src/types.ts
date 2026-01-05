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

// Provider type
export type AIProvider = "openrouter" | "openai" | "replicate";

// Result type aliases for backwards compatibility
export type TranscriptionResult = { text: string; confidence?: number };
export type EntityExtractionResult = EntityResult;
export type CodeGenerationResult = CodeGenerateResult;

// Option types for service methods
export interface ImageAnalysisOptions {
  detail?: "low" | "high" | "auto";
  maxTokens?: number;
}

export interface ImageGenerateOptions {
  size?: "1024x1024" | "1792x1024" | "1024x1792";
  quality?: "standard" | "hd";
  style?: "vivid" | "natural";
  n?: number;
}

export interface TranscribeOptions {
  language?: string;
  prompt?: string;
  responseFormat?: "json" | "text" | "srt" | "vtt";
}

export interface SpeechOptions {
  voice?: Voice;
  speed?: number;
  responseFormat?: "mp3" | "opus" | "aac" | "flac";
}

export interface SummarizeOptions {
  length?: SummaryLength;
  format?: "paragraph" | "bullets";
}

export interface TranslateOptions {
  targetLanguage: string;
  sourceLanguage?: string;
  preserveFormatting?: boolean;
}

export interface SentimentOptions {
  detailed?: boolean;
  includeEmotions?: boolean;
}

export interface ModerationOptions {
  categories?: string[];
  threshold?: number;
}

export interface SimplifyOptions {
  targetLevel?: ReadingLevel;
  preserveMeaning?: boolean;
}

export interface EntityOptions {
  types?: string[];
  includePositions?: boolean;
}

export interface EmailOptions {
  tone?: EmailTone;
  length?: SummaryLength;
  includeSubject?: boolean;
}

export interface ProductDescriptionOptions {
  tone?: "professional" | "casual" | "luxury";
  length?: SummaryLength;
  includeBenefits?: boolean;
}

export interface SEOOptions {
  keywords?: string[];
  targetLength?: number;
  includeMetaTags?: boolean;
}

export interface CodeGenerateOptions {
  language: string;
  includeComments?: boolean;
  includeTests?: boolean;
}

export interface CodeReviewOptions {
  focus?: "security" | "performance" | "style" | "all";
  severity?: "all" | "critical" | "high";
}

export interface SQLQueryOptions {
  dialect?: "mysql" | "postgresql" | "sqlite";
  includeExplanation?: boolean;
}

export interface RegexOptions {
  flavor?: "javascript" | "python" | "pcre";
  includeExamples?: boolean;
}

export interface APIDocsOptions {
  format?: "markdown" | "openapi";
  includeExamples?: boolean;
}

export interface OCROptions {
  language?: string;
  format?: "text" | "structured";
}

export interface QuizOptions {
  count?: number;
  difficulty?: Difficulty;
  includeExplanations?: boolean;
}
