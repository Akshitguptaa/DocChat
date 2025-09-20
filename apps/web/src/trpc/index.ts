import { currentUser, getAuth } from '@clerk/nextjs/server';
import {publicProcedure, router} from './trpc'
import { TRPCError } from '@trpc/server';


const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const user = await currentUser()

    if (!user?.id || !user?.emailAddresses?.[0]?.emailAddress) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    const userId = user.id
    const email = user.emailAddresses[0].emailAddress

    // database

    return { success: true }
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;