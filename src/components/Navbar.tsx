'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import SocialLinks from './SocialLinks'
import navLinkStyle from '@/components/navLinkStyle'
import hamburgerMenu from '@/images/hamburger-menu.svg'
import closeSidebar from '@/images/close.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const pathname = usePathname()
  const isCareersPage = pathname.includes('careers')

  const dropdownRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  if (isCareersPage) return null

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-4 sm:px-6 md:h-24 md:flex-row lg:px-8">
        <div className="flex w-full items-center justify-between md:w-auto">
          <button
            className="inline-block cursor-pointer space-y-1 rounded p-2 md:hidden"
            type="button"
            onClick={() => setOpen(true)}
          >
            <Image
              src={hamburgerMenu}
              alt="Hamburger Menu"
              height={16}
              width={21.3}
            />
          </button>
        </div>
        <ul
          className={clsx('hidden gap-10 text-sm text-neutral-500', {
            'mt-3 block w-full space-y-6 bg-neutral-100 p-4': open,
            'hidden md:flex md:items-center': !open,
          })}
        >
          <li>
            <Link
              href="/services/"
              className={navLinkStyle(pathname, '/services/')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about_us/"
              className={navLinkStyle(pathname, '/about_us/')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className={navLinkStyle(pathname, '/portfolio/')}
            >
              Portfolio
            </Link>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-custom-gray inline-flex items-center gap-x-1 text-sm focus:outline-none"
            >
              <span
                className={navLinkStyle(
                  pathname,
                  ['/blog/', '/tils/'],
                  'cursor-pointer',
                )}
              >
                Resources
              </span>
              <svg
                className={`size-5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-[4.5rem] z-10 mt-5 flex h-[140px] w-[186px] -translate-x-1/2 px-4">
                <div className="flex-auto rounded-[12px] bg-white p-4 text-sm ring-1 shadow-lg ring-gray-900/5">
                  <div className="p-2">
                    <Link
                      href="/blog/"
                      className={navLinkStyle(pathname, '/blog/')}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Blogs
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link
                      href="/tils/"
                      className={navLinkStyle(pathname, '/tils/')}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      TILs
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link
                      onClick={() => setIsDropdownOpen(false)}
                      href="https://github.com/codemancers"
                      target="_blank"
                      className={navLinkStyle(
                        pathname,
                        '',
                        'tracking-wide whitespace-nowrap text-[#262626]',
                      )}
                    >
                      Open Source Project
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div
        className={`relative z-50 lg:hidden ${open ? 'visible' : 'invisible'}`}
      >
        <div
          className={`fixed inset-0 h-screen bg-gradient-to-r from-white via-transparent to-blue-100 backdrop-blur-lg backdrop-filter transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        <div className="fixed inset-0 flex h-screen">
          <div
            className={`relative flex w-full transition-transform duration-300 ease-in-out ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex w-4/5 grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
              <nav className="mt-10 flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <Link
                      href="/services/"
                      onClick={() => setOpen(false)}
                      className={navLinkStyle(pathname, '/services/')}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about_us/"
                      className={navLinkStyle(pathname, '/about_us/')}
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/"
                      className={navLinkStyle(pathname, '/portfolio/')}
                      onClick={() => setOpen(false)}
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li className="relative">
                    <button
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                      className="flex w-full items-center justify-between text-sm text-[#262626] focus:outline-none"
                    >
                      <span
                        className={navLinkStyle(
                          pathname,
                          ['/blog/', '/tils/'],
                          'cursor-pointer',
                        )}
                      >
                        Resources
                      </span>
                      <svg
                        className={`size-5 cursor-pointer transition-transform duration-200 ${
                          isAccordionOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
                        isAccordionOpen ? 'mt-2 max-h-40' : 'max-h-0'
                      }`}
                    >
                      <div className="flex flex-col gap-y-4 bg-white p-4 ring-1 shadow-lg ring-gray-900/5">
                        <Link
                          href="/blog/"
                          className={navLinkStyle(pathname, '/blog/')}
                          onClick={() => {
                            setIsAccordionOpen(false)
                            setOpen(false)
                          }}
                        >
                          Blogs
                        </Link>
                        <Link
                          href="/tils/"
                          className={navLinkStyle(pathname, '/tils/')}
                          onClick={() => {
                            setIsAccordionOpen(false)
                            setOpen(false)
                          }}
                        >
                          TILs
                        </Link>
                        <Link
                          onClick={() => {
                            setIsAccordionOpen(false)
                            setOpen(false)
                          }}
                          href="https://github.com/codemancers"
                          target="_blank"
                          className={navLinkStyle(pathname, '/opensource/')}
                        >
                          Open Source Project
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/contact/"
                      className={navLinkStyle(pathname, '/contact/')}
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center justify-center">
                <SocialLinks />
              </div>
            </div>

            <div
              className="left-full mt-10 flex h-screen w-1/5 justify-center"
              onClick={() => setOpen(false)}
            >
              <div>
                <button type="button">
                  <Image
                    src={closeSidebar}
                    alt="Close Sidebar"
                    className="cursor-pointer"
                    height={16}
                    width={16}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
