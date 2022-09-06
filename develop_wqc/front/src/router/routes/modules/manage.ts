import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const model: AppRouteModule = {
  path: '/model',
  name: 'Model',
  component: LAYOUT,
  redirect: '/model/manage',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.management.modelManage'),
  },
  children: [
    {
      path: 'manage',
      name: 'modelManage',
      component: () => import('/@/views/management/manage/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.management.modelManage'),
      },
    },
  ],
};

export default model;
