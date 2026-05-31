import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"


const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
});