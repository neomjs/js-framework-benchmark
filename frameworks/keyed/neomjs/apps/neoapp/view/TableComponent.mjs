import Base from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class NeoApp.view.TableComponent
 * @extends Neo.component.Base
 */
class TableComponent extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='NeoApp.view.TableComponent'
         * @protected
         */
        className: 'NeoApp.view.TableComponent',
        /**
         * @member {String[]} cls=['table','table-hover','table-striped','test-data']
         */
        cls: ['table', 'table-hover', 'table-striped', 'test-data'],
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'table', cn: [
            {tag: 'tbody', id: 'tbody', cn: []}
        ]}
    }}
}

Neo.applyClassConfig(TableComponent);

export {TableComponent as default};
