import {ApiService} from '../helpers/api'
import {getLoggedUser} from '../helpers/authGuard'

const api  = new ApiService;

export class LinkService {
    domain:string
    constructor(domain?:string){
        this.domain = domain || 'https://ca-reddit-clone.herokuapp.com/api/v1/links'
    }

    public getAll(){
        return api.fetch(this.domain,{
            method:'GET'})
            .then((res:any) => {return res})
    }
    public get(id:number){
        return api.fetch(this.domain+'/'+id,{
            method:'GET'})
            .then((res:any) => {return res})
    }

    public create(newLink:any){
        Object.assign(newLink, {user: getLoggedUser()})
        console.log(newLink)
        return api.fetch(this.domain,{
            method:'POST',
            body: JSON.stringify(newLink)
        })
        .then((res:any) => {return res})
    }
    public delete(id:number){
        return api.fetch(this.domain+'/'+id,{
            method:'DELETE',
        })
        .then((res:any) => {return res})
    }
    public upVote(id:any){
        return api.fetch(this.domain+'/'+id+'/upvote',{
            method:'POST',
        })
        .then((res:any) => {return res})
    }
    public downVote(id:any){
        return api.fetch(this.domain+'/'+id+'/upvote',{
            method:'POST'
        })
        .then((res:any) => {return res})
    }

}