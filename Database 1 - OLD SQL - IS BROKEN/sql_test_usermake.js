var Connection = require('tedious').Connection;  
    var config = {  
        server: 'DESKTOP-VDM7N2B',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'Ben', //update me
                password: '2043'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false,
            // port: 1433,
            database: 'Login_DB',  //update me
            // instanceName: 'localhost'
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        insertRowEntry();  
    });
    
    connection.connect();
    
    var Request = require('tedious').Request  
    var TYPES = require('tedious').TYPES;  
  
    function insertRowEntry() {  
        request = new Request("INSERT Credentials.Tester (Id, Username, Password, Email) VALUES (@Id, @User, @Pass, @Mail);", function(err) {  
         if (err) {  
            console.log(err);}  
        });  
        request.addParameter('Id', TYPES.Int,'1');  
        request.addParameter('User', TYPES.VarChar , 'TEST_user');  
        request.addParameter('Pass', TYPES.VarChar, '12345abc');
        request.addParameter('Mail', TYPES.VarChar, 'me@mec.com');
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                console.log("Inserted value is: " + column.value);  
              }  
            });  
        });

        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    }