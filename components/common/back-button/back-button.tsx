'use client';

import { useRouter } from 'next/navigation';
interface BackButtonProps {
  additionalClass?: string;
}
export default function BackButton({ additionalClass }: BackButtonProps) {
  const router = useRouter();
  return (
    <div className={additionalClass}>
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}
