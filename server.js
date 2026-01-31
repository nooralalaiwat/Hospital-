require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");

const connectDB = require("./config/db");

const authRouter = require("./router/auth");
const homeRouter = require("./router/home");
const specialtiesRouter = require("./router/specialties");
const doctorsRouter = require("./router/doctors");
const appointmentsRouter = require("./router/appointments");

const app = express();

connectDB(process.env.MONGODB_URI);

// middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// simple helper: userId in views
app.use((req, res, next) => {
  res.locals.userId = req.session.userId || null;
  next();
});

// routes
app.use("/auth", authRouter);
app.use("/", homeRouter);
app.use("/specialties", specialtiesRouter);
app.use("/doctors", doctorsRouter);
app.use("/appointments", appointmentsRouter);

// start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
