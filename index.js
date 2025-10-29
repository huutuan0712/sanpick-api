import { createApp } from "json-server/lib/app.js";
import db from "./data.json" with { type: "json" };

const app = createApp(
    {
        data: db,
    },
    {
        logger: true,
    }
);

app.listen(process.env.PORT||3000, () => {
    console.log("JSON Server is running");
});