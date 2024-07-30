Navigations : 

React is a librsry which creates UI
data Fetching , navigation

react router Dom : using react-router-dom we will enable navigation in the react application

npm i react-router-dom


navigations are two ways:

1. Static navigation
2. Dynamic Navigation

1. Home Screen
2. About Screen
3. Setting Screen
4. Blog Screen

we need to take help of browser route


<BrowserRouter>
<Routes>
<Route path="/"  element = {}> </Route>

<Route path="/"  element = {}> </Route>

<Route path="/"  element = {}> </Route>

<Route path="/"  element = {}> </Route>

<Route path="user/>userId" element={< UserScreen />}> </Route>


</Routes>
</BrowserRouter>

https: //www.zomato.com -> base URL

/hyderabad -> Dynamic URL

/mindspace-social-health/info - > 
Dynamic url

info - > Dynamic url



30/7/2024:


useParams : 
useParams is hooks react router dom which extracts the dynamic url parameter

there are two ways to redirect the page url :


<Link /> component
useNavigate hook (program redirection)

outlet it is a component provided by the react router dom it tells way to render the child components inside the child components



