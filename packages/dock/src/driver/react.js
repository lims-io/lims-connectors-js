import Dock from '../Dock';

/**
 * Creates React component that will render Control Panel
 * @param React
 * @param ReactDOM
 */
const createReactComponent = (React, ReactDOM) => {
    // Build react component
    return class extends React.Component {
        // noinspection JSUnusedGlobalSymbols
        componentDidMount() {
            const {
                url,
                permatoken,
                onLoad,
                onUnload,
                onContainerOpen,
                onContainerClose,
                logLevel = 'error',
                connector = 'unknown',
                layout: {
                    right,
                    bottom,
                    zIndex
                } = {}
            } = this.props;

            // Get the node that will be used as a container
            const node = ReactDOM.findDOMNode(this);

            // Create dock instance
            const dock = new Dock(node, url, {
                connector,
                permatoken,
                logLevel,
                onLoad,
                onUnload,
                onContainerOpen,
                onContainerClose
            }, {
                right,
                bottom,
                zIndex
            });

            this.setState({dock});
        }

        // noinspection JSUnusedGlobalSymbols
        render() {
            return React.createElement('div');
        }
    };
};

export default createReactComponent;
