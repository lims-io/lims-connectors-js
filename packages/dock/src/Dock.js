// Validations
import {isFunction} from './validation';
// Component
import {create, render} from './component';
// xcomponent
import xcomponent from 'xcomponent';

/**
 * Layout size
 */
const size = {
    opened: {
        width: '320px',
        height: '90vh',
        minHeight: '350px',
        maxHeight: '800px'
    },
    closed: {
        width: '75px',
        height: '75px',
        minHeight: '75px',
        maxHeight: '75px'
    },
    unloaded: {
        width: '0px',
        height: '0px',
        minHeight: '0px',
        maxHeight: '0px'
    }
};

/**
 * Changes layout of the given container
 * @param container
 * @param width
 * @param height
 * @param minHeight
 * @param maxHeight
 */
const updateContainerLayout = (container, {width = 0, height = 0, minHeight = 0, maxHeight = 0}) => {
    container.style.width = width;
    container.style.height = height;
    container.style.minHeight = minHeight;
    container.style.maxHeight = maxHeight;
};

class Dock {
    /**
     * Constructor
     */
    constructor(element, url,
                {
                    connector = 'unknown',
                    logLevel = 'error',
                    permatoken,
                    onLoad,
                    onUnload,
                    onContainerOpen,
                    onContainerClose
                } = {}, {
                    bottom = '10px',
                    right = '10px',
                    zIndex = '10000'
                } = {}) {
        super.constructor();

        // Store element
        this.element = element;

        // Setup default style
        element.style.position = 'fixed';
        element.style.lineHeight = 1;
        element.style.bottom = bottom;
        element.style.right = right;
        element.style.zIndex = zIndex;

        // Bindings
        const localOnLoad = this.onLoad.bind(this);
        const localOnUnload = this.onUnload.bind(this);
        const localContainerOpen = this.onContainerOpen.bind(this);
        const localContainerClose = this.onContainerClose.bind(this);

        // Create component
        const component = create('lims-dock', url, logLevel);

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
             * Called when the xcomponent content has loaded and it's
             * ready to be displayed.
             */
            onLoad() {
                localOnLoad();
                if (isFunction(onLoad)) {
                    onLoad();
                }
            },

            /**
             * Called when the xcomponent wants to unload the dock
             */
            onUnload() {
                localOnUnload();
                if (isFunction(onUnload)) {
                    onUnload();
                }
            },

            /**
             * Called when the container dock is opened
             */
            onContainerOpen() {
                localContainerOpen();
                if (isFunction(onContainerOpen)) {
                    onContainerOpen();
                }
            },

            /**
             * Called when the container dock is closed
             */
            onContainerClose() {
                localContainerClose();
                if (isFunction(onContainerClose)) {
                    onContainerClose();
                }
            }
        });
    }

    /**
     * Returns xcomponent container
     * @return {Element}
     */
    get container() {
        const elements = this.element.getElementsByClassName('xcomponent-outlet');

        if (!elements && elements.length === 0) {
            throw new Error('Missing `xcomponent-outlet` container');
        }
        return elements[0];
    }

    /**
     * Called when the data from server is loaded
     */
    onLoad() {
        updateContainerLayout(this.container, size.closed);
    }

    /**
     * Called when the dock is unloaded
     */
    onUnload() {
        xcomponent.destroyAll();
    }

    /**
     * Called when the container dock is opened
     */
    onContainerOpen() {
        updateContainerLayout(this.container, size.opened);
    }

    /**
     * Called when the container dock is closed
     */
    onContainerClose() {
        updateContainerLayout(this.container, size.closed);
    }
}

export default Dock;
