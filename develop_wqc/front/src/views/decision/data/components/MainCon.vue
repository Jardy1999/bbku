<template>
    <p>{{data}}</p>
    <div class="space-align-container">
        <a-descriptions
                        bordered="false"
                        column='2'
                        style="margin: 10px">
        <!-- <a-descriptions
                        bordered
                        size="small"
                        column='10'
                        style="margin: 10px"> -->
            <a-descriptions-item v-for="(value, key) in data"  :label="key">
                {{ value }}
            </a-descriptions-item>
        </a-descriptions>
    </div>

</template>


<script lang="ts">
import { defineComponent ,reactive} from 'vue';
export default defineComponent({
    props:['plan'],
    setup(props) 
    {
        const data=props.data;
        return
        {
            data
        };

    }
});
</script>