import clsx from 'clsx'
import SocialLinks from './SocialLinks'

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}
      {...props}
    />
  )
}

const Footer = () => {
  return (
    <footer className="relative mt-auto">
      <Container>
        <div className="py-4 md:py-16"></div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <SocialLinks />
          <p className="mt-6 text-sm text-gray-600 sm:mt-0">
            &copy; Codemancers Technologies Private Limited,{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
