# React USAMapSelect Component

The `USAMapSelect` component is a React SVG map of the United States of Americca with simple interactive features. It
allows you to highlight and interact with individual states, providing callbacks for mouse events and some customization
options for styling.

![USA Map](https://s2.ezgif.com/tmp/ezgif-2-bcb48d6f06.gif)

## Live example

- [USA Map Select](https://token-ed.github.io/react-usa-map-select)

## Installation

```bash
npm install react-usa-map-select
```

## Usage

```jsx 
const MyComponent = () => {
 const handleClick = (event) => {
  // Handle click event
  console.log(`Clicked on state: ${event.currentTarget.getAttribute('name')}`);
 };

 const handleMouseEnter = (event) => {
  // Handle mouse enter event
  console.log(`Mouse entered state: ${event.currentTarget.getAttribute('name')}`);
 };

 const handleMouseLeave = () => {
  // Handle mouse leave event
  console.log('Mouse left a state');
 };

 return (
  <>
   <h1>Interactive USA Map</h1>
   <USAMapSelect
    onClick={handleClick}
    onUSAStateMouseEnter={handleMouseEnter}
    onUSAStateMouseLeave={handleMouseLeave}
    showStateNameOnHover={true}
    USAStateOnHoverColor="blue"
    USAStateOnHoverStrokeColor="white"
   />
  </>
 );
};

export default MyComponent;
```

## Props

## API

| Prop                         | Type                                                  | Default | Description                                                                                                                                                |
|------------------------------|-------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onClick`                    | `(event: React.SyntheticEvent<SVGGElement>) => void`  | -       | Callback function triggered on clicking a state.                                                                                                           |
| `onUSAStateMouseEnter`       | `(event?: React.SyntheticEvent<SVGGElement>) => void` | -       | Callback function triggered on mouse enter over a state.                                                                                                   |
| `onUSAStateMouseLeave`       | `(event?: React.SyntheticEvent<SVGGElement>) => void` | -       | Callback function triggered on mouse leave from a state.                                                                                                   |
| `showStateNameOnHover`       | `boolean`                                             | `false` | Boolean indicating whether to display the state name on hover.                                                                                             |
| `USAStateTextColor`          | `keyof ReturnType<typeof colorVariants>`              | `slate` | Color variant for the state text if `showStateNameOnHover` is `true`. Choose from: slate, white, gray, yellow, green, emerald, blue, purple, orange, pink. |
| `USAStateColor`              | `keyof ReturnType<typeof colorVariants>`              | `gray`  | Color variant for the state. Choose from: slate, white, gray, yellow, green, emerald, blue, purple, orange, pink.                                          |
| `USAStateOnHoverColor`       | `keyof ReturnType<typeof colorVariants>`              | `slate` | Color variant for the state on hover. Choose from: slate, white, gray, yellow, green, emerald, blue, purple, orange, pink.                                 |
| `USAStateOnHoverStrokeColor` | `keyof ReturnType<typeof colorVariants>`              | -       | Stroke color variant for the state on hover. Choose from the same options as `USAStateOnHoverColor`.                                                       |
| `USAStatePosition`           | `{ x: string, y: string }` or `"center"`              | -       | Position of the state name relative to the SVG wrapper. If `center`, the state name will persist the center position relative to the SVG wrapper.          |      

## Styling

The `USAMapSelect` component is built using Tailwind CSS.
You can customize the styling of the state name that shows on the top of the map by passing in your own Tailwind CSS
classes as props.
You can also style the svg wrapper element by passing in a class name to the `wrapperClassName` prop.

| Prop                 | Type     | Default | Description                                                                                         |
|----------------------|----------|---------|-----------------------------------------------------------------------------------------------------|
| `stateTextClassname` | `string` | -       | Class name for the <text> element that renders the state name when `showStateNameOnHover` is `true` |
| `wrapperClassName`   | `string` | -       | Class name for the <svg> element that wraps the map.                                                |

## License

MIT ©
