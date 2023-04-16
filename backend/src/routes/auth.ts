import { usersDatabase } from '../data/Users';

export const registerHandler = (req: any, res: any) => {
  // only excepts post request
  if (req.method != "POST") return;
  if (!req.body) return;

  const requestBody = req.body;
  const email = requestBody.email
  const password = requestBody.password

  try {
    const userExists = usersDatabase.find(user => user.email === email)
    if (!userExists) {
      const newUserObj = {
        email: email,
        password: password
      };
      if (password.length < 9){
        res.send("password minimum 9 characters")
        return;
      }
      if (!/\d/.test(password) || /^\d+$/.test(password)){
        res.send("require alphanumeric password")
        return;
      }
      usersDatabase.push(newUserObj);
      console.log(usersDatabase)
      res.send("user registered")
    }
    res.send("user already exists")
  } catch(err) {
    // do nothing 
  }
}

export const loginHandler = (req: any, res: any) => {
  // only excepts post request
  if (req.method != "POST") return;
  if (!req.body) return;
  const requestBody = req.body;
  const email = requestBody.email
  const password = requestBody.password
  try {
    const user = usersDatabase.find(user => user.email === email)
    if (!user) { res.send("email does not exist"); return;}
    if (user.password !== password) { res.send("invalid credentials"); return;}
    // else
    res.send(`login successful!\nwelcome ${user.email}!!!\n`)
  } catch(err) {
    res.send("an error has occurred")
  }
}