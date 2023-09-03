import axios from 'axios'

const getImg =async () => {
    try {
        const resp=await axios.get('https://source.unsplash.com/random/1600x900');
        // console.log(resp.request.responseURL);
        return resp.request.responseURL;
    } catch (err) {
        console.log(err);
        return '';
    }
}

export default getImg