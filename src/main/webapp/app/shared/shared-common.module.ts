import { NgModule } from '@angular/core';

import { JhipsTest6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsTest6SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsTest6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsTest6SharedCommonModule {}
