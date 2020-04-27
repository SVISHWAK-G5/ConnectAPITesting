// var request = require('request'),
// https= require('https')
//     username = "apitest2",
//     password = "apitest2",
//     //url = "http://localhost:3030/user";
//     url="https://inads20/NICEConnectAPI/Login.svc/Rest/clientLoginWithDomain";
//     auth = "Basic " +new  Buffer.alloc(56,username + ":" + password +":" +"actdev").toString("base64");

// request.get({url : url,json:true},(error,response,body)=>{
// console.log(body)
// }
// );

var request = require('request')
const express= require('express')
const bodyParser = require('body-parser');
const app= express()
app.use(bodyParser.json());

var data="";

const PORT = process.env.PORT || 3034;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


app.get('/Testing',(req,response)=>{
    var data =new Object();
request.post({
    url:'https://inads50.advserpun.com/NICEConnectAPI/Login.svc/Rest/clientLoginWithDomain',
    body:{
        "OsLogin": "euser1",
        "Password": "Password1!",
        "Domain": "advserpun"
    },
  json:true,
  rejectUnauthorized: false,
      requestCert: true,
      agent: false
}, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir('headers', res.headers)
  console.dir('status code', res.statusCode)
  data=body;
  console.log(data);
  response.send(data)
})
//res.send()
})

app.post('/clientLoginWithDomain', function(req, response) {  
  request.post({
    url:'https://inads50.advserpun.com/NICEConnectAPI/Login.svc/Rest/clientLoginWithDomain',
    body:req.body,
  json:true,
  rejectUnauthorized: false,
      requestCert: true,
      agent: false
}, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir('headers', res.headers)
  console.dir('status code', res.statusCode)
  data=body;
  console.log(data);
  response.send(data)
})
//res.send()
});

app.post('/UpdateBDI', function(req, response) {  
  request.post({
    url:'https://inads50.advserpun.com/NICEConnectAPI/RecordingControl.svc/Rest/UpdateOpenCallBdByOslogin',
    body:req.body,
  json:true,
  rejectUnauthorized: false,
      requestCert: true,
      agent: false
}, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir('headers', res.headers)
  console.dir('status code', res.statusCode)
  data=body;
  console.log(data);
  response.send(data)
})
//res.send()
});


app.post('/GetInteractionByBDI', function(req, response) {  
  request.post({
    url:'https://inads50.advserpun.com/NICEConnectAPI/CallDiscovery.svc/Rest/GetInteractionListByBusinessData',
    body:req.body,
  json:true,
  rejectUnauthorized: false,
      requestCert: true,
      agent: false
}, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir('headers', res.headers)
  console.dir('status code', res.statusCode)
  data=body;
  console.log(data);
  response.send(data)
})
//res.send()
});


