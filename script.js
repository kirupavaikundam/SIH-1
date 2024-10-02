// Simple navigation for project details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    if (projectId) {
        document.getElementById('project-title').textContent = `Project ${projectId}`;
        // Load project details dynamically here
    }
    
    const mentorId = urlParams.get('mentor');
    if (mentorId) {
        document.getElementById('mentor-name').textContent = `Mentor ${mentorId}`;
        // Load mentor details dynamically here
    }
});
