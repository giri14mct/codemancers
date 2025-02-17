import Image from 'next/image';
import Link from 'next/link';

const socialMediaLinks = [
  {
    href: 'https://www.facebook.com/CodemancersPrivateLimited/',
    imgSrc: '/images/facebook.svg',
    alt: 'Codemancers on Facebook',
    label: 'Facebook',
  },
  {
    href: 'https://x.com/codemancershq',
    imgSrc: '/images/twitter.svg',
    alt: 'Codemancers on X',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/codemancers',
    imgSrc: '/images/github.svg',
    alt: 'Codemancers on GitHub',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/company/codemancers/',
    imgSrc: '/images/linkedin.svg',
    alt: 'Codemancers on LinkedIn',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    imgSrc: '/images/rss.svg',
    alt: 'Codemancers on RSS',
    label: 'RSS',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-x-6">
      {socialMediaLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          className="group"
          aria-label={`Codemancers on ${social.label}`}
        >
          <Image
            src={social.imgSrc}
            alt={social.alt}
            height={24}
            width={24}
            className="transition duration-300 group-hover:brightness-0 group-hover:contrast-200"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
