const success = (res, data) => {
    res.send(JSON.stringify({
        result: 1,
        data
    }));
}

const failure = (res, error, status = 500) => {
    res.status(status).send(JSON.stringify({
        result: 0,
        reason: error.message
    }));
}

module.exports = {
    success,
    failure
}