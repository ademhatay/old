### demo
https://random-user-api-six.vercel.app/
### Steps in Project

 1. npx create-react-app
 2. npm i axios
 3. npm start
 
 Now we have a React project running on port 300 of localhost. and axios is included in the project

```
import axios from 'axios'
```

   

     const [users, setUsers] = useState([]);
    
	    const getUsers = async () => {
    
	    const response = await axios.get('https://randomuser.me/api/?results=10');
    
	    setUsers(response.data.results);
    }
    
    useEffect(() => {
	    getUsers();
    }, [])
    

> axios.get('*your api url*').data
> setUsers() => api to -> state


then call *getUsers* function in useEffect
### Install TailwindCSS in react project
 ### 4. npm install -D tailwindcss postcss autoprefixer
 ### 5. npx tailwindcss init -p
 ### 6.  Configure your template paths
  

    content:  [ "./src/**/*.{js,jsx,ts,tsx}", ],

 ### 7.  Add the Tailwind directives to your CSS
 

    @tailwind base;  @tailwind components;  @tailwind utilities;
   
   ### 8. npm run start

