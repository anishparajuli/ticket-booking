
// import React,{Component} from 'react';
// import axios from 'axios';

// const APIURL = "192.168.0.101:8080";
// const clientevents = "/listevents";
// const clientscreen="/listscreens";
// const screencategory="/categories"; //{screen_id}/categories;
// const ctoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjExNTM4MTIxNjgwf' +
//         'Q.hSa8tiEWRqpOChnS0HODzKnIsiKbz2cvwuwFCOkzcds';


// class ApiHandler{
    
//     constructor(){
//         this.url=APIURL;
//         this.endpoints={};

//     }

//     createEntity(entity){
//         this.endpoints[entity.name]=this.basicEndpoints(entity)

//     }
//     createEntities(entityarray){
//         entityarray.foreach(this.createEntity.bind(this))
//     }

//     basicEndpoints({name}){
//         var endpoints={};
//         const resourceUrl='$(this.url)/${name}'
//         // endpoints.getOne=({id})=>axios.get('${reousuceUrl}/${id}',{headers:{
//         //     'USER_TOKEN':ctoken,
//         // }}) //not used
//         endpoints.getAll=({query}={})=>axios.get(resourceUrl,{params:{query}},{headers:{
//             'USER_TOKEN':ctoken,
//         }})
//         return endpoints;
//     }

// }