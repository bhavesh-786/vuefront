import { createStore } from 'vuex'
import LoaderStore from '@/components/LoaderStore.js'
export default createStore({
    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.sideBarOpen = !state.sideBarOpen
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    },
    modules: {
        LoaderStore

    },
})