export interface CodePreviewCardProps {
  title: string;
  code: string;
  codeNext?: string;
  codeHtml?: string;
  language?: string;
  preview: React.ReactNode;
  nameFile: string;
}
