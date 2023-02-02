import { setCookie } from '../../utils/cookies'

const handler = (req, res) => {
    try {
        //   Calling our pure function using the `res` object, it will add the `set-cookie` header
        //   Add the `set-cookie` header on the main domain and expire after 30 days
        setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 })
        //   Return the `set-cookie` header so we can display it in the browser and show that it works!
        res.end(res.getHeader('Set-Cookie'));
    } catch (err) {        
        res.status(503).send('Sorry, service error');
    }
}

export default handler