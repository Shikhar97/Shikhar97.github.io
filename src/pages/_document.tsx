import Document, {DocumentContext} from "next/document";
import {ServerStyleSheet} from "styled-components";
import {GA_TRACKING_ID} from '@/lib/gtag'
import {Head, Html, Main, NextScript} from 'next/document'
import Script from "next/script";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <>
                        <Script
                            id={GA_TRACKING_ID}
                            strategy='afterInteractive'
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                        />

                        <Script
                            id={GA_TRACKING_ID}
                            strategy='afterInteractive'
                            dangerouslySetInnerHTML={{
                                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                            }}
                        />
                    </>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
