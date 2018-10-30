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
  console.log(data);
  return data.articles;
};

export const getArticleById = async id => {
  console.log(id, "<<<");
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
