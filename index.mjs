// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs";var f={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},h=[s,n,m,e,a,d,j,l,o,p,c],v=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],y=v.length;function u(s){var n;if(r(s))return"generic";if(t(s))return"binary";for(n=0;n<y;n++)if(s instanceof h[n])return v[n];return f[i(s)]||null}export{u as default};
//# sourceMappingURL=index.mjs.map
