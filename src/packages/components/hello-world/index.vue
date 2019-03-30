<template>
    <div class="hello">
        <h1>{{ propA }}</h1>
        <h2>{{ dataA }}</h2>
        <h3><input type="text" v-focus></h3>
        <h4>{{ dataA | capitalize }}</h4>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Emit, Inject, Provide, Vue} from 'vue-property-decorator';
    import {User} from './interface';
    import directives from '@/packages/directive/index';
    import filters from '@/packages/filters/index';
    import Emitter from '@/packages/mixins/emitter';
    import {USE_DISPATCH_DEMO} from '@/packages/event/event';

    @Component({
        // 定义directives
        directives: {
            ...directives
        },
        // 定义filters
        filters: {
            ...filters
        },
        // 引用组件
        components: {
            // hello-world
        },
        // 引用mixin
        mixins: [Emitter]
    })
    export default class HelloWorld extends Vue {
        // 定义props
        @Prop({
            type: String,
            required: true,
            default: '我叫propA，我是一个props，因为我定义了required: true，所以父组件一定要传值给我，而且必须满足validator校验规则',
            validator: value => {
                return value.includes('a');
            },
        }) public propA: string;
        @Prop({
            type: Object,
            default: () => {
                return {};
            },
        }) public propB: object;
        // 定义data
        public dataA: string = 'dataA';
        private dataB: User = {
            name: 'dataB',
            age: 17
        };
        // 定义provide
        @Provide('biu')
        biu: string = this.dataA;
        // 定义inject
        @Inject('biu') string: string;
        // 定义生命周期
        private beforeCreate(): void {
            console.log(`该组件进入beforeCreate`);
        }
        private created(): void {
            console.log(`该组件进入created`);
        }
        private beforeMount(): void {
            console.log(`该组件进入beforeMount`);
        }
        private mounted(): void {
            console.log(`该组件进入mounted`);
            console.log(`Inject进来的biu：${this.biu}`);
            this.methodsA(this.dataB);
            // 向上传播事件（可越级，即可传播事件给根组件）
            this.dispatch('Home', USE_DISPATCH_DEMO, JSON.parse(JSON.stringify(this.dataB)));
        }
        private beforeUpdate(): void {
            console.log(`该组件进入beforeUpdate`);
        }
        private updated(): void {
            console.log(`该组件进入updated`);
        }
        private beforeDestory(): void {
            console.log(`该组件进入beforeDestory`);
        }
        private destoryed(): void {
            console.log(`该组件进入destoryed`);
        }
        // 定义computed
        get computedA() {
            return `我是computedA，我可以获取propA：${this.propA}`;
        }
        get computedB() {
            return `我是computedB，我可以获取propB：${this.propB}`;
        }
        // 定义methods
        private methodsA(student: User): void {
            console.log('age:', student.age);
            console.log('name:', student.name);
        }
        // 定义emit
        @Emit()
        private emitOne() {
            // do something
            return 'result';
            console.log(`相当于this.$emit('emit-one', 'result')`);
        }
        @Emit('myEmit')
        private emitTwo() {
            // do something
            console.log(`相当于this.$emit('myEmit')`);
        }
        @Emit()
        private emitThree() {
            // do something
            console.log(`相当于this.$emit('emit-three')`);
        }
        // 定义watch
        @Watch('dataA')
        private onDataAChanged(val: string, oldVal: string) {
            console.log(`dataA变了，旧值：${oldVal}，新值：${val}`);
        }
        @Watch('dataB', { immediate: true, deep: true })
        private onDataBChanged(val: string, oldVal: string) {
            console.log(`immediate代表一添加到watch就立即执行回调，默认为false：即发生了变化才执行回调`);
            console.log(`deep代表深监听`);
            console.log(`dataB变了，旧值：${oldVal}，新值：${val}`);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // 具有独立作用域，其他组件不受影响
    @import '../../../../node_modules/reset-css';
    // 变量
    $default-color: #333;
</style>
