import clsx from 'clsx'

const navLinkStyle = (
  pathname: string,
  targetPath: string | string[],
  className = '',
) =>
  clsx(
    'relative py-1 text-sm tracking-wide transition-all duration-300 ease-in-out',
    (
      Array.isArray(targetPath)
        ? targetPath.includes(pathname)
        : pathname === targetPath
    )
      ? 'text-[#356798] font-medium'
      : 'text-[#262626]',
    'after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#356798] after:transition-all after:duration-700 after:transform after:-translate-x-1/2 hover:after:w-full',
    className,
  )

export default navLinkStyle
