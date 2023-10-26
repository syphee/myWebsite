'use client'
import { useRouter,useSearchParams,usePathname } from "next/navigation"

export default function FirstPost() {

    const id = useRouter();
    const result = useSearchParams();
    const userid = result.get('userid')
    const username = result.get('name')

    return (
        <main className="flex h-screen flex-col items-center justify-between p-24">
                <h1>User ID : {userid}</h1><br/>
                <h1>User name : {username}</h1>
            </main>
    )

}