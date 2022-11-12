import { ToastContainer, toast } from "react-toastify";

import Router from "next/router";

import { getSession } from "next-auth/react";

export const auth = async () => {
    const session = await getSession();
    if (!session) {
        toast.error("User Not Logged In", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        Router.push(process.env.NEXT_BASE_URL + "/");
    }
};
