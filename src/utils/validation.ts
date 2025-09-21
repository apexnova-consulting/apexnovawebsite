export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateCompanyName(company: string): boolean {
  return company.trim().length >= 2;
}

export function validateMessage(message: string): boolean {
  return message.trim().length >= 10;
}

export function validateForm(data: Record<string, string>): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate name
  if (!validateRequired(data.name)) {
    errors.name = 'Name is required';
  }

  // Validate email
  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate company if present
  if (data.company && !validateCompanyName(data.company)) {
    errors.company = 'Company name must be at least 2 characters';
  }

  // Validate message if present
  if (data.message && !validateMessage(data.message)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}
