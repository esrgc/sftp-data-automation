
var SFTPClient = require('sftp-promises');
var connection = require('tedious').Connection;
var FTPconfig = require('./config.js'); 
var sftp = new SFTPClient(FTPconfig.auth);

/*
sftp.ls('/geogftp8/OKLAHOMA', session).then(function(list) {
    console.log(list) 
    getIt(session);
						  });
/*sftp.put("C:/talbot/scripts/hello",'geogftp8/OKLAHOMA').then(function(){console.log("put")}).catch(function(reason){
	console.log("put:");
	console.log(reason)
});
*/
console.log("Attempting fetch");
    sftp.getBuffer("/geogftp8/OKLAHOMA okuib.txt").then(function(file){console.log("done")}).catch(function(reason){
	    console.log("get");
	    console.log(reason);

	});

