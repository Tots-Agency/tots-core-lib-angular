import { Injectable, InjectionToken } from "@angular/core";

export const TOTS_CORE_PROVIDER = new InjectionToken<TotsCoreConfig>('tots.core');

@Injectable()
export class TotsCoreConfig {
  baseUrl: string = '';
  lang?: string = 'en';
}