exports.imgs = (user) => {
  return user === 'jessjelly' ? "https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
    : user === 'tickle122' ? "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg" :
      user === "happyamy2016" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivtQQNdntsxANTvTI4RPoWm-v7YK6X9ftvjsXaRFgiAPiqcgQ" :
        user === "cooljmessy" ? "https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700" : ""
}