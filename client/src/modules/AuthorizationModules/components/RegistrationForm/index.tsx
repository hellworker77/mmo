import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
  return (
    <div className="">
          className="mb-4 w-full rounded border p-2"
          onChange={(e) => setEmail(e.target.value)}
    </div>
  );
};

export { RegistrationForm };
