const BASEURL = `http://blogs2.csm.linkpc.net/api/v1`;
const getToken = () =>{
    let token = localStorage.getItem('token');
    // console.log(token);
    
    return token;
}
const setToken = () =>{
    localStorage.setItem('tokent',getToken());
}