import * as React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export const basic = () => (
    <div>
        Click <Link href={{pathname: 'about', query: {name: 'Zeit'}}}><a>here</a></Link> to read more
    </div>
)

export const replace = () => (
    <div>
        Click <Link href="/about" replace><a>here</a></Link> to read more
    </div>
)

export const withRouter = () => (
    <div>
        Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
)

const handler = () => Router.push({
    pathname: 'about',
    query: {name: 'Zeit'},
})
export const withHandler = () => (
    <div>
        Click <span onClick={handler}>here</span> to read more
    </div>
)

export const withPrefetch = () => (
    <nav>
        <ul>
            <li><Link prefetch href="/"><a>Home</a></Link></li>
            <li><Link prefetch href="/about"><a>About</a></Link></li>
            <li><Link prefetch href="/contact"><a>Contact</a></Link></li>
        </ul>
    </nav>
)
