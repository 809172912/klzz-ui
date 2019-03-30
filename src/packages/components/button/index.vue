<template>
    <button>{{text}}</button>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class WButton extends Vue {
        // 定义props
        @Prop({
            type: String,
            default: () => {
                return 'kat-ui按钮';
            },
        }) public text: string;
    }
</script>
