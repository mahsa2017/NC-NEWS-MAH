import React from 'react';

export const imgs = (user) => {
  return user === "jessjelly" ? "https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" : user === "tickle122" ? "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg" : user === "happyamy2016" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivtQQNdntsxANTvTI4RPoWm-v7YK6X9ftvjsXaRFgiAPiqcgQ" : user === "cooljmessy" ? "https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700" : user === "weegembump" ? "https://www.cardenitservices.co.uk/img/profiles/profile_1.jpg" : user === "grumpy19" ? "https://www.federa.com.ar/img/img-profile.png" : "";
}
export const emojiTopic = (topic,articles) => {
  return topic === "football" ? <p>
      {articles.length} articles available about
      <span role="img" aria-label="sheep">
        ⚽
      </span>
    </p> : topic === "coding" ?
      <p> {articles.length} articles available about
            <span role="img" aria-label="sheep">
          💻
              </span>
      </p> : topic ==='cooking'?
        <p>
          {articles.length} articles available about
                <span role="img" aria-label="sheep">
            🍳
              </span>
        </p> : ""
}