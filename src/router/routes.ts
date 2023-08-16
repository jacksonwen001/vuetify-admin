import { type RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

interface MetaType {
  title: string
  icon: string
  affix: boolean
}
export type RouteType = RouteRecordRaw & { children?: RouteType[]; meta: MetaType }

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true
    }
  }
]


export const asyncRoutes: Array<RouteType> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Layout,
    redirect: '/index',
    meta: {
      title: 'Dashboard',
      icon: 'mdi-home',
      affix: true
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Index',
          icon: 'mdi-home',
          affix: false
        }
      }
    ]
  },

  {
    path: '/components',
    name: 'Components',
    component: Layout,
    redirect: { name: 'Buttons' },
    meta: {
      title: 'Components',
      icon: 'mdi-view-dashboard',
      affix: true
    },
    children: [
      {
        path: 'buttons',
        name: 'Buttons',
        component: () => import('@/views/components/Buttons.vue'),
        meta: {
          title: 'Buttons',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'cards',
        name: 'Cards',
        component: () => import('@/views/components/Cards.vue'),
        meta: {
          title: 'Cards',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'chips',
        name: 'Chips',
        component: () => import('@/views/components/Chips.vue'),
        meta: {
          title: 'Chips',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'dialogs',
        name: 'Dialogs',
        component: () => import('@/views/components/Dialogs.vue'),
        meta: {
          title: 'Dialogs',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'dividers',
        name: 'Dividers',
        component: () => import('@/views/components/Dividers.vue'),
        meta: {
          title: 'Dialogs',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'expansion-panels',
        name: 'ExpansionPanels',
        component: () => import('@/views/components/ExpansionPanels.vue'),
        meta: {
          title: 'ExpansionPanels',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'lists',
        name: 'Lists',
        component: () => import('@/views/components/Lists.vue'),
        meta: {
          title: 'Lists',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'menus',
        name: 'Menus',
        component: () => import('@/views/components/Menus.vue'),
        meta: {
          title: 'Menus',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'overlays',
        name: 'Overlays',
        component: () => import('@/views/components/Overlays.vue'),
        meta: {
          title: 'Overlays',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },

      {
        path: 'sheets',
        name: 'Sheets',
        component: () => import('@/views/components/Sheets.vue'),
        meta: {
          title: 'Sheets',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'toolbars',
        name: 'Toolbars',
        component: () => import('@/views/components/Toolbars.vue'),
        meta: {
          title: 'Toolbars',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'tooltips',
        name: 'Tooltips',
        component: () => import('@/views/components/Tooltips.vue'),
        meta: {
          title: 'Tooltips',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      }
    ]
  },
  {
    path: '/navigations',
    name: 'Navigations',
    component: Layout,
    meta: {
      title: 'Navigations',
      icon: 'mdi-navigation',
      affix: true
    }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Layout,
    meta: {
      title: 'Forms',
      icon: 'mdi-list-box',
      affix: true
    }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Layout,
    meta: {
      title: 'Tables',
      icon: 'mdi-file-table-box',
      affix: true
    }
  },
  {
    path: '/feedback',
    name: 'Feedbacks',
    component: Layout,
    meta: {
      title: 'Feedbacks',
      icon: 'mdi-comment-quote',
      affix: true
    }
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Layout,
    meta: {
      title: 'Charts',
      icon: 'mdi-chart-areaspline-variant',
      affix: true
    }
  },
  {
    path: '/http-apis',
    name: 'APIs',
    component: Layout,
    redirect: {name: 'APIIndex'},
    meta: {
      title: 'APIs',
      icon: 'mdi-api',
      affix: true
    },
    children: [
      {
        path: 'index',
        name: 'APIIndex',
        component: () => import('@/views/http-apis/index.vue'),
        meta: {
          title: 'Index',
          icon: 'mdi-api',
          affix: false
        }
      }
    ]
  }
]
