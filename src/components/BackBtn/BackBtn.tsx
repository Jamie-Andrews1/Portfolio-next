"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../BackBtn/back.module.css";
interface Props {}

export default function BackBtn({}: Props) {
  const router = useRouter();

  return (
    <button type="button" className={styles.back} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
