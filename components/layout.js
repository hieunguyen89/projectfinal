import Navbar from './navibar'
import Head from 'next/head'
const layout = ({children}) => {
    return (
        <>
        <Head>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        </Head>
        <Navbar />
            {children}
             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </>
    )
}
 
 export default layout