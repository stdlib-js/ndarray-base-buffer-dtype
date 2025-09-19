"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(j,a){"use strict";var p={Buffer:"binary",Float16Array:"float16",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex32Array:"complex32",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};a.exports=p});var u=t(function(k,o){"use strict";var q=require("@stdlib/array-float64"),m=require("@stdlib/array-float32"),v=require("@stdlib/array-uint32"),f=require("@stdlib/array-int32"),x=require("@stdlib/array-uint16"),C=require("@stdlib/array-int16"),U=require("@stdlib/array-uint8"),d=require("@stdlib/array-uint8c"),I=require("@stdlib/array-int8"),S=require("@stdlib/array-complex64"),b=require("@stdlib/array-complex128"),F=require("@stdlib/array-bool");function n(){throw new Error("not implemented")}var T=[q,m,n,f,v,C,x,I,U,d,n,S,b,F];o.exports=T});var A=t(function(L,y){"use strict";var g=["float64","float32","float16","int32","uint32","int16","uint16","int8","uint8","uint8c","complex32","complex64","complex128","bool"];y.exports=g});var s=t(function(z,l){"use strict";var B=require("@stdlib/assert-is-struct-constructor-like"),E=require("@stdlib/assert-is-buffer"),O=require("@stdlib/assert-is-array"),P=require("@stdlib/utils-constructor-name"),Y=i(),h=u(),c=A(),w=c.length;function D(e){var r;if(O(e))return"generic";if(E(e))return"binary";for(r=0;r<w;r++)if(e instanceof h[r])return c[r];return e&&B(e.struct)?e.struct:Y[P(e)]||null}l.exports=D});var N=s();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
