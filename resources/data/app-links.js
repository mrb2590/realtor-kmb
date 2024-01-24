import { markRaw } from 'vue';

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
import StarSolidIcon from '~icons/heroicons-solid/star';
import FacebookIcon from '~icons/logos/facebook';
import InstagramIcon from '~icons/logos/instagram-icon';
import LinkedInIcon from '~icons/logos/linkedin-icon';
import TikTokIcon from '~icons/logos/tiktok-icon';
import YouTubeIcon from '~icons/logos/youtube-icon';

export { links };

const links = {
  home: {
    title: 'Home',
    zRoute: {
      name: 'home',
      params: {},
      absolute: false
    },
    href: null,
    icon: {
      component: markRaw(HomeIcon),
      classes: []
    }
  },
  about: {
    title: 'About',
    zRoute: {
      name: 'about',
      params: {},
      absolute: false
    },
    href: null,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      aboutUs: {
        title: 'About Us',
        zRoute: {
          name: 'about',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(InformationCircleIcon),
          classes: []
        }
      },
      meetTheTeam: {
        title: 'Meet the Team',
        zRoute: {
          name: 'about',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(UserGroupIcon),
          classes: []
        }
      }
    }
  },
  services: {
    title: 'Services',
    zRoute: {
      name: 'services',
      params: {},
      absolute: false
    },
    href: null,
    icon: {
      component: markRaw(InformationCircleIcon),
      classes: []
    },
    subLinks: {
      homeBuying: {
        title: 'Buying Your Home',
        zRoute: {
          name: 'services',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(ShoppingCartIcon),
          classes: []
        }
      },
      homeSelling: {
        title: 'Selling Your Home',
        zRoute: {
          name: 'services',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(TagIcon),
          classes: []
        }
      },
      homeStaging: {
        title: 'Home Staging',
        zRoute: {
          name: 'services',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(HomeModernIcon),
          classes: []
        }
      },
      expiredListings: {
        title: 'Expired Listings',
        zRoute: {
          name: 'services',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(ClockIcon),
          classes: []
        }
      }
    }
  },
  listings: {
    title: 'Listings',
    zRoute: {
      name: 'listings',
      params: {},
      absolute: false
    },
    href: null,
    icon: {
      component: markRaw(UsersIcon),
      classes: []
    },
    subLinks: {
      featured: {
        title: 'Featured Listings',
        zRoute: {
          name: 'listings',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(StarSolidIcon),
          classes: []
        }
      },
      search: {
        title: 'Search any Listing',
        zRoute: {
          name: 'listings',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(MagnifyingGlassIcon),
          classes: []
        }
      }
    }
  },
  contact: {
    title: 'Contact',
    zRoute: {
      name: 'contact',
      params: {},
      absolute: false
    },
    href: null,
    icon: {
      component: markRaw(UsersIcon),
      classes: []
    },
    subLinks: {
      messageForm: {
        title: 'Message Me',
        zRoute: {
          name: 'contact',
          params: {},
          absolute: false
        },
        href: null,
        icon: {
          component: markRaw(ChatBubbleLeftIcon),
          classes: []
        }
      },
      cellPhone: {
        title: '732-207-8154',
        zRoute: null,
        href: 'tel:+17322078154',
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
        zRoute: null,
        href: 'tel:+19045030425',
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
        zRoute: null,
        href: 'mailto:karen@realtorkmb.com',
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
    icon: null,
    subLinks: {
      linkedin: {
        title: 'LinkedIn',
        zRoute: null,
        href: '#',
        icon: {
          component: markRaw(LinkedInIcon),
          classes: []
        }
      },
      facebook: {
        title: 'Facebook',
        zRoute: null,
        href: '#',
        icon: {
          component: markRaw(FacebookIcon),
          classes: []
        }
      },
      instagram: {
        title: 'Instagram',
        zRoute: null,
        href: '#',
        icon: {
          component: markRaw(InstagramIcon),
          classes: []
        }
      },
      tiktok: {
        title: 'TikTok',
        zRoute: null,
        href: '#',
        icon: {
          component: markRaw(TikTokIcon),
          classes: []
        }
      },
      youtube: {
        title: 'YouTube',
        zRoute: null,
        href: '#',
        icon: {
          component: markRaw(YouTubeIcon),
          classes: []
        }
      }
    }
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    zRoute: {
      name: 'privacy-policy',
      params: {},
      absolute: false
    },
    href: null,
    icon: null
  },
  termsConditions: {
    title: 'Terms & Conditions',
    zRoute: {
      name: 'terms-conditions',
      params: {},
      absolute: false
    },
    href: null,
    icon: null
  }
};
