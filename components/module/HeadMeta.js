import Head from 'next/head'
function HeadMeta({title, description, image, url, index }){
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:type" content="website" />
            <meta property="robots" content="max-image-preview:large" />
            <meta property="twitter:card" content="summary_large_image" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
            <title>{title ? title : process.env.NEXT_PUBLIC_APP_TITLE}</title>
            <meta name="title" content={title ? title : process.env.NEXT_PUBLIC_APP_TITLE}/>
            <meta name="description" content={description ? description : process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
            <meta property="robots" content={index ? index : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
            <meta property="og:url" content={url ? url : process.env.NEXT_PUBLIC_SHOP_URL} />
            <meta property="og:title" content={title ? title : process.env.NEXT_PUBLIC_APP_TITLE} />
            <meta property="og:description" content={description ? description : process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
            <meta property="og:image" content={image ? image : process.env.NEXT_PUBLIC_APP_IMG} />
            <meta property="twitter:url" content={url ? url : process.env.NEXT_PUBLIC_SHOP_URL} />
            <meta property="twitter:title" content={title ? title : process.env.NEXT_PUBLIC_APP_TITLE} />
            <meta property="twitter:description" content={description ? description : process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
            <meta property="twitter:image" content={image ? image : process.env.NEXT_PUBLIC_APP_IMG} />
        </Head>
    );
}
export default HeadMeta;