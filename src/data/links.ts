import { Link } from '../lib/types';
import fb from '../assets/icon-facebook.svg';
import ig from '../assets/icon-instagram.svg';
import pn from '../assets/icon-pinterest.svg';
import tw from '../assets/icon-twitter.svg';
import yt from '../assets/icon-youtube.svg';

export const links: Link[] = [
  {
    id: 1,
    icon: fb,
    link: 'https://www.facebook.com/',
    name: 'facebook',
  },
  {
    id: 2,
    icon: ig,
    link: 'https://www.instagram.com/',
    name: 'instagram',
  },
  {
    id: 3,
    icon: pn,
    link: 'https://www.pinterest.com/',
    name: 'pinterest',
  },
  {
    id: 4,
    icon: tw,
    link: 'https://www.twitter.com/',
    name: 'twitter',
  },
  {
    id: 5,
    icon: yt,
    link: 'https://www.youtube.com/',
    name: 'youtube',
  },
];
