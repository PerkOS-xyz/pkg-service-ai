# @perkos/service-ai

Multi-provider AI service abstraction with OpenRouter, Replicate, and OpenAI support.

## Installation

```bash
npm install @perkos/service-ai
```

## Usage

```typescript
import { AIService } from "@perkos/service-ai";

const aiService = new AIService({
  openRouterApiKey: process.env.OPENROUTER_API_KEY!,
  replicateApiKey: process.env.REPLICATE_API_KEY,
  openAIApiKey: process.env.OPENAI_API_KEY,
  defaultModel: "anthropic/claude-3.5-sonnet",
});

// Analyze an image
const analysis = await aiService.analyzeImage(imageUrl, {
  prompt: "Describe this image in detail",
});

// Generate an image
const result = await aiService.generateImage("A sunset over mountains", {
  style: "photorealistic",
  aspectRatio: "16:9",
});

// Transcribe audio
const transcription = await aiService.transcribeAudio(audioUrl, {
  language: "en",
});

// Generate speech
const audio = await aiService.synthesizeSpeech("Hello world", {
  voice: "alloy",
});
```

## Available Methods

### Vision & Image

- `analyzeImage(imageUrl, options?)` - Analyze image content
- `generateImage(prompt, options?)` - Generate images with DALL-E or Replicate

### Audio

- `transcribeAudio(audioUrl, options?)` - Transcribe audio to text
- `synthesizeSpeech(text, options?)` - Convert text to speech

### Text Processing

- `summarizeText(text, options?)` - Summarize long text
- `translateText(text, targetLanguage, options?)` - Translate text
- `analyzeSentiment(text, options?)` - Analyze sentiment
- `moderateContent(text, options?)` - Content moderation
- `simplifyText(text, options?)` - Simplify complex text
- `extractEntities(text, options?)` - Extract named entities

### Content Generation

- `generateEmail(context, options?)` - Generate professional emails
- `generateProductDescription(product, options?)` - E-commerce descriptions
- `optimizeSEO(content, options?)` - SEO optimization suggestions

### Code & Technical

- `generateCode(prompt, options?)` - Generate code snippets
- `reviewCode(code, options?)` - Code review and suggestions
- `generateSQLQuery(description, options?)` - Generate SQL queries
- `generateRegex(description, options?)` - Generate regex patterns
- `generateAPIDocs(code, options?)` - Generate API documentation

### Other

- `extractTextOCR(imageUrl, options?)` - Extract text from images
- `generateQuiz(topic, options?)` - Generate educational quizzes

## Configuration

```typescript
interface AIServiceConfig {
  openRouterApiKey: string;
  replicateApiKey?: string;
  openAIApiKey?: string;
  defaultModel?: string;
  imageModel?: string;
  siteUrl?: string;
  siteName?: string;
}
```

## Provider Fallback

The service automatically falls back between providers:

- **Image Generation**: Tries OpenAI DALL-E first, falls back to Replicate SDXL
- **Speech Synthesis**: Uses OpenAI TTS with fallback to Replicate
- **Text Tasks**: Uses OpenRouter with configurable models

## Supported Models

### OpenRouter (Text/Vision)

- `anthropic/claude-3.5-sonnet` (default)
- `openai/gpt-4o`
- `google/gemini-pro`
- Any model supported by OpenRouter

### OpenAI

- `dall-e-3` for image generation
- `whisper-1` for transcription
- `tts-1` / `tts-1-hd` for speech

### Replicate

- `black-forest-labs/flux-schnell` for fast image generation
- `stability-ai/sdxl` for high-quality images
- Various other models as fallbacks

## Error Handling

```typescript
try {
  const result = await aiService.generateImage(prompt);
} catch (error) {
  if (error.message.includes("rate limit")) {
    // Handle rate limiting
  }
  // Handle other errors
}
```

## License

MIT
