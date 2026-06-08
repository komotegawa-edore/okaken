export interface TextSection {
  type: "heading" | "paragraph" | "question" | "quote" | "break";
  content: string;
  label?: string;
}
