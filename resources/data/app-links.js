import { markRaw } from 'vue';
import route from 'ziggy-js';

import { Ziggy } from '@/ziggy.js';
import FacebookIcon from '~icons/fa6-brands/facebook';
import InstagramIcon from '~icons/fa6-brands/instagram';
import LinkedInIcon from '~icons/fa6-brands/linkedin';
import BuildingOfficeIcon from '~icons/heroicons-outline/building-office';
import ChatBubbleLeftIcon from '~icons/heroicons-outline/chat-bubble-left';
import ClockIcon from '~icons/heroicons-outline/clock';
import DevicePhoneMobileIcon from '~icons/heroicons-outline/device-phone-mobile';
import EnvelopeIcon from '~icons/heroicons-outline/envelope';
import HomeIcon from '~icons/heroicons-outline/home';
import HomeModernIcon from '~icons/heroicons-outline/home-modern';
import InformationCircleIcon from '~icons/heroicons-outline/information-circle';
import MagnifyingGlassIcon from '~icons/heroicons-outline/magnifying-glass';
import PhoneIcon from '~icons/heroicons-outline/phone';
import ShoppingCartIcon from '~icons/heroicons-outline/shopping-cart';
import TagIcon from '~icons/heroicons-outline/tag';
import UserGroupIcon from '~icons/heroicons-outline/user-group';
import UsersIcon from '~icons/heroicons-outline/users';

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
    href: route('about', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      aboutUs: {
        title: 'About Us',
        href: route('about', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(InformationCircleIcon),
          classes: []
        }
      },
      meetTheTeam: {
        title: 'Meet the Team',
        href: route('about', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(UserGroupIcon),
          classes: []
        }
      }
    }
  },
  contact: {
    title: 'Contact',
    href: route('contact', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(UsersIcon),
      classes: []
    },
    subLinks: {
      messageForm: {
        title: 'Message Me',
        href: route('contact', undefined, undefined, Ziggy),
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
  services: {
    title: 'Services',
    href: route('services', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      homeBuying: {
        title: 'Buying Your Home',
        href: route('services', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(ShoppingCartIcon),
          classes: []
        }
      },
      homeSelling: {
        title: 'Selling Your Home',
        href: route('services', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(TagIcon),
          classes: []
        }
      },
      homeStaging: {
        title: 'Home Staging',
        href: route('services', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(HomeModernIcon),
          classes: []
        }
      },
      expiredListings: {
        title: 'Expired Listings',
        href: route('services', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(ClockIcon),
          classes: []
        }
      }
    }
  },
  listing: {
    title: 'Listings',
    href: route('listing', undefined, undefined, Ziggy),
    router: true,
    icon: {
      component: markRaw(UsersIcon),
      classes: []
    },
    subLinks: {
      listingForm: {
        title: 'Find your Dream Home',
        href: route('listing', undefined, undefined, Ziggy),
        router: true,
        icon: {
          component: markRaw(MagnifyingGlassIcon),
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
