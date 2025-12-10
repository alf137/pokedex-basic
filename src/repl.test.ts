import { Cache, type CacheEntry} from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "red",
    interval: 500,
  },
  {
    key: "https://example.com/path",
    val: 112341,
    interval: 1000,
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, { createdAt: Date.now(), val });
  const cached = cache.get(key);
  expect(cached).toStrictEqual({ createdAt: expect.any(Number), val });

  // Wait for expiration plus buffer
  await new Promise((resolve) =>
    setTimeout(resolve, interval + 50)  // WAIT 50ms extra
  );

  await Promise.resolve(); 

  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});