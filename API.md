<a name="PhoneNumber"></a>

## PhoneNumber
Represents an algerian phone number, used to alter the number and access its properties.

**Kind**: global class  

* [PhoneNumber](#PhoneNumber)
    * [new PhoneNumber(body)](#new_PhoneNumber_new)
    * [.type()](#PhoneNumber+type) ⇒ <code>string</code> \| <code>null</code>
    * [.operator()](#PhoneNumber+operator) ⇒ <code>string</code> \| <code>null</code>
    * [.wilaya()](#PhoneNumber+wilaya) ⇒ <code>Array.&lt;string&gt;</code>
    * [.suffix()](#PhoneNumber+suffix) ⇒ <code>string</code>
    * [.globalCodeFormat()](#PhoneNumber+globalCodeFormat) ⇒ <code>string</code> \| <code>null</code>
    * [.convertToFormat([format])](#PhoneNumber+convertToFormat) ⇒ <code>string</code>

<a name="new_PhoneNumber_new"></a>

### new PhoneNumber(body)
**Throws**:

- <code>InvalidNumber</code> - Typically when you provide an invalid phone number in type.


| Param | Type | Description |
| --- | --- | --- |
| body | <code>string</code> | The body of the phone number. |

**Example**  
```js
// In JavaScriptconst { PhoneNumber } = require('dzpnp');const myNumber = new PhoneNumber('0665686523');
```
<a name="PhoneNumber+type"></a>

### phoneNumber.type() ⇒ <code>string</code> \| <code>null</code>
Check the type of the phone number . Mobile, landline or null (when your shit is random).

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>string</code> \| <code>null</code> - - mobile, landline or null.  
<a name="PhoneNumber+operator"></a>

### phoneNumber.operator() ⇒ <code>string</code> \| <code>null</code>
Retrieve the number's operator, applicable on a mobile number.

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>string</code> \| <code>null</code> - - The mobile operator, can be null if not found.  
**Throws**:

- <code>IllegalOperation</code> - When performed on a null / landline number.

<a name="PhoneNumber+wilaya"></a>

### phoneNumber.wilaya() ⇒ <code>Array.&lt;string&gt;</code>
Retrieve the number's possible wilayas of origin (e.g. BATNA and BISKRA are both 33), applicable on a landline number.

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>Array.&lt;string&gt;</code> - - The possible wilayas of origin, wan be empty or single-valued.  
**Throws**:

- <code>IllegalOperation</code> - When performed on a null / mobile number.

<a name="PhoneNumber+suffix"></a>

### phoneNumber.suffix() ⇒ <code>string</code>
Retrieve the processed/raw version of the number without the country code and local code.

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>string</code> - - As described above.  
<a name="PhoneNumber+globalCodeFormat"></a>

### phoneNumber.globalCodeFormat() ⇒ <code>string</code> \| <code>null</code>
Retrieve the global code format used, typically using double zeros (CODENAME: GLOBAL_00) and the plus sign (CODENAME: GLOBAL_PLUS).

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>string</code> \| <code>null</code> - - GLOBAL_00 , GLOBAL_PLUS or null in case yu didnt't use any of the above.  
<a name="PhoneNumber+convertToFormat"></a>

### phoneNumber.convertToFormat([format]) ⇒ <code>string</code>
Convert the current phone number to a standard format like E.126.

**Kind**: instance method of [<code>PhoneNumber</code>](#PhoneNumber)  
**Returns**: <code>string</code> - - The converted number.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>string</code> | <code>&quot;E.126&quot;</code> | The format to convert to, E.126 is default and currently the only format supported. |

