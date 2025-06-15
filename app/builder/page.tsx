import React from 'react';

export default function BuilderPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar with components */}
      <div className="w-64 bg-card border-r border-border p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Components</h2>
        <div className="space-y-2">
          <div className="p-3 bg-secondary rounded-md cursor-move">
            <h3 className="font-medium">About</h3>
            <p className="text-sm text-muted-foreground">Add your bio and personal info</p>
          </div>
          <div className="p-3 bg-secondary rounded-md cursor-move">
            <h3 className="font-medium">Projects</h3>
            <p className="text-sm text-muted-foreground">Showcase your work</p>
          </div>
          <div className="p-3 bg-secondary rounded-md cursor-move">
            <h3 className="font-medium">Skills</h3>
            <p className="text-sm text-muted-foreground">List your technical skills</p>
          </div>
          <div className="p-3 bg-secondary rounded-md cursor-move">
            <h3 className="font-medium">Contact</h3>
            <p className="text-sm text-muted-foreground">Add your contact information</p>
          </div>
        </div>
      </div>

      {/* Main editor area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-14 border-b border-border flex items-center px-4 justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Flexfolio Builder</h1>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md">
                Save
              </button>
              <button className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md">
                Preview
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md">
              Publish
            </button>
          </div>
        </div>

        {/* Editor canvas */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p className="text-muted-foreground">
                Add your bio and personal information here. This is a placeholder for the About section.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-2">Projects</h2>
              <p className="text-muted-foreground">
                Showcase your projects here. This is a placeholder for the Projects section.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <p className="text-muted-foreground">
                List your skills here. This is a placeholder for the Skills section.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Contact</h2>
              <p className="text-muted-foreground">
                Add your contact information here. This is a placeholder for the Contact section.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview pane */}
      <div className="w-1/3 border-l border-border p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p className="text-muted-foreground">
                Add your bio and personal information here. This is a placeholder for the About section.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Projects</h2>
              <p className="text-muted-foreground">
                Showcase your projects here. This is a placeholder for the Projects section.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <p className="text-muted-foreground">
                List your skills here. This is a placeholder for the Skills section.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Contact</h2>
              <p className="text-muted-foreground">
                Add your contact information here. This is a placeholder for the Contact section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 