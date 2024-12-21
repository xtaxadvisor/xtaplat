export function formatResponse(response, context) {
    // Add bullet points for lists
    const formattedText = response.replace(/^-\s/gm, '• ');
    // Add emphasis for important information
    const emphasizedText = formattedText.replace(/(Important:|Note:|Remember:)/g, '**$1**');
    // Format numbers and percentages
    const formattedNumbers = emphasizedText.replace(/\b(\d+\.?\d*%?)\b/g, (match) => {
        if (match.includes('%')) {
            return match;
        }
        return Number(match).toLocaleString();
    });
    return formattedNumbers;
}
export function extractActionItems(response) {
    const actionItems = [];
    const lines = response.split('\n');
    for (const line of lines) {
        if (line.toLowerCase().includes('you should') ||
            line.toLowerCase().includes('you need to') ||
            line.toLowerCase().includes('please') ||
            line.match(/^\d+\.\s/)) {
            actionItems.push(line.trim());
        }
    }
    return actionItems;
}
export function generateFollowUpQuestions(response, context) {
    const questions = [];
    switch (context) {
        case 'tax':
            questions.push('Would you like to learn more about specific deductions?', 'Should we discuss tax planning strategies?');
            break;
        case 'financial':
            questions.push('Would you like to explore investment options?', 'Should we review your financial goals?');
            break;
        case 'service':
            questions.push('Would you like to schedule a consultation?', 'Can I help you with any specific service?');
            break;
        default:
            questions.push('Would you like more information about this topic?', 'Can I clarify anything for you?');
    }
    return questions;
}
