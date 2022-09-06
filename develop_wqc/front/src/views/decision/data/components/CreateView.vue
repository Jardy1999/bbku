<template>
    <div>
        <a-button type="primary" @click="showModal">新建</a-button>
        <a-modal v-model:visible="visible" width="900px" title="新建方案" @ok="handleOk">
            <a-form :model="formState">
                <a-row :gutter="16"> 
                    <template v-for="i in num">
                        <a-col :span="8">
                            <a-form-item
                                         :name="`d${i}`"
                                         :label="lab[i-1]">
                                <a-input v-model:value="formState[`d${i}`]"></a-input>
                            </a-form-item>
                        </a-col>
                    </template>
                </a-row>
            </a-form>
        </a-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
    props:['plan','lab','count'],
    emits:['cc'],
    setup(props,context) {

        const visible = ref(false);
        const lab=props.lab;
        const num=lab.length;
        // const formRef = ref();
        const formState = reactive({});
        const showModal = () => {
            visible.value = true;
        };

        const handleOk = () => {
            context.emit('cc',formState);
            visible.value = false;
        };
        return {
            visible,
            showModal,
            handleOk,
            formState,
            lab,
            num,
        };
    },
});
</script>