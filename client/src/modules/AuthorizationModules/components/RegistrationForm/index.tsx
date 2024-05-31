import React, { useState } from "react";
import { useFormStore } from "../../store/ChangeFormStore";
import backgroundImageButton from "../../../../assets/images/backgroundButton.png";

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setFormType } = useFormStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleBackClick = () => {
    setFormType("authorization");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="w-64">
        <input
          className="mb-4 w-full rounded border p-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="mb-4 w-full rounded border p-2"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type="text"
          placeholder="Login"
          required
        />
        <input
          className="mb-4 w-full rounded border p-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <div className="flex gap-3">
          <button className="relative flex h-12 w-64 items-center justify-center overflow-hidden rounded-md bg-gray-500">
            <img
              src={backgroundImageButton}
              alt="Background"
              className="absolute inset-0 h-full w-full"
            />
            <span className="z-10 text-sm font-bold text-gold">
              Регистрация
            </span>
          </button>
          <button
            className="relative flex h-12 w-64 items-center justify-center overflow-hidden rounded-md bg-gray-500"
            onClick={handleBackClick}
          >
            <img
              src={backgroundImageButton}
              alt="Background"
              className="absolute inset-0 h-full w-full"
            />
            <span className="z-10 text-sm font-bold text-gold">Назад</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export { RegistrationForm };
