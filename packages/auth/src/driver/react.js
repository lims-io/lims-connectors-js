import Auth from '../Auth';

/**
 * Creates React component that will render the Auth connector
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
                onLoad,
                onAuthenticated,
                onSignOut,
            } = this.props;

            // Get the node that will be used as a container
            const node = ReactDOM.findDOMNode(this);

            // Create auth connector instance
            const auth = new Auth(node, url, {
                connector,
                spinner,
                logLevel,
                onLoad,
                onAuthenticated,
                onSignOut,
            });

            this.setState({auth});
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
