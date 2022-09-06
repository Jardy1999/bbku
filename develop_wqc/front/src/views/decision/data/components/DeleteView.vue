<template>
<a-button danger @click="showModal">删除</a-button>
<a-modal v-model:visible="visible" title="确定要删除当前方案吗？" @ok="handleok"></a-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    props:['select'],
    emits:['dd'],
    setup(props,context) {
        const visible = ref(false);
        const showModal = () => {
            visible.value = true;
        };
        const ww=props.select;
        const handleok = () => {
            visible.value = false;
            context.emit('dd');
        };

        const value=ref(null);
        // const expand = ref(false);
        // const formRef = ref();
        // const formState = reactive({});
        return {
            visible,
            showModal,
            value,
            ww,
            handleok,
        };
    },
});
</script>