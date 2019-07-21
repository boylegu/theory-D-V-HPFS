import formModule from '../store/modules/form';
export default (name, store) => {
    store.registerModule(name, formModule);
};