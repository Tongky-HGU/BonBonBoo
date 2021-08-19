export const getExchangeRate = async () => {
    try {
        const res = await fetch("/api/exchange/rate", {
            headers: {
                accepts: "application/json",
            },
        });
        const body = await res.json()
        if (!res.ok) throw new Error("server error");
        return body[0]
    } catch (err) {
        throw new Error(`error api request ${err.message}`);
    }
};
