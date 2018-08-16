import  Axios  from 'axios';

export function getData(url,params){
    return new Promise((resolve,reject)=>{
        Axios.get(url,params).then((response)=>{
            resolve(response.data)
        }).catch((err=>{
            reject(err)
        }))
    })
}

export function postData(url,data){
    return new Promise((resolve,reject)=>{
        Axios.post(url,data).then((response)=>{
            resolve(response.data)
        }).catch((err=>{
            reject(err)
        }))
    })
}
