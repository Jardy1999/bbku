<template>
    <a-menu mode="inline"
            v-model:selectedKeys="current"
            @select="$emit('ll',current[0])">
        <div v-for="item in data" :key="item.key">
                <a-menu-item :key="item.key">
                    <template #icon>
                    <ProfileOutlined />
                    </template>
                    {{item.title}}
                </a-menu-item>
        </div>
    </a-menu>
</template>
<script  lang="ts" >
import { defineComponent, ref} from 'vue';
import { ProfileOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        ProfileOutlined
    },
    props:['plan'],
    emits:['ll'],
    setup(props) {
        const current = ref([]); //数组
        const len=ref<number>(props.plan.length);
        const data= Array.from({length:10}, (_,k)=> k+1).map(v => { return { key: '' + v, title: '方案' + v } });
        let num=ref(1);
        const handleClick =()=> {
            num.value++;
            
        };

        const titleClick = e => {
            console.log('titleClick', e);
        };
        return {
            current,
            handleClick,
            titleClick,
            data,
            num,
            len,
        };
    },

});
</script>
