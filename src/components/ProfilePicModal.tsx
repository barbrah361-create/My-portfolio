import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Trash2, Link as LinkIcon, AlertCircle, RefreshCw } from 'lucide-react';

interface ProfilePicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfilePicModal({ isOpen, onClose }: ProfilePicModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('/barbrah.jpg');
  const [customUrl, setCustomUrl] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem('barbrah_profile_pic');
      if (stored) {
        setPreviewUrl(stored);
      } else {
        setPreviewUrl('/barbrah.jpg');
      }
      setError('');
      setCustomUrl('');
    }
  }, [isOpen]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPG, WebP, etc.)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreviewUrl(result);
        localStorage.setItem('barbrah_profile_pic', result);
        window.dispatchEvent(new Event('profile-pic-updated'));
        setError('');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;

    // Fast validation
    if (!customUrl.startsWith('http://') && !customUrl.startsWith('https://') && !customUrl.startsWith('data:image')) {
      setError('Please enter a valid absolute image URL starting with http:// or https://');
      return;
    }

    setPreviewUrl(customUrl);
    localStorage.setItem('barbrah_profile_pic', customUrl);
    window.dispatchEvent(new Event('profile-pic-updated'));
    setError('');
    setCustomUrl('');
  };

  const handleDelete = () => {
    localStorage.removeItem('barbrah_profile_pic');
    setPreviewUrl('/barbrah.jpg');
    window.dispatchEvent(new Event('profile-pic-updated'));
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-md rounded-2xl border border-brand-hotpink/20 bg-[#0c0c0c] p-6 shadow-[0_0_40px_rgba(255,20,147,0.15)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 text-gray-400 transition-colors hover:border-brand-hotpink hover:text-brand-hotpink"
              aria-label="Close Profile Manager"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center">
              <span className="font-mono text-[9px] text-brand-hotpink uppercase tracking-[0.3em] font-semibold">
                Creative Identity
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-white uppercase tracking-tight">
                Profile Picture Manager
              </h3>
              <p className="mt-1 text-[11px] text-gray-500 font-light">
                Update or delete your custom avatar displayed on the portfolio.
              </p>
            </div>

            {/* Main Content Layout */}
            <div className="mt-6 space-y-6">
              {/* Preview Circle */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative group h-28 w-28 rounded-full overflow-hidden border-2 border-brand-hotpink/30 pink-glow-sm bg-brand-black">
                  <img
                    src={previewUrl}
                    alt="Barbrah Angelique Preview"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                    onError={() => {
                      setError('Failed to load image from the URL provided.');
                    }}
                  />
                </div>
                {previewUrl !== '/barbrah.jpg' && (
                  <button
                    onClick={handleDelete}
                    className="mt-3 flex items-center gap-1.5 font-mono text-[9px] text-red-400 hover:text-red-300 uppercase font-bold tracking-widest cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Reset to Default
                  </button>
                )}
              </div>

              {/* Drag and Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`group cursor-pointer rounded-xl border border-dashed p-6 text-center transition-all ${
                  dragActive
                    ? 'border-brand-hotpink bg-brand-hotpink/5 shadow-[0_0_15px_rgba(255,20,147,0.1)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-brand-hotpink/40 hover:bg-brand-hotpink/[0.01]'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-hotpink/10 text-brand-hotpink group-hover:scale-105 transition-transform">
                  <Upload className="h-4 w-4" />
                </div>
                <p className="mt-3 font-display text-xs font-semibold text-white">
                  Drag & Drop Profile Image
                </p>
                <p className="mt-1 font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  or click to select file
                </p>
              </div>

              {/* URL input option */}
              <form onSubmit={handleUrlSubmit} className="space-y-2">
                <label className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  Or load from custom URL
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <LinkIcon className="h-3.5 w-3.5" />
                    </span>
                    <input
                      type="text"
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      placeholder="https://example.com/avatar.jpg"
                      className="w-full rounded border border-white/10 bg-brand-black/50 py-2.5 pl-9 pr-3 text-xs text-white focus:border-brand-hotpink focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer border border-brand-hotpink bg-brand-black px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-white hover:bg-brand-hotpink transition-all"
                  >
                    Load
                  </button>
                </div>
              </form>

              {/* Errors Panel */}
              {error && (
                <div className="flex items-start gap-2 rounded bg-red-950/20 border border-red-500/20 p-3 text-[10px] text-red-300 font-mono leading-relaxed">
                  <AlertCircle className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
