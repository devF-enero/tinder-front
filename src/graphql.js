import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const URI = process.env.URL_GRAPH || 'https://oldies2020.herokuapp.com/';

const httpLink = createUploadLink({
    uri:URI,
    
})

const authLink = setContext((_,{headers}) => {
    const token = localStorage.getItem('token');

    const context = {
        headers:{
            ...headers
        }
    }
    if(token) Object.assign(context.headers,{authorization:`JWT ${token}` })

    return context;

})



export default new ApolloClient({
    link:authLink.concat(httpLink),
    cache: new InMemoryCache()
})