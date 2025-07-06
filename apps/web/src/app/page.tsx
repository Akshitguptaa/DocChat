// 'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-900 via-gray-950 to-purple-900 animate-gradient-x" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-900 rounded-full opacity-30 blur-3xl -z-10 animate-blob animation-delay-2000" />

      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center gap-6 mt-32 mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl">
          Chat with your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
            documents instantly!
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Ask questions, <span className="font-semibold text-blue-400">Ask questions,</span> or <span className="font-semibold text-purple-400">extract insights</span> — all from your uploaded files.
        </p>
        <p className="text-base text-gray-400 max-w-2xl">
          Upload, ask, and discover insights from your documents with AI-powered chat.
        </p>
        <Link
          href="/dashboard"
          className={buttonVariants({
            size: 'lg',
            className: 'mt-7 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-transform',
          })}
          target="_blank"
        >
          GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <div className="relative w-full flex justify-center mt-12">
          <div className="rounded-xl bg-gray-800/60 p-2 ring-1 ring-gray-700 shadow-2xl max-w-4xl w-full">
            <Image
              src="https://picsum.photos/800/400"
              alt="product preview"
              width={1364}
              height={866}
              quality={100}
              className="rounded-md bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-800 transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div className="max-w-5xl w-full mt-24">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Chatting to your PDF files has never been easier than with DocChat.
            </p>
          </div>
          <ol className="grid gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Create your free account",
                step: "1",
                description: (
                  <>
                    Get started in seconds with a free account — or{" "}
                    <Link href="/pricing" className="text-blue-400 underline underline-offset-2">
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
                className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-md"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-900 text-blue-300 font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </MaxWidthWrapper>

    </div>
  );
}
