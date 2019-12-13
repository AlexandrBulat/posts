export interface User {
  readonly id: string
  readonly email: string | undefined | null,
  readonly date: string;
  readonly gender: string;
  readonly phone: string | null;
  readonly name: string | null;
}