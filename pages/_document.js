import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
            
            {/* <!-- Google Fonts --/> */}
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,100&display=optional' rel='stylesheet' type='text/css'/>
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700&display=optional' rel='stylesheet' type='text/css'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}