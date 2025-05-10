require("dotenv").config();
const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 5500;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//user routes middleware
const userRoute = require("./app/routes/user.routes");
app.use("/api/users", userRoute);

// house routes middleware
const houseRoute = require("./app/routes/house.routes");
app.use("/api", houseRoute);

const installRoute = require("./app/routes/install.routes");
app.use("/api", installRoute);


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// house photo post and delete routes middleware
// const s3PostHandler = require("./app/routes/s3_post_router");
// app.use("/api", s3PostHandler);
// const s3PostHandler = require("./app/routes/s3_post_router");
// app.use("/api", s3PostHandler);

// const bookingRoute = require("./app/routes/booking.routes");
// app.use("/api", bookingRoute);


// const purchaseRoute = require("./app/routes/purchase.routes");
// app.use("/api", purchaseRoute);


// const feedbackRoute = require("./app/routes/feedback.routes");
// app.use("/api/feedback", feedbackRoute);

// const notificationRoute = require("./app/routes/notifications.routes");
// app.use("/api/notifications", notificationRoute);
app.listen(5500, '0.0.0.0', () => {
  console.log("Server running on http://localhost:5500");
});

// app.listen(port, () => {
//   console.log(`Server running on port: ${port}`);
// });
