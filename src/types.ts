export type ProjectCategory = "ALL" | "DESKTOP" | "DEVELOPER_TOOLS" | "WEB_APPS";

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge: string;
  status: "PRODUCTION" | "ACTIVE_DEV" | "PUBLISHED" | "ACADEMIC";
  stars?: string;
  accent: string;
  summary: string;
  metrics: { label: string; value: string }[];
  architectureFlow: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  installCmd?: string;
  terminalLogs: string[];
  keyHighlights: string[];
  demoType?: "stream" | "webhook" | "fsm" | "iframe";
}

export interface ArchitectureLayer {
  id: string;
  layerNumber: string;
  name: string;
  role: string;
  domain: string;
  color: string;
  specs: { label: string; value: string }[];
  skills: string[];
  description: string;
  codeSnippet: string;
  codeLanguage: string;
}

export interface CourseworkItem {
  code: string;
  title: string;
  category: "Systems" | "Digital Logic" | "Software" | "Theory";
  description: string;
  tags: string[];
}
