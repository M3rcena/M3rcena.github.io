/**
 * WebMCP (Web Model Context Protocol) Integration
 * Exposes structured tools and context to AI agents and browser assistants
 * Specification: https://developer.chrome.com/docs/ai/webmcp
 */

export interface WebMCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, any>;
    required?: string[];
  };
  execute: (input: any) => Promise<any> | any;
}

export const webMcpTools: WebMCPTool[] = [
  {
    name: "sendContactMessage",
    description: "Send a direct message or project collaboration inquiry to Michail Farmakis via Formspree API.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Sender's full name",
        },
        email: {
          type: "string",
          format: "email",
          description: "Sender's email address for follow-up communications",
        },
        message: {
          type: "string",
          description: "Detailed message regarding the opportunity, project scope, or inquiry",
        },
      },
      required: ["name", "email", "message"],
    },
    execute: async ({ name, email, message }) => {
      try {
        const response = await fetch("https://formspree.io/f/xqkrwepq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        if (response.ok) {
          return { success: true, message: "Message successfully dispatched to Michail Farmakis." };
        }
        return { success: false, message: "Failed to dispatch message via Formspree." };
      } catch (err: any) {
        return { success: false, error: err?.message || "Network error" };
      }
    },
  },
  {
    name: "executeTerminalCommand",
    description: "Execute a command in Michail Farmakis portfolio terminal (help, neofetch, projects, skills, contact, clear, theme, exit).",
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The CLI command string to execute in the interactive session",
        },
      },
      required: ["command"],
    },
    execute: async ({ command }) => {
      const clean = String(command || "")
        .trim()
        .toLowerCase();
      return {
        status: "executed",
        command: clean,
        timestamp: new Date().toISOString(),
      };
    },
  },
  {
    name: "getPortfolioOverview",
    description: "Retrieve structured summary data of Michail Farmakis including background, university, core competencies, and contact info.",
    inputSchema: {
      type: "object",
      properties: {
        language: {
          type: "string",
          enum: ["en", "el"],
          description: "Preferred language (en = English, el = Greek)",
        },
      },
    },
    execute: async () => {
      return {
        name: "Michail Farmakis",
        alias: "m3rcena",
        role: "Full-Stack Software Engineer & Systems Architect",
        education: {
          institution: "National and Kapodistrian University of Athens (NKUA)",
          department: "Department of Informatics & Telecommunications",
          focus: "Computer Science, Systems Programming & Distributed Systems",
        },
        coreStack: ["C/C++", "POSIX", "Assembly", "React 18", "TypeScript", "Node.js", "Go", "Docker"],
        contact: {
          email: "michail.frm@gmail.com",
          github: "https://github.com/m3rcena",
          linkedin: "https://www.linkedin.com/in/michail-farmakis",
        },
        resumeUrl: "https://m3rcena.github.io/assets/Michail_Farmakis.pdf",
      };
    },
  },
];

export function initializeWebMCP(): void {
  if (typeof window === "undefined") return;

  const registerTarget = typeof document !== "undefined" && (document as any).modelContext?.registerTool ? (document as any).modelContext : typeof navigator !== "undefined" && (navigator as any).modelContext?.registerTool ? (navigator as any).modelContext : (window as any).modelContext?.registerTool ? (window as any).modelContext : null;

  if (registerTarget && typeof registerTarget.registerTool === "function") {
    for (const tool of webMcpTools) {
      try {
        registerTarget.registerTool({
          name: tool.name,
          description: tool.description,
          inputSchema: tool.inputSchema,
          execute: tool.execute,
        });
      } catch (e) {
        console.debug(`[WebMCP] Notice: failed to register tool ${tool.name}`, e);
      }
    }
  }
}
