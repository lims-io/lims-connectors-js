# LIMS Connector for Control Panel

Injects Control Panel to the web page and allows communication with the related API.

## Getting started

```js
import ControlPanel from "@lims.io/connector-control-panel";

// The name of the node that will hold the control panel
const node = '#container';
// Url to control panel api
const url = '...';
// Permatoken
const permatoken = '...';

const controlPanel = ControlPanel(node, url, {
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
import {createReactComponent} from "@lims.io/connector-control-panel";

// Create panel component
const ControlPanel = createReactComponent(React, ReactDOM);

const View = ({url, permatoken, onLoad}) => (   
    <div>
        <ControlPanel url={url} permatoken={permatoken} onLoad={onLoad}/>
    </div>
);
```
