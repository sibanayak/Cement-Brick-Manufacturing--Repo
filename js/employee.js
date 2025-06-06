document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  }
  const staffData = [
    {
      initials: "RY",
      name: "Rajesh Yuktesh",
      position: "Chief Executive Officer",
      department: "leadership",
      bio: "Visionary leader with 15+ years of experience in driving business growth and innovation.",
      email: "rajesh@yukteshenterprises.com",
      phone: "+91 98765 43210",
    },
    {
      initials: "PS",
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      department: "leadership",
      bio: "Technology strategist leading digital transformation initiatives and innovation.",
      email: "priya@yukteshenterprises.com",
      phone: "+91 98765 43211",
    },
    {
      initials: "AK",
      name: "Amit Kumar",
      position: "Senior Engineer",
      department: "engineering",
      bio: "Experienced engineer specializing in project management and technical solutions.",
      email: "amit@yukteshenterprises.com",
      phone: "+91 98765 43212",
    },
    {
      initials: "SG",
      name: "Sneha Gupta",
      position: "Marketing Manager",
      department: "sales",
      bio: "Creative marketing professional driving brand awareness and customer engagement.",
      email: "sneha@yukteshenterprises.com",
      phone: "+91 98765 43213",
    },
    {
      initials: "RV",
      name: "Ravi Verma",
      position: "Operations Head",
      department: "operations",
      bio: "Operations expert ensuring smooth workflow and efficient project delivery.",
      email: "ravi@yukteshenterprises.com",
      phone: "+91 98765 43214",
    },
    {
      initials: "MP",
      name: "Meera Patel",
      position: "HR Director",
      department: "hr",
      bio: "HR professional focused on talent acquisition and employee development.",
      email: "meera@yukteshenterprises.com",
      phone: "+91 98765 43215",
    },
  ];

  const staffGrid = document.getElementById("staffGrid");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (staffGrid && searchInput && filterButtons.length > 0) {
    function renderStaffCards(staffList) {
      staffGrid.innerHTML = "";
      staffList.forEach((staff, index) => {
        const card = document.createElement("div");
        card.className = "staff-card fade-in";
        card.style.animationDelay = `${index * 0.1}s`;
        card.setAttribute("data-department", staff.department);

        card.innerHTML = `
          <div class="staff-photo">${staff.initials}</div>
          <h3 class="staff-name">${staff.name}</h3>
          <p class="staff-position">${staff.position}</p>
          <p class="staff-department">${formatDepartment(staff.department)}</p>
          <p class="staff-bio">${staff.bio}</p>
          <div class="staff-contact">
            <div class="contact-item"><i class="fa-solid fa-envelope"></i> ${
              staff.email
            }</div>
            <div class="contact-item"><i class="fa-solid fa-phone"></i> ${
              staff.phone
            }</div>
          </div>
        `;
        staffGrid.appendChild(card);
      });
    }

    function formatDepartment(department) {
      const names = {
        leadership: "Leadership",
        engineering: "Engineering",
        sales: "Sales & Marketing",
        operations: "Operations",
        hr: "Human Resources",
      };
      return names[department] || department;
    }

    function filterStaffByDepartment(department) {
      if (department === "all") return staffData;
      return staffData.filter((staff) => staff.department === department);
    }

    function searchStaff(query) {
      const activeFilter =
        document.querySelector(".filter-btn.active")?.dataset.department ||
        "all";
      let filteredStaff = filterStaffByDepartment(activeFilter);
      if (query) {
        const searchTerm = query.toLowerCase();
        filteredStaff = filteredStaff.filter(
          (staff) =>
            staff.name.toLowerCase().includes(searchTerm) ||
            staff.position.toLowerCase().includes(searchTerm) ||
            staff.bio.toLowerCase().includes(searchTerm)
        );
      }
      return filteredStaff;
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        const filtered = filterStaffByDepartment(this.dataset.department);
        renderStaffCards(filtered);
      });
    });

    searchInput.addEventListener("input", function () {
      const query = this.value.trim();
      const results = searchStaff(query);
      renderStaffCards(results);
    });

    renderStaffCards(staffData);
  }
});
