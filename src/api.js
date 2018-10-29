import axios from 'axios';
const BASE_URL = 'https://nc-news-api-project.herokuapp.com/api'
 //getArticles
//  export const getArticles = () => {
//    console.log("articles get from api")
//  }
export const getTopics = async () =>{
const {data} = await axios.get (`${BASE_URL}/topics`)
// console.log(data,"<<<<")
// console.log("hi topics","<<<<")
return data.topics;
}

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`)
  console.log(data, "<<<<")
  console.log("hi Articles", "<<<<")
  return data.articles;
}

export const getArticleById = async(id) => {
  const {data} = await axios.get(`${BASE_URL}/articles/${id}`)
  console.log("article by id","<<<");
  return data.article;
}

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`)
  return data.users;
}
