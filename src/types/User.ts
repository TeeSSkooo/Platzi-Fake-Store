export default interface User {
  id: string;
  email: string | null;
  token: string;
  createdAt: string;
  lastSignIn: string;
}
