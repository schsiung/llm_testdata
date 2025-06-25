import mock from "../test/mock";
import translate from "./";

describe("cache", () => {
  beforeEach(() => {
    mock(/googleapis.*tl=es/, [[["Hola mundo"]]]);
    mock(/googleapis.*tl=ja/, [[["こんにちは世界"]]]);
  });

  afterEach(() => mock.end());

  const delay = (time) => new Promise((done) => setTimeout(done, time));

  it("does not have language persistence", async () => {
    mock(/googleapis.*tl=es/, [[["Hola mundo"]]]);
    mock(/googleapis.*tl=ja/, [[["こんにちは世界"]]]);
    mock(/googleapis.*tl=ru/, [[["XXXXXXXXXX"]]]);
    await Promise.all([
      translate("Sentence A", "es").then(console.log),
      translate("Sentence B", "ja").then(console.log),
      translate("Sentence C", "ru").then(console.log),
    ]);
  });

  it("caches", async () => {
    const before = new Date();
    await translate("Is this cached?", "es");
    const mid = new Date();
    await translate("Is this cached?", "es");
    const after = new Date();
    expect(mid - before).toBeLessThan(10000);
    expect(mid - before).toBeGreaterThan(100);
    expect(after - mid).toBeLessThan(10);
    expect(after - mid).toBeGreaterThanOrEqual(0);
  });

  it("removes cache after the time is out", async () => {
    const t = translate.Translate({ cache: 1000 });
    const before = new Date();
    await t("Is this also cached?", { to: "es" });
    const mid = new Date();
    await delay(1100);
    mock(/googleapis.*tl=es/, [[["Hola mundo"]]]);
    await t("Is this also cached?", { to: "es" });
    const after = new Date();
    expect(mid - before).toBeLessThan(10000);
    expect(mid - before).toBeGreaterThan(100);
    expect(after - mid).toBeLessThan(10000);
    expect(after - mid).toBeGreaterThan(100);
  });
});
