'use client'

import { redirect } from 'next/navigation'
import { createClerkClient } from '@clerk/backend'
import { RedirectToSignIn, useUser } from '@clerk/nextjs';

const Page = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded) return <div>Loading...</div>;
    if (!isSignedIn) return <RedirectToSignIn />;

    return (
        <div>
            user: {user?.id}
        </div>
    )
}

export default Page