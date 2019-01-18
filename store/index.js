import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            cartTotal: 0,
            cart: {}
        },
        mutations: {
            clearCartCount: state => {
                state.cartTotal = 0;
            },
            clearCartContents: state => {
                state.cart = {};
            },
            deleteItem: (state, item) => {
                state.cartTotal = state.cartTotal - 1;
                delete state.cart[item.wirkstoff.id]
            },
            addItem: (state, item) => {
                if (item.wirkstoff.id in state.cart) {
                } else {
                    state.cartTotal++;
                    let stateItem = Object.assign({}, item);
                    stateItem.count = 1;
                    state.cart[item.wirkstoff.id] = stateItem;
                }
            }
        }
    });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);