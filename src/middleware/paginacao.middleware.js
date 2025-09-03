const paginacao = (req, res, next) => {
    let { limit, offset } = req.query;

    // se não vier nada ou vier vazio, assume default
    if (limit === undefined || limit === "") {
        limit = 3;
    } else {
        limit = Number(limit);
        if (isNaN(limit) || limit <= 0) {
            limit = 3;
        }
    }

    if (offset === undefined || offset === "") {
        offset = 0;
    } else {
        offset = Number(offset);
        if (isNaN(offset) || offset < 0) {
            offset = 0;
        }
    }

    req.query.limit = limit;
    req.query.offset = offset;


    return next();
};

module.exports = { paginacao };
