function bootstrap(app) {
  app.use("/", (req, res, next) => {
    res.json({ message: "Hello world" });
  });
}
