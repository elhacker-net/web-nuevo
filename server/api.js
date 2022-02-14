const express = require('express');
const { local } = require('./config');
let localData = local ? require('./data') : {};

const router = express.Router();

if (local){
    router.get('/:section', ((req, res) => {
        let { section } = req.params;
        if (section !== '' && Object.prototype.hasOwnProperty.call(localData, section)) {
            res.type('json').json(localData[section]);
        } else {
            res
                .status(404)
                .type('json')
                .send({
                    error: 'RESOURCE_NOT_FOUND',
                });
        }
    }));
}

module.exports = router;
