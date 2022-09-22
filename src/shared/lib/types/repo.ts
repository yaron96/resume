export interface IRepo {
  name: string;
  language: string;
  description: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
}