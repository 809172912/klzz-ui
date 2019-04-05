import Vue from 'vue';
import Router from 'vue-router';
const navJson = require('./nav.config.json');

let arrayArrayToArray = (arrayArray: Array<object>) => {
    let array: Array<object> = []
    arrayArray.forEach((item: any) => {
        array = [...array, ...item]
    })
    return array
}

let countRoutes = (config: any) => {
    let routes: any = []
    config.forEach((route: any) => {
        if (!route.items) {
            route.component = (r: any) => require.ensure([], () =>
                r(require(`./docs/${route.name}.md`)))
            routes = [...routes, route]
        }
        if (route.items) {
            routes = [...routes, ...countRoutes(route.items)]
        }
    })
    return routes;
}

Vue.use(Router);

export default new Router({
    routes: [...countRoutes(arrayArrayToArray(Object.values(navJson))), {
        path: '/',
        redirect: countRoutes(arrayArrayToArray(Object.values(navJson)))[0].path
    }]
})
