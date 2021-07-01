import Base           from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import TableComponent from  './TableComponent.mjs';
import VdomUtil       from '../../../node_modules/neo.mjs/src/util/VDom.mjs';

/**
 * @class NeoApp.view.MainComponent
 * @extends Neo.component.Base
 */
class MainComponent extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='NeoApp.view.MainComponent'
         * @protected
         */
        className: 'NeoApp.view.MainComponent',
        /**
         * True automatically mounts a component after being rendered.
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {NeoApp.view.TableComponent|null} table=null
         */
        table: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['container'], cn: [
                {cls: ['jumbotron'], cn: [
                    {cls: ['row'], cn: [
                        {cls: ['col-md-6'], cn: [
                            {cls: ['row'], cn: [
                                {tag: 'h1', html: 'neomjs'}
                            ]}
                        ]},
                        {cls: ['col-md-6'], cn: [
                            {cls: ['row'], flag: 'row', cn: []}
                        ]}
                    ]}
                ]},
                {tag: 'span', cls: ['preloadicon', 'glyphicon', 'glyphicon-remove'], 'aria-hidden': true}
            ]}
        ]}
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push(
            {click: me.onButtonClick, scope: me, delegate: '.btn'}
        );

        me.domListeners = domListeners;

        me.createColumns(); // silent vdom update
        me.createTable();
    }

    /**
     *
     */
    createColumns() {
        let me   = this,
            vdom = me.vdom,
            row  = VdomUtil.getByFlag(vdom, 'row'),
            i    = 0,
            item,

            map = [
                {id: 'run',      html: 'Create 1,000 rows'},
                {id: 'runlots',  html: 'Create 10,000 rows'},
                {id: 'add',      html: 'Append 1,000 rows'},
                {id: 'update',   html: 'Update every 10th row'},
                {id: 'clear',    html: 'Clear'},
                {id: 'swaprows', html: 'Swap Rows'}
            ];

        for (; i < 6; i++) {
            item = map[i];

            row.cn.push(
                {cls: ['col-sm-6 smallpad'], cn: [
                    {tag: 'button', type: 'button', cls: ['btn', 'btn-primary', 'btn-block'], id: item.id, html: item.html}
                ]}
            );
        }
    }

    /**
     *
     */
    createTable() {
        let me   = this,
            vdom = me.vdom;

        me.table = Neo.create({
            module  : TableComponent,
            appName : me.appName,
            parentId: me.id
        });

        vdom.cn[0].cn.splice(1, 0, me.table.vdom);

        me.vdom = vdom;
    }

    /**
     * Mean override. It is tricky to customise top level app component ids (todo).
     * @param {String} id
     */
    createId(id) {
        super.createId('main');
    }

    /**
     *
     * @param {Object} data
     */
    onButtonClick(data) {
        console.log(data.path[0].id);
    }
}

Neo.applyClassConfig(MainComponent);

export {MainComponent as default};
