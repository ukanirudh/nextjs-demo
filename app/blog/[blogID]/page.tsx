import { ReactElement } from "react";
import type { AppProps } from 'next/app'

const BlogPost = ({ params }: { params: any }): ReactElement => {
    return (
        <main>
            <p>BLOG</p>
            <p>{params?.blogID}</p>
        </main>
    )
}

export default BlogPost;