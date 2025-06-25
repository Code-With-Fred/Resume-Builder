import { useState, useEffect } from "react";
import { FiDownload, FiTrash2, FiInfo } from "react-icons/fi";
import { toast } from "react-hot-toast";
import PersonalInfo from "../components/Builder/PersonalInfo";
import Education from "../components/Builder/Education";
import Experience from "../components/Builder/Experience";
import Skills from "../components/Builder/Skills";
import Projects from "../components/Builder/Projects";
import Summary from "../components/Builder/Summary";
import ResumePreview from "../components/Preview/ResumePreview";
import type { ResumeData } from "../types/resume";

// Default resume structure (ATS-friendly format)
const defaultResume: ResumeData = {
    name: "",
    title: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: [{ school: "", degree: "", year: "" }],
    experience: [{ company: "", role: "", year: "" }],
    skills: [""],
    projects: [{ name: "", description: "", link: "" }],
    summary: "",
};

const ResumeBuilder = () => {
  const [resume, setResume] = useState<ResumeData>(() => {
    const savedResume = localStorage.getItem("resumeData");
    return savedResume ? JSON.parse(savedResume) : defaultResume;
  });
  const [activeSection, setActiveSection] = useState("personal");
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resume));
  }, [resume]);

  const handleChange = (field: keyof ResumeData, value: any) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddItem = (field: keyof ResumeData, template: any) => {
    setResume((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), template],
    }));
    toast.success("Added new entry");
  };

  const handleRemoveItem = (field: keyof ResumeData, index: number) => {
    if (confirm("Delete this entry?")) {
      setResume((prev) => ({
        ...prev,
        [field]: (prev[field] as any[]).filter((_, i) => i !== index),
      }));
      toast.error("Entry removed");
    }
  };

  const handleResetSection = (field: keyof ResumeData) => {
    if (confirm("Clear this section?")) {
      setResume((prev) => ({
        ...prev,
        [field]: Array.isArray(defaultResume[field]) ? [] : "",
      }));
    }
  };

  const handleExportPDF = () => {
    toast("Exporting PDF... (Mock Action)");
    // In a real app: Use libraries like `html2pdf` or `jspdf`
  };

  const sections: { id: string; label: string; icon: string }[] = [
    { id: "personal", label: "Personal Info", icon: "👤" },
    { id: "summary", label: "Professional Summary", icon: "📝" },
    { id: "experience", label: "Work Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "📂" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return <PersonalInfo data={resume} onChange={handleChange} />;
      case "summary":
        return <Summary data={resume.summary} onChange={handleChange} />;
      case "experience":
        return (
          <Experience
            data={resume.experience}
            onChange={handleChange}
            onAdd={() =>
              handleAddItem("experience", {
                company: "",
                role: "",
                year: "",
                description: "",
              })
            }
            onRemove={handleRemoveItem}
          />
        );
      case "education":
        return (
          <Education
            data={resume.education}
            onChange={handleChange}
            onAdd={() =>
              handleAddItem("education", {
                school: "",
                degree: "",
                year: "",
                gpa: "",
              })
            }
            onRemove={handleRemoveItem}
          />
        );
      case "skills":
        return (
          <Skills
            data={resume.skills}
            onChange={handleChange}
            onAdd={() => handleAddItem("skills", { name: "", level: "Intermediate" })}
            onRemove={handleRemoveItem}
          />
        );
      case "projects":
        return (
          <Projects
            data={resume.projects}
            onChange={handleChange}
            onAdd={() =>
              handleAddItem("projects", {
                name: "",
                description: "",
                link: "",
              })
            }
            onRemove={handleRemoveItem}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">ResumeCraft</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setIsPreviewVisible(!isPreviewVisible)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center gap-2"
            >
              {isPreviewVisible ? "Hide Preview" : "Show Preview"}
            </button>
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center gap-2"
            >
              <FiDownload /> Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar - Navigation */}
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold mb-3 text-gray-700">Sections</h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <FiInfo className="text-blue-500" /> Pro Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span>•</span> Use bullet points for experience descriptions
              </li>
              <li className="flex items-start gap-2">
                <span>•</span> Keep it concise (1-2 pages max)
              </li>
              <li className="flex items-start gap-2">
                <span>•</span> Tailor skills to the job description
              </li>
              <li className="flex items-start gap-2">
                <span>•</span> Quantify achievements (e.g., "Increased sales by 30%")
              </li>
            </ul>
          </div>
        </div>

        {/* Form Area */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              {activeSection !== "personal" && activeSection !== "summary" && (
                <button
                  onClick={() => handleResetSection(activeSection as keyof ResumeData)}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <FiTrash2 size={14} /> Clear Section
                </button>
              )}
            </div>
            {renderActiveSection()}
          </div>
        </div>

        {/* Preview Panel */}
        {isPreviewVisible && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="font-semibold">Live Preview</h3>
              </div>
              <div className="p-4">
                <ResumePreview data={resume} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResumeBuilder;