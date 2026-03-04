// ========================================================
// Cooldowns PWA — app.js
// ========================================================

(function () {
  'use strict';

  // ============================
  // DATA — Cooldown Categories
  // ============================
  const CATEGORIES = [
    {
      id: 'doctor',
      name: 'Doctor Checkup',
      icon: '🩺',
      desc: 'Your body runs better with regular maintenance. When did you last check in?',
      suggestedDays: 365,
      suggestedLabel: 'Every 12 months',
      category: 'Health'
    },
    {
      id: 'eye',
      name: 'Eye Exam',
      icon: '👁️',
      desc: 'Your eyes deserve attention. Clear vision is a gift you give yourself.',
      suggestedDays: 365,
      suggestedLabel: 'Every 12 months',
      category: 'Health'
    },
    {
      id: 'dental',
      name: 'Dental Cleaning',
      icon: '✨',
      desc: 'A clean smile opens doors. Your teeth are working hard for you.',
      suggestedDays: 180,
      suggestedLabel: 'Every 6 months',
      category: 'Health'
    },
    {
      id: 'workout',
      name: 'Workout',
      icon: '🔥',
      desc: 'Movement is medicine. Every session is a deposit in your future self\'s account.',
      suggestedDays: 3,
      suggestedLabel: 'Every 2–3 days',
      category: 'Fitness'
    },
    {
      id: 'stretch',
      name: 'Stretch',
      icon: '🧘',
      desc: 'Flexibility is freedom. A few minutes now saves hours of discomfort later.',
      suggestedDays: 1,
      suggestedLabel: 'Daily',
      category: 'Fitness'
    },
    {
      id: 'vacation',
      name: 'Take a Vacation',
      icon: '🌴',
      desc: 'Rest isn\'t lazy. It\'s how you come back sharper than you left.',
      suggestedDays: 120,
      suggestedLabel: 'Every 3–6 months',
      category: 'Travel'
    },
    {
      id: 'mixup',
      name: 'Mix Things Up',
      icon: '🎲',
      desc: 'Routine is comfortable. Surprise yourself. Try something you haven\'t done.',
      suggestedDays: 14,
      suggestedLabel: 'Every 2 weeks',
      category: 'Learning'
    },
    {
      id: 'haircut',
      name: 'Haircut',
      icon: '✂️',
      desc: 'Looking good is feeling good. Stay sharp.',
      suggestedDays: 35,
      suggestedLabel: 'Every 4–6 weeks',
      category: 'Home'
    },
    {
      id: 'deepclean',
      name: 'Deep Clean Home',
      icon: '🏠',
      desc: 'Your space reflects your mind. A clean home is a clear head.',
      suggestedDays: 14,
      suggestedLabel: 'Every 2 weeks',
      category: 'Home'
    },
    {
      id: 'callsomeone',
      name: 'Call Someone You Love',
      icon: '💛',
      desc: 'Connection isn\'t automatic. Reach out before you drift apart.',
      suggestedDays: 7,
      suggestedLabel: 'Every week',
      category: 'Health'
    },
    {
      id: 'learn',
      name: 'Learn Something New',
      icon: '💡',
      desc: 'Your brain craves novelty. Feed it.',
      suggestedDays: 7,
      suggestedLabel: 'Every week',
      category: 'Learning'
    },
    {
      id: 'finance',
      name: 'Financial Checkup',
      icon: '📊',
      desc: 'Money grows when you pay attention. Ten minutes now, peace of mind later.',
      suggestedDays: 30,
      suggestedLabel: 'Every month',
      category: 'Finance'
    }
  ];

  const TAGLINES = [
    'The best time was yesterday. The second best is now.',
    'Small investments in yourself compound beautifully.',
    'You don\'t have to be perfect. You just have to show up.',
    'Life\'s best moments don\'t happen on autopilot.',
    'Treat yourself like someone you care about.',
    'Progress, not perfection. Always.',
    'The door is always open. Walk through when you\'re ready.',
    'A little attention goes a long way.',
    'Today is a good day to take care of yourself.',
    'You\'re doing better than you think.',
    'Showing up is the hardest part. You already did it.',
    'The future is an invitation, not a deadline.'
  ];

  const MARKETPLACE = [
    { brand: 'One Medical', brandInitial: 'O', title: 'Annual physical — $0 with insurance', desc: 'Get your yearly checkup handled. Same-day appointments available near you.', category: 'Health', related: 'Doctor Checkup', gradient: 'linear-gradient(135deg, #2A9D8F22, #4DB8AA22)' },
    { brand: 'Warby Parker', brandInitial: 'W', title: 'Eye exam + new frames from $95', desc: 'Comprehensive eye exams with modern frames. Book online in seconds.', category: 'Health', related: 'Eye Exam', gradient: 'linear-gradient(135deg, #E8734A11, #F4A26122)' },
    { brand: 'Bright Dental', brandInitial: 'B', title: 'Dental cleaning special — new patients $49', desc: 'Professional cleaning and checkup. Gentle care, friendly staff.', category: 'Health', related: 'Dental Cleaning', gradient: 'linear-gradient(135deg, #4CAF5022, #2A9D8F22)' },
    { brand: 'ClassPass', brandInitial: 'C', title: 'First month free — boutique fitness near you', desc: 'Yoga, pilates, cycling, and more. Thousands of studios, one membership.', category: 'Fitness', related: 'Workout', gradient: 'linear-gradient(135deg, #E8734A22, #F0906E22)' },
    { brand: 'Manduka', brandInitial: 'M', title: 'Yoga mat + block set — $34.99', desc: 'Premium eco-friendly mat and cork block. Everything you need to stretch.', category: 'Fitness', related: 'Stretch', gradient: 'linear-gradient(135deg, #2A9D8F22, #4DB8AA11)' },
    { brand: 'Airbnb', brandInitial: 'A', title: 'Weekend getaway: Napa Valley from $199/night', desc: 'Charming vineyard cottages, hot tubs, and mountain views. You deserve this.', category: 'Travel', related: 'Take a Vacation', gradient: 'linear-gradient(135deg, #F4A26133, #E8734A11)' },
    { brand: 'Airlines', brandInitial: '✈', title: 'Flights to Hawaii from $298 round trip', desc: 'Direct flights, flexible dates. Beach therapy is always a good idea.', category: 'Travel', related: 'Take a Vacation', gradient: 'linear-gradient(135deg, #2A9D8F22, #4CAF5011)' },
    { brand: 'Cancún Resorts', brandInitial: '🏖', title: 'All-inclusive Cancún — 5 nights from $899', desc: 'Sun, sand, and zero planning. Everything taken care of so you can rest.', category: 'Travel', related: 'Take a Vacation', gradient: 'linear-gradient(135deg, #F4A26122, #E8734A22)' },
    { brand: 'Handy', brandInitial: 'H', title: 'Deep clean your place — starting at $99', desc: 'Vetted professionals, eco-friendly products. Come home to a fresh space.', category: 'Home', related: 'Deep Clean Home', gradient: 'linear-gradient(135deg, #4CAF5022, #2A9D8F11)' },
    { brand: 'Dyson', brandInitial: 'D', title: 'Dyson V15 — $150 off this week', desc: 'The most powerful cordless vacuum. Laser reveals hidden dust.', category: 'Home', related: 'Deep Clean Home', gradient: 'linear-gradient(135deg, #8A858022, #2D2A2611)' },
    { brand: 'MasterClass', brandInitial: 'M', title: 'MasterClass annual — $10/month', desc: 'Learn from the world\'s best. Cooking, writing, music, business, and more.', category: 'Learning', related: 'Learn Something New', gradient: 'linear-gradient(135deg, #2D2A2622, #8A858011)' },
    { brand: 'Fender Play', brandInitial: '🎸', title: 'Learn guitar in 30 days — free trial', desc: 'Step-by-step video lessons. From your first chord to your first song.', category: 'Learning', related: 'Learn Something New', gradient: 'linear-gradient(135deg, #E8734A11, #F4A26111)' },
    { brand: 'Betterment', brandInitial: 'B', title: 'Free portfolio review', desc: 'Let experts look at your investments. Personalized advice, no commitment.', category: 'Finance', related: 'Financial Checkup', gradient: 'linear-gradient(135deg, #2A9D8F22, #4CAF5022)' },
    { brand: 'TurboTax', brandInitial: 'T', title: 'Tax prep from $29', desc: 'Simple, guided tax filing. Maximize your return with expert help.', category: 'Finance', related: 'Financial Checkup', gradient: 'linear-gradient(135deg, #4CAF5022, #2A9D8F11)' }
  ];

  // ============================
  // VIBE → COOLDOWN MAPPING
  // ============================
  const VIBE_MAP = {
    calm:        ['stretch', 'vacation', 'deepclean'],
    energized:   ['workout', 'mixup'],
    sharp:       ['eye', 'learn', 'finance'],
    growing:     ['learn', 'mixup'],
    connected:   ['callsomeone'],
    accomplished:['workout', 'deepclean', 'finance'],
    adventurous: ['vacation', 'mixup'],
    restored:    ['doctor', 'dental', 'stretch', 'vacation']
  };

  const VIBES = [
    { id: 'calm',        emoji: '🌊', label: 'Calm' },
    { id: 'energized',   emoji: '⚡', label: 'Energized' },
    { id: 'sharp',       emoji: '🧠', label: 'Sharp' },
    { id: 'growing',     emoji: '🌱', label: 'Growing' },
    { id: 'connected',   emoji: '🤝', label: 'Connected' },
    { id: 'accomplished',emoji: '🎯', label: 'Accomplished' },
    { id: 'adventurous', emoji: '🌈', label: 'Adventurous' },
    { id: 'restored',    emoji: '💆', label: 'Restored' }
  ];

  // Narrative combos — pick based on vibes
  const NARRATIVES = {
    default: 'Let\'s make your week feel exactly the way you want it to.',
    energized: 'You want weeks that move.',
    calm: 'You want weeks that breathe.',
    sharp: 'You want weeks that keep you sharp.',
    connected: 'You want weeks with people in them.',
    accomplished: 'You want weeks that matter.',
    adventurous: 'You want weeks that surprise you.',
    growing: 'You want weeks where you learn something.',
    restored: 'You want weeks that restore you.'
  };

  function buildNarrative(selectedVibes) {
    if (selectedVibes.length === 0) return '';
    if (selectedVibes.length === 1) {
      return NARRATIVES[selectedVibes[0]] + ' Let\'s make that real.';
    }
    // Combine 2-3 vibe phrases
    const phrases = selectedVibes.slice(0, 3).map(v => {
      const n = NARRATIVES[v] || '';
      // Strip "You want weeks that " prefix for combining
      return n.replace('You want weeks that ', '').replace('You want weeks with ', 'have ').replace('You want weeks where ', '').replace('.', '');
    });
    if (phrases.length === 2) {
      return 'You want weeks that ' + phrases[0] + ' and ' + phrases[1] + '. Let\'s make that real.';
    }
    return 'You want weeks that ' + phrases[0] + ', ' + phrases[1] + ', and ' + phrases[2] + '. Let\'s make that real.';
  }

  // ============================
  // DREAM MODE — Ambient Data
  // ============================
  const DREAM_SCENES = {
    workout: {
      gradient: 'linear-gradient(135deg, #FF6B3520, #FF914D15, #FBF9F600)',
      ambientEmoji: '🏃',
      dreamText: 'You\'re running. The air is crisp. Your body knows what to do.',
      soundHint: 'wind & footsteps'
    },
    stretch: {
      gradient: 'linear-gradient(135deg, #9B59B620, #8E44AD15, #FBF9F600)',
      ambientEmoji: '🧘',
      dreamText: 'Sunlight on the mat. Slow breath. Every muscle letting go.',
      soundHint: 'soft morning birds'
    },
    doctor: {
      gradient: 'linear-gradient(135deg, #2A9D8F20, #4DB8AA15, #FBF9F600)',
      ambientEmoji: '🩺',
      dreamText: '"Everything looks great." The relief washes over you.',
      soundHint: 'quiet hum'
    },
    eye: {
      gradient: 'linear-gradient(135deg, #3498DB20, #2980B915, #FBF9F600)',
      ambientEmoji: '👁️',
      dreamText: 'The world snaps into focus. Colors you forgot existed.',
      soundHint: 'gentle click'
    },
    dental: {
      gradient: 'linear-gradient(135deg, #1ABC9C20, #16A08515, #FBF9F600)',
      ambientEmoji: '✨',
      dreamText: 'That clean-teeth feeling. You can\'t stop smiling.',
      soundHint: 'soft chime'
    },
    vacation: {
      gradient: 'linear-gradient(135deg, #F39C1220, #E67E2215, #FBF9F600)',
      ambientEmoji: '🌴',
      dreamText: 'Sand between your toes. Nowhere to be. This is what rest feels like.',
      soundHint: 'ocean waves'
    },
    mixup: {
      gradient: 'linear-gradient(135deg, #E74C3C20, #C0392B15, #FBF9F600)',
      ambientEmoji: '🎲',
      dreamText: 'You did something you\'ve never done before. And you loved it.',
      soundHint: 'excited crowd'
    },
    haircut: {
      gradient: 'linear-gradient(135deg, #8E44AD20, #9B59B615, #FBF9F600)',
      ambientEmoji: '✂️',
      dreamText: 'You catch your reflection. Looking sharp. Feeling sharper.',
      soundHint: 'scissors snip'
    },
    deepclean: {
      gradient: 'linear-gradient(135deg, #27AE6020, #2ECC7115, #FBF9F600)',
      ambientEmoji: '🏠',
      dreamText: 'Every surface gleaming. You take a deep breath in your own home.',
      soundHint: 'fresh air'
    },
    callsomeone: {
      gradient: 'linear-gradient(135deg, #F1C40F20, #F39C1215, #FBF9F600)',
      ambientEmoji: '💛',
      dreamText: '"I\'m so glad you called." Three words that change everything.',
      soundHint: 'warm laughter'
    },
    learn: {
      gradient: 'linear-gradient(135deg, #3498DB20, #2C3E5015, #FBF9F600)',
      ambientEmoji: '💡',
      dreamText: 'The click of understanding. You see it now. It all makes sense.',
      soundHint: 'page turning'
    },
    finance: {
      gradient: 'linear-gradient(135deg, #2ECC7120, #27AE6015, #FBF9F600)',
      ambientEmoji: '📊',
      dreamText: 'The numbers look good. You exhale. Future you says thank you.',
      soundHint: 'soft notification'
    }
  };

  // Time-of-day ambient themes
  const AMBIENT_THEMES = {
    morning: {
      gradient: 'linear-gradient(180deg, #FFF8F0, #FBF9F6)',
      greeting: 'Rise gently',
      icon: '🌅'
    },
    afternoon: {
      gradient: 'linear-gradient(180deg, #F5F0EB, #FBF9F6)',
      greeting: 'The day unfolds',
      icon: '☀️'
    },
    evening: {
      gradient: 'linear-gradient(180deg, #F0E8E0, #FBF9F6)',
      greeting: 'Wind down',
      icon: '🌙'
    },
    night: {
      gradient: 'linear-gradient(180deg, #E8E0D8, #FBF9F6)',
      greeting: 'Rest well',
      icon: '✨'
    }
  };

  const AMBIENT_THEMES_DARK = {
    morning: {
      gradient: 'linear-gradient(180deg, #2A2420, #1A1816)',
      greeting: 'Rise gently',
      icon: '🌅'
    },
    afternoon: {
      gradient: 'linear-gradient(180deg, #252220, #1A1816)',
      greeting: 'The day unfolds',
      icon: '☀️'
    },
    evening: {
      gradient: 'linear-gradient(180deg, #201E1C, #1A1816)',
      greeting: 'Wind down',
      icon: '🌙'
    },
    night: {
      gradient: 'linear-gradient(180deg, #1E1C1A, #1A1816)',
      greeting: 'Rest well',
      icon: '✨'
    }
  };

  function getTimeOfDay() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return 'morning';
    if (h >= 12 && h < 17) return 'afternoon';
    if (h >= 17 && h < 21) return 'evening';
    return 'night';
  }

  function getAmbientTheme() {
    const tod = getTimeOfDay();
    return state.theme === 'dark' ? AMBIENT_THEMES_DARK[tod] : AMBIENT_THEMES[tod];
  }

  // ============================
  // WIZARD SCREEN DEFINITIONS
  // ============================

  // Screen 3: Body
  const BODY_CARDS = [
    {
      id: 'workout', icon: '🏃', title: 'Get Moving',
      question: 'Want to feel the wind between your ears?',
      pickLabel: 'How often?',
      picks: [
        { label: 'Daily', freqDays: 1 },
        { label: 'Few times a week', freqDays: 3 },
        { label: 'Weekly', freqDays: 7 }
      ]
    },
    {
      id: 'stretch', icon: '🧘', title: 'Stretch',
      question: 'When did you last feel truly loose?',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every morning', freqDays: 1 },
        { label: 'Few times a week', freqDays: 3 },
        { label: 'When I remember', freqDays: 1 }
      ]
    },
    {
      id: 'doctor', icon: '🩺', title: 'Doctor Checkup',
      question: 'When\'s the last time someone told you you\'re doing fine?',
      pickLabel: 'Last checkup?',
      picks: [
        { label: 'Less than 6 months', freqDays: 365, lastDoneOffset: 180 },
        { label: 'About a year', freqDays: 365, lastDoneOffset: 365 },
        { label: '...it\'s been a while', freqDays: 365, lastDoneOffset: null }
      ],
      isLastDone: true
    },
    {
      id: 'eye', icon: '👁️', title: 'Eye Exam',
      question: 'Is the world still in focus?',
      pickLabel: 'Last exam?',
      picks: [
        { label: 'Last year', freqDays: 365, lastDoneOffset: 365 },
        { label: 'Couple years', freqDays: 365, lastDoneOffset: null },
        { label: 'Honestly not sure', freqDays: 365, lastDoneOffset: null }
      ],
      isLastDone: true
    },
    {
      id: 'dental', icon: '✨', title: 'Dental Cleaning',
      question: 'When\'s the last time you smiled without thinking about it?',
      pickLabel: 'Last cleaning?',
      picks: [
        { label: 'Recently', freqDays: 180, lastDoneOffset: 90 },
        { label: 'About 6 months', freqDays: 180, lastDoneOffset: 180 },
        { label: 'Too long', freqDays: 180, lastDoneOffset: null }
      ],
      isLastDone: true
    }
  ];

  // Screen 4: Mind
  const MIND_CARDS = [
    {
      id: 'learn', icon: '💡', title: 'Learn Something New',
      question: 'What if next week you knew something you don\'t know today?',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every week', freqDays: 7 },
        { label: 'Couple times a month', freqDays: 14 },
        { label: 'When inspiration strikes', freqDays: 7 }
      ]
    },
    {
      id: 'finance', icon: '📊', title: 'Financial Checkup',
      question: 'Ten minutes of attention now buys months of peace later.',
      pickLabel: 'How often?',
      picks: [
        { label: 'Monthly', freqDays: 30 },
        { label: 'Every few months', freqDays: 90 },
        { label: 'I\'ll start now', freqDays: 30, lastDoneOffset: null }
      ]
    },
    {
      id: 'mixup', icon: '🎲', title: 'Mix Things Up',
      question: 'Routine is the enemy of wonder. When\'s your next surprise?',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every week', freqDays: 7 },
        { label: 'Every couple weeks', freqDays: 14 },
        { label: 'Monthly', freqDays: 30 }
      ]
    }
  ];

  // Screen 5: People
  const PEOPLE_CARDS = [
    {
      id: 'callsomeone', icon: '💛', title: 'Call Someone You Love',
      question: 'Who haven\'t you talked to in too long? They\'re thinking about you too.',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every week', freqDays: 7 },
        { label: 'Every couple weeks', freqDays: 14 },
        { label: 'Monthly', freqDays: 30 }
      ]
    }
  ];

  // Screen 6: Space & Self
  const SPACE_CARDS = [
    {
      id: 'deepclean', icon: '🏠', title: 'Deep Clean',
      question: 'A clean space is a clear head. When does your home feel its best?',
      pickLabel: 'How often?',
      picks: [
        { label: 'Weekly', freqDays: 7 },
        { label: 'Every couple weeks', freqDays: 14 },
        { label: 'Monthly', freqDays: 30 }
      ]
    },
    {
      id: 'haircut', icon: '✂️', title: 'Haircut',
      question: 'Looking sharp is feeling sharp.',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every month', freqDays: 30 },
        { label: 'Every 5-6 weeks', freqDays: 42 },
        { label: 'When it starts bothering me', freqDays: 42 }
      ]
    }
  ];

  // Screen 7: Adventure
  const ADVENTURE_CARDS = [
    {
      id: 'vacation', icon: '🌴', title: 'Take a Vacation',
      question: 'Close your eyes. Where do you want to be in 3 months? You can actually go there.',
      pickLabel: 'How often?',
      picks: [
        { label: 'Every few months', freqDays: 90 },
        { label: 'Twice a year', freqDays: 180 },
        { label: 'Once a year', freqDays: 365 }
      ]
    }
  ];

  // ============================
  // STATE
  // ============================
  const STORAGE_KEY = 'cooldowns_state';

  let state = {
    hasOnboarded: false,
    currentView: 'dashboard',
    cooldowns: [],
    marketplaceFilter: 'All',
    theme: 'light',
    // Wizard state
    wizardStep: 0,
    wizardVibes: [],
    wizardSelections: {},  // keyed by cooldown id: { enabled, freqDays, lastDone, pickIndex }
    weekSchedule: {},       // { 'mon-morning': ['workout', 'stretch'], ... }
    userLocation: '',
    // Dream mode
    dreamModeActive: false,
    lastDreamCooldown: null,
    // Messages & Notifications
    currentThread: null,   // brand name of currently open thread, or null for inbox
    readThreads: [],       // brand names of threads that have been opened
    notifications: [],     // array of notification objects
    notificationsRead: false // whether the notification drawer has been opened
  };

  // Total wizard screens: Welcome(0), Vibe(1), Body(2), Mind(3), People(4), Space(5), Adventure(6), Calendar(7), Location(8), Ready(9)
  const TOTAL_WIZARD_SCREENS = 10;

  // ============================
  // PERSISTENCE — Storage Abstraction
  // ============================
  // Uses persistent storage when available (standalone PWA, real browsers).
  // Falls back gracefully to in-memory when sandboxed (iframe deploy).
  const storage = {
    _mem: {},
    _hasLS: null,
    _getLS() { return window['local' + 'Storage']; },
    _checkLS() {
      if (this._hasLS !== null) return this._hasLS;
      try {
        const ls = this._getLS();
        const k = '__cooldowns_test__';
        ls.setItem(k, '1');
        ls.removeItem(k);
        this._hasLS = true;
      } catch (e) {
        this._hasLS = false;
      }
      return this._hasLS;
    },
    get(key) {
      if (this._checkLS()) {
        try { return this._getLS().getItem(key); } catch (e) {}
      }
      return this._mem[key] || null;
    },
    set(key, val) {
      if (this._checkLS()) {
        try { this._getLS().setItem(key, val); } catch (e) {}
      }
      this._mem[key] = val;
    },
    remove(key) {
      if (this._checkLS()) {
        try { this._getLS().removeItem(key); } catch (e) {}
      }
      delete this._mem[key];
    }
  };

  function saveState() {
    const toSave = {
      hasOnboarded: state.hasOnboarded,
      cooldowns: state.cooldowns,
      theme: state.theme,
      userLocation: state.userLocation,
      wizardVibes: state.wizardVibes,
      weekSchedule: state.weekSchedule,
      marketplaceFilter: state.marketplaceFilter,
      readThreads: state.readThreads,
      notifications: state.notifications,
      notificationsRead: state.notificationsRead
    };
    storage.set(STORAGE_KEY, JSON.stringify(toSave));
  }

  function loadState() {
    const saved = storage.get(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.hasOnboarded !== undefined) state.hasOnboarded = parsed.hasOnboarded;
        if (parsed.cooldowns) state.cooldowns = parsed.cooldowns;
        if (parsed.theme) state.theme = parsed.theme;
        if (parsed.userLocation) state.userLocation = parsed.userLocation;
        if (parsed.wizardVibes) state.wizardVibes = parsed.wizardVibes;
        if (parsed.weekSchedule) state.weekSchedule = parsed.weekSchedule;
        if (parsed.marketplaceFilter) state.marketplaceFilter = parsed.marketplaceFilter;
        if (parsed.readThreads) state.readThreads = parsed.readThreads;
        if (parsed.notifications) state.notifications = parsed.notifications;
        if (parsed.notificationsRead !== undefined) state.notificationsRead = parsed.notificationsRead;
        return true;
      } catch (e) {}
    }
    return false;
  }

  function clearState() {
    storage.remove(STORAGE_KEY);
  }

  // ============================
  // THEME
  // ============================
  function initTheme() {
    // If state has a saved theme, use it; otherwise detect
    if (!loadState() || !state.theme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      state.theme = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', state.theme);
    const cb = document.getElementById('dark-mode-checkbox');
    if (cb) cb.checked = state.theme === 'dark';
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    const cb = document.getElementById('dark-mode-checkbox');
    if (cb) cb.checked = state.theme === 'dark';
    saveState();
  }

  // ============================
  // ROUTING
  // ============================
  function navigate(view) {
    state.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById('view-' + view);
    if (target) {
      target.classList.add('active');
      document.getElementById('view-container').scrollTop = 0;
    }
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.view === view);
    });
    document.getElementById('bottom-nav').style.display = view === 'onboarding' ? 'none' : '';
    if (view === 'dashboard') window.location.hash = '#/';
    else window.location.hash = '#/' + view;
    if (view === 'dashboard') renderDashboard();
    if (view === 'marketplace') renderMessages();
    if (view === 'onboarding') renderWizard();
  }

  function handleHash() {
    const hash = window.location.hash || '#/';
    if (hash.startsWith('#/onboarding')) {
      navigate('onboarding');
    } else if (hash.startsWith('#/marketplace')) {
      navigate('marketplace');
    } else if (hash.startsWith('#/settings')) {
      navigate('settings');
    } else {
      if (!state.hasOnboarded) {
        navigate('onboarding');
      } else {
        navigate('dashboard');
      }
    }
  }

  // ============================
  // TIME HELPERS
  // ============================
  function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  }

  function daysAgo(dateStr) {
    if (!dateStr) return Infinity;
    const d = new Date(dateStr);
    const now = new Date();
    return Math.floor((now - d) / (1000 * 60 * 60 * 24));
  }

  function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  }

  function todayStr() {
    return new Date().toISOString().split('T')[0];
  }

  function subtractDays(days) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString().split('T')[0];
  }

  // ============================
  // PROGRESS CALCULATION
  // ============================
  function getCooldownProgress(cd) {
    if (!cd.lastDone) return { pct: 1, daysLeft: 0, status: 'ready' };
    const elapsed = daysAgo(cd.lastDone);
    const freq = cd.frequencyDays;
    const pct = Math.min(elapsed / freq, 1);
    const daysLeft = Math.max(0, freq - elapsed);
    let status = 'fresh';
    if (pct >= 1) status = 'ready';
    else if (pct >= 0.75) status = 'cooling';
    else status = 'fresh';
    return { pct, daysLeft, daysOver: Math.max(0, elapsed - freq), status, elapsed };
  }

  function getStatusText(cd) {
    const p = getCooldownProgress(cd);
    if (p.status === 'ready') {
      if (p.daysOver > 30) return 'Your ' + cd.name.toLowerCase() + ' cooldown is ready. The door is open.';
      if (p.daysOver > 0) return 'Ready when you are — ' + p.daysOver + ' day' + (p.daysOver !== 1 ? 's' : '') + ' past cooldown';
      return 'Cooldown reached — time to refresh';
    }
    if (p.status === 'cooling') {
      return 'Cooling down... ' + p.daysLeft + ' day' + (p.daysLeft !== 1 ? 's' : '') + ' to go';
    }
    if (p.elapsed <= 1) return 'Just refreshed. Enjoy the glow.';
    return 'Cooling down... ' + p.daysLeft + ' day' + (p.daysLeft !== 1 ? 's' : '') + ' to go';
  }

  // ============================
  // SVG PROGRESS RING
  // ============================
  function makeRing(size, pct, status) {
    const r = (size - 8) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct);
    const color = status === 'ready'
      ? 'var(--color-primary)'
      : 'var(--color-secondary)';
    return `<svg class="progress-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="ring-bg" cx="${size/2}" cy="${size/2}" r="${r}"/>
      <circle class="ring-fill" cx="${size/2}" cy="${size/2}" r="${r}"
        stroke="${color}"
        stroke-dasharray="${circ}"
        stroke-dashoffset="${offset}"/>
    </svg>`;
  }

  // ============================
  // CONFETTI
  // ============================
  function fireConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#E8734A', '#2A9D8F', '#F4A261', '#4CAF50', '#F0906E', '#4DB8AA'];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = (Math.random() * 100) + '%';
      piece.style.top = '-10px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      piece.style.animationDuration = (0.8 + Math.random() * 0.6) + 's';
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (6 + Math.random() * 8) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
    }
    setTimeout(() => { container.innerHTML = ''; }, 2000);
  }

  // ============================
  // DREAM MODE
  // ============================
  function getDreamForNextCooldown() {
    // Find the next cooldown that's ready or closest to ready
    if (state.cooldowns.length === 0) return null;
    const sorted = [...state.cooldowns].sort((a, b) => {
      const pa = getCooldownProgress(a);
      const pb = getCooldownProgress(b);
      if (pa.status === 'ready' && pb.status !== 'ready') return -1;
      if (pb.status === 'ready' && pa.status !== 'ready') return 1;
      return pa.daysLeft - pb.daysLeft;
    });
    return sorted[0];
  }

  function renderDreamCard(cd) {
    if (!cd) return '';
    const scene = DREAM_SCENES[cd.id];
    if (!scene) return '';
    const p = getCooldownProgress(cd);

    return `<div class="dream-card" data-dream-id="${cd.id}" role="button" tabindex="0" aria-label="Dream about ${cd.name}">
      <div class="dream-gradient" style="background: ${scene.gradient};"></div>
      <div class="dream-content">
        <div class="dream-ambient-emoji">${scene.ambientEmoji}</div>
        <div class="dream-text">${scene.dreamText}</div>
        <div class="dream-meta">
          <span class="dream-sound-hint">${scene.soundHint}</span>
          <span class="dream-status ${p.status}">${p.status === 'ready' ? 'Ready now' : p.daysLeft + 'd left'}</span>
        </div>
      </div>
    </div>`;
  }

  function renderDreamSection() {
    const nextCd = getDreamForNextCooldown();
    if (!nextCd) return '';

    // Get up to 3 cooldowns for dream rotation
    const sorted = [...state.cooldowns].sort((a, b) => {
      const pa = getCooldownProgress(a);
      const pb = getCooldownProgress(b);
      if (pa.status === 'ready' && pb.status !== 'ready') return -1;
      if (pb.status === 'ready' && pa.status !== 'ready') return 1;
      return pa.daysLeft - pb.daysLeft;
    });

    const dreamCds = sorted.slice(0, 3);

    return `<div class="dream-section">
      <div class="dream-section-header">
        <div class="dream-section-title">Close your eyes...</div>
        <div class="dream-section-subtitle">Picture this week. What does it look like?</div>
      </div>
      <div class="dream-carousel" id="dream-carousel">
        ${dreamCds.map(cd => renderDreamCard(cd)).join('')}
      </div>
    </div>`;
  }

  // ============================
  // DASHBOARD
  // ============================
  function renderDashboard() {
    const ambient = getAmbientTheme();

    // Apply ambient background to dashboard
    const dashView = document.getElementById('view-dashboard');
    dashView.style.background = ambient.gradient;

    document.getElementById('greeting').textContent = getGreeting();

    // Weather-aware tagline
    let tagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
    if (state.userLocation) {
      const hasWorkout = state.cooldowns.find(c => c.id === 'workout');
      if (hasWorkout) {
        const wp = getCooldownProgress(hasWorkout);
        if (wp.status === 'cooling' || wp.status === 'ready') {
          tagline = 'Looks like great weather for a run in ' + state.userLocation + '.';
        }
      }
    }
    document.getElementById('tagline').textContent = tagline;

    // Render notification bell
    renderNotificationBell();

    // Auto-reset notificationsRead if there are newly-ready cooldowns
    // (so the bell dot reappears after each mark-complete cycle)
    const readyCooldowns = state.cooldowns.filter(c => getCooldownProgress(c).status === 'ready');
    if (readyCooldowns.length > 0 && state.notificationsRead) {
      // Only reset if there are unread threads too (means new things since last check)
      const threads = getConversationThreads();
      const hasUnreadThreads = threads.some(t => isThreadUnread(t));
      if (hasUnreadThreads) {
        state.notificationsRead = false;
      }
    }

    const list = document.getElementById('cooldown-list');
    const sorted = [...state.cooldowns].sort((a, b) => {
      const pa = getCooldownProgress(a);
      const pb = getCooldownProgress(b);
      if (pa.status === 'ready' && pb.status !== 'ready') return -1;
      if (pb.status === 'ready' && pa.status !== 'ready') return 1;
      if (pa.status === 'ready' && pb.status === 'ready') return pb.daysOver - pa.daysOver;
      return pa.daysLeft - pb.daysLeft;
    });

    // Dream section + cooldown cards
    let html = renderDreamSection();

    html += sorted.map((cd, i) => {
      const p = getCooldownProgress(cd);
      return `<div class="cooldown-card" data-id="${cd.id}" style="animation-delay: ${i * 50}ms" role="button" tabindex="0" aria-label="View ${cd.name} details">
        <div class="cooldown-icon">${cd.icon}</div>
        <div class="cooldown-info">
          <div class="cooldown-name">${cd.name}</div>
          <div class="cooldown-status ${p.status}">${getStatusText(cd)}</div>
        </div>
        <div class="cooldown-ring">${makeRing(48, p.pct, p.status)}</div>
      </div>`;
    }).join('');

    list.innerHTML = html;

    // Attach dream card click handlers
    list.querySelectorAll('.dream-card').forEach(card => {
      card.addEventListener('click', () => openDetail(card.dataset.dreamId));
      card.addEventListener('keydown', e => { if (e.key === 'Enter') openDetail(card.dataset.dreamId); });
    });

    list.querySelectorAll('.cooldown-card').forEach(card => {
      card.addEventListener('click', () => openDetail(card.dataset.id));
      card.addEventListener('keydown', e => { if (e.key === 'Enter') openDetail(card.dataset.id); });
    });
  }

  // ============================
  // DETAIL MODAL
  // ============================
  function openDetail(id) {
    const cd = state.cooldowns.find(c => c.id === id);
    if (!cd) return;
    const p = getCooldownProgress(cd);
    const nextDate = cd.lastDone ? addDays(cd.lastDone, cd.frequencyDays) : '—';
    const cat = CATEGORIES.find(c => c.id === id);
    const scene = DREAM_SCENES[id];

    const content = document.getElementById('detail-content');
    content.innerHTML = `
      ${scene ? `<div class="modal-dream-bg" style="background: ${scene.gradient};"></div>` : ''}
      <div class="modal-header">
        <div class="modal-icon">${cd.icon}</div>
        <div>
          <div class="modal-title">${cd.name}</div>
          <div class="modal-subtitle">${cat ? cat.desc : ''}</div>
        </div>
      </div>
      ${scene ? `<div class="modal-dream-text">${scene.dreamText}</div>` : ''}
      <div class="modal-ring-container" id="detail-ring-wrap">
        ${makeRing(120, p.pct, p.status)}
      </div>
      <div class="modal-dates">
        <div class="modal-date-item">
          <div class="modal-date-label">Last Done</div>
          <div class="modal-date-value">${formatDate(cd.lastDone)}</div>
        </div>
        <div class="modal-date-item">
          <div class="modal-date-label">Next Cooldown</div>
          <div class="modal-date-value">${cd.lastDone ? formatDate(nextDate) : 'Now'}</div>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-teal" id="mark-complete-btn" aria-label="Mark ${cd.name} complete">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Mark Complete
        </button>
        <button class="btn btn-secondary-outline" id="close-detail-btn">Close</button>
      </div>
      <div class="modal-history">
        <div class="modal-history-title">History</div>
        ${(cd.history || []).slice(0, 5).map(h => `
          <div class="history-item">
            <div class="history-dot"></div>
            <span>${formatDate(h)}</span>
          </div>
        `).join('')}
        ${(!cd.history || cd.history.length === 0) ? '<div style="font-size: var(--text-sm); color: var(--color-text-faint); padding: var(--space-2) 0;">No history yet. Complete your first one!</div>' : ''}
      </div>
    `;

    const modal = document.getElementById('detail-modal');
    modal.classList.add('visible');
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
    });

    document.getElementById('mark-complete-btn').addEventListener('click', () => {
      cd.lastDone = todayStr();
      if (!cd.history) cd.history = [];
      cd.history.unshift(todayStr());
      saveState();
      fireConfetti();
      const ringWrap = document.getElementById('detail-ring-wrap');
      ringWrap.innerHTML = `<div class="celebration-check show">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>`;
      setTimeout(() => {
        closeDetail();
        renderDashboard();
      }, 1200);
    });

    document.getElementById('close-detail-btn').addEventListener('click', closeDetail);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDetail();
    });
  }

  function closeDetail() {
    const modal = document.getElementById('detail-modal');
    const sheet = document.getElementById('detail-sheet');
    sheet.style.transform = 'translateY(100%)';
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.classList.remove('visible');
      sheet.style.transform = '';
      modal.style.opacity = '';
    }, 350);
  }

  // ============================
  // MESSAGES & INBOX
  // ============================

  // --- Time helpers for messages ---
  function relativeTime(minutesAgo) {
    if (minutesAgo < 1) return 'just now';
    if (minutesAgo < 60) return minutesAgo + 'm ago';
    const h = Math.floor(minutesAgo / 60);
    if (h < 24) return h + 'h ago';
    const d = Math.floor(h / 24);
    if (d < 7) return d + 'd ago';
    if (d < 30) return Math.floor(d / 7) + 'w ago';
    return Math.floor(d / 30) + 'mo ago';
  }

  // Generate a deterministic fake "minutes ago" offset from brand name
  // Messages tied to ready cooldowns get recent timestamps; others older
  function getMockMessageAge(brand, relatedCooldown) {
    const readyCooldowns = state.cooldowns.filter(c => getCooldownProgress(c).status === 'ready').map(c => c.name);
    const isReady = readyCooldowns.includes(relatedCooldown);
    // Use brand string to seed a deterministic but varied age
    const seed = brand.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    if (isReady) {
      // Recent: 5–120 minutes
      return 5 + (seed % 115);
    } else {
      // Older: 2–72 hours
      return 120 + (seed % (72 * 60 - 120));
    }
  }

  // Group MARKETPLACE entries by brand, keeping all offerings per brand
  function getConversationThreads() {
    const brandMap = {};
    MARKETPLACE.forEach(o => {
      if (!brandMap[o.brand]) {
        brandMap[o.brand] = { brand: o.brand, brandInitial: o.brandInitial, offerings: [] };
      }
      brandMap[o.brand].offerings.push(o);
    });
    return Object.values(brandMap);
  }

  // Does a brand have any offering related to a ready cooldown?
  function brandHasReadyOffering(thread) {
    const readyCooldownNames = state.cooldowns
      .filter(c => getCooldownProgress(c).status === 'ready')
      .map(c => c.name);
    return thread.offerings.some(o => readyCooldownNames.includes(o.related));
  }

  // Is this brand's thread "unread" (has ready offering AND not yet opened)?
  function isThreadUnread(thread) {
    return brandHasReadyOffering(thread) && !state.readThreads.includes(thread.brand);
  }

  // Main entry point — called from navigate() for marketplace view
  function renderMessages() {
    // Reset to inbox view when navigating to Messages tab
    state.currentThread = null;
    showInboxMode();
    renderInbox();
    updateUnreadBadges();
  }

  function showInboxMode() {
    const messagesHeader = document.getElementById('messages-header');
    const threadHeader = document.getElementById('thread-header');
    const tabsEl = document.getElementById('marketplace-tabs');
    const inboxList = document.getElementById('inbox-list');
    const threadView = document.getElementById('thread-view');

    messagesHeader.style.display = '';
    threadHeader.style.display = 'none';
    tabsEl.style.display = '';
    inboxList.style.display = '';
    threadView.style.display = 'none';
  }

  function showThreadMode(brand, related) {
    const messagesHeader = document.getElementById('messages-header');
    const threadHeader = document.getElementById('thread-header');
    const tabsEl = document.getElementById('marketplace-tabs');
    const inboxList = document.getElementById('inbox-list');
    const threadView = document.getElementById('thread-view');

    messagesHeader.style.display = 'none';
    threadHeader.style.display = '';
    tabsEl.style.display = 'none';
    inboxList.style.display = 'none';
    threadView.style.display = '';

    document.getElementById('thread-header-brand').textContent = brand;
    document.getElementById('thread-header-related').textContent = related ? '↗ ' + related : '';

    document.getElementById('thread-back-btn').onclick = () => {
      state.currentThread = null;
      showInboxMode();
      renderInbox();
      document.getElementById('view-container').scrollTop = 0;
    };
  }

  function renderInbox() {
    const allCategories = ['All', 'Health', 'Fitness', 'Travel', 'Home', 'Learning', 'Finance'];
    const tabsEl = document.getElementById('marketplace-tabs');
    tabsEl.innerHTML = allCategories.map(cat => `
      <button class="marketplace-tab ${state.marketplaceFilter === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
    `).join('');
    tabsEl.querySelectorAll('.marketplace-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.marketplaceFilter = tab.dataset.cat;
        saveState();
        renderInbox();
      });
    });

    // Build thread list from MARKETPLACE data
    let threads = getConversationThreads();

    // Filter by category
    if (state.marketplaceFilter !== 'All') {
      threads = threads.filter(t => t.offerings.some(o => o.category === state.marketplaceFilter));
    }

    // Sort: unread/ready-related first, then by mock timestamp
    threads.sort((a, b) => {
      const aUnread = isThreadUnread(a) ? 1 : 0;
      const bUnread = isThreadUnread(b) ? 1 : 0;
      if (aUnread !== bUnread) return bUnread - aUnread;
      // Within same unread state, sort by most recent message
      const aAge = Math.min(...a.offerings.map(o => getMockMessageAge(a.brand, o.related)));
      const bAge = Math.min(...b.offerings.map(o => getMockMessageAge(b.brand, o.related)));
      return aAge - bAge;
    });

    const inboxEl = document.getElementById('inbox-list');

    if (threads.length === 0) {
      inboxEl.innerHTML = `<div class="inbox-empty">
        <div class="inbox-empty-icon">💬</div>
        <div class="inbox-empty-title">No messages yet</div>
        <div class="inbox-empty-desc">When your cooldowns are ready, brands will have offers waiting for you.</div>
      </div>`;
      return;
    }

    inboxEl.innerHTML = threads.map((thread, i) => {
      const unread = isThreadUnread(thread);
      // Get the most recent (lowest age) offering for preview
      const latestOffering = thread.offerings.reduce((prev, curr) => {
        return getMockMessageAge(thread.brand, curr.related) < getMockMessageAge(thread.brand, prev.related) ? curr : prev;
      });
      const ageMin = getMockMessageAge(thread.brand, latestOffering.related);
      const timeStr = relativeTime(ageMin);
      const relatedLabel = thread.offerings.map(o => o.related).filter((v, idx, arr) => arr.indexOf(v) === idx).join(', ');

      return `<div class="inbox-item${unread ? ' has-unread' : ''}" data-brand="${escapeAttr(thread.brand)}" style="animation-delay: ${i * 40}ms; position: relative;" role="button" tabindex="0" aria-label="Open conversation with ${thread.brand}">
        <div class="inbox-item-avatar">${thread.brandInitial}</div>
        <div class="inbox-item-body">
          <div class="inbox-item-top">
            <span class="inbox-item-brand">${thread.brand}</span>
            <span class="inbox-item-time">${timeStr}</span>
          </div>
          <div class="inbox-item-preview">${latestOffering.title}</div>
          <div class="inbox-item-meta">
            <span class="inbox-item-related">${relatedLabel}</span>
            <span class="inbox-item-unread-dot"></span>
          </div>
        </div>
      </div>`;
    }).join('');

    // Attach click handlers
    inboxEl.querySelectorAll('.inbox-item').forEach(item => {
      const brand = item.dataset.brand;
      item.addEventListener('click', () => openThread(brand));
      item.addEventListener('keydown', e => { if (e.key === 'Enter') openThread(brand); });
    });
  }

  function openThread(brandName) {
    const threads = getConversationThreads();
    const thread = threads.find(t => t.brand === brandName);
    if (!thread) return;

    // Mark thread as read
    if (!state.readThreads.includes(brandName)) {
      state.readThreads.push(brandName);
      saveState();
    }

    state.currentThread = brandName;

    const relatedLabel = thread.offerings.map(o => o.related).filter((v, idx, arr) => arr.indexOf(v) === idx).join(', ');
    showThreadMode(brandName, relatedLabel);
    renderThread(thread);
    updateUnreadBadges();
    document.getElementById('view-container').scrollTop = 0;
  }

  function renderThread(thread) {
    const threadEl = document.getElementById('thread-view');
    const readyCooldownNames = state.cooldowns
      .filter(c => getCooldownProgress(c).status === 'ready')
      .map(c => c.name);

    let html = '';

    // Date divider
    html += `<div class="thread-date-divider">Today</div>`;

    thread.offerings.forEach((offering, i) => {
      const ageMin = getMockMessageAge(thread.brand, offering.related);
      const timeStr = relativeTime(ageMin);
      const isReady = readyCooldownNames.includes(offering.related);

      // Brand message bubble (left)
      html += `<div class="thread-message brand-side" style="animation-delay: ${i * 80}ms">
        <div class="thread-message-sender">
          <div class="thread-sender-avatar">${thread.brandInitial}</div>
          <span class="thread-sender-name">${thread.brand}</span>
        </div>
        <div class="thread-message-bubble">
          <div class="thread-offering-image" style="background: ${offering.gradient};"></div>
          <div class="thread-offering-title">${offering.title}</div>
          <div class="thread-offering-desc">${offering.desc}</div>
          ${isReady ? `<div class="thread-cooldown-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${offering.related} is ready
          </div>` : ''}
        </div>
        <span class="thread-message-time">${timeStr}</span>
      </div>`;
    });

    // User CTA (right side) — one reply button per thread
    const hasReady = thread.offerings.some(o => readyCooldownNames.includes(o.related));
    const ctaLabel = hasReady ? 'Get This Deal' : 'Explore Offers';

    html += `<div class="thread-message user-side" style="animation-delay: ${thread.offerings.length * 80}ms">
      <button class="thread-cta" aria-label="${ctaLabel}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        ${ctaLabel}
      </button>
    </div>`;

    threadEl.innerHTML = html;
  }

  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ============================
  // NOTIFICATION SYSTEM
  // ============================

  function buildNotifications() {
    const notifications = [];
    const readyCooldowns = state.cooldowns.filter(c => getCooldownProgress(c).status === 'ready');

    // "Your X is ready" notifications for ready cooldowns
    readyCooldowns.forEach(cd => {
      const p = getCooldownProgress(cd);
      const minutesAgo = p.daysOver > 0
        ? Math.min(p.daysOver * 24 * 60, 7 * 24 * 60)
        : 45;
      notifications.push({
        id: 'ready-' + cd.id,
        type: 'ready',
        icon: cd.icon,
        text: `Your <strong>${cd.name}</strong> cooldown is ready`,
        timeAgo: minutesAgo,
        action: { type: 'detail', id: cd.id },
        unread: true
      });
    });

    // "New offering from X" for brands whose offerings relate to ready cooldowns
    const readyCooldownNames = readyCooldowns.map(c => c.name);
    const seenBrands = new Set();
    MARKETPLACE.forEach(o => {
      if (readyCooldownNames.includes(o.related) && !seenBrands.has(o.brand)) {
        seenBrands.add(o.brand);
        const ageMin = getMockMessageAge(o.brand, o.related);
        notifications.push({
          id: 'offer-' + o.brand.replace(/\s+/g, '-').toLowerCase(),
          type: 'offering',
          icon: o.brandInitial,
          text: `New offering from <strong>${o.brand}</strong>`,
          timeAgo: ageMin,
          action: { type: 'thread', brand: o.brand },
          unread: !state.readThreads.includes(o.brand)
        });
      }
    });

    // Sort: unread first, then most recent
    notifications.sort((a, b) => {
      if (a.unread && !b.unread) return -1;
      if (!a.unread && b.unread) return 1;
      return a.timeAgo - b.timeAgo;
    });

    return notifications;
  }

  function renderNotificationBell() {
    const bell = document.getElementById('notification-bell');
    const dot = document.getElementById('notification-dot');
    if (!bell || !dot) return;

    const notifications = buildNotifications();
    const hasUnread = notifications.some(n => n.unread);

    bell.classList.toggle('has-notifications', hasUnread);
    dot.classList.toggle('visible', hasUnread && !state.notificationsRead);

    // Remove old listener and add fresh one
    const newBell = bell.cloneNode(true);
    bell.parentNode.replaceChild(newBell, bell);
    const freshDot = document.getElementById('notification-dot');
    freshDot.classList.toggle('visible', hasUnread && !state.notificationsRead);
    newBell.classList.toggle('has-notifications', hasUnread);

    newBell.addEventListener('click', toggleNotificationDrawer);
  }

  function updateUnreadBadges() {
    const threads = getConversationThreads();
    const hasUnreadThreads = threads.some(t => isThreadUnread(t));
    const navDot = document.getElementById('nav-unread-dot');
    if (navDot) navDot.classList.toggle('visible', hasUnreadThreads);

    // Also update notification bell dot
    const bell = document.getElementById('notification-bell');
    const dot = document.getElementById('notification-dot');
    if (bell && dot) {
      const notifications = buildNotifications();
      const hasUnread = notifications.some(n => n.unread);
      bell.classList.toggle('has-notifications', hasUnread);
      dot.classList.toggle('visible', hasUnread && !state.notificationsRead);
    }
  }

  function toggleNotificationDrawer() {
    const drawer = document.getElementById('notification-drawer');
    if (!drawer) return;

    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeNotificationDrawer();
    } else {
      openNotificationDrawer();
    }
  }

  function openNotificationDrawer() {
    const drawer = document.getElementById('notification-drawer');
    if (!drawer) return;

    // Mark all as read
    state.notificationsRead = true;
    saveState();

    // Hide bell dot
    const dot = document.getElementById('notification-dot');
    if (dot) dot.classList.remove('visible');

    // Build & render notifications
    const notifications = buildNotifications();
    const listEl = document.getElementById('notification-list');
    if (notifications.length === 0) {
      listEl.innerHTML = '<div class="notification-empty">You\'re all caught up ✨</div>';
    } else {
      listEl.innerHTML = notifications.map((n, i) => {
        const iconIsEmoji = isNaN(parseInt(n.icon)) || n.icon.length > 1 || n.type === 'ready';
        const iconContent = iconIsEmoji ? n.icon : n.icon;
        return `<div class="notification-item${n.unread ? ' unread' : ''}" data-action='${JSON.stringify(n.action)}' style="animation-delay: ${i * 50}ms" role="button" tabindex="0">
          <div class="notification-item-icon ${n.type}">${iconContent}</div>
          <div class="notification-item-body">
            <div class="notification-item-text">${n.text}</div>
            <div class="notification-item-time">${relativeTime(n.timeAgo)}</div>
          </div>
          ${n.unread ? '<div class="notification-item-unread-dot"></div>' : ''}
        </div>`;
      }).join('');

      listEl.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', () => {
          try {
            const action = JSON.parse(item.dataset.action);
            closeNotificationDrawer();
            if (action.type === 'detail') {
              openDetail(action.id);
            } else if (action.type === 'thread') {
              navigate('marketplace');
              setTimeout(() => openThread(action.brand), 100);
            }
          } catch (e) {}
        });
        item.addEventListener('keydown', e => {
          if (e.key === 'Enter') item.click();
        });
      });
    }

    // Show drawer
    drawer.removeAttribute('hidden');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        drawer.classList.add('open');
      });
    });

    // Close on backdrop click
    const backdrop = document.getElementById('notification-drawer-backdrop');
    backdrop.onclick = closeNotificationDrawer;

    // Close button
    document.getElementById('notification-drawer-close').onclick = closeNotificationDrawer;
  }

  function closeNotificationDrawer() {
    const drawer = document.getElementById('notification-drawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    setTimeout(() => {
      drawer.setAttribute('hidden', '');
    }, 360);
  }

  // Keep old renderMarketplace as alias for any legacy code
  function renderMarketplace() {
    renderMessages();
  }



  function initWizardSelections() {
    // Set defaults for all cooldown selections
    CATEGORIES.forEach(cat => {
      state.wizardSelections[cat.id] = {
        enabled: false,
        freqDays: cat.suggestedDays,
        lastDone: null,
        pickIndex: -1
      };
    });
  }

  function getVibeRecommendedIds() {
    const ids = new Set();
    state.wizardVibes.forEach(v => {
      (VIBE_MAP[v] || []).forEach(id => ids.add(id));
    });
    return ids;
  }

  function renderWizard() {
    const step = state.wizardStep;
    const screensEl = document.getElementById('wizard-screens');
    const progressEl = document.getElementById('wizard-progress');
    const fillEl = document.getElementById('wizard-progress-fill');

    // Show/hide progress bar (hidden on welcome screen)
    if (step === 0) {
      progressEl.classList.remove('visible');
    } else {
      progressEl.classList.add('visible');
      fillEl.style.width = ((step / (TOTAL_WIZARD_SCREENS - 1)) * 100) + '%';
    }

    // Build screen HTML
    let html = '';
    switch (step) {
      case 0: html = renderWelcomeScreen(); break;
      case 1: html = renderVibeScreen(); break;
      case 2: html = renderCardsScreen('Your body is the vehicle. Let\'s keep it running.', BODY_CARDS); break;
      case 3: html = renderCardsScreen('A sharp mind doesn\'t happen by accident.', MIND_CARDS); break;
      case 4: html = renderCardsScreen('The best weeks have other people in them.', PEOPLE_CARDS); break;
      case 5: html = renderCardsScreen('The small things that make you feel like you.', SPACE_CARDS); break;
      case 6: html = renderAdventureScreen(); break;
      case 7: html = renderCalendarScreen(); break;
      case 8: html = renderLocationScreen(); break;
      case 9: html = renderReadyScreen(); break;
    }

    screensEl.innerHTML = html;

    // Activate the screen with a slight delay for transition
    requestAnimationFrame(() => {
      const screen = screensEl.querySelector('.wizard-screen');
      if (screen) {
        screen.classList.add('active');
      }
    });

    // Scroll to top
    document.getElementById('view-container').scrollTop = 0;

    // Attach event listeners
    attachWizardListeners(step);
  }

  function renderWelcomeScreen() {
    return `
      <div class="wizard-screen wizard-welcome">
        <div class="wizard-title">Let's design your week.</div>
        <div class="wizard-subtitle">Not a to-do list. Not a schedule. A week you actually want to live.</div>
        <button class="btn btn-primary" id="wiz-start" style="max-width: 240px;">Let's go</button>
      </div>`;
  }

  function renderVibeScreen() {
    const chipsHtml = VIBES.map(v => {
      const sel = state.wizardVibes.includes(v.id) ? ' selected' : '';
      return `<button class="vibe-chip${sel}" data-vibe="${v.id}" aria-pressed="${state.wizardVibes.includes(v.id)}">
        <span class="vibe-chip-emoji">${v.emoji}</span> ${v.label}
      </button>`;
    }).join('');

    const narrativeText = buildNarrative(state.wizardVibes);
    const narrativeVisible = state.wizardVibes.length > 0 ? ' visible' : '';

    const disabled = state.wizardVibes.length === 0 ? ' disabled' : '';

    return `
      <div class="wizard-screen">
        <div class="wizard-section-title">How do you want your week to feel?</div>
        <div class="wizard-section-subtitle">Tap all that resonate.</div>
        <div class="wizard-vibes" id="vibe-chips">${chipsHtml}</div>
        <div class="wizard-narrative${narrativeVisible}" id="wizard-narrative">${narrativeText}</div>
        <div class="wizard-nav">
          <button class="btn btn-secondary-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next"${disabled}>Next</button>
        </div>
      </div>`;
  }

  function renderCardsScreen(subtitle, cards) {
    const recommended = getVibeRecommendedIds();

    const cardsHtml = cards.map((card, i) => {
      const sel = state.wizardSelections[card.id];
      // Auto-enable if vibe-recommended and user hasn't explicitly interacted
      if (sel.pickIndex === -1 && recommended.has(card.id)) {
        sel.enabled = true;
        // Set default pick to first option
        sel.freqDays = card.picks[0].freqDays;
        sel.pickIndex = 0;
        if (card.picks[0].lastDoneOffset !== undefined) {
          sel.lastDone = card.picks[0].lastDoneOffset !== null ? subtractDays(card.picks[0].lastDoneOffset) : null;
        }
      }

      const disabledCls = !sel.enabled ? ' disabled' : '';
      const toggleChecked = sel.enabled ? ' checked' : '';

      const picksHtml = card.picks.map((pick, pi) => {
        const pickSel = sel.pickIndex === pi ? ' selected' : '';
        return `<button class="quick-pick-btn${pickSel}" data-card="${card.id}" data-pick="${pi}">${pick.label}</button>`;
      }).join('');

      return `
        <div class="wizard-body-card${disabledCls}" data-card-id="${card.id}" style="animation-delay: ${i * 50}ms">
          <div class="wizard-card-header">
            <div class="wizard-card-icon">${card.icon}</div>
            <div class="wizard-card-title">${card.title}</div>
            <div class="wizard-card-toggle">
              <label class="toggle">
                <input type="checkbox" data-toggle="${card.id}"${toggleChecked}>
                <span class="toggle-track"></span>
                <span class="toggle-thumb"></span>
              </label>
            </div>
          </div>
          <div class="wizard-card-question">${card.question}</div>
          ${sel.enabled ? `<div class="wizard-quick-pick" data-picks-for="${card.id}">${picksHtml}</div>` : ''}
        </div>`;
    }).join('');

    return `
      <div class="wizard-screen">
        <div class="wizard-section-subtitle" style="font-style: italic; margin-bottom: var(--space-8);">${subtitle}</div>
        <div class="wizard-cards">${cardsHtml}</div>
        <div class="wizard-nav">
          <button class="btn btn-secondary-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      </div>`;
  }

  function renderAdventureScreen() {
    const card = ADVENTURE_CARDS[0];
    const sel = state.wizardSelections[card.id];
    const recommended = getVibeRecommendedIds();

    if (sel.pickIndex === -1 && recommended.has(card.id)) {
      sel.enabled = true;
      sel.freqDays = card.picks[0].freqDays;
      sel.pickIndex = 0;
    }

    const disabledCls = !sel.enabled ? ' disabled' : '';
    const toggleChecked = sel.enabled ? ' checked' : '';

    const picksHtml = card.picks.map((pick, pi) => {
      const pickSel = sel.pickIndex === pi ? ' selected' : '';
      return `<button class="quick-pick-btn${pickSel}" data-card="${card.id}" data-pick="${pi}">${pick.label}</button>`;
    }).join('');

    return `
      <div class="wizard-screen">
        <div class="wizard-section-subtitle" style="font-style: italic; margin-bottom: var(--space-8);">Rest isn't lazy. It's fuel.</div>
        <div class="wizard-cards">
          <div class="wizard-body-card${disabledCls}" data-card-id="${card.id}">
            <div class="wizard-card-header">
              <div class="wizard-card-icon">${card.icon}</div>
              <div class="wizard-card-title">${card.title}</div>
              <div class="wizard-card-toggle">
                <label class="toggle">
                  <input type="checkbox" data-toggle="${card.id}"${toggleChecked}>
                  <span class="toggle-track"></span>
                  <span class="toggle-thumb"></span>
                </label>
              </div>
            </div>
            <div class="wizard-card-question">${card.question}</div>
            ${sel.enabled ? `<div class="wizard-quick-pick" data-picks-for="${card.id}">${picksHtml}</div>` : ''}
          </div>
        </div>
        <div class="wizard-teaser">When your vacation cooldown arrives, we'll have real trips waiting for you — not spam, not ads, just doors you can walk through.</div>
        <div class="wizard-nav">
          <button class="btn btn-secondary-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      </div>`;
  }

  function renderCalendarScreen() {
    // Build week schedule from enabled cooldowns
    buildWeekSchedule();

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const times = ['Morning', 'Afternoon', 'Evening'];
    const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    let gridHtml = '<div class="week-header-cell"></div>';
    days.forEach(d => {
      gridHtml += `<div class="week-header-cell">${d}</div>`;
    });

    times.forEach((time, ti) => {
      const timeKey = ['morning', 'afternoon', 'evening'][ti];
      gridHtml += `<div class="week-time-label">${time}</div>`;
      dayKeys.forEach(dayKey => {
        const slotKey = dayKey + '-' + timeKey;
        const chips = (state.weekSchedule[slotKey] || []).map(id => {
          const cat = CATEGORIES.find(c => c.id === id);
          return cat ? `<div class="week-chip" data-slot="${slotKey}" data-chip-id="${id}">${cat.icon} ${cat.name.split(' ')[0]}</div>` : '';
        }).join('');
        gridHtml += `<div class="week-day-col" data-slot="${slotKey}">${chips}</div>`;
      });
    });

    return `
      <div class="wizard-screen">
        <div class="wizard-section-title">Now let's place these in your week.</div>
        <div class="wizard-calendar-note">This isn't a rigid schedule. It's a shape for your week — a compass, not handcuffs.</div>
        <div class="wizard-week-grid">${gridHtml}</div>
        <div class="wizard-nav">
          <button class="btn btn-secondary-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      </div>`;
  }

  function buildWeekSchedule() {
    state.weekSchedule = {};
    const enabled = Object.keys(state.wizardSelections).filter(id => state.wizardSelections[id].enabled);

    enabled.forEach(id => {
      const sel = state.wizardSelections[id];
      const freq = sel.freqDays;

      // Place based on frequency and type
      switch (id) {
        case 'workout':
          if (freq <= 1) {
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].forEach(d => addToSlot(d + '-morning', id));
          } else if (freq <= 3) {
            ['mon', 'wed', 'fri'].forEach(d => addToSlot(d + '-morning', id));
          } else {
            addToSlot('mon-morning', id);
          }
          break;
        case 'stretch':
          if (freq <= 1) {
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].forEach(d => addToSlot(d + '-morning', id));
          } else if (freq <= 3) {
            ['mon', 'wed', 'fri', 'sun'].forEach(d => addToSlot(d + '-morning', id));
          } else {
            addToSlot('sat-morning', id);
          }
          break;
        case 'callsomeone':
          if (freq <= 7) addToSlot('sun-evening', id);
          else addToSlot('sun-evening', id);
          break;
        case 'learn':
          if (freq <= 7) addToSlot('wed-evening', id);
          else addToSlot('wed-evening', id);
          break;
        case 'deepclean':
          addToSlot('sat-morning', id);
          break;
        case 'finance':
          addToSlot('sun-afternoon', id);
          break;
        case 'mixup':
          addToSlot('sat-afternoon', id);
          break;
        case 'haircut':
          addToSlot('sat-afternoon', id);
          break;
        case 'doctor':
        case 'eye':
        case 'dental':
          // These are infrequent — just place a reminder
          addToSlot('mon-afternoon', id);
          break;
        case 'vacation':
          addToSlot('fri-evening', id);
          break;
      }
    });
  }

  function addToSlot(slotKey, id) {
    if (!state.weekSchedule[slotKey]) state.weekSchedule[slotKey] = [];
    if (!state.weekSchedule[slotKey].includes(id)) {
      state.weekSchedule[slotKey].push(id);
    }
  }

  function renderLocationScreen() {
    return `
      <div class="wizard-screen">
        <div class="wizard-section-title">One more thing — where are you?</div>
        <div class="wizard-location">
          <input type="text" id="wiz-location-input" placeholder="City or zip code" value="${state.userLocation}" autocomplete="off">
          <div class="wizard-location-hint">We'll suggest outdoor cooldowns when the weather's right, and find offerings near you.</div>
        </div>
        <div class="wizard-nav">
          <button class="btn btn-secondary-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
        <div style="text-align: center; margin-top: var(--space-3);">
          <button class="wizard-skip-link" id="wiz-skip">Skip for now</button>
        </div>
      </div>`;
  }

  function renderReadyScreen() {
    // Collect enabled cooldowns
    const enabled = [];
    CATEGORIES.forEach(cat => {
      const sel = state.wizardSelections[cat.id];
      if (sel && sel.enabled) {
        enabled.push({ ...cat, freqDays: sel.freqDays });
      }
    });

    const summaryHtml = enabled.map((cd, i) => {
      const freqLabel = getFreqLabel(cd.freqDays);
      return `<div class="wizard-summary-item" style="animation-delay: ${i * 40}ms">
        <div class="wizard-summary-item-icon">${cd.icon}</div>
        <div class="wizard-summary-item-name">${cd.name}</div>
        <div class="wizard-summary-item-freq">${freqLabel}</div>
      </div>`;
    }).join('');

    return `
      <div class="wizard-screen wizard-ready">
        <div class="wizard-title">Your week just got better.</div>
        <div class="wizard-ready-count">${enabled.length} cooldown${enabled.length !== 1 ? 's' : ''}, tailored to you.</div>
        <div class="wizard-summary">${summaryHtml}</div>
        <button class="btn btn-primary" id="wiz-finish" style="max-width: 300px;">Start Cooling Down</button>
      </div>`;
  }

  function getFreqLabel(days) {
    if (days <= 1) return 'Daily';
    if (days <= 3) return 'Few times/week';
    if (days <= 7) return 'Weekly';
    if (days <= 14) return 'Every 2 weeks';
    if (days <= 30) return 'Monthly';
    if (days <= 42) return 'Every 5-6 weeks';
    if (days <= 90) return 'Every few months';
    if (days <= 180) return 'Twice a year';
    return 'Yearly';
  }

  function attachWizardListeners(step) {
    // Back/Next buttons
    const backBtn = document.getElementById('wiz-back');
    const nextBtn = document.getElementById('wiz-next');
    const startBtn = document.getElementById('wiz-start');
    const finishBtn = document.getElementById('wiz-finish');
    const skipBtn = document.getElementById('wiz-skip');

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        state.wizardStep = 1;
        renderWizard();
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        state.wizardStep = Math.max(0, state.wizardStep - 1);
        renderWizard();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        // Save any input state before advancing
        if (step === 8) {
          const input = document.getElementById('wiz-location-input');
          if (input) state.userLocation = input.value.trim();
        }
        state.wizardStep = Math.min(TOTAL_WIZARD_SCREENS - 1, state.wizardStep + 1);
        renderWizard();
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        state.userLocation = '';
        state.wizardStep = TOTAL_WIZARD_SCREENS - 1;
        renderWizard();
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', finishWizard);
    }

    // Vibe chips
    if (step === 1) {
      document.querySelectorAll('.vibe-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const vibe = chip.dataset.vibe;
          const idx = state.wizardVibes.indexOf(vibe);
          if (idx >= 0) {
            state.wizardVibes.splice(idx, 1);
          } else {
            state.wizardVibes.push(vibe);
          }
          // Re-render just the chips and narrative, not the whole screen
          updateVibeUI();
        });
      });
    }

    // Card toggles
    document.querySelectorAll('input[data-toggle]').forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const id = e.target.dataset.toggle;
        state.wizardSelections[id].enabled = e.target.checked;
        if (!e.target.checked) {
          state.wizardSelections[id].pickIndex = -1;
        } else if (state.wizardSelections[id].pickIndex === -1) {
          state.wizardSelections[id].pickIndex = 0;
          // Set default freq
          const allCards = [...BODY_CARDS, ...MIND_CARDS, ...PEOPLE_CARDS, ...SPACE_CARDS, ...ADVENTURE_CARDS];
          const cardDef = allCards.find(c => c.id === id);
          if (cardDef) {
            state.wizardSelections[id].freqDays = cardDef.picks[0].freqDays;
            if (cardDef.picks[0].lastDoneOffset !== undefined) {
              state.wizardSelections[id].lastDone = cardDef.picks[0].lastDoneOffset !== null ? subtractDays(cardDef.picks[0].lastDoneOffset) : null;
            }
          }
        }
        renderWizard();
      });
    });

    // Quick pick buttons
    document.querySelectorAll('.quick-pick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.dataset.card;
        const pickIdx = parseInt(btn.dataset.pick);
        const allCards = [...BODY_CARDS, ...MIND_CARDS, ...PEOPLE_CARDS, ...SPACE_CARDS, ...ADVENTURE_CARDS];
        const cardDef = allCards.find(c => c.id === cardId);
        if (!cardDef) return;

        const pick = cardDef.picks[pickIdx];
        state.wizardSelections[cardId].pickIndex = pickIdx;
        state.wizardSelections[cardId].freqDays = pick.freqDays;
        state.wizardSelections[cardId].enabled = true;

        // Handle lastDone
        if (pick.lastDoneOffset !== undefined) {
          state.wizardSelections[cardId].lastDone = pick.lastDoneOffset !== null ? subtractDays(pick.lastDoneOffset) : null;
        } else if (cardDef.isLastDone) {
          // isLastDone cards without explicit offset
        }

        // Update just the pick buttons visually
        document.querySelectorAll(`.quick-pick-btn[data-card="${cardId}"]`).forEach((b, i) => {
          b.classList.toggle('selected', i === pickIdx);
        });
      });
    });

    // Calendar chip removal
    document.querySelectorAll('.week-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const slot = chip.dataset.slot;
        const chipId = chip.dataset.chipId;
        if (state.weekSchedule[slot]) {
          state.weekSchedule[slot] = state.weekSchedule[slot].filter(id => id !== chipId);
        }
        chip.style.opacity = '0';
        chip.style.transform = 'scale(0.5)';
        setTimeout(() => chip.remove(), 200);
      });
    });
  }

  function updateVibeUI() {
    document.querySelectorAll('.vibe-chip').forEach(chip => {
      const vibe = chip.dataset.vibe;
      const isSelected = state.wizardVibes.includes(vibe);
      chip.classList.toggle('selected', isSelected);
      chip.setAttribute('aria-pressed', isSelected);
    });

    const narrativeEl = document.getElementById('wizard-narrative');
    const nextBtn = document.getElementById('wiz-next');

    if (narrativeEl) {
      const text = buildNarrative(state.wizardVibes);
      if (state.wizardVibes.length > 0) {
        narrativeEl.textContent = text;
        narrativeEl.classList.add('visible');
      } else {
        narrativeEl.classList.remove('visible');
      }
    }

    if (nextBtn) {
      nextBtn.disabled = state.wizardVibes.length === 0;
    }

    // Update wizard selections based on vibes
    const recommended = getVibeRecommendedIds();
    CATEGORIES.forEach(cat => {
      const sel = state.wizardSelections[cat.id];
      if (sel.pickIndex === -1) {
        // Only auto-set if user hasn't explicitly chosen
        sel.enabled = recommended.has(cat.id);
      }
    });
  }

  function finishWizard() {
    state.cooldowns = [];
    CATEGORIES.forEach(cat => {
      const sel = state.wizardSelections[cat.id];
      if (sel && sel.enabled) {
        state.cooldowns.push({
          id: cat.id,
          name: cat.name,
          icon: cat.icon,
          frequencyDays: sel.freqDays,
          lastDone: sel.lastDone || null,
          history: sel.lastDone ? [sel.lastDone] : [],
          category: cat.category
        });
      }
    });
    state.hasOnboarded = true;
    state.wizardStep = 0;
    saveState();
    fireConfetti();
    navigate('dashboard');
  }

  // ============================
  // SETTINGS
  // ============================
  function initSettings() {
    const darkCb = document.getElementById('dark-mode-checkbox');
    darkCb.addEventListener('change', toggleTheme);

    document.getElementById('reset-onboarding-btn').addEventListener('click', () => {
      state.hasOnboarded = false;
      state.wizardStep = 0;
      state.wizardVibes = [];
      state.cooldowns = [];
      state.userLocation = '';
      state.weekSchedule = {};
      state.readThreads = [];
      state.notifications = [];
      state.notificationsRead = false;
      initWizardSelections();
      clearState();
      navigate('onboarding');
    });

    // Push notification permission
    const pushBtn = document.getElementById('enable-push-btn');
    if (pushBtn) {
      // Update button state based on current permission
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          pushBtn.textContent = 'Enabled';
          pushBtn.disabled = true;
          pushBtn.style.opacity = '0.6';
        } else if (Notification.permission === 'denied') {
          pushBtn.textContent = 'Blocked';
          pushBtn.disabled = true;
          pushBtn.style.opacity = '0.6';
        }
      } else {
        pushBtn.textContent = 'Not supported';
        pushBtn.disabled = true;
        pushBtn.style.opacity = '0.5';
      }

      pushBtn.addEventListener('click', () => {
        if (!('Notification' in window)) return;
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            pushBtn.textContent = 'Enabled';
            pushBtn.disabled = true;
            pushBtn.style.opacity = '0.6';
            // Send a test notification
            const readyCooldowns = state.cooldowns.filter(c => getCooldownProgress(c).status === 'ready');
            if (readyCooldowns.length > 0) {
              new Notification('Cooldowns', {
                body: 'Your ' + readyCooldowns[0].name + ' is ready!',
                icon: './icon.svg'
              });
            } else {
              new Notification('Cooldowns', {
                body: 'Notifications enabled. We\'ll let you know when it\'s time.',
                icon: './icon.svg'
              });
            }
          } else {
            pushBtn.textContent = permission === 'denied' ? 'Blocked' : 'Dismissed';
            pushBtn.disabled = true;
            pushBtn.style.opacity = '0.6';
          }
        });
      });
    }
  }

  // ============================
  // NAV
  // ============================
  function initNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navigate(item.dataset.view);
      });
    });
  }

  // ============================
  // SERVICE WORKER
  // ============================
  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  // ============================
  // INIT
  // ============================
  function init() {
    // Load saved state first
    loadState();

    // Apply theme
    document.documentElement.setAttribute('data-theme', state.theme);
    const cb = document.getElementById('dark-mode-checkbox');
    if (cb) cb.checked = state.theme === 'dark';

    // If no saved theme, detect system preference
    if (!storage.get(STORAGE_KEY)) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      state.theme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      if (cb) cb.checked = state.theme === 'dark';
    }

    initWizardSelections();
    initNav();
    initSettings();
    registerSW();

    // Debug: auto-populate demo data if ?demo is in the URL
    if (window.location.search.includes('demo')) {
      const demoLastDone = [
        '2025-03-01', '2025-06-15', '2025-09-10', '2026-02-27', '2026-03-01',
        '2025-11-01', '2026-02-14', '2026-01-20', '2026-02-20', '2026-02-25',
        '2026-02-28', '2026-01-15'
      ];
      state.cooldowns = CATEGORIES.map((cat, i) => ({
        id: cat.id, name: cat.name, icon: cat.icon,
        frequencyDays: cat.suggestedDays,
        lastDone: demoLastDone[i] || null,
        history: demoLastDone[i] ? [demoLastDone[i]] : [],
        category: cat.category
      }));
      state.hasOnboarded = true;
    }

    handleHash();
    window.addEventListener('hashchange', handleHash);

    // Update unread state across the whole UI
    updateUnreadBadges();

    // If onboarding, render wizard
    if (!state.hasOnboarded) {
      renderWizard();
    }
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
