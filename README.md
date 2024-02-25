<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Buffer Data Type

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the data type of an ndarray data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-base-buffer-dtype/tags). For example,

```javascript
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype@v0.2.1-deno/mod.js';
```

#### dtype( buffer )

Returns the [data type][@stdlib/ndarray/dtypes] of an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors].

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
var buf = new Float64Array( 10 );

var dt = dtype( buf );
// returns 'float64'
```

If provided an ndarray data [`buffer`][@stdlib/ndarray/base/buffer-ctors] having an unknown or unsupported [data type][@stdlib/ndarray/dtypes], the function returns `null`.

```javascript
var dt = dtype( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@deno/mod.js';
import bufferCtors from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@deno/mod.js';
import isFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@deno/mod.js';
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype@deno/mod.js';

var DTYPES;
var ctor;
var buf;
var len;
var dt;
var i;

// Get a list of supported ndarray buffer data types:
DTYPES = dtypes();

// Buffer length:
len = 10;

// For each supported data type, create a buffer and confirm its data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = bufferCtors( DTYPES[ i ] );
    if ( DTYPES[ i ] === 'binary' && isFunction( ctor.alloc ) ) {
        buf = ctor.alloc( len );
    } else {
        buf = new ctor( len );
    }
    dt = dtype( buf );
    console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
}

// Try an array-like object...
buf = {
    'length': 10
};
dt = dtype( buf );
console.log( '%s == %s => %s', 'generic', dt, dt === 'generic' );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-buffer-dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-buffer-dtype

[test-image]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-buffer-dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-buffer-dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-buffer-dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-buffer-dtype/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-buffer-dtype/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray-base-buffer-ctors/tree/deno

</section>

<!-- /.links -->
