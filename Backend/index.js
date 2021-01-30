// process.agrv practice
// var argv=process.argv;
// console.log(argv);
// console.log(argv[0],argv[1]);
// console.log('now i am printing argv 3');
// console.log(argv[2]);
// argv =argv.slice(2);
// console.log(argv[0],argv[1]);

// creating node server
const http=require('http');
const fs=require('fs');
const port=8000;
http.createServer((req,res)=>{
	fs.readFile('./FlexBox.html',function(err,data){
		res.writeHead(200,{'content':'text/html'})
		if(err){
			console.log(err);
			res.write("<h1>There is an Big error</h1>");
			return res.end();
		}
		res.write(data);
		res.end();
	});
	// res.write("<h1>hello Nishchhal</h1>");
	
}).listen(port,(err)=>{
	if (err) {
		console.log(err);
		return;
	}
	console.log("server is running on port:",port);

})