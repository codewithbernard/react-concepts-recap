## Instructions

Create simple React application displaying list of items. This application will consist of 1 component.

3.  List - This will be class based component. It will consists of 2 buttons. And 1 unordered list `<ul>`. They will be called `Button A` and `Button B`. The list will display multiple items. Each item will display text `"Hello"`. The number of items in list will be stored in component state. You can set initial value to `3`.

### Button A

When `Button A` is clicked it will toggle backgorund color of List component. By default the color will be white. When the user clicks button it will turn to red. If the user clicks again it will go back to white.

### Button B

When `Button B` is clicked it will incerement number of items in the list by 1. E.G. IF the list shows 3 items and the `Button B` is clicked. It will show 4 items.

### Hint

You will need to store both properties(1 - to track if the backgorund color shoud be filled with red color, 2 - To track how many items should be displayed in the list) in component state.

To initialize state with multiple items

```
state = {
    propertyA: valueA,
    propertyB: ValueB,
    propertyC: valueC
}
```

Then to setState of some property

```
this.setState({propertyA: newValueA})
```
