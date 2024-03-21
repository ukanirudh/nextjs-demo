import Link from "next/link";
import { ReactElement } from "react";

const BlogHome = (): ReactElement => {
    return (
        <main>
            <h1 className="mt-10 mb-10">Welcome to this NextJS Course!</h1>
            <p>
                <Link href='/blog/blog1'>Blog 1</Link>
            </p>
            <p>
                <Link href='/blog/blog2'>Blog 2</Link>
            </p>
      </main>
    )
}

export default BlogHome;