export function calculateQueueMetrics(documents) {
    return {
        totalDocuments: documents.length,
        pending: documents.filter(d => d.status === 'pending').length,
        processing: documents.filter(d => d.status === 'processing').length,
        completed: documents.filter(d => d.status === 'completed').length,
        failed: documents.filter(d => d.status === 'failed').length,
        averageProcessingTime: calculateAverageProcessingTime(documents)
    };
}
function calculateAverageProcessingTime(documents) {
    const completedDocs = documents.filter(d => d.status === 'completed' && d.completedAt && d.startedAt);
    if (!completedDocs.length)
        return 0;
    const totalTime = completedDocs.reduce((sum, doc) => {
        const processTime = new Date(doc.completedAt).getTime() -
            new Date(doc.startedAt).getTime();
        return sum + processTime;
    }, 0);
    return totalTime / completedDocs.length;
}
