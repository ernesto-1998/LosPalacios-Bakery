import { type Component } from 'vue'

import LogoIcon from './LogoIcon.vue'
import InstagramIcon from './social/InstagramIcon.vue'
import FacebookIcon from './social/FacebookIcon.vue'
import TwitterIcon from './social/TwitterIcon.vue'

interface IStore {
  [key: string]: Component
}

export const store: IStore = {
  logo: LogoIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon
}
