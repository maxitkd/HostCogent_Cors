const app = express();
const cors = require('cors');
var openapi = true

//add web or app origin for Whitelist access here separated by ,
var whiteList = ['']
//-----------------------------------------------

// if 'whitelist' is empty the API is open, if not, the API restricts connections except the content of this variable
if(whiteList==NULL)
    app.use(cors())
else
    app.use(cors({origin: whiteList}))

