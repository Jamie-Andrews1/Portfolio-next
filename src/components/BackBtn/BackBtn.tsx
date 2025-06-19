"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../BackBtn/back.module.css";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button type="button" className={styles.back} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
