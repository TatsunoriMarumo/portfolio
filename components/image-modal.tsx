/* --------------------------------------------------------------------------
 * ImageModal.tsx — React 19-ready, Embla-based fullscreen carousel
 * ------------------------------------------------------------------------*/
"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  children: React.ReactNode;
}

export default function ImageModal({
  images,
  currentIndex,
  title,
  children,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  /* ────────────────────────────────────────────────────────────────── */
  /* 1. Emblaハンドル                                                    */
  /* ------------------------------------------------------------------ */
  const [api, setApi] = useState<CarouselApi | null>(null);

  const [current, setCurrent] = useState(currentIndex);
  const currentRef = useRef(currentIndex);
  const lastIndex = images.length - 1;

  /* ────────────────────────────────────────────────────────────────── */
  /* 2. Embla 初期化 & リスナ登録                                         */
  /* ------------------------------------------------------------------ */
  const setCurrentSafely = useCallback((idx: number) => {
    currentRef.current = idx;
    setCurrent(idx);
  }, []);

  useEffect(() => {
    if (!api || !isOpen) return;

    const init = () => {
      api.scrollTo(currentIndex, true);
      setCurrentSafely(api.selectedScrollSnap());
    };

    init();

    const handleSelect = () => setCurrentSafely(api.selectedScrollSnap());

    api.on("select", handleSelect);
    api.on("reInit", init);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", init);
    };
  }, [api, currentIndex, setCurrentSafely, isOpen]);

  /* ────────────────────────────────────────────────────────────────── */
  /* 3. Prev / Next（rapid-click safe）                                  */
  /* ------------------------------------------------------------------ */
  const safeScrollNext = useCallback(() => {
    if (!api) return;
    const next = currentRef.current + 1;
    if (next <= lastIndex) api.scrollTo(next);
  }, [api, lastIndex]);

  const safeScrollPrev = useCallback(() => {
    if (!api) return;
    const prev = currentRef.current - 1;
    if (prev >= 0) api.scrollTo(prev);
  }, [api]);

  const disablePrev = current === 0;
  const disableNext = current === lastIndex;

  /* ────────────────────────────────────────────────────────────────── */
  /* 4. Pagination dots（memo化で再生成コスト削減）                        */
  /* ------------------------------------------------------------------ */
  const dots = useMemo(
    () =>
      images.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to image ${i + 1}`}
          onMouseDown={(e) => {
            e.preventDefault(); // フォーカスリング抑制
            if (api && i !== currentRef.current) api.scrollTo(i);
          }}
          className={cn(
            "h-2 w-2 rounded-full transition-colors",
            i === current
              ? "bg-soft-blue"
              : "bg-sage-green/50 hover:bg-sage-green"
          )}
        />
      )),
    [images, api, current] // currentRef.current は依存配列に不要
  );

  /* ────────────────────────────────────────────────────────────────── */
  /* 5. モーダル制御                                                      */
  /* ------------------------------------------------------------------ */
  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  // 背景クリックで閉じる
  const handleBackgroundClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  /* ────────────────────────────────────────────────────────────────── */
  /* 6. キーボードナビゲーション                                          */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          safeScrollPrev();
          break;
        case "ArrowRight":
          safeScrollNext();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, safeScrollPrev, safeScrollNext, closeModal]);

  /* ────────────────────────────────────────────────────────────────── */
  /* 7. JSX                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* トリガー */}
      <div onClick={openModal} className="cursor-pointer">
        {children}
      </div>

      {/* 全画面モーダル - Portalを使用 */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
            onClick={handleBackgroundClick}
          >
            {/* 閉じるボタン */}
            <button
              aria-label="Close modal"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center  text-light-gray cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* タイトル (スクリーンリーダー用) */}
            <div className="sr-only">{title}</div>

            {/* ---------- Carousel ---------- */}
            <div className="relative h-[calc(100vh-80px)] w-full max-w-screen px-4 sm:px-12 lg:px-20 mx-2 sm:mx-6 lg:mx-35">
              {/* 矢印ボタン用のスペースを確保 */}
              <Carousel className="h-full w-full touch-pan-x" setApi={setApi}>
                <CarouselContent>
                  {images.map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative h-[calc(100vh-120px)] w-full px-2 sm:px-4">
                        {/* 画像の左右に余白を追加 */}
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`${title} — Image ${idx + 1}`}
                          fill
                          className="select-none object-contain"
                          priority={idx === currentIndex}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* ---------- Prev / Next (タブレット・デスクトップで表示) ---------- */}
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={safeScrollPrev}
                    disabled={disablePrev}
                    className={cn(
                      "absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-dark-teal/80 text-light-gray transition-opacity hover:bg-dark-teal cursor-pointer",
                      disablePrev && "cursor-default opacity-50 bg-dark-teal"
                    )}
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>

                  <button
                    aria-label="Next image"
                    onClick={safeScrollNext}
                    disabled={disableNext}
                    className={cn(
                      "absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-dark-teal/80 text-light-gray transition-opacity hover:bg-dark-teal cursor-pointer",
                      disableNext && "cursor-default opacity-50 bg-dark-teal"
                    )}
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </>
              )}
            </div>

            {/* ---------- Dots (separated and positioned below carousel) ---------- */}
            {images.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
                {dots}
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
