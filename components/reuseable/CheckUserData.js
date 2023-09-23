import { getSession } from "next-auth/react";

export const getUserData = async (ctx) => {
    const session = await getSession(ctx);
    if (session) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("cookie", ctx.req.headers.cookie);

        var raw = JSON.stringify({
            UserLoginId: session.id,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };
        // Fetch data from external API
        const res = await fetch(`${baseUrl}/api/user/UserDetails`, requestOptions);
        UserData = await res.json();
        const emailVerified = UserData.result.is_verified;
        const userStatus = UserData.result.status;
        setVerified(emailVerified);
        setUserStatus(userStatus);
    }
};
