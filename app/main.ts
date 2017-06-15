// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);

/*
https://www.apixu.com/my/
http://api.apixu.com/v1/current.json?key=aa3285e74b824f26bab195813171506&q=50,30
http://api.apixu.com/v1/history.json?key=aa3285e74b824f26bab195813171506&q=50,30&dt=2017-06-15
 */
