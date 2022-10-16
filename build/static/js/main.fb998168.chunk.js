(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(17),c=a.n(r),s=a(3),i=a.n(s),l=a(5),u=a(4),m=a(0),h=a(10),d=a(15),b="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},p=function(){return fetch("".concat(b,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})};var g=function(e){var t=e.bookId,a=e.onSelect;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(e){var n=e.target.value;a(n,t)},value:"move"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"Remove")))},y=function(e){var t=e.bookId,a=e.bookTitle,n=e.bookAuthors,r=e.bookCover,c=e.onSelect;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("img",{className:"book-cover",src:r,alt:a,style:{width:128,height:188}}),o.a.createElement(g,{bookId:t,onSelect:function(e,t){return c(e,t)}})),o.a.createElement("div",{className:"book-title"},a),o.a.createElement("div",{className:"book-authors"},n))};var N=function(e){var t=e.shelfName,a=e.shelfId,n=e.isLoading,r=e.books,c=e.onSelect,s=r.filter(function(e){return e.shelf===a});return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n?"loading":s.map(function(e){return o.a.createElement("li",{key:e.bookId},o.a.createElement(y,{bookId:e.bookId,bookTitle:e.title,bookAuthors:e.authors.map(function(e){return e+" "}),bookCover:e.cover,onSelect:function(e,t){return c(e,t)}}))}))))},S=["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"];var w=function(e){var t=e.onSelect,a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],s=r[1];function m(){return(m=Object(l.a)(i.a.mark(function e(t){var a,n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=S.map(function(e){return e.toLowerCase().startsWith(t.toLowerCase())}).includes(!0),""===t&&(a=!1),!a){e.next=15;break}return e.next=5,E(t);case 5:return n=e.sent,o=[],e.t0=console,e.next=10,n;case 10:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=14,n.forEach(function(e){e.id&&e.title&&e.authors&&e.imageLinks&&o.push({bookId:e.id,title:e.title,authors:e.authors,cover:e.imageLinks.thumbnail,shelf:e.shelf})});case 14:s(o);case 15:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(h.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(e){return function(e){return m.apply(this,arguments)}(e.target.value)},autoFocus:!0}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},c.map(function(e){return o.a.createElement("li",{key:e.bookId},o.a.createElement(y,{bookId:e.bookId,bookTitle:e.title,bookAuthors:e.authors,bookCover:e.cover,onSelect:function(e,a){return t(e,a)}}))}))))};a(29);var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),s=Object(u.a)(c,2),d=s[0],b=s[1],f=Object(n.useState)(""),k=Object(u.a)(f,2),E=k[0],g=k[1];function y(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(i.a.mark(function e(t,a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a},e.next=3,v(n,t);case 3:g(t);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(n.useEffect)(function(){function e(){return(e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return t=e.sent,a=[],e.next=6,t.map(function(e){return a.push({bookId:e.id,title:e.title,authors:e.authors,cover:e.imageLinks.thumbnail,shelf:e.shelf})});case 6:r(a),b(!1);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}b(!0),function(){e.apply(this,arguments)}()},[E]),o.a.createElement("div",{className:"app"},o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/search",element:o.a.createElement(w,{onSelect:function(e,t){return y(e,t)}})}),o.a.createElement(m.a,{path:"/",element:o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(N,{shelfName:"Currently Reading",shelfId:"currentlyReading",onSelect:function(e,t){return y(e,t)},books:a,isLoading:d}),o.a.createElement(N,{shelfName:"Want To Read",shelfId:"wantToRead",onSelect:function(e,t){return y(e,t)},books:a,isLoading:d}),o.a.createElement(N,{shelfName:"Read",shelfId:"read",onSelect:function(e,t){return y(e,t)},books:a,isLoading:d})),o.a.createElement("div",{className:"open-search"},o.a.createElement(h.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))))})))};a(31);c.a.createRoot(document.getElementById("root")).render(o.a.createElement(h.a,null,o.a.createElement(j,null)))}},[[18,2,1]]]);
//# sourceMappingURL=main.fb998168.chunk.js.map