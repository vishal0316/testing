 // Function to filter team members based on the search query and expertise
 function filterTeamMembers() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const expertiseFilter = document.getElementById("filter").value.toLowerCase();
    const teamMembers = document.getElementsByClassName("team__member");

    for (const member of teamMembers) {
      const name = member.querySelector("h4").textContent.toLowerCase();
      const expertise = member.querySelector("p").textContent.toLowerCase();

      const isVisible = name.includes(searchQuery) && (expertiseFilter === "" || expertise === expertiseFilter);
      member.style.display = isVisible ? "block" : "none";
    }
  }

  // Event listeners for search and filter input changes
  document.getElementById("search").addEventListener("input", filterTeamMembers);
  document.getElementById("filter").addEventListener("change", filterTeamMembers);
