import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class NeoApp.view.MainComponentController
 * @extends Neo.controller.Component
 */
class MainComponentController extends ComponentController {
    static getConfig() {return {
        /**
         * @member {String} className='NeoApp.view.MainComponentController'
         * @protected
         */
        className: 'NeoApp.view.MainComponentController'
    }}

    /**
     *
     * @param {Object} data
     */
    onButtonClick(data) {
        let me    = this,
            table = me.getReference('table');

        switch (data.path[0].id) {
            case 'add'  : table.add();   break;
            case 'clear': table.clear(); break;
        }

        console.log(data.path[0].id);
    }
}

Neo.applyClassConfig(MainComponentController);

export {MainComponentController as default};
