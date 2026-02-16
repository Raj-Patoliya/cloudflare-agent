'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { setProfilePicturePreview } from '@/store/auth.slice';
import { useRef, useState, useEffect } from 'react';

interface ProfilePictureUploadProps {
  onFileChange?: (file: File | null) => void;
}

export function ProfilePictureUpload({ onFileChange }: ProfilePictureUploadProps = {}) {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const profilePicturePreview = useAppSelector(
    (state) => state.auth.formData.profilePicturePreview
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Store file locally
      setSelectedFile(file);
      onFileChange?.(file);
      
      // Create and dispatch preview URL
      const previewUrl = URL.createObjectURL(file);
      dispatch(setProfilePicturePreview(previewUrl));
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    onFileChange?.(null);
    dispatch(setProfilePicturePreview(null));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Cleanup object URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (profilePicturePreview && profilePicturePreview.startsWith('blob:')) {
        URL.revokeObjectURL(profilePicturePreview);
      }
    };
  }, [profilePicturePreview]);

  return (
    <div className="space-y-2 sm:space-y-3">
      <label className="block text-xs sm:text-sm font-medium text-gray-300">
        Profile Picture <span className="text-gray-500">(Optional)</span>
      </label>

      {profilePicturePreview ? (
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-cyan-500/50 shrink-0">
            <img
              src={profilePicturePreview}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="px-3 py-2 text-xs sm:text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg transition-colors font-medium"
          >
            Remove
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-6 sm:p-8 border-2 border-dashed border-gray-700 rounded-lg hover:border-cyan-500/50 transition-colors cursor-pointer group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 group-hover:text-cyan-500 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <div className="text-center">
              <p className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-cyan-400">
                Click to upload
              </p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
