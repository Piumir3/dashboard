import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
     
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User',
    to: '/theme/colors',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Product',
    to: '/theme/typography',
    icon: 'cil-basket',
  },
  

  {
    _tag: 'CSidebarNavItem',
    name: 'Shop',
    to: '/base/breadcrumbs',
    icon: 'cil-puzzle',
  },
  
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Route',
    to: '/buttons/buttons',
    icon: 'cil-cursor',
  },
   
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Report',
    to: '/charts',
    icon: 'cil-chart-pie'
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Privilage',
    to: '/icons/coreui-icons',
    icon: 'cil-star'
  },
   

  {
    _tag: 'CSidebarNavItem',
    name: 'Authentication',
    to: '/notifications/badges',
    icon: 'cil-ban'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'About us',
    to: '/notifications/alerts',
    icon: 'cil-calculator'
  },
  
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

