import ControlPanel from '../ControlPanel';

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
                connector = 'unknown',
                logLevel = 'error',
                spinner = true,
                url,
                permatoken,
                onLoad
            } = this.props;

            // Get the node that will be used as a container
            const node = ReactDOM.findDOMNode(this);

            // Create control panel instance
            const controlPanel = new ControlPanel(node, url, {
                connector,
                spinner,
                logLevel,
                permatoken,
                onLoad
            });

            this.setState({controlPanel});
        }

        // noinspection JSUnusedGlobalSymbols
        render() {
            const {height = '100%'} = this.props;

            // Container style
            const style = {
                height
            };

            return React.createElement('div', {style});
        }
    };
};

export default createReactComponent;
