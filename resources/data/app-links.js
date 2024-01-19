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
import UsersIcon from '~icons/heroicons-outline/users';
import HomeIcon from '~icons/heroicons-outline/home';
import PhoneIcon from '~icons/heroicons-outline/phone';
import InformationCircleIcon from '~icons/heroicons-outline/information-circle';
import FacebookIcon from '~icons/fa6-brands/facebook';
import LinkedInIcon from '~icons/fa6-brands/linkedin';
import InstagramIcon from '~icons/fa6-brands/instagram';
import route from 'ziggy-js';
import { Ziggy } from '@/ziggy.js';

export { links };

const links = {
  home: {
    title: 'Home',
    href: route('home', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(HomeIcon),
      classes: []
    }
  },
  about: {
    title: 'About',
    href: route('dashboard', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      aboutUs: {
        title: 'About Us',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(InformationCircleIcon),
          classes: []
        }
      },
      meetTheTeam: {
        title: 'Meet the Team',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(UserGroupIcon),
          classes: []
        }
      }
    }
  },
  services: {
    title: 'Services',
    href: route('dashboard', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      homeBuying: {
        title: 'Buying Your Home',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(ShoppingCartIcon),
          classes: []
        }
      },
      homeSelling: {
        title: 'Selling Your Home',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(TagIcon),
          classes: []
        }
      },
      homeStaging: {
        title: 'Home Staging',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(HomeModernIcon),
          classes: []
        }
      },
      expiredListings: {
        title: 'Expired Listings',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(ClockIcon),
          classes: []
        }
      }
    }
  },
  contact: {
    title: 'Contact',
    href: route('dashboard', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(UsersIcon),
      classes: []
    },
    subLinks: {
      messageForm: {
        title: 'Message Me',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(ChatBubbleLeftIcon),
          classes: []
        }
      },
      cellPhone: {
        title: '732-207-8154',
        href: 'tel:+17322078154',
        router: false,
        icon: {
          component: markRaw(DevicePhoneMobileIcon),
          classes: []
        },
        iconAlt: {
          component: markRaw(PhoneIcon),
          classes: []
        }
      },
      officePhone: {
        title: '904-503-0425',
        href: 'tel:+19045030425',
        router: false,
        icon: {
          component: markRaw(BuildingOfficeIcon),
          classes: []
        },
        iconAlt: {
          component: markRaw(PhoneIcon),
          classes: []
        }
      },
      email: {
        title: 'karen@realtorkmb.com',
        href: 'mailto:karen@realtorkmb.com',
        router: false,
        icon: {
          component: markRaw(EnvelopeIcon),
          classes: []
        }
      }
    }
  },
  social: {
    title: 'Social Media',
    href: '#',
    router: false,
    icon: null,
    subLinks: {
      linkedin: {
        title: 'LinkedIn',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: false,
        icon: {
          component: markRaw(LinkedInIcon),
          classes: []
        }
      },
      facebook: {
        title: 'Facebook',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: false,
        icon: {
          component: markRaw(FacebookIcon),
          classes: []
        }
      },
      instagram: {
        title: 'Instagram',
        href: route('dashboard', undefined, undefined, Ziggy),
        router: false,
        icon: {
          component: markRaw(InstagramIcon),
          classes: []
        }
      }
    }
  }
};
