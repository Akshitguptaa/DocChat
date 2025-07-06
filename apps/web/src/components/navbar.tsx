import Link from 'next/link'
import { buttonVariants } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-gray-800'>
          <Link
            href='/'
            className='flex z-40 font-semibold text-white'>
            <span>DocChat</span>
          </Link>

          <div className='hidden items-center space-x-4 sm:flex'>
            <SignedOut>
              <Link
                href='/pricing'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                  className: 'text-gray-200 hover:text-white cursor-pointer'
                })}>
                Pricing
              </Link>
              <SignInButton mode="modal">
                <button
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                    className: 'text-gray-200 hover:text-white cursor-pointer'
                  })}
                  type="button"
                >
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  className={buttonVariants({
                    size: 'sm',
                    className: 'text-gray-950 bg-white hover:bg-gray-200 cursor-pointer'
                  })}
                  type="button"
                >
                  Get started <ArrowRight className='ml-1.5 h-5 w-5' />
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                href='/dashboard'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                  className: 'text-gray-200 hover:text-white'
                })}>
                Dashboard
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8"
                  }
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar