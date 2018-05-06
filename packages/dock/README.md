# LIMS Connector for Dock

Injects Dock to the web page and allows communication with the related API.

## Getting started

```js
import Dock from "@lims.io/connector-dock";

// The name of the node that will hold the dock
const node = '#container';
// Url to dock api
const url = '...';
// Permatoken
const permatoken = '...';

const dock = Dock(node, url, {
    permatoken,
    onLoad() {
        
    },
    // Other API calls
});
```

## Drivers

The library can be also used as a part of the following frameworks.

### React

```jsx harmony
import React from "react";
import ReactDOM from "react-dom";
import {createReactComponent} from "@lims.io/connector-dock";

// Dock component
const Dock = createReactComponent(React, ReactDOM);

const View = ({url, permatoken, onLoad}) => (   
    <div>
        <Dock url={url} permatoken={permatoken} onLoad={onLoad}/>
    </div>
);
```
