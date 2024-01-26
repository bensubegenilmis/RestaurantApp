import { useEffect } from "react";

export default () => {

        const searchApi = async(searchTerm) => {
            await yelp.get('/search', {
                params: {
                    limit:50,
                    term: searchTerm,
                    
                }
            })

        }

    useEffect(() => {
        searchApi('Toast');

    }, []);

};