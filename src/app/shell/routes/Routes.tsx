import React from 'react'

const Home: React.FC = () => {
  return <h1>Home component</h1>
}

const Standings: React.FC = () => {
  return <h1>Standings</h1>
}

const Teams: React.FC = () => {
  return <h1>Teams</h1>
}

const RoutesArr = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
  },
  {
    path: '/standings',
    sidebarName: 'Standings',
    component: Standings,
  },
  {
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams,
  },
]

export default RoutesArr
