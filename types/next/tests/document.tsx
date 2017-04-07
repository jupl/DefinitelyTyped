import * as React from 'react'
import Document, {
    DocumentProps,
    Head,
    InitialProps,
    Main,
    NextScript,
} from 'next/document'
const flush = require('styled-jsx/server')

interface Props {
    styles: string
    customValue: string
}
export default class MyDocument extends Document<Props> {
    static getInitialProps({renderPage}: InitialProps): DocumentProps<Props> {
        const {html, errorHtml, head} = renderPage()
        const styles = flush()
        return {html, errorHtml, head, styles, customValue: 'custom'}
    }

    render () {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
