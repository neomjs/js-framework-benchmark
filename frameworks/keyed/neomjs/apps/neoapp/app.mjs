import MainComponent from './view/MainComponent.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/neoapp/',
    mainView: MainComponent,
    name    : 'NeoApp',
    renderTo: 'document.body'
});

export {onStart as onStart};
