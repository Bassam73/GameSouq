function catchError(fn) {
  return (req, res, next) => {
    fn(req, res, next).catchError((err) => {
      next(err);
    });
  };
}
