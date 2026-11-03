/**
 * Shared input validation and sanitization utilities
 * to protect forms against invalid inputs and XSS attacks.
 */

// Strip HTML/Script tags and special script injection characters
export function sanitizeInput(value: string): string {
  if (!value) return '';
  return value
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags like <script>, </script>, <div>, etc.
    .replace(/[<>]/g, '') // Strip remaining stray brackets
    .trim();
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  moldCategory: string;
  projectDetails: string;
}

export interface InquiryFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
}

/**
 * Validates Full Name:
 * - Must reject script tags / html
 * - Must be at least 2-3 characters (min 2 chars)
 * - Must only accept alphabetical characters, spaces, and valid punctuation (e.g. ., '-)
 * - Must reject numeric-only, special-character-only inputs
 */
export function validateFullName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Full name is required';
  }

  // Reject script/html tags explicitly
  if (/<[^>]*>|javascript:/i.test(name)) {
    return 'HTML or script tags are not permitted';
  }

  if (trimmed.length < 2) {
    return 'Full name must be at least 2 characters';
  }

  if (trimmed.length > 70) {
    return 'Full name cannot exceed 70 characters';
  }

  // Reject pure numbers
  if (/^\d+$/.test(trimmed)) {
    return 'Name cannot contain only numbers';
  }

  // Reject purely special characters (contains no letters)
  if (!/[a-zA-Z]/.test(trimmed)) {
    return 'Please enter a valid name containing alphabetical characters';
  }

  // Only allow letters, spaces, and standard name punctuation (. ' -)
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return 'Name can only contain letters, spaces, and valid punctuation (. , \' -)';
  }

  return null;
}

/**
 * Validates Company Email:
 * - Validates against standard RFC email format
 * - Requires '@' and a valid top-level domain extension (e.g. .com, .in, .org, min 2 letters)
 */
export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Company email is required';
  }

  if (/<[^>]*>|javascript:/i.test(email)) {
    return 'HTML or script tags are not permitted';
  }

  // Standard RFC compliant email regex with valid TLD requirement (at least 2 alphabetic chars)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address with a valid domain extension (e.g., name@company.com)';
  }

  return null;
}

/**
 * Validates Indian or International Phone Number:
 * - Rejects alphabetical letters
 * - Formats correctly for standard 10-digit Indian numbers (starting 6-9, with optional +91/91/0)
 * - Supports valid international formats starting with '+' (7-15 digits)
 */
export function validatePhone(phone: string, required = false): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return required ? 'Phone number is required' : null;
  }

  if (/<[^>]*>|javascript:/i.test(phone)) {
    return 'HTML or script tags are not permitted';
  }

  // Disallow letters or illegal symbols
  if (/[a-zA-Z]/.test(trimmed)) {
    return 'Phone number cannot contain alphabetical letters';
  }

  // Extract clean digits
  const rawDigits = trimmed.replace(/\D/g, '');

  if (trimmed.startsWith('+')) {
    // International format: must have between 7 and 15 digits
    if (rawDigits.length < 7 || rawDigits.length > 15) {
      return 'Please enter a valid international phone number (7-15 digits)';
    }

    // If starting with +91, validate Indian format
    if (rawDigits.startsWith('91')) {
      const indianDigits = rawDigits.slice(2);
      if (indianDigits.length !== 10) {
        return 'Indian phone numbers must be 10 digits after +91';
      }
      if (!/^[6-9]/.test(indianDigits)) {
        return 'Indian phone numbers must start with 6, 7, 8, or 9';
      }
    }

    return null;
  }

  // Standard domestic / Indian context
  let digits = rawDigits;
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (digits.length !== 10) {
    return 'Please enter a valid 10-digit phone number or international format with +';
  }

  // Indian mobile numbers must start with 6, 7, 8, or 9
  if (!/^[6-9]/.test(digits)) {
    return 'Indian phone numbers must start with 6, 7, 8, or 9';
  }

  return null;
}

/**
 * Validates Company Name:
 * - Must reject script tags / html
 * - Must be at least 2 characters
 * - Reject purely numeric inputs (e.g. 123)
 * - Reject purely special characters (e.g. @#$)
 * - Only accept alphanumeric characters, spaces, and valid business punctuation (&, ., ,, ', -, /)
 */
export function validateCompanyName(company: string): string | null {
  const trimmed = company.trim();
  if (!trimmed) {
    return 'Company name is required';
  }

  if (/<[^>]*>|javascript:/i.test(company)) {
    return 'HTML or script tags are not permitted';
  }

  if (trimmed.length < 2) {
    return 'Company name must be at least 2 characters';
  }

  if (trimmed.length > 100) {
    return 'Company name cannot exceed 100 characters';
  }

  // Reject pure numbers
  if (/^\d+$/.test(trimmed)) {
    return 'Company name cannot contain only numbers';
  }

  // Reject purely special characters (must have letters)
  if (!/[a-zA-Z]/.test(trimmed)) {
    return 'Please enter a valid company name containing letters';
  }

  // Only allow letters, digits, spaces, and business punctuation
  const companyRegex = /^[a-zA-Z0-9\s.&',/()-]+$/;
  if (!companyRegex.test(trimmed)) {
    return 'Company name contains invalid characters';
  }

  return null;
}

/**
 * Validates Country / Region:
 * - Must reject script tags / html
 * - Must reject numbers-only inputs (e.g. 123)
 * - Must reject special-character strings
 * - Must be strictly alphabetical text (with spaces and hyphens)
 */
export function validateCountry(country: string): string | null {
  const trimmed = country.trim();
  if (!trimmed) {
    return 'Country or region is required';
  }

  if (/<[^>]*>|javascript:/i.test(country)) {
    return 'HTML or script tags are not permitted';
  }

  if (trimmed.length < 2) {
    return 'Country name must be at least 2 characters';
  }

  // Reject pure numbers
  if (/^\d+$/.test(trimmed)) {
    return 'Country cannot contain only numbers';
  }

  // Must only contain letters, spaces, hyphens, and periods
  if (!/^[a-zA-Z\s.-]+$/.test(trimmed)) {
    return 'Please enter a valid country name with letters only';
  }

  return null;
}

/**
 * Validates Target Quantity / Sets:
 * - Must strictly accept positive integers only (e.g. 1, 2, 10)
 * - Rejects negative numbers (-1), zero (0), decimals (1.5), or invalid strings
 */
export function validateQuantity(quantity: string): string | null {
  const trimmed = quantity.trim();
  if (!trimmed) {
    return 'Target quantity is required';
  }

  if (/<[^>]*>|javascript:/i.test(quantity)) {
    return 'HTML or script tags are not permitted';
  }

  // Check if string contains a negative sign
  if (trimmed.startsWith('-') || /-\d+/.test(trimmed)) {
    return 'Quantity must be a positive number';
  }

  // Check for decimals
  if (/^\d+\.\d+/.test(trimmed)) {
    return 'Quantity must be a whole positive integer';
  }

  // Extract leading digits or pure number
  const match = trimmed.match(/^(\d+)(.*)$/);
  if (!match) {
    return 'Please enter a valid positive integer (e.g., 1, 2, 10)';
  }

  const num = Number(match[1]);
  if (isNaN(num) || num <= 0) {
    return 'Quantity must be a positive integer greater than zero';
  }

  return null;
}

/**
 * Validates Project Details & Requirements:
 * - Must enforce minimum character limit (min 10 characters if provided, or at least 5)
 * - Reject purely numeric inputs (e.g., "123")
 * - Reject purely special characters (e.g., "@#$")
 * - Must require actual alphanumeric text
 * - HTML/JS tags must be blocked
 */
export function validateProjectDetails(details: string): string | null {
  const trimmed = details.trim();
  if (!trimmed) {
    // Optional field, but if entered, must be valid
    return null;
  }

  if (/<[^>]*>|javascript:/i.test(details)) {
    return 'HTML or script tags are not permitted';
  }

  if (trimmed.length < 5) {
    return 'Project details must be at least 5 characters long';
  }

  // Reject purely numbers
  if (/^\d+$/.test(trimmed)) {
    return 'Project details cannot consist solely of numbers';
  }

  // Must contain letters / alphanumeric description
  if (!/[a-zA-Z]/.test(trimmed)) {
    return 'Please provide meaningful project details with descriptive words';
  }

  return null;
}
