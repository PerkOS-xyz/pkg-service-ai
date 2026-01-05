/**
 * AI Service Types
 */
interface AIServiceConfig {
    openrouterApiKey?: string;
    openaiApiKey?: string;
    replicateApiToken?: string;
    openrouterBaseUrl?: string;
    openrouterReferer?: string;
    openrouterTitle?: string;
    imageModel?: string;
    ttsModel?: string;
    whisperModel?: string;
    moderationModel?: string;
    chatModel?: string;
}
interface ImageGenerateResult {
    url?: string;
    base64?: string;
    revisedPrompt?: string;
}
interface TranslationResult {
    translation: string;
    confidence: number;
}
interface SentimentResult {
    sentiment: "positive" | "negative" | "neutral";
    score: number;
    emotions: string[];
}
interface ModerationResult {
    flagged: boolean;
    categories: Record<string, boolean>;
    categoryScores: Record<string, number>;
    reasoning?: string;
}
interface EntityResult {
    entities: Array<{
        text: string;
        type: string;
        position: number;
    }>;
}
interface EmailResult {
    subject: string;
    body: string;
}
interface CodeGenerateResult {
    code: string;
    explanation: string;
}
interface CodeReviewResult {
    issues: string[];
    suggestions: string[];
    securityConcerns: string[];
}
interface SQLResult {
    query: string;
    explanation: string;
}
interface RegexResult {
    pattern: string;
    explanation: string;
    examples: string[];
}
interface SEOResult {
    optimizedContent: string;
    analysis: string;
}
interface APIDocsResult {
    documentation: string;
    openapi?: string;
}
interface OCRResult {
    text: string;
    confidence: number;
}
interface QuizQuestion {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}
interface QuizResult {
    questions: QuizQuestion[];
}
type SummaryLength = "short" | "medium" | "long";
type ReadingLevel = "elementary" | "middle" | "high";
type EmailTone = "formal" | "casual" | "friendly";
type Difficulty = "easy" | "medium" | "hard";
type Voice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
type AIProvider = "openrouter" | "openai" | "replicate";
type TranscriptionResult = {
    text: string;
    confidence?: number;
};
type EntityExtractionResult = EntityResult;
type CodeGenerationResult = CodeGenerateResult;
interface ImageAnalysisOptions {
    detail?: "low" | "high" | "auto";
    maxTokens?: number;
}
interface ImageGenerateOptions {
    size?: "1024x1024" | "1792x1024" | "1024x1792";
    quality?: "standard" | "hd";
    style?: "vivid" | "natural";
    n?: number;
}
interface TranscribeOptions {
    language?: string;
    prompt?: string;
    responseFormat?: "json" | "text" | "srt" | "vtt";
}
interface SpeechOptions {
    voice?: Voice;
    speed?: number;
    responseFormat?: "mp3" | "opus" | "aac" | "flac";
}
interface SummarizeOptions {
    length?: SummaryLength;
    format?: "paragraph" | "bullets";
}
interface TranslateOptions {
    targetLanguage: string;
    sourceLanguage?: string;
    preserveFormatting?: boolean;
}
interface SentimentOptions {
    detailed?: boolean;
    includeEmotions?: boolean;
}
interface ModerationOptions {
    categories?: string[];
    threshold?: number;
}
interface SimplifyOptions {
    targetLevel?: ReadingLevel;
    preserveMeaning?: boolean;
}
interface EntityOptions {
    types?: string[];
    includePositions?: boolean;
}
interface EmailOptions {
    tone?: EmailTone;
    length?: SummaryLength;
    includeSubject?: boolean;
}
interface ProductDescriptionOptions {
    tone?: "professional" | "casual" | "luxury";
    length?: SummaryLength;
    includeBenefits?: boolean;
}
interface SEOOptions {
    keywords?: string[];
    targetLength?: number;
    includeMetaTags?: boolean;
}
interface CodeGenerateOptions {
    language: string;
    includeComments?: boolean;
    includeTests?: boolean;
}
interface CodeReviewOptions {
    focus?: "security" | "performance" | "style" | "all";
    severity?: "all" | "critical" | "high";
}
interface SQLQueryOptions {
    dialect?: "mysql" | "postgresql" | "sqlite";
    includeExplanation?: boolean;
}
interface RegexOptions {
    flavor?: "javascript" | "python" | "pcre";
    includeExamples?: boolean;
}
interface APIDocsOptions {
    format?: "markdown" | "openapi";
    includeExamples?: boolean;
}
interface OCROptions {
    language?: string;
    format?: "text" | "structured";
}
interface QuizOptions {
    count?: number;
    difficulty?: Difficulty;
    includeExplanations?: boolean;
}

/**
 * AI Service Implementation
 * Multi-provider AI service with OpenRouter, Replicate, and OpenAI support
 */

declare class AIService {
    private openai;
    private openrouter;
    private replicate;
    private useOpenRouter;
    private useReplicate;
    private imageModel;
    private ttsModel;
    private whisperModel;
    private moderationModel;
    private chatModel;
    constructor(config?: AIServiceConfig);
    private getChatClient;
    private getChatModel;
    analyzeImage(imageInput: string, question?: string): Promise<string>;
    generateImage(prompt: string, size?: "1024x1024"): Promise<ImageGenerateResult>;
    private generateImageWithReplicate;
    transcribeAudio(audioInput: File | Blob | string): Promise<string>;
    private transcribeWithReplicate;
    synthesizeSpeech(text: string, voice?: Voice): Promise<Buffer>;
    private synthesizeWithReplicate;
    summarizeText(text: string, length?: SummaryLength): Promise<string>;
    translateText(text: string, sourceLang: string, targetLang: string): Promise<TranslationResult>;
    analyzeSentiment(text: string): Promise<SentimentResult>;
    moderateContent(content: string): Promise<ModerationResult>;
    simplifyText(text: string, readingLevel?: ReadingLevel): Promise<string>;
    extractEntities(text: string): Promise<EntityResult>;
    generateEmail(purpose: string, tone: EmailTone | undefined, keyPoints: string[]): Promise<EmailResult>;
    generateProductDescription(productName: string, features: string[], targetAudience?: string): Promise<string>;
    optimizeSEO(content: string, keywords: string[]): Promise<SEOResult>;
    generateCode(description: string, language: string, framework?: string): Promise<CodeGenerateResult>;
    reviewCode(code: string, language: string): Promise<CodeReviewResult>;
    generateSQLQuery(schema: string, query: string): Promise<SQLResult>;
    generateRegex(description: string): Promise<RegexResult>;
    generateAPIDocs(code: string, framework: string): Promise<APIDocsResult>;
    extractTextOCR(image: string): Promise<OCRResult>;
    generateQuiz(topic: string, numQuestions?: number, difficulty?: Difficulty): Promise<QuizResult>;
}

export { type AIProvider, AIService, type AIServiceConfig, type APIDocsOptions, type CodeGenerateOptions, type CodeGenerationResult, type CodeReviewOptions, type CodeReviewResult, type EmailOptions, type EntityExtractionResult, type EntityOptions, type ImageAnalysisOptions, type ImageGenerateOptions, type ImageGenerateResult, type ModerationOptions, type ModerationResult, type OCROptions, type OCRResult, type ProductDescriptionOptions, type QuizOptions, type QuizResult, type RegexOptions, type SEOOptions, type SQLQueryOptions, type SentimentOptions, type SentimentResult, type SimplifyOptions, type SpeechOptions, type SummarizeOptions, type TranscribeOptions, type TranscriptionResult, type TranslateOptions, type TranslationResult };
