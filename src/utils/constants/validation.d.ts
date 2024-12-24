export declare const VALIDATION_RULES: {
    readonly PASSWORD: {
        readonly MIN_LENGTH: 8;
        readonly REQUIRE_UPPERCASE: true;
        readonly REQUIRE_LOWERCASE: true;
        readonly REQUIRE_NUMBER: true;
        readonly REQUIRE_SPECIAL: true;
    };
    readonly USERNAME: {
        readonly MIN_LENGTH: 3;
        readonly MAX_LENGTH: 20;
    };
    readonly EMAIL: {
        readonly PATTERN: RegExp;
    };
};
export declare const ERROR_MESSAGES: {
    readonly REQUIRED: "This field is required";
    readonly INVALID_EMAIL: "Please enter a valid email address";
    readonly INVALID_PASSWORD: "Password must meet the security requirements";
    readonly PASSWORDS_DONT_MATCH: "Passwords do not match";
    readonly INVALID_USERNAME: "Username must be between 3 and 20 characters";
};
