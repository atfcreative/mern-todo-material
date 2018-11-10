

//********************//
//********CORS MIDDLEWARE************//
//EXPRESS CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-REquested-With, Content-TypeError, Accept");
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + 'public'));