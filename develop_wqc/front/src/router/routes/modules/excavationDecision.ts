import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const decision: AppRouteModule = {
  path: '/excavationDecision',
  name: 'ExcavationDecision',
  component: LAYOUT,
  redirect: '/decision/analysis',
  meta: {
    orderNo: 4,
    icon: 'ion:grid-outline',
    title: t('routes.excavationDecision.decisionPanel'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/decision/data/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.excavationDecision.dataManagement'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/decision/decision/index.vue'),
      meta: {
        title: t('routes.excavationDecision.decision'),
      },
    },
    {
      path: 're',
      name: 'Re',
      component: () => import('/@/views/decision/decision/index.vue'),
      meta: {
        title: t('routes.excavationDecision.re'),
      },
    },
  ],
};

export default decision;
