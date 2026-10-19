import "react";

declare module "react" {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean | string;
    "data-toolname"?: string;
    "data-tooldescription"?: string;
  }

  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
    "data-toolparamdescription"?: string;
  }

  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
    "data-toolparamdescription"?: string;
  }

  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
    "data-toolparamdescription"?: string;
  }
}

declare global {
  interface Window {
    modelContext?: {
      registerTool?: (tool: any) => Promise<any> | any;
      provideContext?: (context: any) => Promise<any> | any;
    };
  }
  interface Navigator {
    modelContext?: {
      registerTool?: (tool: any) => Promise<any> | any;
      provideContext?: (context: any) => Promise<any> | any;
    };
  }
  interface Document {
    modelContext?: {
      registerTool?: (tool: any) => Promise<any> | any;
    };
  }
}
