import express from "express"
import handlebars from "express-handlebars"
import viewsRouters from "./routers/views.routes.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const hbs = handlebars.create({
    runtimeOptions:{
        allowProtoPropertiesByDefault: true
    }
});

app.engine('handlebars', hbs.engine);
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouters);

app.listen(PORT, (req,res) => {
    console.log(`Escuchando en ${PORT}`)
});