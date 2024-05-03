import { type Component } from 'vue'

import LogoIcon from './LogoIcon.vue'
import InstagramIcon from './social/InstagramIcon.vue'
import FacebookIcon from './social/FacebookIcon.vue'
import TwitterIcon from './social/TwitterIcon.vue'

export const store: Record<string, Component> = {
  logo: LogoIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon
}
