import { ReviewData } from '../lib/types';
import anisha from '../assets/avatar-anisha.png';
import ali from '../assets/avatar-ali.png';
import richard from '../assets/avatar-richard.png';
import shanai from '../assets/avatar-shanai.png';

export const reviews: ReviewData[] = [
  {
    id: 1,
    image: anisha,
    name: 'Anisha Li',
    review:
      "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 2,
    image: ali,
    name: 'Ali Bravo',
    review:
      'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    id: 3,
    image: richard,
    name: 'Richard Watts',
    review:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
  },
  {
    id: 4,
    image: shanai,
    name: 'Shanai Gough',
    review:
      'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
];
