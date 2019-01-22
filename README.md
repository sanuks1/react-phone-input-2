
# react-phone-input-3

## Installation

```shell-script
npm install react-phone-input-3 --save
```

Fork of [react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2) by [bl00mber](https://github.com/bl00mber), adding extra features that have been requested:

* Additional `<ReactPhoneInput />` attribute -> `numberTrailing: string`. This increases the maximum inputable length by {numberTrailing}.

## Usage:

```jsx
import { ReactPhoneInput } from 'react-phone-input-3'
React.render(
  <ReactPhoneInput
    defaultCountry={'us'}
    onChange={handleOnChange}
    numberTrailing={10}
  />,
  document.getElementById('root')
);
```

For full usage of this, see [react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2).