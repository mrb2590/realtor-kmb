import { markRaw } from 'vue';
import EnvelopeIcon from '~icons/heroicons-outline/envelope';
import DevicePhoneMobileIcon from '~icons/heroicons-outline/device-phone-mobile';
import BuildingOfficeIcon from '~icons/heroicons-outline/building-office';
import TagIcon from '~icons/heroicons-outline/tag';
import ShoppingCartIcon from '~icons/heroicons-outline/shopping-cart';
import ChatBubbleLeftIcon from '~icons/heroicons-outline/chat-bubble-left';
import HomeModernIcon from '~icons/heroicons-outline/home-modern';
import ClockIcon from '~icons/heroicons-outline/clock';
import UserGroupIcon from '~icons/heroicons-outline/user-group';
import InformationCircleIcon from '~icons/heroicons-outline/information-circle';
import FacebookIcon from '~icons/logos/facebook';
import LinkedInIcon from '~icons/logos/linkedin-icon';
import InstagramIcon from '~icons/logos/instagram-icon';

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
          component: markRaw(ShoppingCartIcon),
          classes: []
        }
      },
      {
        title: 'Selling Your Home',
        href: route('dashboard'),
        router: true,
        icon: {
          component: markRaw(TagIcon),
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
        title: 'Cell: (732) 207-8154',
        href: 'tel:+17322078154',
        router: false,
        icon: {
          component: markRaw(DevicePhoneMobileIcon),
          classes: []
        }
      },
      {
        title: 'Office: (904) 503-0425',
        href: 'tel:+19045030425',
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
