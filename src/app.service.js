import axios from 'axios';

const instance = axios.create({
    baseURL:'https://hn.algolia.com/api/v1'
})

export default class Service{
    static test(path,search,cb){
        instance.get(path+search)
        .then(res=>cb(res))
        .catch(error=>console.log(error))
    }
    static upvote(objectID,points,cb){          
        let local = JSON.parse(localStorage.getItem(objectID));
        let votes = 1;
        if(local && local.upvote){
            votes = local.upvote+votes; 
            local = {...local,upvote:votes}           
        }else{
            votes = points+votes;
            local = {...local,upvote:votes}
        }        
        localStorage.setItem(objectID.toString(),JSON.stringify(local))
        cb(votes)
    }
    static isHidden(objectID){
        let local = JSON.parse(localStorage.getItem(objectID));        
        return (local && local.hidden)?true:false
    }

    static hide(objectID,title,cb){
        let local = JSON.parse(localStorage.getItem(objectID))
        if(!(local && local.hidden)){
            localStorage.setItem(objectID,JSON.stringify({...local,hidden:true,title:title}))
        }
        cb();
    }
}