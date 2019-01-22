import Vuex from 'vuex';
import firebase, { fireauth } from '@/plugins/firebase.js'
const createStore = () => {
    return new Vuex.Store({
        state: {
            cartTotal: 0,
            cart: {},
            user: null
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
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
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user
            }
        },
        actions: {
            signInWithGoogle({ commit }) {
                return new Promise((resolve, reject) => {
                    fireauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
                    resolve()
                })
            },
            signInWithFacebook({ commit }) {
                return new Promise((resolve, reject) => {
                    fireauth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
                    resolve()
                })
            },
            signOut({ commit }) {
                fireauth.signOut().then(() => {
                    commit('setUser', null)
                }).catch(err => console.log(error))
            }
        }
    });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);