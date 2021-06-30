import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/neoapp/',
    mainView: MainContainer,
    name    : 'NeoApp'
});

export {onStart as onStart};