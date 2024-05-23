"use client";
import { type ElementRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";

export function Modal({ content }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootModal, setRootModal] = useState<HTMLElement | null>(null);
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    // document.addEventListener("mousedown", (e: Event) => {
    //   if (dialogRef.current !== null) {
    //     dialogRef.current.contains(e.target as HTMLDialogElement)
    //       ? dialogRef.current?.close()
    //       : null;
    //   }
    // });
    if (isOpen) {
      dialogRef.current?.showModal();
    }
    const container = document.getElementById("modal-root");

    if (container) {
      setRootModal(container);
    }
  }, [isOpen]);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  if (!rootModal) {
    return null;
  }
  return (
    <>
      <Image
        className="images"
        onClick={toggleModal}
        title="Preview"
        src={content.image}
        alt={"Image"}
        width={400}
        height={300}
        style={{
          width: "100%",
          height: "auto",
        }}
        sizes="100vw"
      />
      {isOpen &&
        createPortal(
          <dialog ref={dialogRef} className="modal" onClose={toggleModal}>
            <h2>{content.title}</h2>
            <Image
              src={content.banner}
              alt={"Image"}
              width={300}
              height={200}
              style={{
                height: "auto",
                aspectRatio: 16 / 4,
              }}
            />
            <span>
              <p>{content.desc}</p>
              <Link
                href={`/${content.slug}`}
                title="Project Page"
                className="projectBtn"
              >
                Go to page...
              </Link>
            </span>
            <button onClick={toggleModal} className="close-button" />
          </dialog>,
          rootModal
        )}
    </>
  );
}
export function ImageSkeleton() {
  return (
    <div>
      <div
        style={{ width: "100%", height: "300px", backgroundColor: "gray" }}
      ></div>
    </div>
  );
}
