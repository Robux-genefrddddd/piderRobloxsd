import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChatArea } from "@/components/ChatArea";
import { Menu } from "lucide-react";

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="md:hidden border-b border-border px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={20} className="text-foreground" />
          </button>
        </div>

        {/* Chat Area */}
        <ChatArea />
      </div>
    </div>
  );
}
