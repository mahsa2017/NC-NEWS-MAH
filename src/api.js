import axios from 'axios';
const BASE_URL = 'https://nc-news-api-project.herokuapp.com/api'
 //getArticles
//  export const getArticles = () => {
//    console.log("articles get from api")
//  }
export const getTopics = async () =>{
const {data} = await axios.get (`${BASE_URL}/topics/`)
return data.topics;
}