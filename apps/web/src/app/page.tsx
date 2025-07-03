'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 animate-gradient-x" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl -z-10 animate-blob animation-delay-2000" />

      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center animate-fade-in'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white/80 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/60'>
          <p className='text-sm font-semibold text-gray-700'>
            DocChat is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">
            documents instantly!
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Ask questions, <span className="font-semibold text-blue-600">Ask questions,</span> or <span className="font-semibold text-purple-600">extract insights</span> — all from your uploaded files.
        </p>

        <p className="mt-2 max-w-2xl text-base text-gray-500">
          Upload, ask, and discover insights from your documents with AI-powered chat.
        </p>
        <Link
          href="/dashboard"
          className={buttonVariants({
            size: 'lg',
            className:
              'mt-7 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-transform duration-200',
          })}

          target='_blank'
        >
          GET STARTED <ArrowRight className='ml-2 h-5 w-5' />
        </Link>

        <div>
          <div className='relative isolate'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              />
            </div>

            <div>
              <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                <div className='mt-16 flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl'>
                    <Image
                      src='/dashboard-preview.jpg'
                      alt='product preview'
                      width={1364}
                      height={866}
                      quality={100}
                      className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 hover:scale-105'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-5xl sm:mt-56'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                Start chatting in minutes
              </h2>
              <p className='mt-4 text-lg text-gray-600'>
                Chatting to your PDF files has never been
                easier than with DocChat.
              </p>
            </div>
          </div>

          <ol className='grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3'>
            {[
              {
                title: "Create your free account",
                step: "1",
                description: (
                  <>
                    Get started in seconds with a free account — or{" "}
                    <Link href="/pricing" className="text-blue-600 underline underline-offset-2">
                      unlock more power
                    </Link>{" "}
                    with a Pro plan.
                  </>
                ),
              },
              {
                title: "Upload your documents",
                step: "2",
                description: "Just drag and drop your PDFs. We’ll process them instantly and securely.",
              },
              {
                title: "Start chatting effortlessly",
                step: "3",
                description: "Ask questions, extract insights, or summarize — all in natural language.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className='flex flex-col items-start rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg'
              >
                <div className='flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-4'>
                  {item.step}
                </div>
                <h3 className='text-lg font-semibold text-gray-900'>{item.title}</h3>
                <p className='mt-2 text-sm text-gray-600'>{item.description}</p>
              </li>
            ))}
          </ol>


        </div>
      </MaxWidthWrapper>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0, 0);}
          33% { transform: scale(1.1) translate(30px, -20px);}
          66% { transform: scale(0.9) translate(-20px, 20px);}
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
