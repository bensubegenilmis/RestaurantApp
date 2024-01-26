import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer AY27qeBw5oWNpSYttH2iBRufPY8woBtl3e86wt8YKaUuNbgL1KRt3Z5Rvifru05eD9B519SPMcNfI2ASuvEOuA9K37iCdRRGQsCm_aRcxoDulF2wRe-KCEru7GayZXYx' ,
    },

})