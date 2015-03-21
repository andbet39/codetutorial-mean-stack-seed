

    module.exports = function(app) {

        // basic routes to handle request
        app.get('*', function(req, res) {
            res.sendFile('./public/index.html'); 
        });

    };

