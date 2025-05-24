import { ExternalLink } from '../components/ExternalLink';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import ScreenCloudLogo from '../images/logos/screencloud.png';
import CodegentLogo from '../images/logos/codegent.jpeg';
import ReadingRoomLogo from '../images/logos/readingroom.png';
import PwCLogo from '../images/logos/pwc.png';
import TepiloLogo from '../images/logos/tepilo.png';
import ThinMartianLogo from '../images/logos/thinmartian.png';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Mark McDermott';

export const About = (
  <>
    {`I build digital products that make workplace communication better. I'm Co-Founder and CEO of ScreenCloud. We help thousands of businesses connect with their people through digital signage.`}
  </>
);
export const AboutExtended = `I live in London, UK, with a passion for building digital products that solve real-world problems. After graduating with a BA in History & Society from the University of Exeter, I co-founded ScreenCloud, a global digital signage platform now empowering 10,000+ businesses worldwide. Outside of work, I'm passionate about team sports, having played university and London league hockey for many years. I'm a lifelong Manchester United supporter (through good times and bad alongside my Dad), and also enjoy international travel, house music, fine dining, and spending quality time with friends and family. Until recently, I served as a Les Mills BODYPUMP Group Fitness Instructor.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const WorkExperience: Project[] = [
  {
    title: 'ScreenCloud',
    techStack: ['2015-Now', 'Digital Signage', 'SaaS', 'Enterprise Software'],
    description: 'Global digital signage platform empowering 10,000+ businesses to share meaningful content through screens.',
    logo: ScreenCloudLogo,
    link: {
      label: 'screencloud.com',
      href: 'https://screencloud.com',
    },
  },
  {
    title: 'Codegent',
    techStack: ['2003-2021', 'Digital Product Studio', 'Web Development', 'Mobile Apps'],
    description: 'Independent digital product studio that incubated several ventures, with mobile apps portfolio achieving over 20 million downloads.',
    logo: CodegentLogo,
    link: {
      label: 'codegent.com',
      href: 'https://www.codegent.com',
    },
  },
  {
    title: 'Thin Martian',
    techStack: ['2013-2017', 'Digital Agency', 'Client Services', 'Acquisition'],
    description: 'Digital agency acquired by Codegent, serving as client services division with notable clients including Microsoft, BBC, and Nestlé.',
    logo: ThinMartianLogo,
    link: {
      label: 'thinmartian.com',
      href: 'https://www.thinmartian.com',
    },
  },
  {
    title: 'Tepilo',
    techStack: ['2009-2017', 'Online Estate Agency', 'PropTech', 'Co-Founder'],
    description: 'Online Estate Agency co-founded with Sarah Beeny, providing technical strategy until successful exit during an investor buy-out.',
    logo: TepiloLogo,
  },
  {
    title: 'Reading Room',
    techStack: ['2002-2003', 'Digital Agency', 'Project Management'],
    description: 'Worked as Project Director, handling business development, creative direction, technical builds, and account management.',
    logo: ReadingRoomLogo,
    link: {
      label: 'readingroom.com',
      href: 'https://www.readingroom.com',
    },
  },
  {
    title: 'PwC Consulting',
    techStack: ['2000-2002', 'CRM Implementation', 'Telecommunications', 'Consulting'],
    description: 'Specialised in large-scale CRM implementations for the telecommunications clients such as Three and Vodafone.',
    logo: PwCLogo,
    link: {
      label: 'pwc.com',
      href: 'https://www.pwc.com',
    },
  },
];

export const SocialMedia = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mhmcdermott', icon: LinkedInIcon },
  { name: 'Twitter', link: 'https://twitter.com/mr_mcd', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/mhmcdermott', icon: InstagramIcon },
] as const;

export const Work = [
  {
    company: 'ScreenCloud',
    title: 'CEO & Co-Founder',
    logo: ScreenCloudLogo,
    start: '2015',
    end: 'Now',
  },
  {
    company: 'Codegent',
    title: 'Creative Director & Co-Founder',
    logo: CodegentLogo,
    start: '2003',
    end: '2015',
  },
  {
    company: 'Reading Room',
    title: 'Project Director',
    logo: ReadingRoomLogo,
    start: '2002',
    end: '2003',
  },
  {
    company: 'PwC Consulting',
    title: 'CRM IT Consultant',
    logo: PwCLogo,
    start: '2000',
    end: '2002',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const MediaAppearances = {
  "Industry Podcasts": [
    {
      title: "Sixteen:Nine Podcast - First Interview with Mark McDermott",
      description:
        "My first interview with industry expert Dave Haynes discussing ScreenCloud's origins, our approach to content management, and the vision for bringing modern web technology into digital signage. We explored how ScreenCloud grew out of our search for a solution that didn't exist, leading us to build one ourselves.",
      href: "https://www.sixteen-nine.net/2016/11/02/sixteennine-podcasts-mark-mcdermott-screencloud/",
    },
    {
      title: "Sixteen:Nine Podcast - How A Pandemic Changes Workplace Messaging",
      description:
        "Follow-up interview discussing ScreenCloud's platform re-architecture and how workplace communications evolved during the pandemic. Dave and I explored the challenges and opportunities that arose when most office screens went dark as workers moved to remote work.",
      href: "https://sixteennine.podbean.com/e/mark-mcdermott-screencloud-1584806984/",
    },
    {
      title: "Let's Talk Digital Signage - Industry Trends Post-Pandemic",
      description:
        "In-depth discussion about the digital signage industry landscape, how ScreenCloud adapted through the pandemic, and predictions for future trends in workplace communications and screen technology.",
      href: "https://blog.kitcast.tv/digital-signage-with-mark-mcdermott-screencloud/",
    },
    {
      title: "Revolutionizing Digital Signage - WYT Labs Podcast",
      description:
        "A deep dive into my tech journey, from early Y2K challenges to building ScreenCloud. We discuss digital signage evolution, pandemic impacts, marketing strategies, and how we've built a platform serving over 10,000 businesses with more than 100,000 screens.",
      href: "https://wytlabs.com/podcast/revolutionizing-digital-signage-mark-mcdermotts-vision-for-screencloud/",
    },
    {
      title: "Making Digital Signage Work: Best Practices and Challenges",
      description:
        "Detailed conversation about the technical and practical challenges of implementing effective digital signage solutions across different environments, with insights on hardware considerations, content strategies, and how to ensure reliability and engagement.",
      href: "https://www.youtube.com/watch?v=AiEYATQe_tM",
    },
    {
      title: "Workplace Digital Transformation with ScreenCloud",
      description:
        "Comprehensive showcase of how digital signage is transforming workplace communications, featuring real-world case studies, implementation strategies, and the future of integrated communication platforms for both office and remote employees.",
      href: "https://www.youtube.com/watch?v=9bUFZ8Uswcw",
    },
    {
      title: "The Future of Digital Signage Technology",
      description:
        "Expert panel discussion on emerging trends in digital signage, including AI-powered content generation, hardware advancements, and how digital displays are becoming central to smart workplace and retail environments.",
      href: "https://www.youtube.com/watch?v=akpXdKEoGtQ",
    },
    {
      title: "Boom Town: A SaaS Podcast - Global Expansion and Digital Workplaces",
      description:
        "In-depth conversation about ScreenCloud's global expansion strategy, focusing on how digital signage is transforming workplace communications worldwide. I share insights on leveraging regional differences in communication culture to achieve growth in diverse markets.",
      href: "https://www.boomplay.com/episode/8834525",
    },
  ],
  "Business Podcasts": [
    {
      title: "Delivered Podcast - Achieving Success in SaaS",
      description: 
        "In this Delivered podcast episode, I share valuable lessons on building a successful SaaS business, drawing on my 20 years of experience. I discuss key strategies that transformed ScreenCloud into a standout player in the digital signage industry.",
      href: "https://www.youtube.com/watch?v=hh1EpqsXn0E",
    },
    {
      title: "Entrepreneurs in B2B Sales - Transitioning from Agency to Full-Time CEO",
      description:
        "Discussion about my journey from running a digital agency to becoming full-time CEO at ScreenCloud, covering growth through acquisitions, scaling strategies, and the most useful business applications that entrepreneurs should know about.",
      href: "https://podcasts.apple.com/us/podcast/ep-066-mark-mcdermott-how-he-transitioned-from-running/id1463419088?i=1000466051333",
    },
    {
      title: "The SaaS Venture - Building ScreenCloud from Zero to Enterprise",
      description:
        "Sharing the journey of building ScreenCloud from a side project to an enterprise SaaS platform, with lessons learned about product development, pricing strategy, and expanding into the enterprise market.",
      href: "https://thesaasventure.com/mark-mcdermott-screencloud/",
    },
    {
      title: "The Modern CTO - Technical Leadership in Digital Signage",
      description:
        "Discussion about technical leadership in a growing SaaS company, the challenges of building a scalable platform for digital signage, and balancing innovation with reliability in enterprise software.",
      href: "https://moderncto.io/podcast/mark-mcdermott/",
    },
    {
      title: "How to Win - Making the Pivot Upmarket with ScreenCloud",
      description:
        "Discussion with Peep Laja about ScreenCloud's strategic move upmarket, differentiating from low-cost competitors by focusing on enterprise business. I explain how this pivot expanded growth opportunities and shares lessons learned about product positioning and customer education.",
      href: "https://howtowin.transistor.fm/episodes/making-the-pivot-upmarket-with-screencloud-s-mark-mcdermott",
    },
    {
      title: "Leadership Journeys - If You're Going to Do Something Big, Give It Space and Room",
      description:
        "In-depth conversation about leadership insights, including balancing technical expertise with customer focus, evolving vision in response to real-world challenges, and building a resilient mindset through all stages of scaling a business.",
      href: "https://podcasts.apple.com/us/podcast/leadership-journeys-206-mark-mcdermott-if-youre-going/id1605553381?i=1000682112866",
    },
    {
      title: "The Everyday Entrepreneur - From Agency Roots to SaaS Success",
      description:
        "Exploration of the entrepreneurial journey from running a digital agency to building a global SaaS company, with reflections on growth challenges, organizational changes, and the mindset shifts required when evolving beyond startup phase.",
      href: "https://www.youtube.com/watch?v=c4TvyN_caBk",
    },
    {
      title: "From Agency to SaaS Company - ScreenCloud's Transformation Story",
      description:
        "Chronicling the pivotal decision to transition from a successful digital agency to focusing entirely on a product business, including raising investment, building a scalable company culture, and lessons learned about leadership during rapid growth.",
      href: "https://www.youtube.com/watch?v=wRo_g6Wblhk",
    },
  ],
  "Conferences": [
    {
      title: "The Power of Employee-Facing Screens - UNLEASH America HR Conference",
      description:
        "Presentation focused on elevating the digital employee experience for deskless workers, exploring how strategically placed screens can transform workplace communication, especially for frontline employees without regular computer access.",
      href: "https://screencloud.com/employee-experience/employee-facing-screens",
    },
    {
      title: "Getting the Message Across to Your Employees - Digital Signage Summit Europe",
      description:
        "Presentation on workplace communications strategies, demonstrating how AI can create real-time content for digital signage. The talk showcased our innovative 'layer abstraction' approach to content creation, which Dave Haynes described as 'mind-blowing.'",
      href: "https://www.sixteen-nine.net/2023/07/06/digital-signage-summit-europe-impressions-day-2/",
    },
  ],
  "Videos": [
    {
      title: "Meet the Founders - ScreenCloud 2019",
      description:
        "Short film featuring myself, Luke Hubbard, and David Hart discussing ScreenCloud's history, vision, and our journey from digital agency to SaaS product company.",
      href: "https://www.facebook.com/ScreenCloudio/videos/meet-the-founders-screencloud-2019/472321220707612/",
    },
    {
      title: "Microsoft Viva Engage on Screens for Deskless Workers",
      description:
        "Webinar discussing the integration of Microsoft Viva Engage with ScreenCloud for frontline workers, highlighting how enterprise communication tools can reach all employees regardless of their work context.",
      href: "https://gt.linkedin.com/posts/mhmcdermott_microsoft-viva-engage-on-screens-for-deskless-activity-7039914934859636737-HUFU",
    },
    {
      title: "ScreenCloud Together - Building Company Culture",
      description:
        "Documentation of our global team retreat that plays a critical role in keeping our distributed team united. This video showcases our company culture and how we maintain connection despite having team members across multiple continents.",
      href: "https://uk.linkedin.com/posts/mhmcdermott_screencloud-together-2022-comes-to-an-end-activity-6943526841576042496-MEJq",
    },
  ],
  "Behind the Screens": [
    {
      title: "How We Started a SaaS Business",
      description:
        "Our very first podcast episode explaining how we transitioned from a digital agency to a product company, the events that led us to focus on ScreenCloud, and how technology in the workplace was evolving.",
      href: "https://screencloud.com/behind-the-screens/episode-1-introduction-1506000277",
    },
    {
      title: "The Cadence Operating Philosophy",
      description:
        "Discussion of how we implemented the Cadence operating philosophy (coined by David Sacks of Yammer/PayPal) at ScreenCloud to solve organisational challenges as we scaled the business.",
      href: "https://screencloud.com/behind-the-screens/implementing-company-cadence",
    },
    {
      title: "Getting the Basics Right",
      description:
        "An episode where we argue for the importance of getting the 'boring' basics done right and elegantly before working on shiny new features, explaining why this is essential for creating a solid business foundation.",
      href: "https://screencloud.com/behind-the-screens/ep-57-why-getting-the-basics-right-is-more-important",
    },
    {
      title: "Unveiling ScreenCloud Dashboards",
      description:
        "In this episode, David and I deep dive into how ScreenCloud dashboards evolved and the upcoming launch of our new approach for sharing dashboards securely with anybody in your organisation.",
      href: "https://screencloud.com/behind-the-screens/ep-60-launching-screencloud-dashboards",
    },
    {
      title: "Behind the Screens - Complete Series",
      description:
        "The complete 'Behind the Screens' podcast series with over 60 episodes covering SaaS business growth, digital signage technology, workplace communications, and entrepreneurship lessons from scaling ScreenCloud.",
      href: "https://screencloud.com/behind-the-screens",
    },
  ],
} as const;
