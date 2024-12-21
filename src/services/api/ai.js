import OpenAI from 'openai';
// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Only for development
});
// Context-specific prompts
const CONTEXT_PROMPTS = {
    admin: "You are an administrative assistant helping with tax and financial management tasks.",
    professional: "You are a professional tax advisor helping with client and financial management.",
    student: "You are a financial education tutor helping students learn about tax and finance.",
    investor: "You are an investment advisor helping with portfolio and market analysis.",
    general: "You are a helpful assistant for tax and financial matters."
};
export const aiService = {
    async getResponse(message, context = 'general') {
        try {
            const systemPrompt = CONTEXT_PROMPTS[context] || CONTEXT_PROMPTS.general;
            const completion = await openai.chat.completions.create({
                model: "gpt-4-turbo-preview",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 500
            });
            return completion.choices[0]?.message?.content || 'No response generated';
        }
        catch (error) {
            console.error('OpenAI API Error:', error);
            throw new Error('Failed to get AI response');
        }
    },
    async getCompletion(prompt, options = {}) {
        try {
            const completion = await openai.completions.create({
                model: "gpt-4-turbo-preview",
                prompt,
                max_tokens: options.maxTokens || 500,
                temperature: options.temperature || 0.7
            });
            return completion.choices[0]?.text || 'No completion generated';
        }
        catch (error) {
            console.error('OpenAI API Error:', error);
            throw new Error('Failed to get completion');
        }
    }
};
