/* ==========================================================================
   PIXEL PLATFORM - SUPABASE AUTH & LOCAL STATE PERSISTENCE MANAGER
   ========================================================================== */

// Default Supabase project configuration (Can be updated with user credentials)
const SUPABASE_URL = "https://pixel-app-placeholder.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummykey";

class AuthManager {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('pixel_user')) || null;
    this.initDefaultUsers();
  }

  initDefaultUsers() {
    let users = JSON.parse(localStorage.getItem('pixel_all_users'));
    if (!users || users.length === 0) {
      users = [
        {
          id: 'u-founder',
          name: 'عبد الرحمن عمارة (Founder)',
          email: 'founder@pixel.com',
          role: 'founder',
          camp: 'Pixel Camp - Round 1',
          progress: 100,
          score: 98,
          badges: ['Founder', 'Master UI/UX']
        },
        {
          id: 'u-instructor',
          name: 'د. ياسمين الخزامي (UI/UX Lead)',
          email: 'instructor@pixel.com',
          role: 'instructor',
          camp: 'Pixel Camp - Round 1',
          progress: 90,
          score: 94,
          badges: ['Instructor', 'UI/UX Expert']
        },
        {
          id: 'u-student1',
          name: 'سارة أحمد',
          email: 'sara@pixel.com',
          role: 'student',
          camp: 'Pixel Camp - Round 1',
          progress: 85,
          score: 92,
          badges: ['Visual Master']
        },
        {
          id: 'u-student2',
          name: 'عمر خالد',
          email: 'omar@pixel.com',
          role: 'student',
          camp: 'Pixel Camp - Round 1',
          progress: 75,
          score: 88,
          badges: ['Top Performer']
        },
        {
          id: 'u-student3',
          name: 'مريم علي',
          email: 'maryam@pixel.com',
          role: 'student',
          camp: 'Pixel Camp - Round 1',
          progress: 60,
          score: 84,
          badges: ['Quick Learner']
        }
      ];
      localStorage.setItem('pixel_all_users', JSON.stringify(users));
    }
  }

  register(name, email, password, role = 'student') {
    const users = JSON.parse(localStorage.getItem('pixel_all_users')) || [];
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'هذا البريد الإلكتروني مسجل بالفعل' };
    }

    const newUser = {
      id: 'u-' + Date.now(),
      name: name,
      email: email,
      role: role,
      camp: 'Pixel Camp - Round 1',
      progress: 0,
      score: 0,
      badges: []
    };

    users.push(newUser);
    localStorage.setItem('pixel_all_users', JSON.stringify(users));
    this.setCurrentUser(newUser);
    return { success: true, user: newUser };
  }

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('pixel_all_users')) || [];
    const user = users.find(u => u.email === email);
    if (user) {
      this.setCurrentUser(user);
      return { success: true, user: user };
    }
    return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
  }

  loginWithGoogle() {
    // Simulated Google OAuth Login
    const googleUser = {
      id: 'u-google-' + Date.now(),
      name: 'مستخدم جوجل الجديد',
      email: 'user.google@gmail.com',
      role: 'student',
      camp: 'Pixel Camp - Round 1',
      progress: 0,
      score: 0,
      badges: []
    };
    
    let users = JSON.parse(localStorage.getItem('pixel_all_users')) || [];
    const existing = users.find(u => u.email === googleUser.email);
    if (existing) {
      this.setCurrentUser(existing);
      return { success: true, user: existing };
    } else {
      users.push(googleUser);
      localStorage.setItem('pixel_all_users', JSON.stringify(users));
      this.setCurrentUser(googleUser);
      return { success: true, user: googleUser };
    }
  }

  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem('pixel_user', JSON.stringify(user));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('pixel_user');
    window.location.href = '../index.html';
  }

  updateUserRole(userId, newRole) {
    let users = JSON.parse(localStorage.getItem('pixel_all_users')) || [];
    const user = users.find(u => u.id === userId);
    if (user) {
      user.role = newRole;
      localStorage.setItem('pixel_all_users', JSON.stringify(users));
      if (this.currentUser && this.currentUser.id === userId) {
        this.setCurrentUser(user);
      }
      return true;
    }
    return false;
  }

  getAllUsers() {
    return JSON.parse(localStorage.getItem('pixel_all_users')) || [];
  }

  getLeaderboardTop3() {
    const users = this.getAllUsers().filter(u => u.role === 'student' || u.role === 'founder');
    return users.sort((a, b) => b.score - a.score).slice(0, 3);
  }
}

window.pixelAuth = new AuthManager();
