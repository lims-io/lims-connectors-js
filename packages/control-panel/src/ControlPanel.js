// Validations
import {isFunction} from './validation';
// Component
import {create, render} from './component';

class ControlPanel {

    /**
     * Constructor
     *
     * @param element DOM node that will contain the frame
     * @param url Control panel API url
     * @param connector Defines name of the connector
     * @param spinner Set to `true` if the loading spinner should be shown
     * @param logLevel Level of logging [error | debug | info | warn]
     * @param permatoken
     * @param onLoad
     */
    constructor(element, url, {
        connector = 'unknown',
        spinner = true,
        logLevel = 'error',
        permatoken,
        onLoad
    }) {
        super.constructor();

        // Create component
        const component = create('lims-control-panel', url, spinner, logLevel);

        // Render component
        render(component, element, {

            /**
             * Permatoken used to login to the service
             */
            permatoken,

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

export default ControlPanel;
