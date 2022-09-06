import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const decision: AppRouteModule = {
  path: '/supportDecision',
  name: 'SupportDecision',
  component: LAYOUT,
  redirect: '/decision/analysis',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('routes.supportDecision.decisionPanel'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/decision/data/index.vue'),
      meta: {
        affix: true,
        title: t('routes.supportDecision.dataManagement'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/decision/decision/index.vue'),
      meta: {
        title: t('routes.supportDecision.decision'),
      },
    },
    {
      path: 're',
      name: 'Re',
      component: () => import('/@/views/decision/decision/index.vue'),
      meta: {
        title: t('routes.supportDecision.re'),
      },
    },
  ],
};

export default decision;
