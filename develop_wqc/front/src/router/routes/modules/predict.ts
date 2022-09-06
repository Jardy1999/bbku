import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const model: AppRouteModule = {
  path: '/predict',
  name: 'Predict',
  component: LAYOUT,
  redirect: '/predict/manage',
  meta: {
    orderNo: 6,
    icon: 'ion:grid-outline',
    title: t('routes.predict.modelManage'),
  },
  children: [
    {
      path: 'manage',
      name: 'modelManage',
      component: () => import('/@/views/management/manage/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.predict.modelManage'),
      },
    },
  ],
};

export default model;
