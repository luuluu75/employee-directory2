(this["webpackJsonpemployee-directory2"]=this["webpackJsonpemployee-directory2"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(14),s=n.n(c),i=n(3),o=n(4),l=n(15),d=n(16),h=n(19),m=n(18),u=n(0),j=function(e){return Object(u.jsx)("nav",{className:"navbar navbar-dark bg-light justify-content-center",children:Object(u.jsx)("form",{className:"form-inline m-8",onSubmit:e.handleFormSubmit,children:Object(u.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search for an employee"})})})},b=function(e){return Object(u.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Phone"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("location")},children:"Email"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("dob","age")},children:"Date of Birth"})})]})}),Object(u.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,r=n.first,a=n.last,c="".concat(r," ").concat(a),s=e.formatDate(t.dob.date);return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:t.picture.thumbnail,alt:c})}),Object(u.jsx)("td",{className:"align-middle",children:c}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(u.jsx)("td",{className:"align-middle email",children:Object(u.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(u.jsx)("td",{className:"align-middle",children:s})]},t.login.uuid)}))})]})},p=n(17),f=n.n(p),O={getRandomUser:function(){return f.a.get("https://randomuser.me/api/?results=50&nat=au")}},y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:a.reverse(),sortDirections:Object(o.a)(Object(o.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(a=e.state.filteredEmployees.sort((function(e,a){return e=e[t],a=a[t],n?r&&e[n]===a[n]?e[r].localeCompare(a[r]):e[n].localeCompare(a[n]):e.localeCompare(a)})),e.setState({filteredEmployees:a,sortDirections:Object(o.a)(Object(o.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(e){return e.name.first.toLowerCase().concat(" ",e.name.last.toLowerCase()).includes(t)||e.email.includes(t)||e.location.city.includes(t)||e.dob.age.includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(d.a)(n,[{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}},{key:"componentDidMount",value:function(){var e=this;O.getRandomUser().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(u.jsx)("div",{className:"container mt-4",children:Object(u.jsx)(b,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(r.Component),x=(n(43),function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center",children:"Click on column headers to filter by heading or use the search box to narrow your results."})]})});var g=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsx)(y,{})]})};n(44);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9f97bbfd.chunk.js.map