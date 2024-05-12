import Image from 'next/image';
import { useMemo } from 'react';

const icon = (name: string) => (
  <Image src={`/icons/${name}.svg`} alt={name} width={35} height={35} />
);

const ICONS = {
  dashboard: icon('ico_dashboard'),
  subscriptions: icon('ico_subs'),
  jobs: icon('ico_jobs'),
  candidates: icon('ico_candidates'),
  chats: icon('ico_chats'),
  notifications: icon('ico_notifications'),
  support: icon('ico_support'),
  profile: icon('ico_profile'),
  settings: icon('ico_settings'),
  password: icon('ico_password'),
  logout: icon('ico_logout'),
};

const PATHS = {
  dashboard: '/dashboard',
  subscriptions: '/subscriptions',
  jobs: '/jobs',
  candidates: '/candidates',
  chats: '/chats',
  notifications: '/notifications',
  support: '/support',
  profile: '/profile',
  settings: '/settings',
  password: '/password',
  logout: '/logout',
};

export function useMainNavigationData() {
  const data = useMemo(
    () => [
      {
        icon: ICONS.dashboard,
        title: 'Dashboard',
        path: PATHS.dashboard,
      },
      {
        icon: ICONS.subscriptions,
        title: 'Subscriptions',
        path: PATHS.subscriptions,
      },
      {
        icon: ICONS.jobs,
        title: 'Jobs (JP)',
        path: PATHS.jobs,
      },
      {
        icon: ICONS.candidates,
        title: 'Candidates (JP)',
        path: PATHS.candidates,
      },
      {
        icon: ICONS.chats,
        title: 'Chats',
        path: PATHS.chats,
      },
      {
        icon: ICONS.notifications,
        title: 'Notifications',
        path: PATHS.notifications,
      },
      {
        icon: ICONS.support,
        title: 'Support',
        path: PATHS.support,
      },
    ],
    [],
  );

  return data;
}

export function useAccountNavigationData() {
  const data = useMemo(
    () => [
      {
        icon: ICONS.profile,
        title: 'Profile',
        path: PATHS.profile,
      },

      {
        icon: ICONS.notifications,
        title: 'Notifications',
        path: PATHS.notifications,
      },
      {
        icon: ICONS.settings,
        title: 'Settings',
        path: PATHS.settings,
      },
      {
        icon: ICONS.password,
        title: 'Password',
        path: PATHS.password,
      },
      {
        icon: ICONS.logout,
        title: 'Logout',
        path: PATHS.logout,
      },
    ],
    [],
  );

  return data;
}
