<template>
    <div class="home">
        <img alt="Vue logo" src="../packages/assets/logo.png">
        <HelloWorld propA="aaabbb"/>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/packages/components/hello-world/index.vue';
    import {findComponentDownward} from '@/packages/utils/findComponent';
    import {USE_DISPATCH_DEMO} from '@/packages/event/event';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        public foo: number = 5;
        @Provide('biu')
        biu: number = this.foo;

        mounted(): void {
            let HelloWorldComponent = findComponentDownward(this, 'HelloWorld');
            console.log('这是通过findComponent工具函数findComponentDownward找到的HelloWorldComponent组件：', HelloWorldComponent);
        }
        created(): void {
            this.$on(USE_DISPATCH_DEMO, (params: string): void => {
                console.log(`这是子组件HelloWorld通过mixin方法dispatch广播过来的事件，以及参数：`, params)
            });
        }
    }
</script>
