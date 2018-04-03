## Instructions

Create simple React application displaying list of items. This application will consist of 3 components. These should be located in `components` directory.

1.  Header - Simple function based component returning only `<h1>` tag

2.  ListItem - This will be class based component. It will be just `<div>` element containing simple text. This text will be stored in component props. When you click on this component it will toggle dispalying of text in the `<div>`. Store the state of display option in component state.

3.  List - This will be class based component. It will load items from `items.js` in `data` directory. Iterate through them and create ListItem from each element in the array.

## Notes

* For class based component you write `import React, {Component} from "react"`

* For function component you write `import React from "react"`

* Render method

```
  render() {
      return(
          <div></div>
      );
  }
```

* Inside render you don't want to call the function, you are just passing

* If syntax - `if (condition) {}`

* To set component state call `this.setState({})`

* To get component state call `this.state`

* When you have `export const myVariable = "something"` to import it use `import {myVariable} from "<file-name>"`

* When you have `export default myVariable` to import it use `import myVariable from "<file-name>"`
