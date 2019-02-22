<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld propA="aaabbb"/>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/hello-world/index.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        public foo: number = 5;
        @Provide('biu')
        biu: number = this.foo;
    }
</script>
