import * as React from 'react'
import {InitialProps} from 'next/page'

// Stateful page

interface Props {
    userAgent: string
}
export default class extends React.Component<Props, null> {
    static getInitialProps({req}: InitialProps): Props {
        return req
             ? {userAgent: req.headers['user-agent']}
             : {userAgent: navigator.userAgent}
    }

    render() {
        return <div>
            Hello World {this.props.userAgent}
        </div>
    }
}

// Stateless page

interface PageProps {
    stars: number
}
interface PageComponent {
    (props: PageProps): JSX.Element
    getInitialProps?(props: InitialProps): Promise<PageProps>
}
export const Page: PageComponent = ({stars}) => <div>Next stars: {stars}</div>
Page.getInitialProps = async({req}) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return {stars: json.stargazers_count}
}

// Error handling

interface ErrorProps {
    statusCode?: number
}
export class Error extends React.Component<ErrorProps, {}> {
    static getInitialProp ({res, jsonPageRes}: InitialProps): ErrorProps {
        const statusCode = (res && res.statusCode) || (jsonPageRes && jsonPageRes.status)
        return {statusCode}
    }

    render () {
        return (
            <p>{
                this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server`
                : 'An error occurred on client'
            }</p>
        )
    }
}
