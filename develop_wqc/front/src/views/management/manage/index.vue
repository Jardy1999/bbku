<template>
<div class="p-4">
    <a-list
            rowKey="id"
            :grid="{ gutter: 24, xxxl: 8, xxl: 6, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }"
            :dataSource="dataSource"
            class="card-list">
        <template #renderItem="{ item }">
            <a-list-item>
                <!-- <template v-if="!item || item.id === -1">
                    <a-button class="new-btn" type="dashed">
                        <a-icon type="plus" />
                        新增产品
                    </a-button>
                </template>
                <template v-else> -->
                    <a-card :hoverable="true">
                        <a-card-meta>
                            <template v-slot:title>
                                <a>{{ item.title }}</a>
                            </template>
                            <template v-slot:avatar>
                                <a-avatar class="card-avatar" :src="item.avatar" size="large" />
                            </template>
                            <template v-slot:description>
                                <div class="meta-content">{{ item.content }}</div>
                            </template>
                        </a-card-meta>
                        <template  v-slot:actions>
                            <a-button type="link">查看模型训练</a-button>
                            <a-button type="link">查看模型效果</a-button>
                        </template>
                    </a-card>
                <!-- </template> -->
            </a-list-item>
        </template>

    </a-list>
</div>

</template>
<script lang="ts" setup>
import { defineComponent } from 'vue';

interface dataItem {
    id: number;
    title: string;
    avatar: string;
    content: string;
  }

const dataSource:dataItem[] = []
for (let i = 0; i < 13; i++) {
    dataSource.push({
        id: i,
        title: '模型' + (i+1),
        avatar: 'https://img.88icon.com/download/jpg/20200728/60f6ad93e22b497788e1777c024801b0_512_512.jpg!88bg',
        content: '模型描述'
    })
}

defineComponent({
    components: {
    },
    setup() {
        return {
            dataSource,
        };
    },
});

</script>

<style lang="less" scoped>
@import 'ant-design-vue/lib/style/index';

// The prefix to use on all css classes from ant-pro.
@ant-pro-prefix : ant-pro;
@ant-global-sider-zindex : 106;
@ant-global-header-zindex : 105;


.card-list {
    :deep(.ant-card-body:hover)  {
        .ant-card-meta-title>a {
            color: @primary-color;
        }
    }

    :deep(.ant-card-meta-title) {
        margin-bottom: 12px;

        &>a {
            display: inline-block;
            max-width: 100%;
            color: rgba(0, 0, 0, .85);
        }
    }

    :deep(.meta-content)  {
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        height: 64px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        margin-bottom: 1em;
    }
}

.card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
}

.ant-card-actions {
    background: #f7f9fa;

    li {
        float: left;
        text-align: center;
        margin: 12px 0;
        color: rgba(0, 0, 0, 0.45);
        width: 50%;

        &:not(:last-child) {
            border-right: 1px solid #e8e8e8;
        }

        a {
            color: rgba(0, 0, 0, .45);
            line-height: 40px;
            display: inline-block;
            width: 100%;

            &:hover {
                color: @primary-color;
            }
        }
    }
}

.new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
}
</style>