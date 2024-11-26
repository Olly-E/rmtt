export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  company: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface ConfirmPasswordProps {
  password: string;
  confirmPassword: string;
}
