import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const model: AppRouteModule = {
  path: '/classify',
  name: 'Classify',
  component: LAYOUT,
  redirect: '/classify/manage',
  meta: {
    orderNo: 5,
    icon: 'ion:grid-outline',
    title: t('routes.classify.modelManage'),
  },
  children: [
    {
      path: 'manage',
      name: 'modelManage',
      component: () => import('/@/views/management/manage/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.classify.modelManage'),
      },
    },
  ],
};

export default model;
