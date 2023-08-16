export const asyncRoutes = [
  {
    path: '/',
    name: 'Dashboard',
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
        component: '/src/views/dashboard/index.vue',
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
        component: '/src/views/components/Buttons.vue',
        meta: {
          title: 'Buttons',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'cards',
        name: 'Cards',
        component: '/src/views/components/Cards.vue',
        meta: {
          title: 'Cards',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'chips',
        name: 'Chips',
        component: '/src/views/components/Chips.vue',
        meta: {
          title: 'Chips',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'dialogs',
        name: 'Dialogs',
        component: '/src/views/components/Dialogs.vue',
        meta: {
          title: 'Dialogs',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'dividers',
        name: 'Dividers',
        component: '/src/views/components/Dividers.vue',
        meta: {
          title: 'Dialogs',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'expansion-panels',
        name: 'ExpansionPanels',
        component: '/src/views/components/ExpansionPanels.vue',
        meta: {
          title: 'ExpansionPanels',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'lists',
        name: 'Lists',
        component: '/src/views/components/Lists.vue',
        meta: {
          title: 'Lists',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'menus',
        name: 'Menus',
        component: '/src/views/components/Menus.vue',
        meta: {
          title: 'Menus',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'overlays',
        name: 'Overlays',
        component: '/src/views/components/Overlays.vue',
        meta: {
          title: 'Overlays',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },

      {
        path: 'sheets',
        name: 'Sheets',
        component: '/src/views/components/Sheets.vue',
        meta: {
          title: 'Sheets',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'toolbars',
        name: 'Toolbars',
        component: '/src/views/components/Toolbars.vue',
        meta: {
          title: 'Toolbars',
          icon: 'mdi-bookmark-outline',
          affix: true
        }
      },
      {
        path: 'tooltips',
        name: 'Tooltips',
        component: '/src/views/components/Tooltips.vue',
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

    meta: {
      title: 'Navigations',
      icon: 'mdi-navigation',
      affix: true
    }
  },
  {
    path: '/forms',
    name: 'Forms',

    meta: {
      title: 'Forms',
      icon: 'mdi-list-box',
      affix: true
    }
  },
  {
    path: '/tables',
    name: 'Tables',

    meta: {
      title: 'Tables',
      icon: 'mdi-file-table-box',
      affix: true
    }
  },
  {
    path: '/feedback',
    name: 'Feedbacks',

    meta: {
      title: 'Feedbacks',
      icon: 'mdi-comment-quote',
      affix: true
    }
  },
  {
    path: '/charts',
    name: 'Charts',

    meta: {
      title: 'Charts',
      icon: 'mdi-chart-areaspline-variant',
      affix: true
    }
  },
  {
    path: '/http-apis',
    name: 'APIs',
    redirect: { name: 'APIIndex' },
    meta: {
      title: 'APIs',
      icon: 'mdi-api',
      affix: true
    },
    children: [
      {
        path: 'index',
        name: 'APIIndex',
        component: '/src/views/http-apis/index.vue',
        meta: {
          title: 'Index',
          icon: 'mdi-api',
          affix: false
        }
      }
    ]
  }
]
