import  express  from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
app.use(helmet())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });

  app.use(limiter);

  const authRateLimitter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 6 // limit each IP to 100 requests per windowMs
  });

  app.use("/auth", authRateLimitter);

  app.get("/auth/login" , (req,res) => {
    res.send("<h1>auth</h1>");
})

app.get("/findme" , (req,res) => {
    res.send({message:"test"});
})

app.get("/findme" , (req,res) => {
    res.send({message:"test2"});
})

app.listen(8080);

//npm helmet sikkerhed
// express-rate-limit - login forsøg
// data spy navbar w3schools bootstrap
//express-session - session nemmere end jwt
//JWT json web token
//bcrypt
//lastpass