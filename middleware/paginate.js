const paginate = (defaultLimit = 10) => {
  return (req, res, next) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || defaultLimit;
    const offset = (page - 1) * limit;

    req.pagination = {
      limit,
      offset,
      page
    };
    next();
  };
};

module.exports = paginate; 