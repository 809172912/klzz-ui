import { Vue, Component } from 'vue-property-decorator'
declare module 'vue/types/vue' {
    interface Vue {
        baseBroadcast (componentName: string, eventName: string, params: any): void
        // 向上广播事件
        dispatch (componentName: string, eventName: string, params: any): void
        // 向下广播事件
        broadcast (componentName: string, eventName: string, params: any): void
    }
}
@Component
export default class Emitter extends Vue {
    baseBroadcast(componentName: string, eventName: string, params: any): void {
        this.$children.forEach(child => {
            const name = child.$options.name;

            if (name === componentName) {
                child.$emit.call(child, eventName, params);
            } else {
                this.baseBroadcast.call(child, componentName, eventName, params);
            }
        });
    }
    dispatch(componentName: string, eventName: string, params: any): void {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;

        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;

            if (parent) {
                name = parent.$options.name;
            }
        }
        if (parent) {
            parent.$emit.call(parent, eventName, params);
        }
    }
    broadcast(componentName: string, eventName: string, params: any): void {
        this.baseBroadcast.call(this, componentName, eventName, params);
    }
}