<div align="center">
  <h1>dzpnp</h1>

  <p><b>DZ</b> (alpha 2 code for algeria) <b>p</b>hone <b>n</b>umber <b>p</b>rocessing . Parsing , region detection and operator detection for algerian numbers</p>
  <div class="badges">
    <a class="npmVersion" href="https://www.npmjs.com/package/dzpnp">
      <img src="https://img.shields.io/npm/v/dzpnp?style=for-the-badge">
    </a>
    <a class="npmMinifiedSize" href="https://www.npmjs.com/package/dzpnp">
      <img src="https://img.shields.io/bundlephobia/min/dzpnp?style=for-the-badge">
    </a>
    <a class="npmLicense" href="https://www.npmjs.com/package/dzpnp">
      <img src="https://img.shields.io/npm/l/dzpnp?style=for-the-badge">
    </a>  
  </div>
</div>

## Features
- Support for all of algeria's current mobile operators.
- Support for all algerian wilayas.
- Simple and beginner friendly.
- Well documented with examples.
- Flexible, easy to expand when a new operator hits the scene.
- No third party packages used, pure JavaScript and regular expressions.

## Getting started
1 - Install the package via npm <br>
<div align="center"><code>npm install dzpnp</code></div>
2 - Refer to the <a href="https://github.com/Mahdios/dzpnp/master/API.md">docs</a> for more in depth descriptions and usage.

## The regex magic
The regular expressions behind this project are actually very simple and very straight forward, everything is explained in the sections below.
### Initial processing
<p align="center">- Remove the country/local codes</p>
<i>Here is a diagram about it</i>
<img src="https://i.imgur.com/2qA17i1.png" alt="Diagram1">

### Determine the wilaya/provider
<p align="center">- Select the first digit on the processed version. <br> - Compare with the list of operator/wilaya</p>
<i>Here is a very simplified diagram (same trick goes for the provider)</i>
<img src="https://i.imgur.com/FZKu7pn.png" alt="Diagram1">

## Contributing
Pull requests and issues are always welcome , irrelevant or non-useful ones will be closed.

## Copyright
<p align="center"><i>Copyright (c) 2020 Copyright Holder All Rights Reserved.<br> Inspired by <a href="https://github.com/01walid/py-dz-phone-number">py-dz-phone-number</a>.</i><p>
