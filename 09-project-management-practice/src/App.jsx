import { useState } from "react";

import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import Input from "./components/Input";
import ViewProject from "./components/ViewProject";

const PROJECT = {
  title: 'Learning React',
  description: `Learn React from the group up.`,
  date: '2023-12-29',
  tasks: ['Learn advanced concepts', 'Learn advanced concepts']
}

function App() {
  const [projects, setProjects] = useState([]);
  const [pageStatus, setPageStatus] = useState('home');
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleSelectProject(index) {
    setPageStatus('view');
    setSelectedIndex(index);
  }

  function handleAddProject() {
    setPageStatus('add');
  }

  function handleSave(newProject) {
    setProjects((prevProjects) => {
      return [...prevProjects, newProject];
    });
    setPageStatus('home');
  }

  function handleCancle() {
    setPageStatus('home');
  }

  function handleDeleteProject() {
    setProjects((prevProjects) => {
      return prevProjects.filter((_, index) => index !== selectedIndex);
    })
    setPageStatus('home');
  }

  let content;

  if (pageStatus === 'home') {
    content = <NewProject projects={projects} />;
  } else if (pageStatus === 'add') {
    content = <Input onSave={handleSave} onCancel={handleCancle} />;
  } else if (pageStatus === 'view' && selectedIndex !== null) {
    content = <ViewProject project={projects[selectedIndex]} onDeleteProject={handleDeleteProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projects} onAddProject={handleAddProject} onViewProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
