'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UploadAvatar from '@/components/hook-form/upload/upload-avatar';

interface RHFUploadAvatarProps {
  name: string;
  additonalClass?: string;
  maxSize?: number;
  onDrop: (val: any) => void;
}

export const RHFUploadAvatar: React.FC<RHFUploadAvatarProps> = ({
  name,
  additonalClass,
  ...other
}) => {
  const { control } = useFormContext(); // Ensure useFormContext() is providing the types expected

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={additonalClass}>
          <UploadAvatar error={!!error} file={field.value as any} {...other} />
        </div>
      )}
    />
  );
};
