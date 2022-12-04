import { NgModule } from '@angular/core';

/** Configs */
import { TotsCoreConfig, TOTS_CORE_PROVIDER } from './entities/tots-core-config';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    {
      provide: TOTS_CORE_PROVIDER,
      useClass: TotsCoreConfig
    },
  ]
})
export class TotsCoreModule { }
