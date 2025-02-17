import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Address" invert={invert}>
          2nd Floor, Zee Plaza,
          <br />
          No. 1678, 27th Main Rd,
          <br />
          Sector 2, HSR Layout,
          <br />
          Bengaluru, Karnataka 560102
          <br />
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          <a
            href="mailto:hello@codemancers.com"
            className="hover:text-gray-400"
          >
            hello@codemancers.com
          </a>
          <br />
          <a href="tel:+919731601276" className="hover:text-gray-400">
            +91-9731601276
          </a>
        </Office>
      </li>
    </ul>
  )
}
