import type { Recommendation } from '../../types/Recommendation';
import type { Finding } from '../../types/Finding'; // Update the path to the correct module exporting 'Finding'
export declare function analyzeTaxForms(forms: any[]): Finding[];
export declare function generateRecommendations(findings: Finding[]): Recommendation[];
export declare function validateDocumentCompleteness(document: any): boolean;
