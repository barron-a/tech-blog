const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage.handlebars', {
        
    });
});

module.exports = router;