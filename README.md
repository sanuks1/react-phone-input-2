
### react-phone-input-3

## Installation

```shell-script
npm install react-phone-input-3 --save
```

Fork of `react-phone-input-2` by [bl00mber](https://github.com/bl00mber), adding extra features that have been requested:

* Additional `<ReactPhoneInput />` attribute -> `numberTrailing: string`. This increases the maximum inputable length by {numberTrailing}.

## Example:

```jsx
React.render(
  <ReactPhoneInput
    defaultCountry={'us'}
    onChange={handleOnChange}
    numberTrailing={10}
  />,
  document.getElementById('root')
);
```