"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(h,a){
var c={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};a.exports=c
});var u=t(function(j,n){
var s=require('@stdlib/array-float64/dist'),q=require('@stdlib/array-float32/dist'),p=require('@stdlib/array-uint32/dist'),f=require('@stdlib/array-int32/dist'),x=require('@stdlib/array-uint16/dist'),m=require('@stdlib/array-int16/dist'),C=require('@stdlib/array-uint8/dist'),U=require('@stdlib/array-uint8c/dist'),I=require('@stdlib/array-int8/dist'),b=require('@stdlib/array-complex64/dist'),d=require('@stdlib/array-complex128/dist'),S=require('@stdlib/array-bool/dist'),T=[s,q,f,p,m,x,I,C,U,b,d,S];n.exports=T
});var y=t(function(k,o){
var g=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128","bool"];o.exports=g
});var v=t(function(w,l){
var B=require('@stdlib/assert-is-buffer/dist'),F=require('@stdlib/assert-is-array/dist'),E=require('@stdlib/utils-constructor-name/dist'),O=i(),P=u(),A=y(),Y=A.length;function D(e){var r;if(F(e))return"generic";if(B(e))return"binary";for(r=0;r<Y;r++)if(e instanceof P[r])return A[r];return O[E(e)]||null}l.exports=D
});var N=v();module.exports=N;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
