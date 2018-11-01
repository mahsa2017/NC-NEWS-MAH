import axios from "axios";
const BASE_URL = "https://nc-news-api-project.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const URL = topic
    ? `${BASE_URL}/topics/${topic}/articles`
    : `${BASE_URL}/articles`;
  const { data } = await axios.get(URL);
  // console.log(data);
  return data.articles;
};

export const getArticleById = async id => {
  // console.log(id, "<<<");
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
  return data.article;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
};

export const updateArticleVote = async (id, direction) => {
  const { data } = await axios.patch(
    `${BASE_URL}/articles/${id}?vote=${direction}`
  );
  return data.article;
};

export const getCommentsByArticleId = async id => {
  const {data} = await axios.get(
    `${BASE_URL}/articles/${id}/comments`
  );
  return data.comments;
}

export const updateCommentVote = async (id, direction) => {
  const { data } = await axios.patch(
    `${BASE_URL}/comments/${id}?vote=${direction}`
  );
  return data.comment;
};
export const login = async username=>{
  const {data} = await axios.get(`${BASE_URL}/users/${username}`)
  return data;
}
export const postArticleByTopic = async (topic, articleToPost) => {
  // console.log(topic,"TTTT")
  const { data } = await axios.post(`${BASE_URL}/topics/${topic}/articles`, articleToPost);
  //  console.log(data,"newwarticle")
  return data.article;
   };

export const postCommentByArticleId = async(article_id, commentToPost) => {
  const { data } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, commentToPost)
  return data.comment;
}

export const deleteCommentByCommentId = async(comment_id) =>{
  const {data} = await axios.delete(`${BASE_URL}/comments/${comment_id}`)
  return data.comment;
}
export const deleteArticleByArticleId = async(article_id) =>{
  const {data} = await axios.delete(`${BASE_URL}/articles/${article_id}`)
  return data.article;
}
