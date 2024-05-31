import React, { useState } from "react";
import { useFormStore } from "../../store/ChangeFormStore";
import useAuthStore from "../../store/useAuthStore";
import backgroundImageButton from "../../../../assets/images/backgroundButton.png";
import { RegistrationForm } from "../RegistrationForm";

const AuthorizationForm: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { formType, setFormType } = useFormStore();
  const handleRegistrationClick = () => {
    setFormType("registration");
  };
  return (
    <div className=" relative flex h-screen w-screen items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt4b52476e49bbe1bf/624476b50f303644adfe5dd0/gingerbread_animatic.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute w-64">
        {formType === "registration" ? (
          <RegistrationForm />
        ) : (
          <>
            <input
              className="  mb-4 w-full rounded border p-2"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type="text"
              placeholder="Email"
            />
            <input
              className=" mb-4 w-full rounded border p-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
            <div className="flex gap-3">
              <button
                className="relative flex h-12 w-64 items-center justify-center overflow-hidden rounded-md bg-gray-500"
              >
                <img
                  src={backgroundImageButton}
                  alt="Background"
                  className="absolute inset-0 h-full w-full"
                />
                <span className="z-10 text-sm font-bold text-gold">
                  Авторизация
                </span>
              </button>
              <button
                className="relative flex h-12 w-64 items-center justify-center overflow-hidden rounded-md bg-gray-500"
                onClick={handleRegistrationClick}
              >
                <img
                  src={backgroundImageButton}
                  alt="Background"
                  className="absolute inset-0 h-full w-full"
                />
                <span className="z-10 text-sm font-bold text-gold">
                  Регистрация
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { AuthorizationForm };
