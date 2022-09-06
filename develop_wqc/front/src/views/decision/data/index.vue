<template>
  <a-layout>
    <a-layout-header :style="{ 'background': '#fff' }">
      <a-space>
        <a-button>导入</a-button>
        <CreateViewVue @cc="handlecc" :lab="lab"/>
        <!-- <a-button>删除</a-button> -->
        <DeleteViewVue :select="select" @dd='handledd'/>
        <a-divider type="vertical" style="background-color: #7cb305"/>
        方案名称：
        <a-input v-model:value='value' placeholder="Basic usage" />
        <a-button>应用</a-button>
      </a-space>
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <!-- <a-list bordered :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>{{ item.title }}</a-list-item>
          </template>
        </a-list> -->
        <LeftMenu :plan="plan" @ll="handlell"/>
      </a-layout-sider>
      <a-layout-content>
        <!-- <p>{{select}}</p> -->
        <!-- <MainConVue :plan="plan"/> -->
    <div class="space-align-container">
        <a-descriptions
                        bordered="false"
                        column='2'
                        style="margin: 10px">
            <a-descriptions-item v-for="(value, key,index) in plan[Number(select)-1]"  :label="lab[Number(index)]">
                {{value}}
            </a-descriptions-item>
        </a-descriptions>
          <!-- <a-image
          :width="200"
          :height="200"
    src="./picture/231.png"
  /> -->
    </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {ref,reactive} from 'vue';
import LeftMenu  from './components/LeftMenu.vue'
//import MainConVue from './components/MainCon.vue';
import CreateViewVue from './components/CreateView.vue';
import DeleteViewVue from './components/DeleteView.vue';

const lab=['适用类型','适用断面','围岩','衬砌型式','喷砼(C20)','锚杆(m)长度','锚杆(m)纵×环','钢筋网','钢架纵距','预留变形量','模筑砼(C30)','仰拱'];
const plan:any= reactive([{d1:'分离式',d2:'深埋',d3:'V',d4:'Z3',d5:'18',d6:'2,5',d7:'1.2X1.2',d8:'Φ6.5@25',d9:'118@0.6m',d10:'3',d11:'40',d12:'45'},{d1:'小径隧道',d2:'净距：3~6cm',d3:'IV',d4:'Z3',d5:'18',d6:'2,5',d7:'1.2X1.0',d8:'Φ6.6@25',d9:'100@0.6m',d10:'3',d11:'40',d12:'45'}]);
let select=ref('1');
const value = ref('');

const handlecc=(formstate)=>
{
   plan[plan.length]=formstate;
}
const handlell=(cc)=>
{
  select.value=cc;//不要在value这里犯错
}
const handledd=()=>
{
  plan.splice(Number(select.value)-1,1);
}
</script>
