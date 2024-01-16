import { markRaw } from 'vue';
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftIcon,
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  HomeModernIcon,
  ClockIcon,
  UserGroupIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline';
import FacebookIcon from '@/Components/SocialIcons/FacebookIcon.vue';
import LinkedInIcon from '@/Components/SocialIcons/LinkedInIcon.vue';
import InstagramIcon from '@/Components/SocialIcons/InstagramIcon.vue';

export { navLinks };

const navLinks = [
  {
    title: 'About',
    links: [
      {
        title: 'About Us',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(InformationCircleIcon),
          classes: []
        }
      },
      {
        title: 'Meet the Team',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(UserGroupIcon),
          classes: []
        }
      }
    ]
  },
  {
    title: 'Services',
    links: [
      {
        title: 'Buying Your Home',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(ArrowRightEndOnRectangleIcon),
          classes: []
        }
      },
      {
        title: 'Selling Your Home',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(ArrowRightStartOnRectangleIcon),
          classes: []
        }
      },
      {
        title: 'Home Staging',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(HomeModernIcon),
          classes: []
        }
      },
      {
        title: 'Expired Listings',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(ClockIcon),
          classes: []
        }
      }
    ]
  },
  {
    title: 'Contact',
    links: [
      {
        title: 'Message Me',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(ChatBubbleLeftIcon),
          classes: []
        }
      },
      {
        title: 'Cell: (732) 207-8154)',
        href: 'tel:+17322078154',
        router: false,
        icon: {
          component: markRaw(DevicePhoneMobileIcon),
          classes: []
        }
      },
      {
        title: 'Office: (732) 207-8154)',
        href: 'tel:+17322078154',
        router: false,
        icon: {
          component: markRaw(BuildingOfficeIcon),
          classes: []
        }
      },
      {
        title: 'karen@realtorkmb.com',
        href: 'mailto:karen@realtorkmb.com',
        router: false,
        icon: {
          component: markRaw(EnvelopeIcon),
          classes: []
        }
      }
    ]
  },
  {
    title: 'Social Media',
    links: [
      {
        title: 'LinkedIn',
        href: route('dashboard'),
        router: false,
        icon: {
          component: markRaw(LinkedInIcon),
          classes: ['fill-primary-600']
        }
      },
      {
        title: 'Facebook',
        href: route('dashboard'),
        router: false,
        icon: {
          component: markRaw(FacebookIcon),
          classes: ['fill-primary-600']
        }
      },
      {
        title: 'Instagram',
        href: route('dashboard'),
        router: false,
        icon: {
          component: markRaw(InstagramIcon),
          classes: ['fill-primary-600']
        }
      }
    ]
  }
];
