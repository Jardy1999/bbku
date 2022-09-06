import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const model: AppRouteModule = {
  path: '/data',
  name: 'Data',
  component: LAYOUT,
  redirect: '/data/manage',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.data.dataManage'),
  },
  children: [
    {
      path: 'manage',
      name: 'dataManage',
      component: () => import('/@/views/management/manage/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.data.dataManage'),
      },
    },
  ],
};

export default model;
