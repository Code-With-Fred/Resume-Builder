// src/pages/ViewResume.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import ResumePreview from '@/components/Preview/ResumePreview';
import ResumePreview from '../components/Preview/ResumePreview';
// import type { ResumeData } from '@/types/resume';
import type { ResumeData } from '../types/resume';

const ViewResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`/api/resume/${id}`);
        const data = await res.json();
        setResume(data);
      } catch (error) {
        console.error('Failed to fetch resume', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-gray-600 dark:text-gray-300">Loading...</div>;
  }

  if (!resume) {
    return <div className="text-center mt-20 text-red-500">Resume not found.</div>;
  }

  return (
    <motion.div
      className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <ResumePreview data={resume} />
      </div>
    </motion.div>
  );
};

export default ViewResume;