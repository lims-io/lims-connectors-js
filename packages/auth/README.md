# LIMS Connector for Auth

Injects Auth to the web page and allows communication with the related API.

## Getting started

```js
import Dock from "@lims.io/connector-auth";

// The name of the node that will hold the component
const node = '#container';
// Url to api
const url = '...';

const auth = Auth(node, url, {    
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
import {createReactComponent} from "@lims.io/connector-auth";

// Dock component
const Auth = createReactComponent(React, ReactDOM);

const View = ({url, onLoad}) => (   
    <div>
        <Auth url={url} onLoad={onLoad}/>
    </div>
);
```
