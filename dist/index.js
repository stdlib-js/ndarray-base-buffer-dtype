"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(R,a){
var v={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};a.exports=v
});var u=t(function(h,n){
var l=require('@stdlib/array-float64/dist'),p=require('@stdlib/array-float32/dist'),q=require('@stdlib/array-uint32/dist'),f=require('@stdlib/array-int32/dist'),x=require('@stdlib/array-uint16/dist'),m=require('@stdlib/array-int16/dist'),C=require('@stdlib/array-uint8/dist'),U=require('@stdlib/array-uint8c/dist'),I=require('@stdlib/array-int8/dist'),d=require('@stdlib/array-complex64/dist'),S=require('@stdlib/array-complex128/dist'),T=[l,p,f,q,m,x,I,C,U,d,S];n.exports=T
});var o=t(function(j,y){
var g=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];y.exports=g
});var s=t(function(k,c){
var F=require('@stdlib/assert-is-buffer/dist'),b=require('@stdlib/assert-is-array/dist'),E=require('@stdlib/utils-constructor-name/dist'),O=i(),P=u(),A=o(),Y=A.length;function B(e){var r;if(b(e))return"generic";if(F(e))return"binary";for(r=0;r<Y;r++)if(e instanceof P[r])return A[r];return O[E(e)]||null}c.exports=B
});var D=s();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
