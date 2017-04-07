import router from 'next/router'

router.onRouteChangeStart = (url) => {
    console.log('App is changing to: ', url)
}

router.onRouteChangeError = (err, url) => {
    if(err.cancelled) {
        console.log(`Route to ${url} was cancelled!`)
    }
}

router.onAppUpdated = (nextUrl) => {
    // persist the local state
    location.href = nextUrl
}

const href = '/?counter=10'
const as = href
router.push(href, as, {shallow: true})
