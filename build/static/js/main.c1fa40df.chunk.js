(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},26:function(e,t,a){e.exports=a(81)},31:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=(a(31),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),p=(a(16),a(7)),h=a(6),d=a.n(h),f=a(8),b=a(9),v=a.n(b),E="https://nc-news-api-project.herokuapp.com/api",y=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/topics"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.topics);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(E,"/topics/").concat(t,"/articles"):"".concat(E,"/articles"),e.next=3,v.a.get(a);case 3:return n=e.sent,r=n.data,e.abrupt("return",r.articles);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/articles/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.article);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/users"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.users);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.patch("".concat(E,"/articles/").concat(t,"?vote=").concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.article);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/articles/").concat(t,"/comments"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.comments);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.patch("".concat(E,"/comments/").concat(t,"?vote=").concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.comment);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/users/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(E,"/topics/").concat(t,"/articles"),a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r.article);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(E,"/articles/").concat(t,"/comments"),a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r.comment);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(E,"/comments/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.comment);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(E,"/articles/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.article);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=(a(63),a(65),a(67),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voteVariable:0},a.voteChanger=function(e,t){a.props.comment_count?(w(e,t),a.setState({voteVariable:"up"===t?a.state.voteVariable+1:a.state.voteVariable-1})):(C(e,t),a.setState({voteVariable:"up"===t?a.state.voteVariable+1:a.state.voteVariable-1}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.votes,n=t.id,c=this.state.voteVariable;return r.a.createElement("div",null,r.a.createElement("button",{className:"updown",onClick:function(){return e.voteChanger(n,"up")},disabled:1===c},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc4d")),r.a.createElement("span",null," Votes: ",a+c," "),r.a.createElement("button",{className:"updown",onClick:function(){return e.voteChanger(n,"down")},disabled:-1===c},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc4e")))}}]),t}(n.Component)),D=a(13),B=a.n(D),M=function(e){var t=e.article,a=t.title,n=t.votes,c=t.created_by,i=t.belongs_to,l=t.created_at,s=t._id,o=t.body,u=t.comment_count;return r.a.createElement("div",{className:"article-card-container"},r.a.createElement("span",null,r.a.createElement("h2",null,a)),r.a.createElement("i",null,"posted by:   ",c.username),r.a.createElement(B.a,{fromNow:!0},l),r.a.createElement(p.a,{className:"articleCardLinks",id:"artCTop",to:"/topics/".concat(i)},r.a.createElement("span",null,"#".concat(i))),e.body?r.a.createElement("p",null,o):r.a.createElement(p.a,{className:"articleCardLinks",to:"/articles/".concat(s),key:s},r.a.createElement("p",null,"".concat(o.split(" ").slice(0,15).join(" ")," ... "))),r.a.createElement("span",null,u," Comments"),r.a.createElement(L,{votes:n,id:s,comment_count:u}))},V=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0},a.fetchArticles=function(){var e=a.props.topic;g(e).then(function(e){a.setState({isLoading:!1,articles:e})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.articles,a=e.isLoading,n=this.props.topic;return a?r.a.createElement("div",{className:"loader"}):r.a.createElement("main",null,"football"===n?r.a.createElement("p",null,t.length," articles available about",r.a.createElement(V,{symbol:"\u26bd"})):"coding"===n?r.a.createElement("p",null," ",t.length," articles available about",r.a.createElement(V,{symbol:"\ud83d\udcbb"})):"cooking"===n?r.a.createElement("p",null,t.length," articles available about",r.a.createElement(V,{symbol:"\ud83c\udf73"})):r.a.createElement("p",null,t.length," articles available "),t.map(function(e){return r.a.createElement(M,{key:e._id,article:e,id:e._id})}))}},{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"componentDidUpdate",value:function(e){var t=this.props.topic;e.topic!==t&&this.fetchArticles()}}]),t}(n.Component),T=function(e){return r.a.createElement("div",null,r.a.createElement(I,null))},U=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topics:[]},a.fetchTopics=function(){y().then(function(e){a.setState({topics:e})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.topics;return r.a.createElement("nav",null,r.a.createElement(p.a,{to:"/"},r.a.createElement("h2",null,"Home")),e.map(function(e){var t=e.slug,a=e.title,n=e._id;return r.a.createElement(p.a,{key:n,to:"/topics/".concat(t)}," | ","  ",r.a.createElement("h2",null,a))})," | ",r.a.createElement(p.a,{to:"/users"},r.a.createElement("h2",null,"Users")))}},{key:"componentDidMount",value:function(){this.fetchTopics()}}]),t}(n.Component)),W=(a(73),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a.fetchUsers=function(){O().then(function(e){a.setState({users:e})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"grid-container"},e.map(function(e){e._id;var t=e.username,a=e.name;e.avatar_url;return r.a.createElement("li",{className:"grid-item"},"Name: ",r.a.createElement("h2",null,a)," ",r.a.createElement("br",null),"User Name: ",r.a.createElement("h2",null,t))}))}},{key:"componentDidMount",value:function(){this.fetchUsers()}}]),t}(n.Component)),F=a(11),P=(a(75),function(e){var t=e.comment,a=t.votes,n=t._id,c=t.body,i=t.created_by,l=t.created_at,s=e.user;return r.a.createElement("div",{className:"comment-card-container"},r.a.createElement("span",null,i.username," ",r.a.createElement(B.a,{fromNow:!0},l)," said: ",r.a.createElement("h3",null,c)),r.a.createElement(L,{votes:a,id:n}),s.username===e.comment.created_by.username?r.a.createElement("button",{onClick:function(){return e.deleteComment(e.comment._id)}},"Delete"):"")}),Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],body:"",bodyEmpty:!1},a.fetchComments=function(){k(a.props.id).then(function(e){a.setState({comments:e})})},a.handleChange=function(e){a.setState({body:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.postComment()},a.deleteComment=function(e){N(e).then(function(e){var t=a.state.comments.filter(function(t){return t._id!==e._id});a.setState({comments:t})})},a.postComment=function(){var e=a.state.body;e||a.setState({bodyEmpty:!0}),x(a.props.id,{body:e,created_by:a.props.user._id}).then(function(e){a.setState(function(t){return t.body="",{comments:[e].concat(Object(F.a)(t.comments))}})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.bodyEmpty,a=this.state.comments;return r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"left",marginLeft:"70px"}},"What do you think?"," "),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("textarea",{className:"textInputs",name:"",id:"",cols:"30",rows:"10",style:{width:"876px",height:"59px"},placeholder:"what do you think? ...",onChange:this.handleChange,value:this.state.body})," ",r.a.createElement("br",null),t?r.a.createElement("h3",null," ",r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u274c "),"can't post an empty comment  "):"",r.a.createElement("button",{type:"submit"},"send")),a.map(function(t){return r.a.createElement(P,{key:t._id,user:e.props.user,id:e.props.id,comment:t,deleteComment:e.deleteComment})}))}},{key:"componentDidMount",value:function(){this.fetchComments()}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:{},isLoading:!0,msg:""},a.componentDidUpdate=function(e){var t=a.props.article_id;e.article_id!==t&&a.fetchArticleById()},a.fetchArticleById=function(){var e=a.props.article_id;j(e).then(function(e){a.setState({article:e,isLoading:!1})})},a.removeArticle=function(e){S(e).then(function(e){a.setState({msg:"Article successfully Deleted!"})}).then(function(e){Object(p.c)("/articles/yours")})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.article,c=t.msg,i=this.props,l=i.article_id,s=i.user;return a?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",null,n._id&&r.a.createElement(M,{article:n,body:n.body,id:l}),s.username===n.created_by.username?r.a.createElement("button",{onClick:function(){return e.removeArticle(n._id)}},"Delete"):"",n._id&&r.a.createElement(Y,{user:s,id:l}),""!==c&&r.a.createElement("h1",null,c))}},{key:"componentDidMount",value:function(){this.fetchArticleById()}}]),t}(n.Component),J=(a(77),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",inputEmpty:!1},a.handleChange=function(e){a.setState({username:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.username||a.setState({inputEmpty:!0}),a.props.login(a.state.username),a.setState({username:""})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.user.username?this.props.children:r.a.createElement("div",{className:"main"},r.a.createElement("div",{id:"login"},r.a.createElement("form",{action:"",onSubmit:this.handleSubmit,className:"inputButton"},r.a.createElement("input",{className:"textInputs",type:"text",name:"username",id:"username",onChange:this.handleChange})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login"),this.state.inputEmpty?r.a.createElement("h3",{style:{color:"white"}},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u26d4")," Can't login without username!"):"",this.props.guest?r.a.createElement("h3",{style:{color:"white"}}," ",r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udeab")," You entered Wrong Username!"):"")))}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0},a.fetchArticles=function(){g().then(function(e){var t=e.filter(function(e){return e.created_by.username===a.props.user.username});a.setState({articles:t,isLoading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.articles;return this.state.isLoading?r.a.createElement("div",{className:"loader"}):r.a.createElement("main",null,r.a.createElement("h1",null,"Your Articles"),r.a.createElement("span",{style:{fontWeight:"30px",lineHeight:0}},"You wrote ",this.state.articles.length," articles \ud83d\udc4f "),e.map(function(e){return r.a.createElement(M,{key:e._id,article:e,id:e._id})}))}},{key:"componentDidMount",value:function(){this.fetchArticles()}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0},a.fetchArticles=function(){g().then(function(e){var t=(new Date).getFullYear(),n=e.filter(function(e){return e.created_at.slice(0,4)==t}).sort(function(e,t){return e-t});a.setState({articles:n,isLoading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.articles;return this.state.isLoading?r.a.createElement("div",{className:"loader"}):r.a.createElement("main",null,r.a.createElement("h1",null,"Recent Articles"),r.a.createElement("p",null,this.state.articles.length," articles available "),e.map(function(e){return r.a.createElement(M,{key:e._id,article:e,id:e._id})}))}},{key:"componentDidMount",value:function(){this.fetchArticles()}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0},a.fetchArticles=function(){g().then(function(e){var t=Object(F.a)(e).sort(function(e,t){var a=e.votes,n=t.votes;return a>n?-1:a<n?1:0});a.setState({articles:t.slice(0,10),isLoading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.articles;return this.state.isLoading?r.a.createElement("div",{className:"loader"}):r.a.createElement("main",null,r.a.createElement("h1",null,"Popular Articles"),r.a.createElement("p",null,this.state.articles.length," articles available "),e.map(function(e){return r.a.createElement(M,{key:e._id,article:e,id:e._id})}))}},{key:"componentDidMount",value:function(){this.fetchArticles()}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],isLoading:!0},a.fetchArticles=function(){g().then(function(e){var t=Object(F.a)(e).sort(function(e,t){var a=e.comment_count,n=t.comment_count;return a>n?-1:a<n?1:0});a.setState({articles:t.slice(0,10),isLoading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.articles;return this.state.isLoading?r.a.createElement("div",{className:"loader"}):r.a.createElement("main",null,r.a.createElement("h1",null,"Most Commented Articles"),r.a.createElement("p",null,this.state.articles.length," articles available "),e.map(function(e){return r.a.createElement(M,{key:e._id,article:e,id:e._id})}))}},{key:"componentDidMount",value:function(){this.fetchArticles()}}]),t}(n.Component),q=a(25),K=(a(79),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",title:"",body:"",bodyEmpty:!1,topicEmpty:!1},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(q.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.postArticle()},a.postArticle=function(){var e=a.state,t=e.title,n=e.body;n?_(a.state.topic,{title:t,body:n,created_by:a.props.user._id}).then(function(e){Object(p.c)("/articles/".concat(e._id))}):a.setState({bodyEmpty:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"post-article-form",action:"",onSubmit:this.handleSubmit},r.a.createElement("select",{name:"topicSelection",id:"topic",onChange:this.handleChange},r.a.createElement("option",{value:""},"Choose Topic"),r.a.createElement("option",{value:"coding"},"Coding"),r.a.createElement("option",{value:"football"},"Football"),r.a.createElement("option",{value:"cooking"},"Cooking")),r.a.createElement("label",{htmlFor:"title"},"Title: "),r.a.createElement("input",{className:"textInputs",type:"text",name:"title",id:"title",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("textarea",{className:"textInputs",name:"",id:"body",cols:"30",style:{width:"521px",height:"182px"},rows:"10",onChange:this.handleChange,placeholder:"write your article ..."}),r.a.createElement("button",{type:"submit"},"Add Article")),this.state.bodyEmpty?r.a.createElement("h2",null," ","\u274c can't post an empty article \u274c"):"")}}]),t}(n.Component)),Q=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 PAGE NOT FOUND"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\ude2e")))},X=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},guest:!1},a.login=function(e){A(e).then(function(e){a.setState({user:e})}).catch(function(e){a.setState({guest:!0})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"N o r t h C o d e r s N e w s ")),r.a.createElement(U,null),r.a.createElement("section",null,this.state.user.username?r.a.createElement("h2",null,"Hi ".concat(this.state.user.name.split(" ")[0],"! ")):r.a.createElement("span",{style:{fontSize:"25px"}},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\ude4b"),"Welcome!"),this.state.user.username?r.a.createElement("button",{onClick:function(){return e.setState({user:{}})}}," ","Log Out"):"",r.a.createElement("br",null),r.a.createElement(p.a,{className:"sideBarLinks",to:"/postArticle"},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u2795")," Post an article")," ",r.a.createElement("br",null),r.a.createElement(p.a,{className:"sideBarLinks",to:"/articles/yours"},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u270d")," Your Articles")," ",r.a.createElement("br",null),r.a.createElement(p.a,{className:"sideBarLinks",to:"/articles/recent"},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\u23f3 "),"Recent Articles")," ",r.a.createElement("br",null),r.a.createElement(p.a,{className:"sideBarLinks",to:"/articles/popular"},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\ude0d")," Top 10 Popular Articles")," ",r.a.createElement("br",null),r.a.createElement(p.a,{className:"sideBarLinks",to:"/articles/commented"},r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udd25 "),"Top 10 Commented Articles")),r.a.createElement(J,{user:this.state.user,login:this.login,guest:this.state.guest},r.a.createElement(p.b,{className:"main"},r.a.createElement(T,{path:"/"}),r.a.createElement(I,{path:"/topics/:topic"}),r.a.createElement(R,{user:this.state.user,path:"/articles/yours"}),r.a.createElement(z,{user:this.state.user,path:"/articles/recent"}),r.a.createElement(G,{user:this.state.user,path:"/articles/popular"}),r.a.createElement($,{user:this.state.user,path:"/articles/commented"}),r.a.createElement(H,{user:this.state.user,path:"/articles/:article_id"}),r.a.createElement(W,{path:"/users"}),r.a.createElement(K,{user:this.state.user,path:"/postArticle"}),r.a.createElement(Q,{default:!0}))),r.a.createElement("footer",null," NC-NEWS Front End Project By Mahsa "))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.c1fa40df.chunk.js.map