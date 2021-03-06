//// [tests/cases/compiler/moduleResolutionWithSymlinks_withOutDir.ts] ////

//// [index.ts]
// Same as moduleResolutionWithSymlinks.ts, but with outDir

export class MyClass { private x: number; }

//// [index.ts]
import {MyClass} from "library-a";
export { MyClass as MyClass2 }

//// [app.ts]
import { MyClass } from "./library-a";
import { MyClass2 } from "./library-b";

let x: MyClass;
let y: MyClass2;
x = y;
y = x;


//// [/src/bin/library-a/index.js]
// Same as moduleResolutionWithSymlinks.ts, but with outDir
"use strict";
var MyClass = (function () {
    function MyClass() {
    }
    return MyClass;
}());
exports.MyClass = MyClass;
//// [/src/bin/library-b/index.js]
"use strict";
var library_a_1 = require("library-a");
exports.MyClass2 = library_a_1.MyClass;
//// [/src/bin/app.js]
"use strict";
var x;
var y;
x = y;
y = x;
