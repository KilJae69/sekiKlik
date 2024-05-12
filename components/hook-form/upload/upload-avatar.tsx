'use client';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './upload.module.scss';
import Image from 'next/image';

interface UploadAvatarProps {
  disabled?: boolean;
  error?: boolean;
  file?: any;
  helperText?: string;
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({
  error,
  file,
  disabled,
  helperText,
  ...other
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    // fileRejections,
  } = useDropzone({
    multiple: false,
    disabled,
    accept: {
      'image/*': [],
    },
    ...other,
  });

  const hasFile = !!file;
  const hasError = isDragReject || !!error;
  const imgUrl = typeof file === 'string' ? file : file?.preview;

  const renderPreview = hasFile && <Image alt="avatar" src={imgUrl} fill />;

  const renderPlaceholder = (
    <div
      className={`${styles.uploadPlaceholder} ${hasError ? styles.error : ''} ${hasFile ? styles.file : ''}`}
    >
      <div className={styles.caption}>
        {file ? 'Update image' : 'Add Image'}
      </div>
    </div>
  );

  const renderContent = (
    <div className={styles.previewBox}>
      {renderPreview}
      {renderPlaceholder}
    </div>
  );

  return (
    <>
      <div
        {...getRootProps()}
        className={`${styles.dragArea} ${isDragActive ? styles.dragActive : ''} ${disabled ? styles.disabled : ''} ${hasError ? styles.errorBorder : ''} ${hasFile ? styles.hasFile : ''}`}
      >
        <input {...getInputProps()} />
        {renderContent}
      </div>
      {helperText && <div className={styles.helperText}>{helperText}</div>}
      {/*<RejectionFiles fileRejections={fileRejections} />*/}
    </>
  );
};

export default UploadAvatar;
