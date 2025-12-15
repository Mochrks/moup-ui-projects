import { Language } from "prism-react-renderer";

export interface VSCodeEditorProps {
  code: string;
  language?: Language;
  nameFile: string;
}
