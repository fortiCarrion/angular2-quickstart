import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//inicializar a nossa plataforma
const platform = platformBrowserDynamic();
//fazer o bootstrap do nosso module
platform.bootstrapModule(AppModule);