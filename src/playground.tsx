import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "example@example.com",
    firstName: "Anthony",
    lastName: "Smith",
  },
});
