import { importProvidersFrom } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Configuration, ConfigurationParameters } from "../configuration";
import { ApiModule } from "../api.module";

function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
      basePath: environment.apiUrl,
    };
  
    return new Configuration(params);
  }
  
  // app.config.ts dosyasinda kullaniyor olacagiz.
  export function provideApiServices() {
    return importProvidersFrom(ApiModule.forRoot(apiConfigFactory));
  }