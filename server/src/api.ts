// server/api.ts
import { fromSrc } from '../dist/index.js';  
// (if you author in TS, your source import would be '../src/index.ts' 
//  and your build pipeline must rewrite to `.js` for runtime)

export interface ApiResponse {
  status: string;
  message: string;
}

export async function handler(): Promise<ApiResponse> {
  return {
    status: 'OK',
    message: 'Server up!',
  };
}

export function serverHello(): string {
  // delegates to your core library
  return fromSrc() + ' from server';
}
