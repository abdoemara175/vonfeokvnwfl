/* ==========================================================================
   PIXEL PLATFORM - DASHBOARD & RBAC ROLE MANAGEMENT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const currentUser = window.pixelAuth.currentUser;
  
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }

  // Populate Banner
  const nameEl = document.getElementById('user-display-name');
  const emailEl = document.getElementById('user-email');
  const avatarEl = document.getElementById('user-avatar-initial');
  const roleBadgeEl = document.getElementById('user-role-badge');
  const campEl = document.getElementById('user-camp-name');
  const progressFillEl = document.getElementById('progress-bar-fill');
  const badgesListEl = document.getElementById('user-badges-list');

  if (nameEl) nameEl.textContent = currentUser.name;
  if (emailEl) emailEl.textContent = currentUser.email;
  if (avatarEl) avatarEl.textContent = currentUser.name.charAt(0);
  if (campEl) campEl.textContent = currentUser.camp || 'Pixel Camp - Round 1';
  if (progressFillEl) progressFillEl.style.width = `${currentUser.progress || 0}%`;

  const roleLabels = {
    founder: 'Founder & Super Admin',
    admin: 'Lead / Admin',
    instructor: 'UI/UX Instructor',
    media: 'Media Team',
    hr: 'HR Team',
    student: 'Student'
  };

  if (roleBadgeEl) {
    roleBadgeEl.innerHTML = `<span class="badge badge-purple">${roleLabels[currentUser.role] || currentUser.role}</span>`;
  }

  if (badgesListEl) {
    badgesListEl.innerHTML = (currentUser.badges || ['New Student']).map(b => `
      <span class="badge badge-gold"><i class="fa-solid fa-award"></i> ${b}</span>
    `).join('');
  }

  // Populate Top 3 Leaderboard
  const top3Container = document.getElementById('top3-leaderboard-container');
  if (top3Container) {
    const top3 = window.pixelAuth.getLeaderboardTop3();
    const rankBadges = ['rank-1', 'rank-2', 'rank-3'];

    top3Container.innerHTML = top3.map((u, i) => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-light);">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-weight: 700; color: #eab308;">#${i + 1}</span>
          <div>
            <strong style="display: block; font-size: 0.95rem;">${u.name}</strong>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${u.camp}</span>
          </div>
        </div>
        <span style="color: var(--primary-glow); font-weight: 700;">${u.score || 90}%</span>
      </div>
    `).join('');
  }

  // Populate Admin & Staff Table
  const adminPanel = document.getElementById('admin-staff-panel');
  const tableBody = document.getElementById('all-users-table-body');

  // Allow Founders and Admins to manage roles
  if (currentUser.role !== 'founder' && currentUser.role !== 'admin') {
    if (adminPanel) adminPanel.style.display = 'none';
  } else if (tableBody) {
    const allUsers = window.pixelAuth.getAllUsers();
    tableBody.innerHTML = allUsers.map(user => `
      <tr style="border-bottom: 1px solid var(--border-light);">
        <td style="padding: 0.75rem; font-weight: 600;">${user.name}</td>
        <td style="padding: 0.75rem; color: var(--text-muted);">${user.email}</td>
        <td style="padding: 0.75rem;"><span class="badge badge-purple">${roleLabels[user.role] || user.role}</span></td>
        <td style="padding: 0.75rem; color: var(--text-muted);">${user.camp}</td>
        <td style="padding: 0.75rem;">
          <select onchange="changeRole('${user.id}', this.value)" style="padding: 0.35rem; background: var(--bg-body); color: var(--text-main); border: 1px solid var(--border-color); border-radius: 4px;">
            <option value="student" ${user.role === 'student' ? 'selected' : ''}>Student</option>
            <option value="instructor" ${user.role === 'instructor' ? 'selected' : ''}>UI/UX Instructor</option>
            <option value="media" ${user.role === 'media' ? 'selected' : ''}>Media Team</option>
            <option value="hr" ${user.role === 'hr' ? 'selected' : ''}>HR Team</option>
            <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Lead / Admin</option>
            <option value="founder" ${user.role === 'founder' ? 'selected' : ''}>Founder</option>
          </select>
        </td>
      </tr>
    `).join('');
  }

  window.changeRole = function(userId, newRole) {
    if (window.pixelAuth.updateUserRole(userId, newRole)) {
      alert('تم تحديث رتبة المستخدم بنجاح في النظام!');
      location.reload();
    }
  };
});
