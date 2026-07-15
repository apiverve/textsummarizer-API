declare module '@apiverve/textsummarizer' {
  export interface textsummarizerOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface textsummarizerResponse {
    status: string;
    error: string | null;
    data: TextSummarizerData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TextSummarizerData {
      originalWords:     number | null;
      summaryWords:      number | null;
      percentDifference: number | null;
      summary:           null | string;
  }

  export default class textsummarizerWrapper {
    constructor(options: textsummarizerOptions);

    execute(callback: (error: any, data: textsummarizerResponse | null) => void): Promise<textsummarizerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textsummarizerResponse | null) => void): Promise<textsummarizerResponse>;
    execute(query?: Record<string, any>): Promise<textsummarizerResponse>;
  }
}
