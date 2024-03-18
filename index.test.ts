import { Helcim } from "./index";

describe("helcim-typescript-sdk", () => {
    it("initialize client", async () => {
        const helcim = new Helcim({
            apiKey: "API_KEY",
        });
    });
});
