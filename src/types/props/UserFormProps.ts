export default interface UserFormProps {
  title: string;
  linkText: string;
  buttonText: string;
  href: string;
  handleSubmit: (email: string, password: string) => void;
}
