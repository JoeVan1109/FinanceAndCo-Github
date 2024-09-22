import { APIBaseURL } from './config.js';



const API = {
    async fetchAPI(path, options){
        try{
        const url = `${APIBaseURL}${path}`;
        const httpResponse = await fetch(url, options);
        if(httpResponse.status !== 204){
            const data = await httpResponse.json();
            if(!httpResponse.ok){
            return modal.initErrorModal({status:httpResponse.status, message:data.error});
            }
            return data;
        }
        return true;
        } catch(error){
        console.log(error);
        return modal.initErrorModal({status:'', message:error.message});
        }
    },

}

export default API;