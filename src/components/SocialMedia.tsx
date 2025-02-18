import Link from 'next/link'
import clsx from 'clsx'

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4545 2.50012C20.0332 2.50012 20.5881 2.72999 20.9973 3.13916C21.4065 3.54833 21.6364 4.10329 21.6364 4.68194V19.9547C21.6364 20.5333 21.4065 21.0882 20.9973 21.4974C20.5881 21.9066 20.0332 22.1365 19.4545 22.1365H4.18182C3.60317 22.1365 3.04821 21.9066 2.63904 21.4974C2.22987 21.0882 2 20.5333 2 19.9547V4.68194C2 4.10329 2.22987 3.54833 2.63904 3.13916C3.04821 2.72999 3.60317 2.50012 4.18182 2.50012H19.4545ZM18.9091 19.4092V13.6274C18.9091 12.6842 18.5344 11.7796 17.8675 11.1127C17.2005 10.4457 16.2959 10.071 15.3527 10.071C14.4255 10.071 13.3455 10.6383 12.8218 11.4892V10.2783H9.77818V19.4092H12.8218V14.031C12.8218 13.191 13.4982 12.5038 14.3382 12.5038C14.7432 12.5038 15.1317 12.6647 15.4181 12.9511C15.7045 13.2375 15.8655 13.626 15.8655 14.031V19.4092H18.9091ZM6.23273 8.56558C6.71879 8.56558 7.18496 8.37249 7.52866 8.02878C7.87236 7.68508 8.06545 7.21891 8.06545 6.73285C8.06545 5.7183 7.24727 4.88921 6.23273 4.88921C5.74376 4.88921 5.27483 5.08345 4.92908 5.4292C4.58333 5.77495 4.38909 6.24388 4.38909 6.73285C4.38909 7.7474 5.21818 8.56558 6.23273 8.56558ZM7.74909 19.4092V10.2783H4.72727V19.4092H7.74909Z"
      />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  )
}

export const socialMediaProfiles = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/codemancers',
    icon: LinkedInIcon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/codemancers',
    icon: GitHubIcon,
  },
]

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            target="_blank"
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
