"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(p){throw r=0,p}}};var i=t(function(k,a){"use strict";var q={Buffer:"binary",Float16Array:"float16",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex32Array:"complex32",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};a.exports=q});var u=t(function(L,o){"use strict";var m=require("@stdlib/array-float64"),v=require("@stdlib/array-float32"),f=require("@stdlib/array-uint32"),x=require("@stdlib/array-int32"),C=require("@stdlib/array-uint16"),U=require("@stdlib/array-int16"),d=require("@stdlib/array-uint8"),I=require("@stdlib/array-uint8c"),S=require("@stdlib/array-int8"),b=require("@stdlib/array-complex64"),F=require("@stdlib/array-complex128"),T=require("@stdlib/array-bool");function n(){throw new Error("not implemented")}var g=[m,v,n,x,f,U,C,S,d,I,n,b,F,T];o.exports=g});var A=t(function(z,y){"use strict";var B=["float64","float32","float16","int32","uint32","int16","uint16","int8","uint8","uint8c","complex32","complex64","complex128","bool"];y.exports=B});var s=t(function(G,l){"use strict";var E=require("@stdlib/assert-is-struct-constructor-like"),O=require("@stdlib/assert-is-buffer"),P=require("@stdlib/assert-is-array"),Y=require("@stdlib/utils-constructor-name"),h=i(),w=u(),c=A(),D=c.length;function N(e){var r;if(P(e))return"generic";if(O(e))return"binary";for(r=0;r<D;r++)if(e instanceof w[r])return c[r];return e&&E(e.struct)?e.struct:h[Y(e)]||null}l.exports=N});var R=s();module.exports=R;
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
