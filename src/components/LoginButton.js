import React from "react";

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = "https://social-media-dashboard-six-blond.vercel.app/auth/twitter";
    };

    return (
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Connectez-vous avec Twitter
        </button>
    );
};

export default LoginButton;