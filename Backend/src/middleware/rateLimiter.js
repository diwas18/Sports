import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const rateLimiter = async (req, res, next) => {
    try {
        const redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });

        const ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.fixedWindow(5, "10 s"), // ← changed from slidingWindow
            analytics: true,
        });

        const ip = req.ip || req.headers["x-forwarded-for"] || "anonymous";
        
        const { success } = await ratelimit.limit(ip);

        if (!success) {
            return res.status(429).json({ 
                error: "Too many requests, please slow down!" 
            });
        }

        next();
    } catch (error) {
        console.error("Rate limiter error:", error);
        next();
    }
};

export default rateLimiter;