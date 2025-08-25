"use client";
import { useState } from "react";

import {
  InputFieldLength,
  InputFieldValue,
  ToggleMe,
  Todo,
  ColorSwitcher,
} from "@/components";

export default function InputField() {
  return (
    <div className="m-10">
      <InputFieldLength />
      <InputFieldValue />
      <ToggleMe />
      <Todo />
      <ColorSwitcher />
    </div>
  );
}
