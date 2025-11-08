declare module '@apiverve/textsummarizer' {
  export interface textsummarizerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface textsummarizerResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class textsummarizerWrapper {
    constructor(options: textsummarizerOptions);

    execute(callback: (error: any, data: textsummarizerResponse | null) => void): Promise<textsummarizerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textsummarizerResponse | null) => void): Promise<textsummarizerResponse>;
    execute(query?: Record<string, any>): Promise<textsummarizerResponse>;
  }
}
