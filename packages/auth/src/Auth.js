// Validations
import {isFunction} from 'validation/isFunction';
// Component
import {create, render} from './component';

class Auth {
    /**
     * Constructor
     *
     * @param element DOM node that will contain the frame
     * @param url Auth API url
     * @param connector Defines name of the connector
     * @param spinner Set to `true` if the loading spinner should be shown
     * @param logLevel Level of logging [error | debug | info | warn]
     * @param onLoad
     */
    constructor(element, url, {
        connector = 'unknown',
        spinner = true,
        logLevel = 'error',
        onLoad
    } = {}) {
        // Create component
        const component = create('lims-auth', url, spinner, logLevel);
        // Render component
        render(component, element, {
            /**
             * Connector name
             */
            connector,
            /**
             * Called when the xcomponent content has loaded and is ready to be displayed.
             */
            onLoad() {
                if (isFunction(onLoad)) {
                    onLoad();
                }
            }
        });
    }
}

export default Auth;