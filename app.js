// English Learning Lab — portal app
// Roles: admin, teacher, student. Data lives on the Google Apps Script server (or in memory in demo mode).
const SA = atob("c3VwZXJhZG1pbg==");
const CFG = window.HUB_CONFIG;
const DEMO = !CFG.API_URL;
const PRACTICE = window.PRACTICE || {};

/* ================= helpers ================= */
const app = document.getElementById("app");
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = (d) => d ? new Date(d).toLocaleString(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "—";
const fmtDay = (d) => d ? "Due " + new Date(d).toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) : "No due date";
const initials = (n) => String(n || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
const person = (n) => `<span class="person"><span class="avatar">${esc(initials(n))}</span>${esc(n)}</span>`;
const classCode = (c) => c ? `${c.grade}${String(c.track || "").trim().charAt(0).toUpperCase()}${c.section}` : "";
const relTime = (d) => {
  if (!d) return "—";
  const m = Math.round((Date.now() - new Date(d)) / 60000);
  if (m < 1) return "just now"; if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60); if (h < 24) return `${h}h ago`;
  return `${Math.round(h / 24)}d ago`;
};
const dueLabel = (d) => {
  if (!d) return ["todo", "No due date"];
  const due = new Date(d), now = new Date();
  if (due < now) return ["late", "Overdue"];
  const day = (x) => new Date(x.getFullYear(), x.getMonth(), x.getDate());
  const n = Math.round((day(due) - day(now)) / 864e5);
  return n === 0 ? ["today", "Today"] : n === 1 ? ["soon", "Tomorrow"] : ["later", `In ${n} days`];
};
const I = {
  grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  class: '<path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14.8c1.8.8 3 2.6 3.5 5.2"/>',
  task: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.8h6V4M9 10h6M9 14h6M9 18h3"/>',
  spark: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>',
  bell: '<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4z"/><path d="M10 20a2 2 0 004 0"/>',
  out: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 8 5-3 5 3-1.5-8"/>',
  msg: '<path d="M4 5h16v11H9l-5 4z"/>',
  book: '<path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h11M9 8h6"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
  abc: '<path d="M3 18l4-12 4 12M4.5 14h5"/><path d="M14 6h3.5a2.5 2.5 0 010 5H14zM14 11h4a2.5 2.5 0 010 5h-4zM14 6v10"/>',
};
const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${I[n] || ""}</svg>`;
const stat = (label, val, ic, color, sub = "", alarm = false) =>
  `<div class="stat ${alarm && +val ? "alarm" : ""}" style="--s:${color}"><span class="lbl">${label}</span><b>${val}</b>${sub ? `<small>${sub}</small>` : ""}<span class="sic">${icon(ic)}</span></div>`;
const className = (c) => c ? `Grade ${c.grade} – ${c.track}-${c.section}` : "No class";
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const safeName = (n) => n.replace(/[^\w.\-]+/g, "_").slice(-80);
const uuid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
const WORDS = ["river", "falcon", "palm", "desert", "pearl", "cedar", "comet", "harbor", "lotus", "amber", "breeze", "summit"];
const newPassword = () => WORDS[Math.floor(Math.random() * WORDS.length)] + "-" + (1000 + Math.floor(Math.random() * 9000));
function suggestUsername(name, taken) {
  const first = String(name).trim().split(/\s+/)[0] || "";
  let base = first.normalize("NFKD").replace(/[^a-zA-Z]/g, "").toLowerCase().slice(0, 20);
  if (base.length < 2) base = "student";
  let u;
  do { u = base + (1000 + Math.floor(Math.random() * 9000)); } while (taken.has(u));
  taken.add(u);
  return u;
}
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), 3200);
}
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); toast("Copied"); }
  catch { toast("Select the table and copy it manually"); }
}
const themeInit = () => { try { const t = localStorage.getItem("hub-theme"); if (t) document.documentElement.dataset.theme = t; } catch {} };
themeInit();
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

/* ================= data layer: Google Apps Script server ================= */
const NET_MSG = "Cannot reach the English Learning Lab server. This network may be blocking it. Try mobile data or home Wi-Fi, or ask your school IT to allow the site.";
const TOKEN_KEY = "ell-token";
const token = { get: () => { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
  set: (t) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch {} } };
async function post(body) {
  let res;
  try {
    // text/plain keeps this a "simple" request (no CORS preflight), which Apps Script needs
    res = await fetch(CFG.API_URL, { method: "POST", body: JSON.stringify({ ...body, token: token.get() }), redirect: "follow" });
  } catch { throw new Error(NET_MSG); }
  try { return await res.json(); } catch { throw new Error(res.ok ? "The server sent an unexpected reply. Please try again." : NET_MSG); }
}
function settle(out, ok, bad) {
  if (out.ok) return ok(out.data);
  if (out.auth) { token.set(null); if (S.me) { S.me = null; setTimeout(() => renderLogin(), 0); } }
  bad(new Error(out.error || "Something went wrong. Please try again."));
}
// Questions asked at the same moment travel to the server together in one trip.
let queue = [], queued = false;
const ALONE = ["signIn", "signOut", "joinRegister"];
function call(action, args = {}) {
  return new Promise((ok, bad) => {
    if (ALONE.includes(action)) return post({ action, args }).then((out) => settle(out, ok, bad), bad);
    queue.push({ action, args, ok, bad });
    if (!queued) { queued = true; setTimeout(flushQueue, 0); }
  });
}
async function flushQueue() {
  const items = queue; queue = []; queued = false;
  if (items.length === 1) { const it = items[0]; return post({ action: it.action, args: it.args }).then((out) => settle(out, it.ok, it.bad), it.bad); }
  try {
    const out = await post({ action: "batch", calls: items.map((it) => ({ action: it.action, args: it.args })) });
    if (!out.ok) return items.forEach((it) => settle(out, it.ok, it.bad));
    items.forEach((it, i) => settle(out.data[i] || { ok: false, error: "No reply." }, it.ok, it.bad));
  } catch (e) { items.forEach((it) => it.bad(e)); }
}
const fileArg = (file) => !file ? null : new Promise((ok, bad) => {
  const r = new FileReader();
  r.onload = () => ok({ name: file.name, type: file.type || "application/octet-stream", data: String(r.result).split(",")[1] || "" });
  r.onerror = () => bad(new Error("Could not read that file."));
  r.readAsDataURL(file);
});
const GAS = {
  async session() { if (!token.get()) return null; try { return await call("me"); } catch { return null; } },
  async signIn(u, p) { const r = await call("signIn", { username: u.trim().toLowerCase(), password: p }); token.set(r.token); return r.me; },
  async signOut() { try { await call("signOut"); } catch {} token.set(null); },
  classes: () => call("classes"),
  studentCounts: () => call("studentCounts"),
  createClass: (c) => call("createClass", { c }),
  updateClass: (id, patch) => call("updateClass", { id, patch }),
  deleteClass: (id) => call("deleteClass", { id }),
  students: (cid) => call("students", { cid }),
  staff: () => call("staff"),
  createStudents: (class_id, students) => call("createStudents", { class_id, students }),
  addExistingStudent: (username, class_id) => call("addExistingStudent", { username, class_id }),
  createStaff: (t) => call("createStaff", t),
  resetPasswords: (items) => call("resetPasswords", { items: items.map((i) => ({ id: i.id, password: i.password })) }),
  setDisabled: (ids, disabled) => call("setDisabled", { ids, disabled }),
  deleteUsers: (ids) => call("deleteUsers", { ids }),
  setRole: (id, role) => call("setRole", { id, role }),
  changeOwnPassword: (current, next) => call("changeOwnPassword", { current, next }),
  lessons: () => call("lessons"),
  async createLesson(l, file, classIds, teacherIds) { return call("createLesson", { l, file: await fileArg(file), classIds, teacherIds }); },
  deleteLesson: (l) => call("deleteLesson", { id: l.id }),
  customList: () => call("customList"),
  saveCustom: (row) => call("saveCustom", { row }),
  deleteCustom: (id) => call("deleteCustom", { id }),
  feedbackList: () => call("feedbackList"),
  joinInfo: (grade) => call("joinInfo", { grade }),
  joinSuggest: (grade, full_name) => call("joinSuggest", { grade, full_name }),
  joinRegister: (grade, r) => call("joinRegister", { grade, ...r }),
  joinSessions: () => call("joinSessions"),
  setJoinSession: (grade, open) => call("setJoinSession", { grade, open }),
  sendFeedback: (f) => call("sendFeedback", { f }),
  updateFeedback: (id, patch) => call("updateFeedback", { id, patch }),
  moveStudent: (id, class_id) => call("moveStudent", { id, class_id }),
  assignments: (cid) => call("assignments", { cid }),
  async createAssignment(a, file) { return call("createAssignment", { a, file: await fileArg(file) }); },
  deleteAssignment: (a) => call("deleteAssignment", { id: a.id }),
  classSubmissions: (cid) => call("classSubmissions", { cid }),
  mySubmissions: () => call("mySubmissions"),
  async submit(me, a, file, note) { return call("submit", { assignment_id: a.id, file: await fileArg(file), note }); },
  grade: (id, score, feedback) => call("grade", { id, score, feedback }),
  async fileUrl(bucket, path) {
    const f = await call("file", { bucket, path });
    const bin = atob(f.data), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], { type: f.type || "application/octet-stream" }));
  },
  savePractice: (r) => call("savePractice", { r }),
  classPractice: (cid) => call("classPractice", { cid }),
  myPractice: () => call("myPractice"),
  allAssignments: () => call("allAssignments"),
  allSubmissions: () => call("allSubmissions"),
  allStudents: () => call("allStudents"),
  recentPractice: (since) => call("recentPractice", { since }),
};

/* ================= data layer: demo (in memory) ================= */
const DB = (() => {
  const d = { users: [], classes: [], assignments: [], submissions: [], practice: [], files: {} };
  const ago = (h) => new Date(Date.now() - h * 3600e3).toISOString();
  const ahead = (h) => new Date(Date.now() + h * 3600e3).toISOString();
  const addUser = (full_name, username, role, class_id = null, last = null) => {
    const u = { id: uuid(), full_name, username, role, class_id, password: "demo", last_seen_at: last, created_at: ago(200) };
    d.users.push(u); u.disabled = false; return u;
  };
  addUser("Site Support", SA, SA);
  const t = addUser("Rejees Devasia", "rejees.devasia", "admin", null, ago(1));
  const huda = addUser("Huda Salem", "ms.huda", "teacher", null, ago(3));
  const arun = addUser("Arun Kumar", "mr.arun", "teacher", null, ago(50));
  ["9A1","9A2","9G1","9G2","9G3","10A1","10A2","10G1","10G2","10G3","11A1","11A2","11G1","11G2","12A1","12A2","12G1","12G2"].forEach((code) => {
    const [, g, tr, sec] = code.match(/^(\d+)([AG])(\d+)$/);
    d.classes.push({ id: uuid(), grade: +g, track: tr === "A" ? "Advanced" : "General", section: sec, teacher_id: t.id });
  });
  const c1 = d.classes[10], c2 = d.classes[16]; // 11A1 and 12G1
  c1.teacher_id = huda.id; c2.teacher_id = huda.id;
  const byCode = (g, t, s) => d.classes.find((c) => c.grade === g && c.track === t && c.section === s);
  byCode(12, "Advanced", "2").teacher_id = arun.id;
  addUser("Rashid Al Nuaimi", "student10", "student", byCode(10, "General", "1").id, ago(5));
  addUser("Shamma Al Dhaheri", "student11", "student", byCode(11, "Advanced", "1").id, ago(9));
  addUser("Sultan Al Mansoori", "student12", "student", byCode(12, "Advanced", "1").id, ago(12));
  addUser("Meera Al Shamsi", "student11g", "student", byCode(11, "General", "1").id, ago(6));
  addUser("Saeed Ali", "saeed.a514", "student", null, null);
  const names = ["Aisha Rahman", "Omar Saeed", "Fatima Al Mazrouei", "Yousef Haddad", "Mariam Khalil", "Hamad Al Ketbi"];
  const st = names.map((n, i) => addUser(n, i === 0 ? "student" : n.split(" ")[0].toLowerCase() + ".d" + (101 + i), "student", c1.id, ago(i * 7 + 1)));
  ["Noura Salem", "Khalid Nasser", "Layla Faris"].forEach((n, i) => addUser(n, n.split(" ")[0].toLowerCase() + ".g" + (200 + i), "student", c2.id, ago(30 + i)));
  const a1 = { id: uuid(), class_id: c1.id, title: "Community paragraph", instructions: "Write a 120-word paragraph about how people in your neighbourhood help each other. Use at least three linking words.", due_at: ago(20), max_score: 10, created_at: ago(120) };
  const a2 = { id: uuid(), class_id: c1.id, title: "Shopping survey worksheet", instructions: "Complete the attached worksheet on comparatives and quantifiers. Upload a photo or PDF of your answers.", due_at: ahead(72), max_score: 20, created_at: ago(10), file_path: "demo/worksheet.txt", file_name: "Shopping-worksheet.txt" };
  d.assignments.push(a1, a2);
  d.files["demo/worksheet.txt"] = URL.createObjectURL(new Blob(["Sample worksheet (demo file)"], { type: "text/plain" }));
  d.files["demo/vocab.txt"] = URL.createObjectURL(new Blob(["Term 1 vocabulary list (demo file)"], { type: "text/plain" }));
  d.lessons = [
    { id: uuid(), title: "Term 1 vocabulary list – Grade 11", description: "All key words for Money… Talks! and Nail That Job! with meanings and example sentences.", grade: 11, file_path: "demo/vocab.txt", file_name: "Grade9-Term1-vocabulary.txt", link_url: null, created_at: ago(30) },
    { id: uuid(), title: "Essay planning template", description: "A one-page planner for opinion and comparative essays. Use it before EOT practice.", grade: null, file_path: null, file_name: null, link_url: "https://en.wikipedia.org/wiki/Essay", created_at: ago(60) },
  ];
  d.lesson_targets = [
    ...d.classes.filter((c) => c.grade === 11).map((c) => ({ lesson_id: d.lessons[0].id, class_id: c.id, teacher_id: null })),
    ...d.classes.filter((c) => c.grade >= 11).map((c) => ({ lesson_id: d.lessons[1].id, class_id: c.id, teacher_id: null })),
    { lesson_id: d.lessons[1].id, class_id: null, teacher_id: huda.id },
  ];
  d.joinSessions = {};
  d.custom = [
    { id: uuid(), title: "Quick check: e.g. or i.e.?", kind: "quiz", courses: ["11A", "12G"], topic: "Ch 1 · Money… Talks!", published: true, created_at: ago(5), updated_at: ago(5),
      data: { intro: "Choose the right abbreviation for each sentence.", qs: [
        ["Bring something to write with, ___ a pen or a pencil.", ["e.g.", "i.e.", "etc."], 0, "A pen and a pencil are examples, so e.g."],
        ["Meet me at noon, ___ 12 o'clock.", ["e.g.", "i.e.", "vs."], 1, "12 o'clock explains noon, so i.e. (that is)."],
        ["She is an entrepreneur, ___ she started her own company.", ["i.e.", "e.g.", "etc."], 0, "The second part explains the first, so i.e."]] } },
    { id: uuid(), title: "Weekend reading (draft)", kind: "reading", courses: ["11G"], topic: "", published: false, created_at: ago(2), updated_at: ago(2),
      data: { text: "Draft text. Not visible to students yet.", qs: [["Is this published?", ["No", "Yes", "Maybe"], 0, "Drafts are hidden from students."]] } },
  ];
  d.feedback = [{ id: uuid(), user_id: huda.id, kind: "idea", title: "Add audio to reading texts", details: "Students in 12G1 would benefit from hearing the reading passages read aloud.", status: "new", reply: null, created_at: ago(20) }];
  [[0, 9, "Great use of linking words."], [1, 7, "Check your verb tenses in the second half."], [2, null, null], [4, 8, "Clear and well organised."]].forEach(([i, score, feedback]) => {
    d.submissions.push({ id: uuid(), assignment_id: a1.id, student_id: st[i].id, note: "Here is my paragraph.", file_name: "paragraph.docx", file_path: null, submitted_at: ago(i === 2 ? 15 : 30 + i), score, feedback, graded_at: score == null ? null : ago(18) });
  });
  d.submissions.push({ id: uuid(), assignment_id: a2.id, student_id: st[1].id, note: "Worksheet done.", file_name: "worksheet-omar.pdf", file_path: null, submitted_at: ago(3), score: null, feedback: null, graded_at: null });
  const acts = ["Grammar Lab", "Reading Detective", "Vocabulary Lab", "Maze Challenge"];
  st.forEach((s, i) => { for (let k = 0; k < 3 + (i % 3); k++) d.practice.push({ id: uuid(), student_id: s.id, activity: acts[(i + k) % 4], chapter: 1 + (k % 2), score: 4 + ((i + k) % 5), total: acts[(i + k) % 4] === "Maze Challenge" ? 10 : 8, created_at: ago(k * 9 + i * 2 + 1) }); });
  return d;
})();
let demoMe = null;
const demoManages = (cid) => ["admin", SA].includes(demoMe.role) || DB.classes.some((c) => c.id === cid && c.teacher_id === demoMe.id);
const demoCanTouch = (u, op) => {
  if (!u || u.id === demoMe.id) return false;
  if (demoMe.role === SA) return true;
  if (demoMe.role === "admin") return u.role === "student" || u.role === "teacher";
  if (op === "delete") return false;
  return u.role === "student" && demoManages(u.class_id);
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DEMOAPI = {
  async session() { return demoMe; },
  async signIn(u, p) {
    await sleep(150);
    const x = DB.users.find((v) => v.username === u.trim().toLowerCase() && v.password === p);
    if (!x) throw new Error("That username or password is not correct.");
    if (x.disabled) throw new Error("This account is disabled. Please speak to your teacher.");
    x.last_seen_at = new Date().toISOString();
    return (demoMe = x);
  },
  async me() { return demoMe; },
  async signOut() { demoMe = null; },
  async classes() {
    const mine = [SA, "admin"].includes(demoMe.role) ? DB.classes : demoMe.role === "teacher" ? DB.classes.filter((c) => c.teacher_id === demoMe.id) : DB.classes.filter((c) => c.id === demoMe.class_id);
    return [...mine].sort((a, b) => a.grade - b.grade || a.track.localeCompare(b.track) || a.section.localeCompare(b.section));
  },
  async studentCounts() { const m = {}; DB.users.forEach((u) => { if (u.role === "student" && u.class_id) m[u.class_id] = (m[u.class_id] || 0) + 1; }); return m; },
  async createClass(c) {
    if (DB.classes.some((x) => x.grade === c.grade && x.track === c.track && x.section === c.section)) throw new Error("That class already exists.");
    const x = { id: uuid(), ...c }; DB.classes.push(x); return x;
  },
  async updateClass(id, patch) { Object.assign(DB.classes.find((c) => c.id === id), patch); },
  async deleteClass(id) { DB.classes = DB.classes.filter((c) => c.id !== id); DB.users.forEach((u) => { if (u.class_id === id) u.class_id = null; }); DB.assignments = DB.assignments.filter((a) => a.class_id !== id); },
  async students(cid) { return DB.users.filter((u) => u.role === "student" && u.class_id === cid).sort((a, b) => a.full_name.localeCompare(b.full_name)); },
  async staff() { return ["admin", SA, "teacher"].includes(demoMe.role) ? DB.users.filter((u) => u.role !== "student" && (u.role !== SA || demoMe.role === SA)) : []; },
  async joinSessions() { return Object.entries(DB.joinSessions).map(([g, x]) => ({ grade: +g, ...x })); },
  async setJoinSession(grade, open) {
    if (!["admin", SA].includes(demoMe.role) && !DB.classes.some((c) => c.grade === grade && c.teacher_id === demoMe.id)) throw new Error("You don't teach this grade.");
    DB.joinSessions[grade] = { open, changed_by: demoMe.id, changed_at: new Date().toISOString() };
  },
  _joinCtx(grade) {
    const classes = DB.classes.filter((c) => c.grade === +grade).sort((a, b) => a.track.localeCompare(b.track) || a.section.localeCompare(b.section)).map((c) => ({ id: c.id, code: classCode(c) }));
    if (!classes.length) throw new Error("This joining link is not valid.");
    return { classes, open: !!DB.joinSessions[grade]?.open };
  },
  _free(full_name, wanted) {
    const first = String(full_name).trim().split(/\s+/)[0] || "";
    let base = first.normalize("NFKD").replace(/[^a-zA-Z]/g, "").toLowerCase().slice(0, 20);
    if (base.length < 2) base = "student";
    const taken = (u) => DB.users.some((x) => x.username === u);
    if (wanted && new RegExp(`^${base}\\d{4}$`).test(wanted) && !taken(wanted)) return wanted;
    let u; do { u = base + (1000 + Math.floor(Math.random() * 9000)); } while (taken(u));
    return u;
  },
  async joinInfo(grade) { await sleep(120); const { classes, open } = this._joinCtx(grade); return open ? { grade: +grade, open, classes } : { grade: +grade, open }; },
  async joinSuggest(grade, full_name) { if (!this._joinCtx(grade).open) throw new Error("Joining is closed."); return { username: this._free(full_name) }; },
  async joinRegister(grade, r) {
    await sleep(150);
    const { classes, open } = this._joinCtx(grade);
    if (!open) throw new Error(`Joining for Grade ${grade} is closed right now. Please ask your teacher to start the session.`);
    const full_name = String(r.full_name || "").trim().replace(/\s+/g, " ");
    const cls = classes.find((c) => c.id === r.class_id);
    if (full_name.length < 2) throw new Error("Please type your full name.");
    if (!cls) throw new Error("Please choose your class from the list.");
    if (String(r.password).length < 6) throw new Error("Your password must be at least 6 characters.");
    if (DB.users.some((u) => u.role === "student" && u.class_id === cls.id && u.full_name.toLowerCase() === full_name.toLowerCase()))
      throw new Error(`A student with this name is already registered in ${cls.code}. If this is you, choose Login. If you forgot your password, ask your teacher.`);
    const username = this._free(full_name, r.username);
    DB.users.push({ id: uuid(), full_name, username, role: "student", class_id: cls.id, password: r.password, disabled: false, last_seen_at: null, created_at: new Date().toISOString() });
    return { ok: true, username, class: cls.code };
  },
  async createStudents(class_id, list) {
    if (!demoManages(class_id)) throw new Error("You do not manage this class.");
    return { results: list.map((s) => {
      if (s.auto) while (DB.users.some((u) => u.username === s.username)) s.username = s.username.replace(/\d{4}$/, "") + (1000 + Math.floor(Math.random() * 9000));
      if (DB.users.some((u) => u.username === s.username)) return { username: s.username, error: "This username is already taken." };
      const u = { id: uuid(), full_name: s.full_name, username: s.username, role: "student", class_id, password: s.password, last_seen_at: null }; DB.users.push(u);
      return { username: s.username, id: u.id, ok: true };
    }) };
  },
  async addExistingStudent(username, class_id) {
    if (!demoManages(class_id)) throw new Error("You do not manage this class.");
    const s = DB.users.find((u) => u.username === String(username).trim().toLowerCase() && u.role === "student");
    if (!s) throw new Error("No student account has that username.");
    if (s.class_id === class_id) throw new Error(`${s.full_name} is already in this class.`);
    if (s.class_id && !demoManages(s.class_id)) throw new Error(`${s.full_name} is in another teacher's class. Ask an admin to move them.`);
    s.class_id = class_id; return { ok: true, full_name: s.full_name };
  },
  async createStaff(t) {
    const adm = ["admin", SA].includes(demoMe.role);
    if (!adm) throw new Error("Only an admin can add teachers.");
    if (t.role !== "teacher" && demoMe.role !== SA) throw new Error("You do not have permission to add this kind of account.");
    if (!/^[a-z0-9][a-z0-9._-]{2,39}$/.test(t.username)) throw new Error("Username must be 3–40 letters, numbers, dots or dashes.");
    if (DB.users.some((u) => u.username === t.username)) throw new Error("This username is already taken.");
    const u = { id: uuid(), full_name: t.full_name, username: t.username, role: t.role, password: t.password, class_id: null, disabled: false, last_seen_at: null };
    DB.users.push(u); return { ok: true, id: u.id };
  },
  async resetPasswords(items) {
    return { results: items.map((it) => { const u = DB.users.find((x) => x.id === it.id);
      if (!demoCanTouch(u, "reset")) return { user_id: it.id, error: "Not allowed" }; u.password = it.password; return { user_id: it.id, ok: true }; }) };
  },
  async setDisabled(ids, disabled) {
    return { results: ids.map((id) => { const u = DB.users.find((x) => x.id === id);
      if (!demoCanTouch(u, "disable")) return { user_id: id, error: "Not allowed" }; u.disabled = disabled; return { user_id: id, ok: true }; }) };
  },
  async deleteUsers(ids) {
    if (!["admin", SA].includes(demoMe.role)) throw new Error("Only an admin can permanently delete accounts. You can disable them instead.");
    return { results: ids.map((id) => { const u = DB.users.find((x) => x.id === id);
      if (!demoCanTouch(u, "delete")) return { user_id: id, error: "Not allowed" };
      DB.users = DB.users.filter((x) => x.id !== id); DB.submissions = DB.submissions.filter((s) => s.student_id !== id); DB.practice = DB.practice.filter((p) => p.student_id !== id);
      DB.classes.forEach((c) => { if (c.teacher_id === id) c.teacher_id = null; });
      return { user_id: id, ok: true }; }) };
  },
  async setRole(id, role) {
    if (demoMe.role !== SA) throw new Error("You do not have permission to change roles.");
    const u = DB.users.find((x) => x.id === id); if (!u || u.id === demoMe.id || u.role === "student") throw new Error("This account's role cannot be changed here.");
    u.role = role;
  },
  async changeOwnPassword(cur, next) { if (demoMe.password !== cur) throw new Error("Your current password is not correct."); demoMe.password = next; },
  async lessons() {
    const adm = ["admin", SA].includes(demoMe.role);
    return DB.lessons.filter((l) => adm || DB.lesson_targets.some((t) => t.lesson_id === l.id && (t.teacher_id === demoMe.id || (t.class_id && (demoManages(t.class_id) || t.class_id === demoMe.class_id)))))
      .map((l) => ({ ...l, lesson_targets: DB.lesson_targets.filter((t) => t.lesson_id === l.id) })).sort((a, b) => b.created_at.localeCompare(a.created_at));
  },
  async createLesson(l, file, classIds, teacherIds) {
    if (!["admin", SA].includes(demoMe.role)) throw new Error("Only an admin can upload content.");
    const x = { id: uuid(), created_at: new Date().toISOString(), file_path: null, file_name: null, ...l };
    if (file) { x.file_path = "demo/" + uuid(); x.file_name = file.name; DB.files[x.file_path] = URL.createObjectURL(file); }
    DB.lessons.push(x);
    classIds.forEach((c) => DB.lesson_targets.push({ lesson_id: x.id, class_id: c, teacher_id: null }));
    teacherIds.forEach((t) => DB.lesson_targets.push({ lesson_id: x.id, class_id: null, teacher_id: t }));
  },
  async deleteLesson(l) { DB.lessons = DB.lessons.filter((x) => x.id !== l.id); DB.lesson_targets = DB.lesson_targets.filter((t) => t.lesson_id !== l.id); },
  async customList() {
    if (demoMe.role !== "student") return [...DB.custom].sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    const c = DB.classes.find((x) => x.id === demoMe.class_id), code = c ? c.grade + String(c.track || "").trim().charAt(0).toUpperCase() : "";
    return DB.custom.filter((x) => x.published && x.courses.includes(code));
  },
  async saveCustom(row) {
    if (!["admin", SA].includes(demoMe.role)) throw new Error("You do not have permission to do this.");
    const now = new Date().toISOString();
    if (row.id) { const x = DB.custom.find((y) => y.id === row.id); Object.assign(x, row, { updated_at: now }); return x; }
    const x = { ...row, id: uuid(), created_at: now, updated_at: now }; DB.custom.push(x); return x;
  },
  async deleteCustom(id) {
    if (!["admin", SA].includes(demoMe.role)) throw new Error("You do not have permission to do this.");
    DB.custom = DB.custom.filter((x) => x.id !== id);
  },
  async feedbackList() { const adm = ["admin", SA].includes(demoMe.role); return DB.feedback.filter((f) => adm || f.user_id === demoMe.id).sort((a, b) => b.created_at.localeCompare(a.created_at)); },
  async sendFeedback(f) { DB.feedback.push({ id: uuid(), user_id: demoMe.id, status: "new", reply: null, created_at: new Date().toISOString(), ...f }); },
  async updateFeedback(id, patch) { Object.assign(DB.feedback.find((f) => f.id === id), patch); },
  async moveStudent(id, cid) { DB.users.find((u) => u.id === id).class_id = cid; },
  async assignments(cid) { return DB.assignments.filter((a) => a.class_id === cid).sort((a, b) => b.created_at.localeCompare(a.created_at)); },
  async createAssignment(a, file) {
    const x = { id: uuid(), created_at: new Date().toISOString(), ...a };
    if (file) { x.file_path = "demo/" + uuid(); x.file_name = file.name; DB.files[x.file_path] = URL.createObjectURL(file); }
    DB.assignments.push(x); return x;
  },
  async deleteAssignment(a) { DB.assignments = DB.assignments.filter((x) => x.id !== a.id); DB.submissions = DB.submissions.filter((s) => s.assignment_id !== a.id); },
  async classSubmissions(cid) { const ids = new Set(DB.assignments.filter((a) => a.class_id === cid).map((a) => a.id)); return DB.submissions.filter((s) => ids.has(s.assignment_id)); },
  async mySubmissions(me) { return DB.submissions.filter((s) => s.student_id === me.id); },
  async submit(me, a, file, note, existing) {
    if (existing?.graded_at) throw new Error("This work has already been marked, so it cannot be changed.");
    const s = existing || { id: uuid(), assignment_id: a.id, student_id: me.id, score: null, feedback: null, graded_at: null };
    s.note = note; s.submitted_at = new Date().toISOString();
    if (file) { s.file_path = "demo/" + uuid(); s.file_name = file.name; DB.files[s.file_path] = URL.createObjectURL(file); }
    if (!existing) DB.submissions.push(s);
  },
  async grade(id, score, feedback) { Object.assign(DB.submissions.find((s) => s.id === id), { score, feedback, graded_at: new Date().toISOString() }); },
  async fileUrl(bucket, path) { const u = DB.files[path]; if (!u) throw new Error("In demo mode, sample files cannot be opened."); return u; },
  async savePractice(r) { DB.practice.push({ id: uuid(), student_id: demoMe.id, created_at: new Date().toISOString(), ...r }); },
  async classPractice(cid) { const ids = new Set(DB.users.filter((u) => u.class_id === cid).map((u) => u.id)); return DB.practice.filter((p) => ids.has(p.student_id)).sort((a, b) => b.created_at.localeCompare(a.created_at)); },
  async myPractice(me) { return DB.practice.filter((p) => p.student_id === me.id).sort((a, b) => b.created_at.localeCompare(a.created_at)); },
  async allAssignments() { const ids = new Set((await this.classes()).map((c) => c.id)); return DB.assignments.filter((a) => ids.has(a.class_id)); },
  async allSubmissions() { const ids = new Set((await this.allAssignments()).map((a) => a.id)); return DB.submissions.filter((s) => ids.has(s.assignment_id)); },
  async allStudents() { const ids = new Set((await this.classes()).map((c) => c.id)); return DB.users.filter((u) => u.role === "student" && ids.has(u.class_id)); },
  async recentPractice(since) { const ids = new Set((await this.allStudents()).map((u) => u.id)); return DB.practice.filter((p) => ids.has(p.student_id) && p.created_at >= since); },
};
const API = DEMO ? DEMOAPI : GAS;

/* Grades kept in the system but not shown (archived).
   Change by adding HIDDEN_GRADES: [9, 10] (or []) to config.js. */
const HIDDEN_GRADES = (CFG.HIDDEN_GRADES ?? [9, 10]).map(Number);
const ALL_GRADES = [9, 10, 11, 12];
const showGrade = (g) => (S.me && S.me.role === SA) || !HIDDEN_GRADES.includes(+g);
const visibleGrades = () => ALL_GRADES.filter(showGrade);
const publicGrades = ALL_GRADES.filter((g) => !HIDDEN_GRADES.includes(g));
const loadClasses = async () => (await API.classes()).filter((c) => showGrade(c.grade));

async function openFile(bucket, path) {
  const w = window.open("about:blank", "_blank");
  try { const url = await API.fileUrl(bucket, path); if (w) w.location.href = url; else location.href = url; }
  catch (e) { if (w) w.close(); toast(e.message); }
}

/* ================= state & routing ================= */
const S = { me: null, classes: [], counts: {}, classId: null, view: "overview", tab: "students", openAsg: null, sTab: "home", chapter: 1, pTab: "grammar", newCreds: null };
const actions = {};
const forms = {};
app.addEventListener("click", (e) => {
  const t = e.target.closest("[data-act]");
  if (!t || t.disabled) return;
  if (t.dataset.confirm && !t.dataset.armed) {
    t.dataset.armed = "1"; const old = t.textContent; t.textContent = t.dataset.confirm;
    setTimeout(() => { if (t.isConnected) { delete t.dataset.armed; t.textContent = old; } }, 4000);
    return;
  }
  actions[t.dataset.act]?.(t, e);
});
app.addEventListener("submit", async (e) => {
  const f = e.target.closest("form[data-form]");
  if (!f) return;
  e.preventDefault();
  const btn = f.querySelector("button[type=submit]");
  const err = f.querySelector(".err");
  if (err) err.textContent = "";
  if (btn) btn.disabled = true;
  try { await forms[f.dataset.form](f, new FormData(f)); }
  catch (x) { if (err) err.textContent = x.message; else toast(x.message); }
  finally { if (btn && btn.isConnected) btn.disabled = false; }
});

async function boot() {
  try { S.me = await API.session(); } catch { S.me = null; }
  const jg = joinGradeFromHash();
  if (jg) return renderJoin(jg);
  S.me ? await enter() : renderLogin();
}
window.addEventListener("hashchange", () => { const jg = joinGradeFromHash(); if (jg) renderJoin(jg); });
async function refreshToMark() {
  try { S.toMark = (await API.allSubmissions()).filter((s) => !s.graded_at).length; } catch { S.toMark = 0; }
}
async function enter() {
  S.classes = await loadClasses();
  if (S.me.role === "student") return renderStudent();
  S.counts = await API.studentCounts();
  await refreshToMark();
  if (S.classId && !S.classes.some((c) => c.id === S.classId)) S.classId = null;
  renderStaff();
}

/* ================= login ================= */
function renderLogin(msg = "") {
  app.innerHTML = `
  <main class="login">
    <section class="welcome">
      <div class="brand"><span class="logo">E</span><span>Teacher REJEES DEVASIA<small>English Learning Lab</small></span></div>
      <h1>English <b>Learning</b> Lab</h1>
      <p>Assignments, practice and feedback for Grades ${publicGrades[0]}–${publicGrades[publicGrades.length - 1]}, all in one place. Sign in to see your work.</p>
      <div class="gtiles" style="grid-template-columns:repeat(${publicGrades.length},minmax(0,1fr));max-width:${publicGrades.length * 125}px">${publicGrades.map((g) => `<div class="g${g}"><small>Grade</small><b>${g}</b></div>`).join("")}</div>
      <div class="skills"><span>Grammar</span><span>Reading</span><span>Vocabulary</span><span>Writing</span><span>Maze challenge</span></div>
    </section>
    <section class="signin">
      <div class="signin-tools">${themeSwitch()}</div>
      <form class="card" data-form="login" autocomplete="on">
        <div style="display:grid;gap:6px"><span class="eyebrow">Welcome back</span><h2>Sign in</h2>
          <p class="muted">Use the username and password from your teacher.</p></div>
        <label>Username<input id="login-user" name="u" autocomplete="username" autocapitalize="none" required></label>
        <label>Password<input id="login-pass" name="p" type="password" autocomplete="current-password" required></label>
        <p class="err">${esc(msg)}</p>
        <button class="btn" type="submit">Sign in</button>
        ${DEMO ? `<div class="demo-list"><b>Demo mode: try these logins (password: demo)</b>
          <span><span class="cred">rejees.devasia</span> Admin</span>
          <span><span class="cred">ms.huda</span> Class teacher of 11A1 and 12G1</span>
          <span><span class="cred">student</span> Student in 11A1 · also <span class="cred">student11g</span> (11G1) and <span class="cred">student12</span> (12A1)</span></div>` : `<p class="small muted">Forgot your password? Ask ${esc(CFG.TEACHER_DISPLAY)} to reset it.</p>`}
      </form>
    </section>
  </main>`;
}
forms.login = async (f, fd) => {
  S.me = await API.signIn(fd.get("u"), fd.get("p"));
  if (joinGradeFromHash()) { history.replaceState(null, "", location.pathname + location.search); S.join = null; }
  S.view = "overview"; S.classId = null; S.sTab = "home"; S.badgeI = null; S.pTab = "grammar"; S.chapter = 1; S.gTopic = 0; S.wTask = 0; S.rTask = 0; S.mzI = 0; S.gxOpen = null; S.newCreds = null; S.tbCh = 0; S.tbPart = "learn"; S.custom = null; S.cI = 0; S.ce = null;
  await enter();
};
const currentTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const themeSwitch = () => `<div class="theme-switch" role="group" aria-label="Colour theme">
  <button data-act="theme" data-mode="dark" aria-pressed="${currentTheme() === "dark"}" title="Dark theme">${icon("moon")}<span>Dark</span></button>
  <button data-act="theme" data-mode="light" aria-pressed="${currentTheme() === "light"}" title="Light theme">${icon("sun")}<span>Light</span></button></div>`;
actions.theme = (t) => {
  const next = t.dataset.mode || (currentTheme() === "light" ? "dark" : "light");
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("hub-theme", next); } catch {}
  document.querySelectorAll(".theme-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === next)));
};
actions.logout = async () => { await API.signOut(); S.me = null; renderLogin(); };

const navItem = (act, attrs, label, ic, cur) =>
  `<button class="nav-item" data-act="${act}" ${attrs} aria-current="${cur}">${icon(ic)}<span>${label}</span></button>`;
function frame({ nav, title, crumb }) {
  const roleName = { [SA]: "Full access", admin: "Admin", teacher: "Class teacher", student: "Student" }[S.me.role];
  const staff = S.me.role !== "student";
  app.innerHTML = `${DEMO ? `<div class="demo-banner"><b>Demo mode</b> · sample data only, nothing is saved. Add your server address (API_URL) in config.js to go live.</div>` : ""}
  <div class="shell">
    <aside class="side">
      <div class="brand"><span class="logo">E</span><span>Teacher REJEES DEVASIA<small>English Learning Lab</small></span></div>
      <nav class="navlist" aria-label="Main">${nav}</nav>
      <div class="user-chip"><span class="avatar">${esc(initials(S.me.full_name))}</span>
        <span><b>${esc(S.me.full_name)}</b><small>${roleName}</small></span>
        <button class="iconbtn" data-act="logout" title="Sign out" aria-label="Sign out">${icon("out")}</button></div>
    </aside>
    <div class="mainwrap">
      <header class="head">
        <div><span class="crumb">${crumb}</span><h1>${title}</h1></div>
        <div class="tools">
          ${staff ? `<button class="iconbtn" data-act="nav" data-view="overview" title="Work waiting to be marked" aria-label="${S.toMark || 0} submissions waiting to be marked">${icon("bell")}${S.toMark ? `<span class="dot">${S.toMark}</span>` : ""}</button>` : ""}
          ${themeSwitch()}
        </div>
      </header>
      <main class="main" id="main"></main>
    </div>
  </div>`;
  return document.getElementById("main");
}

/* ================= staff ================= */
const ROLE_NAME = { [SA]: "Full access", admin: "Admin", teacher: "Class teacher", student: "Student" };
const isAdm = () => !!S.me && (S.me.role === "admin" || S.me.role === SA);
const isFull = () => !!S.me && S.me.role === SA;
const today = () => new Date().toISOString().slice(0, 10);
function downloadCSV(name, rows) {
  const csv = rows.map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 8000);
}
function credsPanel(title) {
  const creds = S.newCreds;
  if (!creds) return "";
  const ok = creds.filter((r) => r.ok).length;
  return `<section class="alert green" id="creds">
    <div class="alert-h">${icon("key")}<b>${esc(title)}</b><span class="cnt">${ok}</span>
      <span class="more row"><button class="btn sm" data-act="dlCreds">Download CSV</button>
      <button class="btn ghost sm" data-act="copyCreds">Copy</button><button class="btn ghost sm" data-act="hideCreds">Done</button></span></div>
    <p class="small muted">Passwords are shown only now. Download or copy them before leaving this page. The CSV opens in Excel. You can reset passwords again at any time.</p>
    <div class="tbl-wrap"><table><thead><tr><th>Name</th><th>Class / role</th><th>Username</th><th>Password</th><th></th></tr></thead><tbody>
      ${creds.map((r) => `<tr><td>${esc(r.full_name)}</td><td>${esc(r.group || "")}</td><td><span class="cred">${esc(r.username)}</span></td>
        <td>${r.ok ? `<span class="cred">${esc(r.password)}</span>` : "—"}</td>
        <td>${r.ok ? `<span class="pill done">Ready</span>` : `<span class="err">${esc(r.error || "Failed")}</span>`}</td></tr>`).join("")}
    </tbody></table></div></section>`;
}
const credRows = () => S.newCreds.filter((r) => r.ok);
actions.dlCreds = () => {
  downloadCSV(`${S.credsName || "logins"}-${today()}.csv`,
    [["Name", "Class / role", "Username", "Password", "Sign-in page"], ...credRows().map((r) => [r.full_name, r.group || "", r.username, r.password, location.href.split("#")[0]])]);
  toast("Download started. If nothing happens, use Copy.");
};
actions.copyCreds = () => copyText(["Name\tClass / role\tUsername\tPassword", ...credRows().map((r) => `${r.full_name}\t${r.group || ""}\t${r.username}\t${r.password}`)].join("\n"));
actions.hideCreds = () => { S.newCreds = null; renderStaff(); };

/* ---- selection + bulk actions (scope = "students" | "staff") ---- */
const selected = (scope) => [...document.querySelectorAll(`[data-scope="${scope}"] input.sel:checked`)].map((i) => i.value);
function bulkWire(scope) {
  const box = document.querySelector(`[data-scope="${scope}"]`);
  if (!box) return;
  const all = box.querySelector("input.selall");
  const upd = () => {
    const n = selected(scope).length;
    box.querySelectorAll("[data-needsel]").forEach((b) => (b.disabled = !n));
    const c = box.querySelector(".selcount");
    if (c) c.textContent = n ? `${n} selected` : "Tick names to select";
    if (all) all.checked = n > 0 && n === box.querySelectorAll("input.sel").length;
  };
  if (all) all.onchange = () => { box.querySelectorAll("input.sel").forEach((i) => (i.checked = all.checked)); upd(); };
  box.querySelectorAll("input.sel").forEach((i) => (i.onchange = upd));
  upd();
}
const summary = (results, verb) => {
  const ok = results.filter((r) => r.ok).length, bad = results.length - ok;
  toast(`${ok} account${ok === 1 ? "" : "s"} ${verb}${bad ? ` · ${bad} not allowed or failed` : ""}`);
};
actions.bulkReset = async (t) => {
  const scope = t.dataset.scope, ids = selected(scope);
  if (!ids.length) return toast("Select at least one name first");
  const rows = S._rows[scope];
  const items = ids.map((id) => ({ id, password: newPassword() }));
  try {
    const { results } = await API.resetPasswords(items);
    S.newCreds = items.map((it) => {
      const u = rows.find((r) => r.id === it.id), res = results.find((r) => r.user_id === it.id) || {};
      return { full_name: u.full_name, username: u.username, group: u._group, password: it.password, ok: !!res.ok, error: res.error };
    });
    S.credsName = scope === "staff" ? "staff-logins" : `${scope}-logins`;
    if (scope === "students") { const c = S.classes.find((x) => x.id === S.classId); if (c) S.credsName = `${classCode(c)}-logins`; }
    renderStaff();
  } catch (e) { toast(e.message); }
};
actions.resetAll = (t) => {
  document.querySelectorAll(`[data-scope="${t.dataset.scope}"] input.sel`).forEach((i) => (i.checked = true));
  actions.bulkReset(t);
};
const bulkStatus = (disabled) => async (t) => {
  const ids = selected(t.dataset.scope);
  if (!ids.length) return toast("Select at least one name first");
  try { summary((await API.setDisabled(ids, disabled)).results, disabled ? "disabled" : "enabled"); renderStaff(); } catch (e) { toast(e.message); }
};
actions.bulkDisable = bulkStatus(true);
actions.bulkEnable = bulkStatus(false);
actions.bulkDelete = async (t) => {
  const ids = selected(t.dataset.scope);
  if (!ids.length) return toast("Select at least one name first");
  try { summary((await API.deleteUsers(ids)).results, "deleted"); S.counts = await API.studentCounts(); renderStaff(); } catch (e) { toast(e.message); }
};
const bulkBar = (scope, { canDelete }) => `<div class="bulkbar">
  <label class="chk"><input type="checkbox" class="selall" id="selall-${scope}"> Select all</label><span class="selcount small muted"></span>
  <span class="row bulk-actions">
    <button class="btn sm" data-act="bulkReset" data-scope="${scope}" data-needsel data-confirm="Click again to reset">${icon("key")} Reset password &amp; download</button>
    <button class="btn ghost sm" data-act="bulkDisable" data-scope="${scope}" data-needsel>Disable</button>
    <button class="btn ghost sm" data-act="bulkEnable" data-scope="${scope}" data-needsel>Enable</button>
    ${canDelete ? `<button class="btn danger sm" data-act="bulkDelete" data-scope="${scope}" data-needsel data-confirm="Click again to delete for good">Delete permanently</button>` : ""}
  </span></div>`;
const statusPill = (u) => (u.disabled ? `<span class="pill late">Disabled</span>` : `<span class="pill done">Active</span>`);

/* ---- frame + navigation ---- */
function renderStaff() {
  const groups = {};
  S.classes.forEach((c) => (groups[c.grade] ||= []).push(c));
  const adm = isAdm();
  const nav = navItem("nav", 'data-view="overview"', "Dashboard", "grid", S.view === "overview")
    + `<div class="nav-group"><div class="nav-label">${icon("class")}<span>${adm ? "All classes" : "My classes"}</span><span class="n">${S.classes.length}</span></div>
      ${Object.entries(groups).map(([g, list]) => `<div class="tree g${g}"><span class="tree-h">Grade ${g}${HIDDEN_GRADES.includes(+g) ? " · hidden" : ""}</span><div class="tree-items">
        ${list.map((c) => `<button class="leaf" data-act="pick" data-id="${c.id}" aria-current="${S.view === "class" && S.classId === c.id}" title="${esc(className(c))}">${esc(classCode(c))}<small>${S.counts[c.id] || 0}</small></button>`).join("")}
      </div></div>`).join("") || `<p class="small muted" style="padding-left:12px">No classes assigned yet.</p>`}</div>`
    + navItem("nav", 'data-view="lessons"', "Lessons library", "book", S.view === "lessons")
    + navItem("nav", 'data-view="links"', "Joining links", "key", S.view === "links")
    + navItem("nav", 'data-view="guide"', "Grammar Guide", "abc", S.view === "guide")
    + (adm ? navItem("nav", 'data-view="content"', "Practice editor", "spark", S.view === "content") : "")
    + (adm ? navItem("nav", 'data-view="staff"', "Staff accounts", "users", S.view === "staff") : "")
    + navItem("nav", 'data-view="feedback"', adm ? "Ideas & issues inbox" : "Ideas & issues", "msg", S.view === "feedback")
    + navItem("nav", 'data-view="account"', "My account", "lock", S.view === "account");
  const c = S.classes.find((x) => x.id === S.classId);
  const allowed = ["overview", "lessons", "guide", "links", "feedback", "account", ...(adm ? ["staff", "content"] : []), ...(c ? ["class"] : [])];
  const view = allowed.includes(S.view) ? S.view : "overview";
  const head = {
    overview: { title: `Welcome, ${esc(S.me.full_name.split(" ")[0])}`, crumb: `${ROLE_NAME[S.me.role]} dashboard` },
    class: { title: c ? `${esc(classCode(c))} <span class="muted" style="font-weight:400">· ${esc(className(c))}</span>` : "", crumb: c ? `Classes / Grade ${c.grade}` : "" },
    guide: { title: "Grammar Guide", crumb: "Illustrated grammar for Grades 11–12" },
    links: { title: "Joining links", crumb: "Students sign up and join your class" },
    lessons: { title: "Lessons library", crumb: adm ? "Upload and share content" : "Shared with you and your classes" },
    content: { title: "Practice editor", crumb: "Make practice for students — no code" },
    staff: { title: "Staff accounts", crumb: isFull() ? "Full access" : "Admin" },
    feedback: { title: adm ? "Ideas & issues inbox" : "Ideas & issues", crumb: "Help improve the platform" },
    account: { title: "My account", crumb: ROLE_NAME[S.me.role] },
  }[view];
  const main = frame({ nav, ...head });
  ({ overview, class: classView, links: linksView, guide: (m) => guideView(m, null), lessons: lessonsView, content: contentView, staff: staffView, feedback: feedbackView, account: accountView })[view](main);
}
actions.nav = (t) => { S.view = t.dataset.view; S.ce = null; S.newCreds = null; renderStaff(); };
actions.pick = (t) => { S.view = "class"; S.classId = t.dataset.id; S.tab = "students"; S.openAsg = null; S.newCreds = null; renderStaff(); };

async function overview(main) {
  const adm = isAdm();
  main.innerHTML = `<p class="muted">Loading…</p>`;
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString();
  const [staff, asgs, subs, students, prac] = await Promise.all([adm ? API.staff() : [], API.allAssignments(), API.allSubmissions(), API.allStudents(), API.recentPractice(weekAgo)]);
  const teachers = staff.filter((s) => s.role !== "student");
  const cById = Object.fromEntries(S.classes.map((c) => [c.id, c]));
  students.splice(0, students.length, ...students.filter((st) => cById[st.class_id]));
  const aById = Object.fromEntries(asgs.map((a) => [a.id, a]));
  const name = Object.fromEntries(students.map((s) => [s.id, s.full_name]));
  const now = new Date();
  const toMark = subs.filter((s) => !s.graded_at && aById[s.assignment_id] && cById[aById[s.assignment_id].class_id])
    .sort((a, b) => String(a.submitted_at).localeCompare(String(b.submitted_at)));
  S.toMark = toMark.length;
  const handed = new Set(subs.map((s) => s.assignment_id + "|" + s.student_id));
  let missing = 0;
  asgs.forEach((a) => { if (a.due_at && new Date(a.due_at) < now) students.forEach((st) => { if (st.class_id === a.class_id && !st.disabled && !handed.has(a.id + "|" + st.id)) missing++; }); });
  const active = new Set([...students.filter((st) => st.last_seen_at && st.last_seen_at >= weekAgo).map((st) => st.id), ...prac.map((p) => p.student_id)]).size;
  const upcoming = asgs.filter((a) => a.due_at && new Date(a.due_at) >= now && cById[a.class_id]).sort((a, b) => a.due_at.localeCompare(b.due_at)).slice(0, 6);
  const markBy = {}; toMark.forEach((s) => { const cid = aById[s.assignment_id].class_id; markBy[cid] = (markBy[cid] || 0) + 1; });
  const inClass = (cid) => students.filter((st) => st.class_id === cid).length;
  const tName = Object.fromEntries(teachers.map((s) => [s.id, s.full_name]));
  main.innerHTML = `
    ${isFull() && HIDDEN_GRADES.length ? `<p class="small muted">${icon("lock")} Grades ${HIDDEN_GRADES.join(" and ")} are archived for other accounts. Their classes and data are kept.</p>` : ""}
    <h2 class="sec">${adm ? "School status" : "Class status"}</h2>
    <div class="stats">
      ${stat(adm ? "Classes" : "My classes", S.classes.length, "class", "var(--ink)")}
      ${stat("Students", students.length, "users", "var(--cyan)")}
      ${adm ? stat("Teachers", teachers.filter((t) => t.role === "teacher").length, "users", "var(--violet)") : ""}
      ${stat("Active this week", active, "bolt", "var(--green)", students.length ? `${pct(active, students.length)}% of students` : "")}
      ${stat("To mark", toMark.length, "task", "var(--amber)", "Submitted, not marked")}
      ${stat("Missing work", missing, "alert", "var(--red)", "Warning: past the due date", true)}
    </div>
    <div class="grid2">
      <section class="alert">
        <div class="alert-h">${icon("task")}<b>Marking queue</b><span class="cnt">${toMark.length}</span><span class="muted more">oldest first</span></div>
        ${toMark.length ? `<div class="alert-list">${toMark.slice(0, 6).map((s) => { const a = aById[s.assignment_id], c = cById[a.class_id];
          return `<button class="alert-row" data-act="goMark" data-cid="${c.id}" data-aid="${a.id}"><span class="code g${c.grade}">${esc(classCode(c))}</span>
            <span class="what"><b>${esc(name[s.student_id] || "Student")}</b><small>${esc(a.title)}</small></span><span class="pill sub">${relTime(s.submitted_at)}</span></button>`; }).join("")}</div>
          ${toMark.length > 6 ? `<p class="small muted">+ ${toMark.length - 6} more waiting</p>` : ""}`
        : `<p class="muted small">All caught up. Nothing is waiting to be marked.</p>`}
      </section>
      <section class="alert cyan">
        <div class="alert-h">${icon("clock")}<b>Upcoming deadlines</b><span class="cnt">${upcoming.length}</span></div>
        ${upcoming.length ? `<div class="alert-list">${upcoming.map((a) => { const c = cById[a.class_id], [cl, lbl] = dueLabel(a.due_at);
          const got = subs.filter((s) => s.assignment_id === a.id).length;
          return `<button class="alert-row" data-act="goMark" data-cid="${c.id}" data-aid="${a.id}"><span class="code g${c.grade}">${esc(classCode(c))}</span>
            <span class="what"><b>${esc(a.title)}</b><small>${got}/${inClass(c.id)} handed in · ${fmt(a.due_at)}</small></span><span class="pill ${cl}">${lbl}</span></button>`; }).join("")}</div>`
        : `<p class="muted small">No upcoming deadlines. Open a class to set an assignment.</p>`}
      </section>
    </div>
    <h2 class="sec">${adm ? "All classes" : "My classes"}</h2>
    ${S.classes.length ? `<div class="classgrid">${S.classes.map((c) => `<article class="ccard g${c.grade}">
        <button class="cc-main" data-act="pick" data-id="${c.id}"><span class="cc-code">${esc(classCode(c))}</span><span class="cc-name">Grade ${c.grade} · ${esc(c.track)}-${esc(c.section)}</span></button>
        <div class="cc-meta"><span><b>${S.counts[c.id] || 0}</b> students</span>${markBy[c.id] ? `<span class="pill sub">${markBy[c.id]} to mark</span>` : `<span class="pill done">Up to date</span>`}</div>
        ${adm ? `<select id="tch-${c.id}" data-act-change="setTeacher" data-id="${c.id}" aria-label="Teacher for ${esc(className(c))}">
          <option value="">No teacher</option>${teachers.map((s) => `<option value="${s.id}" ${s.id === c.teacher_id ? "selected" : ""}>${esc(s.full_name)}</option>`).join("")}</select>`
          : ""}
      </article>`).join("")}</div>`
      : `<div class="empty">${adm ? "No classes yet. Create your first class below." : "No classes are assigned to you yet. Please ask an admin to assign your classes."}</div>`}
    ${adm ? `<details class="card" ${S.classes.length ? "" : "open"}><summary>+ Create a new class</summary>
      <form data-form="newClass" style="display:grid;gap:12px">
        <div class="fields">
          <label>Grade<select id="nc-grade" name="grade">${visibleGrades().map((g) => `<option>${g}</option>`).join("")}</select></label>
          <label>Track<input id="nc-track" name="track" list="tracks" placeholder="Advanced" required></label>
          <label>Section<input id="nc-section" name="section" placeholder="1" required></label>
          <label>Teacher<select id="nc-teacher" name="teacher"><option value="">No teacher yet</option>${teachers.map((s) => `<option value="${s.id}">${esc(s.full_name)}</option>`).join("")}</select></label>
        </div>
        <datalist id="tracks">${CFG.TRACKS.map((t) => `<option value="${esc(t)}">`).join("")}</datalist>
        <p class="err"></p>
        <div><button class="btn" type="submit">Create class</button></div>
      </form>
    </details>` : ""}`;
  main.querySelectorAll("[data-act-change=setTeacher]").forEach((sel) => (sel.onchange = async () => {
    try { await API.updateClass(sel.dataset.id, { teacher_id: sel.value || null }); toast(sel.value ? `Class assigned to ${tName[sel.value]}` : "Teacher removed from class"); } catch (e) { toast(e.message); }
  }));
  const dot = document.querySelector(".tools .dot");
  if (dot) dot.textContent = S.toMark;
}
actions.goMark = (t) => { S.view = "class"; S.classId = t.dataset.cid; S.tab = "assignments"; S.openAsg = t.dataset.aid; S.newCreds = null; renderStaff(); };
forms.newClass = async (f, fd) => {
  const c = await API.createClass({ grade: +fd.get("grade"), track: fd.get("track").trim(), section: fd.get("section").trim(), teacher_id: fd.get("teacher") || null });
  toast(`${className(c)} created`);
  S.classes = await loadClasses(); S.view = "class"; S.classId = c.id; S.tab = "students"; renderStaff();
};
actions.delClass = async (t) => {
  try { await API.deleteClass(t.dataset.id); toast("Class deleted"); S.view = "overview"; await enter(); } catch (e) { toast(e.message); }
};

/* ---- one class ---- */
async function classView(main) {
  const c = S.classes.find((x) => x.id === S.classId);
  const tabs = [["students", "Students"], ["assignments", "Assignments"], ["gradebook", "Scores"], ["activity", "Activity"]];
  main.className = "main g" + c.grade;
  main.innerHTML = `
    <div class="stats" id="cstats"></div>
    <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button class="tab" role="tab" data-act="tab" data-tab="${k}" aria-selected="${S.tab === k}">${l}</button>`).join("")}</div>
    <div id="pane" class="pane"><p class="muted">Loading…</p></div>
    ${isAdm() ? `<details class="card"><summary>Class settings</summary>
      <div class="row"><p class="small muted" style="flex:1;min-width:200px">Deleting a class removes its assignments and submitted work. Students stay in the system without a class.</p>
      <button class="btn danger sm" data-act="delClass" data-id="${c.id}" data-confirm="Click again to delete ${esc(classCode(c))}">Delete ${esc(classCode(c))}</button></div>
    </details>` : ""}`;
  const pane = document.getElementById("pane");
  Promise.all([API.students(c.id), API.assignments(c.id), API.classSubmissions(c.id), API.classPractice(c.id)]).then(([st, as, su, pr]) => {
    const box = document.getElementById("cstats"); if (!box) return;
    const week = new Date(Date.now() - 7 * 864e5).toISOString();
    const act = new Set([...st.filter((x) => x.last_seen_at && x.last_seen_at >= week).map((x) => x.id), ...pr.filter((p) => p.created_at >= week).map((p) => p.student_id)]).size;
    box.innerHTML = stat("Students", st.length, "users", "var(--acc)") + stat("Assignments", as.length, "task", "var(--cyan)")
      + stat("To mark", su.filter((x) => !x.graded_at).length, "clock", "var(--amber)") + stat("Active this week", act, "bolt", "var(--green)");
  }).catch(() => {});
  try {
    if (S.tab === "students") await studentsTab(pane, c);
    if (S.tab === "assignments") await assignmentsTab(pane, c);
    if (S.tab === "gradebook") await gradebookTab(pane, c);
    if (S.tab === "activity") await activityTab(pane, c);
  } catch (e) { pane.innerHTML = `<p class="err">${esc(e.message)}</p>`; }
}
actions.tab = (t) => { S.tab = t.dataset.tab; S.openAsg = null; S.newCreds = null; renderStaff(); };

async function studentsTab(pane, c) {
  const [students, practice] = await Promise.all([API.students(c.id), API.classPractice(c.id)]);
  const pc = {}; practice.forEach((p) => (pc[p.student_id] = (pc[p.student_id] || 0) + 1));
  const adm = isAdm(), code = classCode(c);
  S._rows = { ...(S._rows || {}), students: students.map((s) => ({ ...s, _group: code })) };
  pane.innerHTML = `
    ${credsPanel(`Login details · ${code}`)}
    <section class="card top" data-scope="students">
      <div class="spread"><h2>Students (${students.length})</h2>
        ${students.length ? `<button class="btn ghost sm" data-act="resetAll" data-scope="students" data-confirm="Click again: new passwords for all of ${esc(code)}">${icon("key")} Reset all &amp; download class logins</button>` : ""}</div>
      ${students.length ? `${bulkBar("students", { canDelete: adm })}
      <div class="tbl-wrap"><table><thead><tr><th class="cbx"></th><th>Name</th><th>Username</th><th>Status</th><th>Last active</th><th class="num">Practice</th><th>Class</th></tr></thead><tbody>
        ${students.map((s) => `<tr class="${s.disabled ? "dim" : ""}">
          <td class="cbx"><input type="checkbox" class="sel" value="${s.id}" id="sel-${s.id}" aria-label="Select ${esc(s.full_name)}"></td>
          <td>${person(s.full_name)}</td><td><span class="cred">${esc(s.username)}</span></td><td>${statusPill(s)}</td>
          <td>${fmt(s.last_seen_at)}</td><td class="num">${pc[s.id] || 0}</td>
          <td>${S.classes.length > 1 ? `<select id="mv-${s.id}" data-move="${s.id}" aria-label="Class for ${esc(s.full_name)}">${S.classes.map((x) => `<option value="${x.id}" ${x.id === c.id ? "selected" : ""}>${esc(classCode(x))}</option>`).join("")}</select>` : esc(code)}</td></tr>`).join("")}
      </tbody></table></div>
      <p class="small muted">${adm ? "Disabled students cannot sign in, but their work is kept. Delete removes the account and all its work for good." : "Disabled students cannot sign in, but their work is kept. Only an admin can delete an account permanently."}</p>`
      : `<div class="empty">No students in this class yet. Add them below.</div>`}
    </section>
    <div class="grid2">
      <form class="card top" data-form="addStudents">
        <h2>Create new student logins</h2>
        <p class="muted small">One student per line. Write just the full name and the portal makes a username and password, or write <span class="cred">Full name, username, password</span>.</p>
        <label>Students<textarea id="add-students" name="list" placeholder="Aisha Rahman&#10;Omar Saeed, omar.s, river-2041" required></textarea></label>
        <p class="err"></p>
        <div><button class="btn" type="submit">Create logins</button></div>
      </form>
      <form class="card top" data-form="addExisting">
        <h2>Add an existing student</h2>
        <p class="muted small">For a student who already has a login, such as a new transfer. ${adm ? "As an admin you can move a student from any class." : "Students in another teacher's class must be moved by an admin."}</p>
        <label>Student's username<input id="ae-user" name="username" required autocapitalize="none" placeholder="e.g. saeed.a514"></label>
        <p class="err"></p>
        <div><button class="btn" type="submit">Add to ${esc(code)}</button></div>
      </form>
    </div>`;
  bulkWire("students");
  pane.querySelectorAll("[data-move]").forEach((sel) => (sel.onchange = async () => {
    try { await API.moveStudent(sel.dataset.move, sel.value); toast("Student moved"); S.counts = await API.studentCounts(); renderStaff(); }
    catch (e) { toast(e.message); }
  }));
}
forms.addStudents = async (f, fd) => {
  const taken = new Set();
  const list = fd.get("list").split("\n").map((l) => l.trim()).filter(Boolean).map((line) => {
    const [name, user, pass] = line.split(",").map((x) => x.trim());
    return { full_name: name, username: (user || suggestUsername(name, taken)).toLowerCase(), password: pass || newPassword(), auto: !user };
  });
  if (!list.length) throw new Error("Add at least one name.");
  if (list.length > 200) throw new Error("Add up to 200 students at a time.");
  const { results } = await API.createStudents(S.classId, list);
  const code = classCode(S.classes.find((x) => x.id === S.classId));
  S.newCreds = list.map((s, i) => ({ ...s, group: code, ...(results[i] || {}) }));
  S.credsName = `${code}-new-logins`;
  S.counts = await API.studentCounts();
  renderStaff();
};
forms.addExisting = async (f, fd) => {
  const r = await API.addExistingStudent(fd.get("username"), S.classId);
  toast(`${r.full_name} added to the class`);
  S.counts = await API.studentCounts();
  renderStaff();
};

async function assignmentsTab(pane, c) {
  const [asgs, subs, students] = await Promise.all([API.assignments(c.id), API.classSubmissions(c.id), API.students(c.id)]);
  pane.innerHTML = `
    <details class="card" ${asgs.length ? "" : "open"}><summary>+ New assignment for ${esc(className(c))}</summary>
      <form data-form="newAsg" style="display:grid;gap:12px;margin-top:12px">
        <label>Title<input id="na-title" name="title" required placeholder="e.g. Persuasive email"></label>
        <label>Instructions<textarea id="na-ins" name="ins" placeholder="What should students do?"></textarea></label>
        <div class="fields">
          <label>Due date<input id="na-due" name="due" type="datetime-local"></label>
          <label>Marked out of<input id="na-max" name="max" type="number" min="1" value="10" required></label>
          <label>Attach a file (optional)<input id="na-file" name="file" type="file"></label>
        </div>
        <p class="err"></p>
        <div><button class="btn" type="submit">Assign to class</button></div>
      </form>
    </details>
    ${asgs.length ? asgs.map((a) => {
      const mine = subs.filter((s) => s.assignment_id === a.id);
      const marked = mine.filter((s) => s.graded_at).length;
      const open = S.openAsg === a.id;
      return `<section class="card top">
        <div class="spread"><div><h2>${esc(a.title)}</h2><p class="small muted">${fmtDay(a.due_at)} · out of ${a.max_score}</p></div>
          <div class="row"><span class="pill ${mine.length === students.length && students.length ? "done" : "sub"}">${mine.length}/${students.length} submitted</span>
          <span class="pill todo">${marked} marked</span></div></div>
        ${a.instructions ? `<p style="white-space:pre-wrap">${esc(a.instructions)}</p>` : ""}
        <div class="row">
          ${a.file_path ? `<button class="btn ghost sm" data-act="file" data-bucket="assignments" data-path="${esc(a.file_path)}">Open ${esc(a.file_name)}</button>` : ""}
          <button class="btn sm" data-act="openAsg" data-id="${a.id}">${open ? "Hide submissions" : "Mark submissions"}</button>
          <button class="btn danger sm" data-act="delAsg" data-id="${a.id}" data-confirm="Delete with all work?">Delete</button>
        </div>
        ${open ? markingTable(a, mine, students) : ""}
      </section>`;
    }).join("") : `<div class="empty">No assignments yet. Create one above.</div>`}`;
  S._asgs = asgs;
}
function markingTable(a, subs, students) {
  return `<div class="tbl-wrap"><table><thead><tr><th>Student</th><th>Status</th><th>Work</th><th>Score / ${a.max_score}</th><th>Feedback</th><th></th></tr></thead><tbody>
  ${students.map((st) => {
    const s = subs.find((x) => x.student_id === st.id);
    if (!s) return `<tr><td>${person(st.full_name)}</td><td><span class="pill ${a.due_at && new Date(a.due_at) < new Date() ? "late" : "todo"}">${a.due_at && new Date(a.due_at) < new Date() ? "Missing" : "Not yet"}</span></td><td colspan="4" class="muted">—</td></tr>`;
    const late = a.due_at && new Date(s.submitted_at) > new Date(a.due_at);
    return `<tr>
      <td>${person(st.full_name)}</td>
      <td><span class="pill ${s.graded_at ? "done" : "sub"}">${s.graded_at ? "Marked" : "Submitted"}</span>${late ? ` <span class="pill late">Late</span>` : ""}<div class="small muted">${fmt(s.submitted_at)}</div></td>
      <td>${s.file_path ? `<button class="link" data-act="file" data-bucket="submissions" data-path="${esc(s.file_path)}">${esc(s.file_name)}</button>` : s.file_name ? `<span class="small muted">${esc(s.file_name)}</span>` : ""}
        ${s.note ? `<div class="small" style="white-space:pre-wrap;max-width:32ch">${esc(s.note)}</div>` : ""}</td>
      <td><input id="sc-${s.id}" type="number" min="0" max="${a.max_score}" step="0.5" value="${s.score ?? ""}" style="width:90px" aria-label="Score for ${esc(st.full_name)}"></td>
      <td><input id="fb-${s.id}" value="${esc(s.feedback ?? "")}" placeholder="Feedback" style="min-width:180px" aria-label="Feedback for ${esc(st.full_name)}"></td>
      <td><button class="btn sm" data-act="grade" data-id="${s.id}" data-max="${a.max_score}">Save</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
}
forms.newAsg = async (f, fd) => {
  const file = fd.get("file");
  const due = fd.get("due");
  await API.createAssignment({
    class_id: S.classId, title: fd.get("title").trim(), instructions: fd.get("ins").trim(),
    due_at: due ? new Date(due).toISOString() : null, max_score: +fd.get("max"),
  }, file && file.size ? file : null);
  toast("Assignment created");
  renderStaff();
};
actions.openAsg = (t) => { S.openAsg = S.openAsg === t.dataset.id ? null : t.dataset.id; renderStaff(); };
actions.delAsg = async (t) => {
  try { await API.deleteAssignment(S._asgs.find((a) => a.id === t.dataset.id)); toast("Assignment deleted"); renderStaff(); } catch (e) { toast(e.message); }
};
actions.grade = async (t) => {
  const id = t.dataset.id, raw = document.getElementById("sc-" + id).value;
  if (raw === "") return toast("Enter a score first");
  const score = +raw;
  if (score < 0 || score > +t.dataset.max) return toast(`Score must be between 0 and ${t.dataset.max}`);
  try { await API.grade(id, score, document.getElementById("fb-" + id).value.trim()); toast("Mark saved"); await refreshToMark(); renderStaff(); } catch (e) { toast(e.message); }
};
actions.file = (t) => openFile(t.dataset.bucket, t.dataset.path);

async function gradebookTab(pane, c) {
  const [asgs, subs, students, practice] = await Promise.all([API.assignments(c.id), API.classSubmissions(c.id), API.students(c.id), API.classPractice(c.id)]);
  const cols = [...asgs].reverse();
  const now = new Date();
  const rows = students.map((st) => {
    let got = 0, max = 0;
    const raw = [];
    const cells = cols.map((a) => {
      const s0 = subs.find((x) => x.assignment_id === a.id && x.student_id === st.id);
      raw.push(s0 && s0.graded_at ? s0.score : s0 ? "To mark" : a.due_at && new Date(a.due_at) < now ? "Missing" : "");
      const s = subs.find((x) => x.assignment_id === a.id && x.student_id === st.id);
      if (s && s.graded_at) { got += +s.score; max += +a.max_score; return `<td class="num">${s.score}</td>`; }
      if (s) return `<td><span class="pill sub">To mark</span></td>`;
      if (a.due_at && new Date(a.due_at) < now) { max += +a.max_score; return `<td><span class="pill late">Missing</span></td>`; }
      return `<td class="muted">—</td>`;
    });
    const mine = practice.filter((p) => p.student_id === st.id);
    const pAvg = mine.length ? Math.round(mine.reduce((a, p) => a + pct(p.score, p.total), 0) / mine.length) : null;
    return { st, cells, raw, avg: max ? pct(got, max) : null, pAvg, n: mine.length };
  });
  pane.innerHTML = `
    <p class="muted small">Assignment average counts marked work and missing work after the due date. Practice shows each student's average score in the practice activities.</p>
    ${students.length ? `<div class="tbl-wrap"><table><thead><tr><th>Student</th>
      ${cols.map((a) => `<th class="num" title="${esc(a.title)}">${esc(a.title.length > 16 ? a.title.slice(0, 15) + "…" : a.title)}<div class="small">/${a.max_score}</div></th>`).join("")}
      <th class="num">Assignments</th><th class="num">Practice</th></tr></thead><tbody>
      ${rows.map((r) => `<tr><td>${person(r.st.full_name)}</td>${r.cells.join("")}
        <td class="num"><b>${r.avg == null ? "—" : r.avg + "%"}</b></td>
        <td class="num">${r.pAvg == null ? "—" : `${r.pAvg}% <span class="small muted">(${r.n})</span>`}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="row"><button class="btn ghost sm" data-act="copyGrades">Copy table for Excel</button><button class="btn ghost sm" data-act="csvGrades" data-code="${esc(classCode(c))}">Download scores (CSV)</button></div>` : `<div class="empty">No students yet.</div>`}`;
  S._grades = { cols, rows };
}
actions.csvGrades = (t) => {
  const { cols, rows } = S._grades;
  downloadCSV(`scores-${t.dataset.code}-${today()}.csv`, [
    ["Student", "Username", ...cols.map((a) => `${a.title} (/${a.max_score})`), "Assignments %", "Practice %", "Practice activities"],
    ...rows.map((r) => [r.st.full_name, r.st.username, ...r.raw, r.avg ?? "", r.pAvg ?? "", r.n])]);
};
actions.copyGrades = () => {
  const { cols, rows } = S._grades;
  const strip = (h) => h.replace(/<[^>]+>/g, "").trim();
  copyText([["Student", ...cols.map((a) => a.title), "Assignments %", "Practice %"].join("\t"),
    ...rows.map((r) => [r.st.full_name, ...r.cells.map(strip), r.avg ?? "", r.pAvg ?? ""].join("\t"))].join("\n"));
};

async function activityTab(pane, c) {
  const [asgs, subs, students, practice] = await Promise.all([API.assignments(c.id), API.classSubmissions(c.id), API.students(c.id), API.classPractice(c.id)]);
  const name = (id) => students.find((s) => s.id === id)?.full_name || "A student";
  const title = (id) => asgs.find((a) => a.id === id)?.title || "an assignment";
  const items = [
    ...subs.map((s) => ({ t: s.submitted_at, html: `<b>${esc(name(s.student_id))}</b> submitted <i>${esc(title(s.assignment_id))}</i>`, tag: `<span class="pill sub">Upload</span>` })),
    ...practice.map((p) => ({ t: p.created_at, html: `<b>${esc(name(p.student_id))}</b> scored ${p.score}/${p.total} in ${esc(p.activity)}${p.chapter ? ` · Ch ${p.chapter}` : ""}`, tag: `<span class="pill done">Practice</span>` })),
  ].sort((a, b) => String(b.t).localeCompare(String(a.t))).slice(0, 80);
  const week = Date.now() - 7 * 864e5;
  const active = students.filter((s) => s.last_seen_at && new Date(s.last_seen_at) > week).length;
  const inactive = students.filter((s) => !s.last_seen_at || new Date(s.last_seen_at) <= week);
  pane.innerHTML = `
    <div class="stats">
      ${stat("Signed in this week", `${active}/${students.length}`, "bolt", "var(--green)")}
      ${stat("Practice this week", practice.filter((p) => new Date(p.created_at) > week).length, "spark", "var(--violet)")}
      ${stat("Uploads this week", subs.filter((s) => new Date(s.submitted_at) > week).length, "task", "var(--cyan)")}
    </div>
    ${inactive.length ? `<section class="alert red"><div class="alert-h">${icon("alert")}<b>Not signed in this week</b><span class="cnt">${inactive.length}</span></div><p class="small">${inactive.map((s) => esc(s.full_name)).join(" · ")}</p></section>` : ""}
    ${items.length ? `<div class="tbl-wrap"><table><thead><tr><th>When</th><th>Type</th><th>What happened</th></tr></thead><tbody>
      ${items.map((i) => `<tr><td style="white-space:nowrap">${fmt(i.t)}</td><td>${i.tag}</td><td>${i.html}</td></tr>`).join("")}
    </tbody></table></div>` : `<div class="empty">No activity yet.</div>`}`;
}

/* ---- admins: staff accounts ---- */
async function staffView(main) {
  const full = isFull();
  const staff = (await API.staff()).sort((a, b) => [SA, "admin", "teacher"].indexOf(a.role) - [SA, "admin", "teacher"].indexOf(b.role) || a.full_name.localeCompare(b.full_name));
  const canTouch = (s) => s.id !== S.me.id && (full || s.role === "teacher");
  S._rows = { ...(S._rows || {}), staff: staff.map((s) => ({ ...s, _group: ROLE_NAME[s.role] })) };
  const groups = {};
  S.classes.forEach((c) => (groups[c.grade] ||= []).push(c));
  const tName = Object.fromEntries(staff.map((s) => [s.id, s.full_name]));
  main.innerHTML = `
    ${credsPanel("Staff login details")}
    <section class="card top" data-scope="staff">
      <div class="spread"><h2>Staff (${staff.length})</h2><span class="small muted">${full ? "You can manage every account except your own." : "You can manage teacher accounts."}</span></div>
      ${bulkBar("staff", { canDelete: true })}
      <div class="tbl-wrap"><table><thead><tr><th class="cbx"></th><th>Name</th><th>Username</th><th>Role</th><th>Classes</th><th>Status</th><th>Last active</th></tr></thead><tbody>
        ${staff.map((s) => { const mine = S.classes.filter((c) => c.teacher_id === s.id);
          return `<tr class="${s.disabled ? "dim" : ""}">
          <td class="cbx">${canTouch(s) ? `<input type="checkbox" class="sel" value="${s.id}" id="sel-${s.id}" aria-label="Select ${esc(s.full_name)}">` : ""}</td>
          <td>${person(s.full_name)}${s.id === S.me.id ? ` <span class="small muted">(you)</span>` : ""}</td><td><span class="cred">${esc(s.username)}</span></td>
          <td>${full && s.id !== S.me.id ? `<select id="role-${s.id}" data-role="${s.id}" aria-label="Role for ${esc(s.full_name)}">${["teacher", "admin", SA].map((r) => `<option value="${r}" ${r === s.role ? "selected" : ""}>${ROLE_NAME[r]}</option>`).join("")}</select>` : ROLE_NAME[s.role]}</td>
          <td>${mine.length ? mine.map((c) => `<span class="code g${c.grade}">${esc(classCode(c))}</span>`).join(" ") : `<span class="muted small">None</span>`}</td>
          <td>${statusPill(s)}</td><td>${fmt(s.last_seen_at)}</td></tr>`; }).join("")}
      </tbody></table></div>
      <p class="small muted">To change a class's teacher, use the dropdown on each class card on the Dashboard.</p>
    </section>
    <form class="card top" data-form="newStaff">
      <h2>Add a ${full ? "teacher or admin" : "teacher"}</h2>
      <div class="fields">
        <label>Full name<input id="ns-name" name="name" required></label>
        <label>Username<input id="ns-user" name="user" required autocapitalize="none" placeholder="e.g. fatima.ali"></label>
        <label>Password<input id="ns-pass" name="pass" required minlength="6" value="${newPassword()}"></label>
        ${full ? `<label>Role<select id="ns-role" name="role"><option value="teacher">Class teacher</option><option value="admin">Admin</option><option value="${SA}">Full access</option></select></label>` : ""}
      </div>
      <fieldset class="classpick"><legend>Assign classes now (optional)</legend>
        ${Object.entries(groups).map(([g, list]) => `<div class="pickrow g${g}"><span class="tree-h">Grade ${g}</span>
          ${list.map((c) => `<label class="chk pick"><input type="checkbox" name="cls" value="${c.id}" id="ns-c-${c.id}"><span>${esc(classCode(c))}</span><small>${c.teacher_id ? esc(tName[c.teacher_id] || "Assigned") : "No teacher"}</small></label>`).join("")}</div>`).join("")}
      </fieldset>
      <p class="err"></p>
      <div><button class="btn" type="submit">Create account</button></div>
    </form>`;
  bulkWire("staff");
  main.querySelectorAll("[data-role]").forEach((sel) => (sel.onchange = async () => {
    try { await API.setRole(sel.dataset.role, sel.value); toast("Role updated"); renderStaff(); } catch (e) { toast(e.message); renderStaff(); }
  }));
}
forms.newStaff = async (f, fd) => {
  const t = { full_name: fd.get("name").trim(), username: fd.get("user").trim().toLowerCase(), password: fd.get("pass"), role: fd.get("role") || "teacher" };
  const r = await API.createStaff(t);
  const cls = fd.getAll("cls");
  for (const cid of cls) await API.updateClass(cid, { teacher_id: r.id });
  S.newCreds = [{ ...t, group: ROLE_NAME[t.role], ok: true }]; S.credsName = `${t.username}-login`;
  S.classes = await loadClasses();
  toast(`Account created${cls.length ? ` and ${cls.length} class${cls.length > 1 ? "es" : ""} assigned` : ""}`);
  renderStaff();
};

/* ---- lessons library ---- */
async function lessonsView(main, forStudent = false) {
  const adm = !forStudent && isAdm();
  const [lessons, staff] = await Promise.all([API.lessons(), adm ? API.staff() : []]);
  const cById = Object.fromEntries(S.classes.map((c) => [c.id, c]));
  const sName = Object.fromEntries(staff.map((s) => [s.id, s.full_name]));
  const groups = {};
  S.classes.forEach((c) => (groups[c.grade] ||= []).push(c));
  const targets = (l) => (l.lesson_targets || []).map((t) =>
    t.class_id ? (cById[t.class_id] ? `<span class="code g${cById[t.class_id].grade}">${esc(classCode(cById[t.class_id]))}</span>` : "")
      : `<span class="code">${esc(t.teacher_id === S.me.id ? "You" : sName[t.teacher_id] || "Teacher")}</span>`).join(" ");
  S._lessons = lessons;
  main.innerHTML = `
    ${adm ? `<details class="card" ${lessons.length ? "" : "open"}><summary>+ Upload new content</summary>
      <form data-form="newLesson" style="display:grid;gap:12px">
        <div class="fields">
          <label>Title<input id="nl-title" name="title" required placeholder="e.g. Unit 1 vocabulary list"></label>
          <label>Grade<select id="nl-grade" name="grade"><option value="">Any grade</option>${visibleGrades().map((g) => `<option>${g}</option>`).join("")}</select></label>
        </div>
        <label>Description<textarea id="nl-desc" name="desc" style="min-height:70px" placeholder="What is it and how should it be used?"></textarea></label>
        <div class="fields">
          <label>File (PDF, slides, worksheet, audio…)<input id="nl-file" name="file" type="file"></label>
          <label>Or a web link<input id="nl-link" name="link" type="url" placeholder="https://"></label>
        </div>
        <fieldset class="classpick"><legend>Share with classes (their teachers and students will see it)</legend>
          ${Object.entries(groups).map(([g, list]) => `<div class="pickrow g${g}"><button type="button" class="tree-h linkish" data-act="pickGrade" data-g="${g}">Grade ${g} · all</button>
            ${list.map((c) => `<label class="chk pick"><input type="checkbox" name="lc" value="${c.id}" data-grade="${c.grade}" id="nl-c-${c.id}"><span>${esc(classCode(c))}</span></label>`).join("")}</div>`).join("")}
        </fieldset>
        <fieldset class="classpick"><legend>Share with teachers only (as teaching material)</legend>
          <div class="pickrow">${staff.filter((s) => s.role !== "student").map((s) => `<label class="chk pick"><input type="checkbox" name="lt" value="${s.id}" id="nl-t-${s.id}"><span>${esc(s.full_name)}</span></label>`).join("")}</div>
        </fieldset>
        <p class="err"></p>
        <div><button class="btn" type="submit">Upload and share</button></div>
      </form></details>` : ""}
    ${lessons.length ? `<div class="lessons">${lessons.map((l) => `<article class="card top lesson">
        <div class="spread"><h3>${esc(l.title)}</h3>${l.grade ? `<span class="pill later">Grade ${l.grade}</span>` : ""}</div>
        ${l.description ? `<p class="small" style="white-space:pre-wrap">${esc(l.description)}</p>` : ""}
        <div class="row">
          ${l.file_path ? `<button class="btn sm" data-act="file" data-bucket="lessons" data-path="${esc(l.file_path)}">${icon("book")} Open ${esc(l.file_name || "file")}</button>` : ""}
          ${l.link_url ? `<a class="btn ghost sm" href="${esc(l.link_url)}" target="_blank" rel="noopener">Open link</a>` : ""}
        </div>
        ${forStudent ? "" : `<div class="small muted row">Shared with: ${targets(l) || "nobody yet"}</div>`}
        ${adm ? `<div><button class="btn danger sm" data-act="delLesson" data-id="${l.id}" data-confirm="Click again to delete">Delete</button></div>` : ""}
      </article>`).join("")}</div>`
      : `<div class="empty">${adm ? "No content uploaded yet." : "Nothing has been shared with you yet."}</div>`}`;
}
actions.pickGrade = (t) => {
  const boxes = [...document.querySelectorAll(`input[name=lc][data-grade="${t.dataset.g}"]`)];
  const on = !boxes.every((b) => b.checked);
  boxes.forEach((b) => (b.checked = on));
};
forms.newLesson = async (f, fd) => {
  const file = fd.get("file"), link = String(fd.get("link") || "").trim();
  const lc = fd.getAll("lc"), lt = fd.getAll("lt");
  if (!(file && file.size) && !link) throw new Error("Add a file or a web link.");
  if (link && !/^https:\/\//i.test(link)) throw new Error("Web links must start with https://");
  if (file && file.size > 50 * 1024 * 1024) throw new Error("Files can be up to 50 MB.");
  if (!lc.length && !lt.length) throw new Error("Choose at least one class or teacher to share with.");
  await API.createLesson({ title: fd.get("title").trim(), description: fd.get("desc").trim(), grade: fd.get("grade") ? +fd.get("grade") : null, link_url: link || null },
    file && file.size ? file : null, lc, lt);
  toast("Content uploaded and shared");
  renderStaff();
};
actions.delLesson = async (t) => {
  try { await API.deleteLesson(S._lessons.find((l) => l.id === t.dataset.id)); toast("Deleted"); renderStaff(); } catch (e) { toast(e.message); }
};

/* ---- Practice editor (admin): make practice without code ---- */
const CE_KINDS = { quiz: "Quiz (multiple choice)", reading: "Reading + questions", words: "Word cards + quiz", writing: "Writing task" };
const CE_LINKS = ["first", "then", "also", "because", "so", "but", "however", "for example", "finally", "in conclusion", "although", "moreover", "in addition", "while", "whereas"];
const courseCode = (c) => c.grade + String(c.track || "").trim().charAt(0).toUpperCase();
const courseOptions = () => {
  const m = new Map();
  S.classes.filter((c) => showGrade(c.grade)).forEach((c) => m.set(courseCode(c), `Grade ${c.grade} ${String(c.track || "").trim()}`));
  return [...m].sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }));
};
const blankQ = () => ["", ["", "", "", ""], 0, ""];
const blankItem = (kind = "quiz") => ({ title: "", kind, courses: [], topic: "", published: false,
  data: kind === "words" ? { words: [] } : kind === "writing" ? { prompt: "", min: 80, max: 150, keywords: [], model: "" } : { intro: "", text: "", qs: [blankQ()] } });

async function contentView(main) {
  if (S.ce) return editorForm(main);
  const list = await API.customList();
  S._custom = list;
  const opts = Object.fromEntries(courseOptions());
  main.innerHTML = `
    <div class="card top spread"><div><h3 style="margin:0">Make new practice</h3>
      <p class="small muted" style="margin:4px 0 0">Build quizzes, readings, word cards and writing tasks with a simple form. Students see them in Practice → <b>From your teacher</b> after you publish.</p></div>
      <div class="row">${Object.entries(CE_KINDS).map(([k, l]) => `<button class="btn sm" data-act="ceNew" data-kind="${k}">+ ${l}</button>`).join("")}</div></div>
    ${list.length ? `<div class="lessons">${list.map((x) => `<article class="card top lesson">
        <div class="spread"><h3>${esc(x.title)}</h3>${x.published ? `<span class="pill done">Published</span>` : `<span class="pill todo">Draft</span>`}</div>
        <p class="small muted">${esc(CE_KINDS[x.kind])} · ${ceCount(x)}${x.topic ? ` · ${esc(x.topic)}` : ""} · updated ${relTime(x.updated_at)}</p>
        <div class="row small">For: ${x.courses.length ? x.courses.map((c) => `<span class="code" title="${esc(opts[c] || c)}">${esc(c)}</span>`).join(" ") : `<span class="muted">no course chosen</span>`}</div>
        <div class="row">
          <button class="btn sm" data-act="ceEdit" data-id="${x.id}">Edit</button>
          <button class="btn ghost sm" data-act="cePreview" data-id="${x.id}">Preview</button>
          <button class="btn ghost sm" data-act="cePub" data-id="${x.id}">${x.published ? "Hide from students" : "Publish"}</button>
          <button class="btn danger sm" data-act="ceDel" data-id="${x.id}" data-confirm="Click again to delete">Delete</button>
        </div></article>`).join("")}</div>`
      : `<div class="empty">No practice made yet. Choose a type above to start.</div>`}
    <div id="ce-preview"></div>`;
}
const ceCount = (x) => x.kind === "words" ? `${x.data.words.length} words` : x.kind === "writing" ? `${x.data.min}–${x.data.max} words` : `${x.data.qs.length} questions`;

function qBuilder(qs) {
  return `<div class="ce-qs">${qs.map((q, i) => `<fieldset class="ce-q"><legend>Question ${i + 1}</legend>
      <label>Question<textarea name="q${i}" required placeholder="Type the question. Use ___ for a gap.">${esc(q[0])}</textarea></label>
      <div class="ce-opts">${[0, 1, 2, 3].map((j) => `<label class="ce-opt"><input type="radio" name="a${i}" value="${j}" ${q[2] === j ? "checked" : ""} aria-label="Correct answer ${"ABCD"[j]}"><span>${"ABCD"[j]}</span>
        <input name="o${i}_${j}" value="${esc(q[1][j] || "")}" ${j < 2 ? "required" : ""} placeholder="${j < 2 ? "Answer " + "ABCD"[j] : "Answer " + "ABCD"[j] + " (optional)"}"></label>`).join("")}</div>
      <p class="small muted">Tick the circle next to the correct answer. Answers are mixed up on screen.</p>
      <label>Why is it correct? (shown after answering)<input name="w${i}" value="${esc(q[3] || "")}" placeholder="Short explanation"></label>
      ${qs.length > 1 ? `<div><button type="button" class="btn ghost sm" data-act="ceDelQ" data-i="${i}">Remove question</button></div>` : ""}
    </fieldset>`).join("")}
    <div><button type="button" class="btn ghost sm" data-act="ceAddQ">+ Add question</button></div></div>`;
}

function editorForm(main) {
  const x = S.ce, d = x.data;
  const body = {
    quiz: () => `<label>Instructions for students (optional)<input name="intro" value="${esc(d.intro || "")}" placeholder="e.g. Choose the correct word."></label>${qBuilder(d.qs)}`,
    reading: () => `<label>Reading text<textarea name="text" required style="min-height:220px" placeholder="Paste or type the text. Leave an empty line between paragraphs.">${esc(d.text || "")}</textarea></label>${qBuilder(d.qs)}`,
    words: () => `<label>Words and meanings — one per line, like this:  <code>word = meaning</code><textarea name="words" required style="min-height:240px" placeholder="sustainable = able to continue for a long time&#10;donation = something given to help others">${esc((d.words || []).map(([w, m]) => `${w} = ${m}`).join("\n"))}</textarea></label>
      <p class="small muted">At least 4 words. Students get flip cards and a matching quiz.</p>`,
    writing: () => `<label>Task for students<textarea name="prompt" required style="min-height:110px" placeholder="What should students write? Give the purpose, reader and points to include.">${esc(d.prompt || "")}</textarea></label>
      <div class="fields"><label>Minimum words<input name="min" type="number" min="20" max="600" value="${d.min}" required></label><label>Maximum words<input name="max" type="number" min="30" max="800" value="${d.max}" required></label></div>
      <label>Key words to use (comma separated, at least 2)<input name="keywords" value="${esc((d.keywords || []).join(", "))}" required placeholder="e.g. consumer, advertising, persuade"></label>
      <label>Model answer (optional)<textarea name="model" style="min-height:140px">${esc(d.model || "")}</textarea></label>`,
  }[x.kind]();
  main.innerHTML = `<form class="card top" data-form="ceSave" style="display:grid;gap:14px">
      <div class="spread"><h3 style="margin:0">${x.id ? "Edit" : "New"}: ${esc(CE_KINDS[x.kind])}</h3><button type="button" class="btn ghost sm" data-act="ceBack">← Back to list</button></div>
      <div class="fields"><label>Title<input name="title" required maxlength="120" value="${esc(x.title)}" placeholder="e.g. Ch 3 vocabulary check"></label>
        <label>Topic / chapter (optional)<input name="topic" maxlength="80" value="${esc(x.topic || "")}" placeholder="e.g. Ch 3 · The Way We Live"></label></div>
      <fieldset class="classpick"><legend>Which students? (every section of the course sees it)</legend>
        <div class="pickrow">${courseOptions().map(([c, l]) => `<label class="chk pick"><input type="checkbox" name="courses" value="${c}" ${x.courses.includes(c) ? "checked" : ""}><span>${esc(l)}</span></label>`).join("")}</div></fieldset>
      ${body}
      <label class="chk"><input type="checkbox" name="published" ${x.published ? "checked" : ""}><span>Publish now (students can see it). Leave unticked to save as a draft.</span></label>
      <p class="err"></p>
      <div class="row"><button class="btn" type="submit">Save</button><button type="button" class="btn ghost" data-act="ceBack">Cancel</button></div>
    </form>`;
}
// copy what is typed in the form back into S.ce
function ceRead() {
  const f = document.querySelector('form[data-form="ceSave"]'); if (!f) return;
  const fd = new FormData(f), x = S.ce, d = x.data;
  x.title = String(fd.get("title") || "").trim(); x.topic = String(fd.get("topic") || "").trim();
  x.courses = fd.getAll("courses"); x.published = fd.get("published") === "on";
  if (x.kind === "quiz") d.intro = String(fd.get("intro") || "").trim();
  if (x.kind === "reading") d.text = String(fd.get("text") || "").trim();
  if (x.kind === "quiz" || x.kind === "reading") d.qs = d.qs.map((_, i) => [String(fd.get("q" + i) || "").trim(),
    [0, 1, 2, 3].map((j) => String(fd.get(`o${i}_${j}`) || "").trim()), +(fd.get("a" + i) ?? 0), String(fd.get("w" + i) || "").trim()]);
  if (x.kind === "words") d.words = String(fd.get("words") || "").split("\n").map((l) => l.trim()).filter(Boolean)
    .map((l) => { const k = l.search(/\s*[=:–-]\s+|\s+[=:–-]\s*|=/); return k < 0 ? [l, ""] : [l.slice(0, k).trim(), l.slice(k).replace(/^\s*[=:–-]\s*/, "").trim()]; });
  if (x.kind === "writing") Object.assign(d, { prompt: String(fd.get("prompt") || "").trim(), min: +fd.get("min"), max: +fd.get("max"),
    keywords: String(fd.get("keywords") || "").split(",").map((w) => w.trim().toLowerCase()).filter(Boolean), model: String(fd.get("model") || "").trim() });
}
// clean the item and refuse anything students could not use
function ceClean(x) {
  const d = x.data, out = { title: x.title, kind: x.kind, courses: x.courses, topic: x.topic || null, published: x.published };
  if (x.title.length < 2) throw new Error("Please give it a title.");
  if (!x.courses.length) throw new Error("Choose at least one course (which students will see it).");
  const cleanQs = () => d.qs.map((q, i) => {
    const opts = q[1].map((o, j) => [o, j]).filter(([o]) => o);
    if (!q[0]) throw new Error(`Question ${i + 1}: type the question.`);
    if (opts.length < 2) throw new Error(`Question ${i + 1}: give at least two answers.`);
    const right = opts.findIndex(([, j]) => j === q[2]);
    if (right < 0) throw new Error(`Question ${i + 1}: the correct answer is empty. Tick a filled answer.`);
    return [q[0], opts.map(([o]) => o), right, q[3].replace(/[<>]/g, "")];
  });
  if (x.kind === "quiz") out.data = { intro: d.intro, qs: cleanQs() };
  if (x.kind === "reading") { if (d.text.length < 40) throw new Error("The reading text is too short."); out.data = { text: d.text, qs: cleanQs() }; }
  if (x.kind === "words") {
    const bad = d.words.find(([w, m]) => !w || !m);
    if (bad) throw new Error(`Each line needs a word and a meaning: "${bad[0]}"`);
    if (d.words.length < 4) throw new Error("Add at least 4 words.");
    out.data = { words: d.words };
  }
  if (x.kind === "writing") {
    if (d.prompt.length < 10) throw new Error("Write the task for students.");
    if (!(d.min >= 20 && d.max > d.min)) throw new Error("Maximum words must be more than minimum words.");
    if (d.keywords.length < 2) throw new Error("Give at least 2 key words.");
    out.data = { prompt: d.prompt, min: d.min, max: d.max, keywords: d.keywords, model: d.model };
  }
  return out;
}
actions.ceNew = (t) => { S.ce = blankItem(t.dataset.kind); renderStaff(); };
actions.ceEdit = (t) => { S.ce = JSON.parse(JSON.stringify(S._custom.find((x) => x.id === t.dataset.id))); if (S.ce.data.qs) S.ce.data.qs.forEach((q) => { while (q[1].length < 4) q[1].push(""); }); renderStaff(); };
actions.ceBack = () => { S.ce = null; renderStaff(); };
actions.ceAddQ = () => { ceRead(); if (S.ce.data.qs.length >= 40) return toast("40 questions is the most for one quiz."); S.ce.data.qs.push(blankQ()); renderStaff(); };
actions.ceDelQ = (t) => { ceRead(); S.ce.data.qs.splice(+t.dataset.i, 1); renderStaff(); };
forms.ceSave = async () => {
  ceRead();
  const row = ceClean(S.ce);
  await API.saveCustom(S.ce.id ? { id: S.ce.id, ...row } : row);
  toast(row.published ? "Saved and published" : "Saved as a draft");
  S.ce = null; renderStaff();
};
actions.cePub = async (t) => {
  const x = S._custom.find((y) => y.id === t.dataset.id);
  try { await API.saveCustom({ id: x.id, published: !x.published }); toast(x.published ? "Hidden from students" : "Published"); renderStaff(); } catch (e) { toast(e.message); }
};
actions.ceDel = async (t) => { try { await API.deleteCustom(t.dataset.id); toast("Deleted"); renderStaff(); } catch (e) { toast(e.message); } };
actions.cePreview = (t) => {
  const x = S._custom.find((y) => y.id === t.dataset.id), el = document.getElementById("ce-preview");
  el.innerHTML = `<div class="card top" style="display:grid;gap:14px"><div class="spread"><span class="eyebrow">Student preview · scores are not saved</span><button class="btn ghost sm" data-act="ceClosePv">Close preview</button></div><div id="ce-pv" style="display:grid;gap:16px"></div></div>`;
  customActivity(document.getElementById("ce-pv"), x, false);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
actions.ceClosePv = () => { document.getElementById("ce-preview").innerHTML = ""; };

// shows one admin-made item (used by students and by the preview)
function customActivity(el, x, save = true) {
  const label = save ? `Teacher practice · ${x.title}`.slice(0, 120) : null, d = x.data;
  el.insertAdjacentHTML("beforeend", `<h2>${esc(x.title)}</h2>${x.topic ? `<p class="small muted">${esc(x.topic)}</p>` : ""}`);
  if (x.kind === "quiz") { if (d.intro) el.insertAdjacentHTML("beforeend", `<p class="muted">${esc(d.intro)}</p>`); return quiz(el, d.qs, label, { chapter: null }); }
  if (x.kind === "reading") {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Read the text, then answer the questions.</p><article class="passage">${d.text.split(/\n\s*\n/).map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("")}</article>`);
    return quiz(el, d.qs, label, { keepOrder: true, chapter: null });
  }
  if (x.kind === "words") {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Tap a card to see its meaning, then test yourself below.</p>
      <div class="cards">${d.words.map(([w, m]) => `<button class="flip" aria-label="${esc(w)}"><div class="in"><div class="f">${esc(w)}</div><div class="b">${esc(m)}</div></div></button>`).join("")}</div><h2>Which word matches?</h2>`);
    el.querySelectorAll(".flip").forEach((c) => (c.onclick = () => c.classList.toggle("on")));
    return quiz(el, d.words.map(([w, m]) => [`"${m}"`, [w, ...shuffle(d.words.filter((y) => y[0] !== w)).slice(0, 2).map((y) => y[0])], 0, `<b>${esc(w)}</b>: ${esc(m)}.`]), label, { chapter: null });
  }
  writingBox(el, { title: x.title, prompt: d.prompt, model: d.model, need: { min: d.min, max: d.max, links: CE_LINKS, extra: d.keywords } },
    `custom-${S.me.id}-${x.id}`, save ? "" : "-pv");
}
function teacherPractice(el) {
  const list = S.custom || [], i = Math.min(S.cI || 0, list.length - 1);
  el.innerHTML = subChips(list.map((x) => x.title), i, "cI");
  customActivity(el, list[i]);
}
actions.cI = (t) => { S.cI = +t.dataset.i; renderStudent(); };

/* ---- ideas & issues ---- */
const FB_STATUS = { new: "New", in_progress: "In progress", done: "Done" };
async function feedbackView(main) {
  const adm = isAdm();
  const [list, staff] = await Promise.all([API.feedbackList(), adm ? API.staff() : []]);
  const nm = Object.fromEntries(staff.map((s) => [s.id, s.full_name]));
  main.innerHTML = `
    <form class="card top" data-form="sendFeedback">
      <h2>Share an idea or report a problem</h2>
      <div class="row">
        <label class="chk"><input type="radio" name="kind" value="idea" id="fb-k-idea" checked> Idea or new feature</label>
        <label class="chk"><input type="radio" name="kind" value="bug" id="fb-k-bug"> Problem or bug</label>
      </div>
      <label>Title<input id="fb-title" name="title" required maxlength="120" placeholder="e.g. Add audio to reading texts"></label>
      <label>Details<textarea id="fb-details" name="details" placeholder="For a problem: which page, what you clicked, and what happened. For an idea: what would help you or your students?"></textarea></label>
      <p class="err"></p>
      <div><button class="btn" type="submit">Send</button></div>
    </form>
    <h2 class="sec">${adm ? "Inbox" : "What you have sent"}</h2>
    ${list.length ? list.map((f) => `<section class="card">
      <div class="spread"><div style="display:grid;gap:4px"><div class="row"><span class="pill ${f.kind === "bug" ? "late" : "later"}">${f.kind === "bug" ? "Problem" : "Idea"}</span><b>${esc(f.title)}</b></div>
        <span class="small muted">${adm ? esc(nm[f.user_id] || "Staff") + " · " : ""}${fmt(f.created_at)}</span></div>
        <span class="pill ${f.status === "done" ? "done" : f.status === "in_progress" ? "sub" : "todo"}">${FB_STATUS[f.status]}</span></div>
      ${f.details ? `<p style="white-space:pre-wrap">${esc(f.details)}</p>` : ""}
      ${f.reply && !adm ? `<p class="fb good"><b>Reply:</b> ${esc(f.reply)}</p>` : ""}
      ${adm ? `<div class="row"><select id="fs-${f.id}" aria-label="Status">${Object.entries(FB_STATUS).map(([k, v]) => `<option value="${k}" ${k === f.status ? "selected" : ""}>${v}</option>`).join("")}</select>
        <input id="fr-${f.id}" placeholder="Reply to ${esc(nm[f.user_id] || "staff")} (optional)" value="${esc(f.reply || "")}" style="flex:1;min-width:200px;width:auto">
        <button class="btn sm" data-act="saveFeedback" data-id="${f.id}">Save</button></div>` : ""}
    </section>`).join("") : `<div class="empty">${adm ? "No ideas or problem reports yet." : "You haven't sent anything yet."}</div>`}`;
}
forms.sendFeedback = async (f, fd) => {
  await API.sendFeedback({ kind: fd.get("kind"), title: fd.get("title").trim(), details: fd.get("details").trim() });
  toast("Thank you. Your message was sent to the admins.");
  renderStaff();
};
actions.saveFeedback = async (t) => {
  const id = t.dataset.id;
  try { await API.updateFeedback(id, { status: document.getElementById("fs-" + id).value, reply: document.getElementById("fr-" + id).value.trim() || null }); toast("Saved"); renderStaff(); }
  catch (e) { toast(e.message); }
};

/* ---- my account (everyone) ---- */
function accountView(main) {
  const cls = S.me.role === "student" ? S.classes[0] : null;
  main.innerHTML = `<div class="grid2">
    <section class="card top"><h2>Your details</h2>
      <div class="kv"><span>Name</span><b>${esc(S.me.full_name)}</b><span>Username</span><b><span class="cred">${esc(S.me.username || "")}</span></b>
        <span>Role</span><b>${ROLE_NAME[S.me.role]}</b>${cls ? `<span>Class</span><b>${esc(className(cls))}</b>` : ""}</div>
      <p class="small muted">${S.me.role === "student" ? "Forgot your password? Ask your teacher to reset it." : S.me.role === "teacher" ? "Forgot your password? Ask an admin to reset it." : "Forgot your password? Ask another admin to reset it."}</p>
    </section>
    <form class="card top" data-form="changePw" autocomplete="on">
      <h2>Change your password</h2>
      <input type="text" name="username" value="${esc(S.me.username || "")}" autocomplete="username" hidden>
      <label>Current password<input type="password" id="cp-cur" name="cur" required autocomplete="current-password"></label>
      <label>New password<input type="password" id="cp-new" name="next" required minlength="6" autocomplete="new-password"></label>
      <label>Type the new password again<input type="password" id="cp-new2" name="next2" required autocomplete="new-password"></label>
      <p class="small muted">Use at least 6 characters. Don't use a password from another website.</p>
      <p class="err"></p>
      <div><button class="btn" type="submit">Change password</button></div>
    </form></div>`;
}
forms.changePw = async (f, fd) => {
  const cur = fd.get("cur"), next = fd.get("next"), next2 = fd.get("next2");
  if (next.length < 6) throw new Error("The new password must be at least 6 characters.");
  if (next !== next2) throw new Error("The two new passwords don't match.");
  if (next === cur) throw new Error("Choose a password that is different from your current one.");
  await API.changeOwnPassword(cur, next);
  f.reset();
  toast("Your password has been changed");
};

/* ================= joining links (one fixed link per grade) ================= */
const joinUrl = (grade) => `${location.href.split("#")[0]}#join-grade-${grade}`;
async function linksView(main) {
  const adm = isAdm();
  const grades = [...new Set(S.classes.filter((c) => adm || c.teacher_id === S.me.id).map((c) => c.grade))].sort((a, b) => a - b);
  const [sessions, staff] = await Promise.all([API.joinSessions(), API.staff()]);
  const byGrade = Object.fromEntries(sessions.map((x) => [x.grade, x]));
  const nm = Object.fromEntries(staff.map((x) => [x.id, x.full_name]));
  main.innerHTML = `
    <p class="muted">Each grade has one fixed link that never changes. Students from <b>any section</b> of the grade can use it. Press <b>Start session</b> when students should join, and <b>Stop session</b> when they have finished. While the session is stopped, new students cannot sign up, but existing students can still log in.</p>
    ${grades.length ? `<div class="links">${grades.map((g) => {
      const x = byGrade[g], open = !!x?.open;
      const who = x ? (x.changed_by === S.me.id ? "you" : nm[x.changed_by] || "") : "";
      const sections = adm ? S.classes.filter((c) => c.grade === g) : [];
      return `<section class="card top g${g}">
        <div class="spread"><h2>Grade ${g} joining link</h2>${open ? `<span class="pill done">● Session open</span>` : `<span class="pill late">Session stopped</span>`}</div>
        <div class="linkrow"><input id="lk-${g}" readonly value="${esc(joinUrl(g))}" aria-label="Grade ${g} joining link">
          <button class="btn sm" data-act="copyLink" data-g="${g}">Copy</button>
          <button class="btn ghost sm" data-act="openJoin" data-g="${g}">Open</button></div>
        <div class="row small muted">Students can choose ${sections.length ? sections.map((c) => `<span class="code g${c.grade}">${esc(classCode(c))}</span>`).join(" ") : `any Grade ${g} class`}.</div>
        <div class="row">${open
          ? `<button class="btn danger" data-act="setSession" data-g="${g}" data-open="0">Stop session</button>`
          : `<button class="btn" data-act="setSession" data-g="${g}" data-open="1">Start session</button>`}
          ${x ? `<span class="small muted">${open ? "Started" : "Stopped"}${who ? ` by ${esc(who)}` : ""} · ${fmt(x.changed_at)}</span>` : ""}</div>
      </section>`; }).join("")}</div>`
    : `<div class="empty">You don't have any classes yet, so there is nothing to share. Ask an admin to assign your classes.</div>`}`;
}
actions.copyLink = (t) => { const i = document.getElementById("lk-" + t.dataset.g); copyText(i.value); i.select(); };
actions.setSession = async (t) => {
  try { await API.setJoinSession(+t.dataset.g, t.dataset.open === "1"); toast(t.dataset.open === "1" ? `Grade ${t.dataset.g} session started. Share the link now.` : `Grade ${t.dataset.g} session stopped`); renderStaff(); }
  catch (e) { toast(e.message); }
};
actions.openJoin = (t) => { location.hash = "join-grade-" + t.dataset.g; };

/* ---- the public join page ---- */
function joinGradeFromHash() { const m = location.hash.match(/^#join-grade-(\d{1,2})$/); return m ? +m[1] : null; }
async function renderJoin(grade) {
  app.innerHTML = `<p class="boot">Loading…</p>`;
  let info;
  try { info = await API.joinInfo(grade); }
  catch (e) {
    app.innerHTML = `<main class="login"><section class="signin" style="grid-column:1/-1"><div class="card"><h2>Link not available</h2><p>${esc(e.message)}</p>
      <div><button class="btn ghost" data-act="leaveJoin">Go to sign in</button></div></div></section></main>`;
    return;
  }
  S.join = { grade, info, mode: S.join?.grade === grade ? S.join.mode : null };
  drawJoin();
}
function drawJoin() {
  const { info } = S.join;
  let mode = S.join.mode;
  if (!info.open && mode === "new") mode = S.join.mode = null;
  const signedIn = S.me ? `<p class="small muted">You are signed in as ${esc(S.me.full_name)}. <button class="link" data-act="leaveJoin">Back to my account</button></p>` : "";
  const body = mode === "login" ? `
      <form class="card" data-form="login" autocomplete="on">
        <div class="spread"><h2>Login</h2><button type="button" class="link" data-act="joinMode" data-mode="">Back</button></div>
        <label>Username<input id="login-user" name="u" autocomplete="username" autocapitalize="none" required></label>
        <label>Password<input id="login-pass" name="p" type="password" autocomplete="current-password" required></label>
        <p class="err"></p>
        <button class="btn" type="submit">Login</button>
        <p class="small muted">Forgot your password? Ask your teacher to reset it.</p>
      </form>`
    : mode === "new" ? `
      <form class="card" data-form="joinRegister" autocomplete="off">
        <div class="spread"><h2>I'm a New Joiner</h2><button type="button" class="link" data-act="joinMode" data-mode="">Back</button></div>
        <label>Your full name<input id="jn-name" name="full_name" required maxlength="60" placeholder="e.g. Ahmed Al Mansoori"></label>
        <label>Your class<select id="jn-class" name="class_id" required><option value="">Choose your class</option>${info.classes.map((c) => `<option value="${c.id}">${esc(c.code)}</option>`).join("")}</select></label>
        <label>Your username (your first name + 4 numbers)<input id="jn-user" name="username" readonly placeholder="Type your name first" class="cred-input"></label>
        <label>Create a password<input id="jn-pass" name="password" type="password" required minlength="6" autocomplete="new-password" placeholder="At least 6 characters"></label>
        <label class="chk"><input type="checkbox" id="jn-show"> Show password</label>
        <p class="err"></p>
        <button class="btn" type="submit">Save</button>
        <p class="small muted">Write down your username and password. You will need them to log in.</p>
      </form>`
    : mode === "done" ? `
      <div class="card join-done">
        <span class="eyebrow">Account created</span>
        <h2>Welcome, ${esc(S.join.firstName)}!</h2>
        <p>You are now in class <b>${esc(S.join.cls)}</b>. Write down your login:</p>
        <div class="kv"><span>Username</span><b><span class="cred">${esc(S.join.username)}</span></b><span>Password</span><b>The one you just created</b></div>
        <button class="btn" data-act="joinStart">Log in now</button>
      </div>`
    : `
      <div class="card">
        <div style="display:grid;gap:6px"><span class="eyebrow">Grade ${info.grade}</span><h2>Join English Learning Lab</h2>
          <p class="muted">${info.open ? "Choose one option." : "New student sign-up is closed right now. Ask your teacher to start the joining session. If you already have an account, you can log in."}</p></div>
        <div class="join-choices">
          <button class="join-choice" data-act="joinMode" data-mode="login">${icon("lock")}<b>Login</b><small>I already have an account</small></button>
          <button class="join-choice new" data-act="joinMode" data-mode="new" ${info.open ? "" : "disabled"}>${icon("spark")}<b>I'm a New Joiner</b><small>${info.open ? "Create my account" : "Session closed"}</small></button>
        </div>
        ${signedIn}
      </div>`;
  const tiles = (info.classes || []).slice(0, 4);
  app.innerHTML = `
  <main class="login">
    <section class="welcome">
      <div class="brand"><span class="logo">E</span><span>Teacher REJEES DEVASIA<small>English Learning Lab</small></span></div>
      <h1>Welcome to <b>Grade ${info.grade}</b></h1>
      <p>Your teacher has invited you to English Learning Lab. Join to get your assignments, practice activities and scores.</p>
      ${tiles.length ? `<div class="gtiles" style="grid-template-columns:repeat(${tiles.length},minmax(0,1fr));max-width:${tiles.length * 125}px">${tiles.map((c) => `<div class="g${info.grade}"><small>Class</small><b>${esc(c.code)}</b></div>`).join("")}</div>` : ""}
    </section>
    <section class="signin"><div class="signin-tools">${themeSwitch()}</div>${body}</section>
  </main>`;
  if (mode === "new") {
    const name = document.getElementById("jn-name"), user = document.getElementById("jn-user");
    let timer, lastBase = "";
    name.oninput = () => {
      clearTimeout(timer);
      const v = name.value.trim();
      if (!v) { user.value = ""; lastBase = ""; return; }
      const base = v.split(/\s+/)[0].toLowerCase();
      if (base === lastBase && user.value) return; // keep the same number while the rest of the name is typed
      timer = setTimeout(async () => { try { const r = await API.joinSuggest(S.join.grade, v); if (name.value.trim() === v) { user.value = r.username; lastBase = base; } } catch {} }, 350);
    };
    document.getElementById("jn-show").onchange = (e) => (document.getElementById("jn-pass").type = e.target.checked ? "text" : "password");
  }
}
actions.joinMode = (t) => { S.join.mode = t.dataset.mode || null; drawJoin(); };
actions.leaveJoin = () => { history.replaceState(null, "", location.pathname + location.search); S.join = null; boot(); };
forms.joinRegister = async (f, fd) => {
  const full_name = String(fd.get("full_name")).trim(), password = String(fd.get("password"));
  if (!fd.get("class_id")) throw new Error("Please choose your class.");
  if (password.length < 6) throw new Error("Your password must be at least 6 characters.");
  const r = await API.joinRegister(S.join.grade, { full_name, class_id: fd.get("class_id"), password, username: fd.get("username") || "" });
  Object.assign(S.join, { mode: "done", username: r.username, cls: r.class, firstName: full_name.split(" ")[0], pw: password });
  drawJoin();
};
actions.joinStart = async () => {
  try {
    if (S.me) await API.signOut();
    S.me = await API.signIn(S.join.username, S.join.pw);
    history.replaceState(null, "", location.pathname + location.search);
    S.join = null; S.view = "overview"; S.sTab = "home"; S.pTab = "grammar"; S.chapter = 1; S.badgeI = null;
    await enter();
  } catch (e) { toast(e.message); }
};

/* ================= student ================= */
async function renderStudent() {
  const cls = S.classes[0];
  const items = [["home", "Dashboard", "grid"], ["assignments", "My assignments", "task"], ["practice", "Practice", "spark"], ["guide", "Grammar Guide", "abc"], ["lessons", "Lessons", "book"], ["scores", "My scores", "chart"], ["account", "My account", "lock"]];
  const nav = items.map(([k, l, ic]) => navItem("sTab", `data-tab="${k}"`, l, ic, S.sTab === k)).join("")
    + (cls ? `<div class="side-class g${cls.grade}"><span class="mono muted">My class</span><span class="cc-code">${esc(classCode(cls))}</span><small class="muted">${esc(className(cls))}</small></div>` : "");
  const first = esc(S.me.full_name.split(" ")[0]);
  const titles = { home: `Hello, ${first}!`, assignments: "My assignments", practice: "Practice", guide: "Grammar Guide", lessons: "Lessons", scores: "My scores", account: "My account" };
  const main = frame({ nav, title: titles[S.sTab] || titles.home, crumb: cls ? esc(className(cls)) : "Student" });
  if (!cls) { main.innerHTML = `<div class="empty">You are not in a class yet. Please ask ${esc(CFG.TEACHER_DISPLAY)} to add you.</div>`; return; }
  main.className = "main g" + cls.grade;
  main.innerHTML = `<div id="pane" class="pane"><p class="muted">Loading…</p></div>`;
  const pane = document.getElementById("pane");
  try {
    if (S.sTab === "home") await studentHome(pane, cls);
    if (S.sTab === "assignments") await myAssignments(pane, cls);
    if (S.sTab === "practice") { if (!S.custom) S.custom = await API.customList().catch(() => []); practiceArea(pane, cls); }
    if (S.sTab === "scores") await myScores(pane, cls);
    if (S.sTab === "lessons") await lessonsView(pane, true);
    if (S.sTab === "guide") guideView(pane, setFor(cls)?.id);
    if (S.sTab === "account") accountView(pane);
  } catch (e) { pane.innerHTML = `<p class="err">${esc(e.message)}</p>`; }
}
actions.sTab = (t) => { S.sTab = t.dataset.tab; S.custom = null; renderStudent(); };

const BADGES = [
  { name: "First Steps", how: "Finish any practice activity.", test: (p) => p.length > 0 },
  { name: "Grammar Ace", how: "Get full marks in a Grammar Lab quiz.", test: (p) => p.some((x) => x.activity === "Grammar Lab" && x.score === x.total) },
  { name: "Reading Detective", how: "Get full marks in a Reading Detective quiz.", test: (p) => p.some((x) => x.activity === "Reading Detective" && x.score === x.total) },
  { name: "Word Master", how: "Get full marks in a Vocabulary Lab quiz.", test: (p) => p.some((x) => x.activity === "Vocabulary Lab" && x.score === x.total) },
  { name: "Maze Escaper", how: "Reach the exit of the Maze Challenge.", test: (p) => p.some((x) => x.activity === "Maze Challenge" && x.score === x.total) },
  { name: "Hand-In Hero", how: "Submit an assignment to your teacher.", test: (p, s) => s.length > 0 },
];
function rosette() {
  const pts = [];
  for (let i = 0; i < 32; i++) { const r = i % 2 ? 40 : 47, a = (Math.PI * 2 * i) / 32; pts.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`); }
  const star = [];
  for (let i = 0; i < 10; i++) { const r = i % 2 ? 5.5 : 13, a = -Math.PI / 2 + (Math.PI * i) / 5; star.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`); }
  return `<svg class="rosette" viewBox="0 0 100 140" aria-hidden="true">
    <path class="rib" d="M32 78 L20 134 L33 125 L42 137 L50 88Z"/><path class="rib" d="M68 78 L80 134 L67 125 L58 137 L50 88Z"/>
    <polygon class="burst" points="${pts.join(" ")}"/><circle class="disc" cx="50" cy="50" r="30"/><circle class="ring" cx="50" cy="50" r="24"/>
    <polygon class="star" points="${star.join(" ")}"/></svg>`;
}
function certHTML() {
  const list = S._badges, i = S.badgeI ?? 0, b = list[i];
  const won = list.filter((x) => x.on).length;
  const no = String(i + 1).padStart(2, "0");
  const y = new Date(), yr = y.getMonth() >= 7 ? y.getFullYear() : y.getFullYear() - 1;
  return `<div class="cert">
    <div class="cert-slots">${list.map((x, j) => `<button class="slot ${x.on ? "on" : ""} ${j === i ? "sel" : ""}" data-act="badge" data-i="${j}" aria-label="${esc(x.name)}${x.on ? "" : " (locked)"}">
      ${x.on ? `<b>${String(j + 1).padStart(2, "0")}</b><small>${esc(x.name)}</small>` : "?"}</button>`).join("")}</div>
    <div class="cert-count"><span class="track-bar"><i style="width:${(won / list.length) * 100}%"></i></span><span><b>${won}</b> OF ${list.length}</span></div>
    <div class="cert-paper ${b.on ? "" : "locked"}">
      <div class="stub"><small>NO.</small><b>${no}</b><span class="vert">TERM 1 · ${yr}–${String(yr + 1).slice(2)}</span></div>
      <div class="cert-body">
        <span class="mono">${b.on ? "Badge unlocked" : "Locked badge"}</span>
        <h3>${esc(b.name)}</h3><hr>
        <p>${b.on ? `Earned by ${esc(S.me.full_name)}. ${esc(b.how)}` : `How to earn it: ${esc(b.how)}`}</p>
        <div class="row"><span class="tagdark">BY ${esc(CFG.TEACHER_DISPLAY.toUpperCase())}</span>
          <span class="verified">${b.on ? "✓ VERIFIED" : `${icon("lock")} NOT YET`}</span></div>
      </div>
      ${rosette()}
    </div>
  </div>`;
}
actions.badge = (t) => { S.badgeI = +t.dataset.i; const box = document.getElementById("cert"); if (box) box.innerHTML = certHTML(); };

async function studentHome(pane, cls) {
  const [asgs, subs, practice] = await Promise.all([API.assignments(cls.id), API.mySubmissions(S.me), API.myPractice(S.me)]);
  const subOf = (id) => subs.find((s) => s.assignment_id === id);
  const now = new Date();
  const todo = asgs.filter((a) => !subOf(a.id)).sort((a, b) => String(a.due_at || "9").localeCompare(String(b.due_at || "9")));
  const overdue = todo.filter((a) => a.due_at && new Date(a.due_at) < now);
  let got = 0, max = 0;
  subs.filter((s) => s.graded_at).forEach((s) => { const a = asgs.find((x) => x.id === s.assignment_id); if (a) { got += +s.score; max += +a.max_score; } });
  const marked = subs.filter((s) => s.graded_at).sort((a, b) => String(b.graded_at).localeCompare(String(a.graded_at))).slice(0, 4);
  S._badges = BADGES.map((b) => ({ ...b, on: b.test(practice, subs) }));
  if (S.badgeI == null) { const last = S._badges.map((b) => b.on).lastIndexOf(true); S.badgeI = last >= 0 ? last : 0; }
  pane.innerHTML = `
    <h2 class="sec">My status</h2>
    <div class="stats">
      ${stat("To do", todo.length - overdue.length, "task", "var(--cyan)")}
      ${stat("Overdue", overdue.length, "alert", "var(--red)", overdue.length ? "Hand these in soon" : "Nothing overdue", true)}
      ${stat("Assignment average", max ? pct(got, max) + "%" : "—", "chart", "var(--green)")}
      ${stat("Practice done", practice.length, "spark", "var(--violet)")}
    </div>
    <div class="grid2">
      <section class="alert amber">
        <div class="alert-h">${icon("clock")}<b>Due soon</b><span class="cnt">${todo.length}</span></div>
        ${todo.length ? `<div class="alert-list">${todo.slice(0, 5).map((a) => { const [cl, lbl] = dueLabel(a.due_at);
          return `<button class="alert-row" data-act="sTab" data-tab="assignments"><span class="what"><b>${esc(a.title)}</b><small>${a.due_at ? fmt(a.due_at) : "No due date"} · out of ${a.max_score}</small></span><span class="pill ${cl}">${lbl}</span></button>`; }).join("")}</div>`
        : `<p class="muted small">You're all caught up. Try a practice activity!</p>`}
      </section>
      <section class="alert green">
        <div class="alert-h">${icon("msg")}<b>Latest feedback</b><span class="cnt">${marked.length}</span></div>
        ${marked.length ? `<div class="alert-list">${marked.map((s) => { const a = asgs.find((x) => x.id === s.assignment_id);
          return `<div class="alert-row"><span class="what"><b>${esc(a?.title || "Assignment")}</b><small>${esc(s.feedback || "No comment")}</small></span><span class="side-num">${s.score}/${a?.max_score ?? "?"}</span></div>`; }).join("")}</div>`
        : `<p class="muted small">Your teacher's marks and comments will appear here.</p>`}
      </section>
    </div>
    <h2 class="sec">My badges</h2>
    <div id="cert">${certHTML()}</div>`;
}

async function myAssignments(pane, cls) {
  const [asgs, subs] = await Promise.all([API.assignments(cls.id), API.mySubmissions(S.me)]);
  S._asgs = asgs; S._subs = subs;
  const now = new Date();
  const status = (a, s) => s?.graded_at ? ["done", `Marked: ${s.score}/${a.max_score}`] : s ? ["sub", "Submitted"]
    : a.due_at && new Date(a.due_at) < now ? ["late", "Overdue"] : ["todo", "To do"];
  const order = [...asgs].sort((a, b) => {
    const sa = subs.find((s) => s.assignment_id === a.id), sb2 = subs.find((s) => s.assignment_id === b.id);
    return (!!sa - !!sb2) || String(a.due_at || "9").localeCompare(String(b.due_at || "9"));
  });
  pane.innerHTML = order.length ? order.map((a) => {
    const s = subs.find((x) => x.assignment_id === a.id);
    const [cl, label] = status(a, s);
    return `<section class="card top">
      <div class="spread"><div><h2>${esc(a.title)}</h2><p class="small muted">${fmtDay(a.due_at)} · out of ${a.max_score}</p></div><span class="pill ${cl}">${label}</span></div>
      ${a.instructions ? `<p style="white-space:pre-wrap">${esc(a.instructions)}</p>` : ""}
      ${a.file_path ? `<div><button class="btn ghost sm" data-act="file" data-bucket="assignments" data-path="${esc(a.file_path)}">Open ${esc(a.file_name)}</button></div>` : ""}
      ${s?.graded_at && s.feedback ? `<p class="fb good"><b>Feedback:</b> ${esc(s.feedback)}</p>` : ""}
      ${s ? `<p class="small muted">You submitted ${s.file_name ? `<b>${esc(s.file_name)}</b> ` : ""}on ${fmt(s.submitted_at)}.</p>` : ""}
      ${s?.graded_at ? "" : `<form data-form="submitWork" data-id="${a.id}" style="display:grid;gap:10px">
        <div class="fields">
          <label>Your work (photo, PDF or document)<input id="f-${a.id}" type="file" name="file" ${s ? "" : "required"}></label>
        </div>
        <label>Message to your teacher (optional)<textarea id="n-${a.id}" name="note" style="min-height:70px">${esc(s?.note || "")}</textarea></label>
        <p class="err"></p>
        <div><button class="btn" type="submit">${s ? "Replace my submission" : "Submit my work"}</button></div>
      </form>`}
    </section>`;
  }).join("") : `<div class="empty">No assignments yet. Check back later, or try the Practice tab.</div>`;
}
forms.submitWork = async (f, fd) => {
  const a = S._asgs.find((x) => x.id === f.dataset.id);
  const existing = S._subs.find((s) => s.assignment_id === a.id);
  const file = fd.get("file");
  if (file && file.size > 20 * 1024 * 1024) throw new Error("This file is larger than 20 MB. Please upload a smaller file.");
  await API.submit(S.me, a, file && file.size ? file : null, fd.get("note").trim(), existing);
  toast("Your work was submitted");
  renderStudent();
};

async function myScores(pane, cls) {
  const [asgs, subs, practice] = await Promise.all([API.assignments(cls.id), API.mySubmissions(S.me), API.myPractice(S.me)]);
  const marked = subs.filter((s) => s.graded_at);
  let got = 0, max = 0;
  marked.forEach((s) => { const a = asgs.find((x) => x.id === s.assignment_id); if (a) { got += +s.score; max += +a.max_score; } });
  const pAvg = practice.length ? Math.round(practice.reduce((a, p) => a + pct(p.score, p.total), 0) / practice.length) : null;
  pane.innerHTML = `
    <div class="stats">
      ${stat("Assignment average", max ? pct(got, max) + "%" : "—", "chart", "var(--green)")}
      ${stat("Assignments marked", marked.length, "task", "var(--cyan)")}
      ${stat("Practice average", pAvg == null ? "—" : pAvg + "%", "spark", "var(--violet)")}
      ${stat("Practice done", practice.length, "bolt", "var(--amber)")}
    </div>
    <section class="card top"><h2>Assignments</h2>
      ${asgs.length ? `<div class="tbl-wrap"><table><thead><tr><th>Assignment</th><th>Status</th><th class="num">Score</th><th>Feedback</th></tr></thead><tbody>
      ${asgs.map((a) => { const s = subs.find((x) => x.assignment_id === a.id);
        return `<tr><td>${esc(a.title)}</td><td>${s?.graded_at ? `<span class="pill done">Marked</span>` : s ? `<span class="pill sub">Submitted</span>` : `<span class="pill todo">Not submitted</span>`}</td>
        <td class="num">${s?.graded_at ? `${s.score}/${a.max_score}` : "—"}</td><td>${esc(s?.feedback || "")}</td></tr>`; }).join("")}
      </tbody></table></div>` : `<p class="muted">No assignments yet.</p>`}</section>
    <section class="card top"><h2>Practice history</h2>
      ${practice.length ? `<div class="tbl-wrap"><table><thead><tr><th>When</th><th>Activity</th><th class="num">Score</th></tr></thead><tbody>
      ${practice.slice(0, 50).map((p) => `<tr><td>${fmt(p.created_at)}</td><td>${esc(p.activity)}${p.chapter ? ` · Ch ${p.chapter}` : ""}</td><td class="num">${p.score}/${p.total}</td></tr>`).join("")}
      </tbody></table></div>` : `<p class="muted">Nothing yet. Open the Practice tab to start.</p>`}</section>`;
}

/* ================= practice activities ================= */
function practiceArea(pane, cls) {
  const P = setFor(cls);
  if (!P && S.custom?.length) { pane.innerHTML = `<div id="act" style="display:grid;gap:16px"></div>`; return teacherPractice(document.getElementById("act")); }
  if (!P) { pane.innerHTML = `<div class="empty">Practice activities for ${esc(className(cls))} are coming soon. Your assignments are under My assignments.</div>`; return; }
  const all = [["grammar", "Grammar Lab", "Rules + quiz"], ["reading", "Reading Detective", "Text + questions"], ["vocab", "Vocabulary Lab", "Flip cards + quiz"],
    ["writing", "Writing Studio", "Summary + essay"], ["examMaze", "Exam MAZE", "Exam-style gap passages"], ["maze", "Maze Challenge", "10 gates, 3 keys"], ["mock", "EOT Practice", "Full mock test"]];
  if (window.TEXTBOOK && TEXTBOOK[P.id]) all.unshift(["textbook", "Textbook Units", "Ch 1–6 · words, skills, reading, writing"]);
  if (S.custom?.length) all.unshift(["teacher", "From your teacher", `${S.custom.length} new practice`]);
  const tabs = all.filter(([k]) => k === "textbook" || k === "teacher" || P[k]);
  if (!tabs.some(([k]) => k === S.pTab)) S.pTab = "grammar";
  const chapterTabs = ["grammar", "reading", "vocab", "writing"];
  pane.innerHTML = `
    ${chapterTabs.includes(S.pTab) ? `<div class="chips" role="group" aria-label="Chapter">${Object.entries(P.chapters).map(([n, l]) => `<button class="chip" data-act="chap" data-ch="${n}" aria-pressed="${S.chapter === +n}">${esc(l)}</button>`).join("")}</div>` : ""}
    <div class="acts" role="tablist">${tabs.map(([k, l, d]) => `<button class="act" role="tab" data-act="pTab" data-tab="${k}" aria-selected="${S.pTab === k}"><b>${l}</b><small>${d}</small></button>`).join("")}</div>
    <div id="act" style="display:grid;gap:16px"></div>`;
  const el = document.getElementById("act");
  ({ teacher: teacherPractice, textbook, grammar, reading, vocab, writing, maze, examMaze, mock })[S.pTab](el, P);
}

/* ---- Textbook Units: chapters 1–6 of the class course book ---- */
function textbook(el, P) {
  const B = TEXTBOOK[P.id], n = Math.min(S.tbCh || 0, B.chapters.length - 1), c = B.chapters[n];
  const parts = [["learn", "Key words"], ["skills", "Skills quiz"], ["read", "Reading"], ["write", "Writing"]];
  const part = parts.some(([k]) => k === S.tbPart) ? S.tbPart : "learn";
  const tags = (l, cls) => l.map((x) => `<span class="pill ${cls}">${esc(x)}</span>`).join(" ");
  el.innerHTML = `<p class="small muted">${esc(B.book)} · practice written for this platform</p>
    <div class="chips" role="group" aria-label="Textbook chapter">${B.chapters.map((x, i) => `<button class="chip" data-act="tbCh" data-i="${i}" aria-pressed="${i === n}">Ch ${i + 1} · ${esc(x.title)}</button>`).join("")}</div>
    <div class="tb-head"><h2>Chapter ${n + 1}: ${esc(c.title)}</h2><p class="muted">${esc(c.theme)}</p>
      <div class="tb-skills"><div><span class="eyebrow">Reading</span>${tags(c.reading, "tb-r")}</div><div><span class="eyebrow">Writing</span>${tags(c.writing, "tb-w")}</div><div><span class="eyebrow">Language focus</span>${tags(c.language, "tb-l")}</div></div></div>
    ${subChips(parts.map((x) => x[1]), parts.findIndex(([k]) => k === part), "tbPart")}`;
  const label = (t) => `Textbook Ch ${n + 1} · ${t}`;
  const rec = (t) => ({ label: label(t) });
  if (part === "learn") {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Tap a card to see its meaning, then test yourself below.</p>
      <div class="cards">${c.words.map(([w, d]) => `<button class="flip" aria-label="${esc(w)}"><div class="in"><div class="f">${esc(w)}</div><div class="b">${esc(d)}</div></div></button>`).join("")}</div><h2>Which word matches?</h2>`);
    el.querySelectorAll(".flip").forEach((x) => (x.onclick = () => x.classList.toggle("on")));
    return quiz(el, c.words.map(([w, d]) => [`"${d}"`, [w, ...shuffle(c.words.filter((x) => x[0] !== w)).slice(0, 2).map((x) => x[0])], 0, `<b>${esc(w)}</b>: ${esc(d)}.`]), rec("Key words").label, { chapter: n + 1 });
  }
  if (part === "skills") {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Questions on this chapter's reading skills and language focus.</p>`);
    return quiz(el, c.skills, rec("Skills").label, { chapter: n + 1 });
  }
  if (part === "read") {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Read the text, then answer. Look back for evidence. <span class="small">(Practice text written for this platform.)</span></p>
      <article class="passage"><h2>${esc(c.text.title)}</h2>${c.text.paras.map((p) => `<p>${esc(p).replace(/\*(\w+)\*/g, "<i>$1</i>")}</p>`).join("")}</article>`);
    return quiz(el, c.text.qs, rec("Reading").label, { keepOrder: true, chapter: n + 1 });
  }
  el.insertAdjacentHTML("beforeend", `<h2>${esc(c.task.title)}</h2>`);
  writingBox(el, c.task, `tb-${S.me.id}-${P.id}-${n}`);
}
actions.tbCh = (t) => { S.tbCh = +t.dataset.i; renderStudent(); };
actions.tbPart = (t) => { S.tbPart = ["learn", "skills", "read", "write"][+t.dataset.i]; renderStudent(); };
const setFor = (cls) => (cls ? PRACTICE[cls.grade + String(cls.track || "").trim().charAt(0).toUpperCase()] || PRACTICE[cls.grade] : null);
actions.chap = (t) => { S.chapter = +t.dataset.ch; S.gTopic = 0; S.wTask = 0; S.rTask = 0; renderStudent(); };
actions.pTab = (t) => { S.pTab = t.dataset.tab; renderStudent(); };
actions.gTopic = (t) => { S.gTopic = +t.dataset.i; renderStudent(); };
actions.wTask = (t) => { S.wTask = +t.dataset.i; renderStudent(); };
actions.rTask = (t) => { S.rTask = +t.dataset.i; renderStudent(); };
actions.mzPick = (t) => { S.mzI = +t.dataset.i; renderStudent(); };
const record = (activity, score, total, chapter = S.chapter) =>
  API.savePractice({ activity, chapter, score, total }).then(() => toast(`Score saved: ${score}/${total}`)).catch((e) => toast("Could not save score: " + e.message));
const subChips = (list, cur, act) => list.length > 1
  ? `<div class="chips sub" role="group">${list.map((x, i) => `<button class="chip" data-act="${act}" data-i="${i}" aria-pressed="${cur === i}">${esc(x)}</button>`).join("")}</div>` : "";

function quiz(el, qs, label, opts = {}) {
  let right = 0, answered = 0;
  const list = opts.keepOrder ? qs : shuffle(qs);
  const box = document.createElement("div"); box.style.cssText = "display:grid;gap:14px";
  box.innerHTML = list.map((q, n) => `<div class="q" data-ans="${q[2]}" data-why="${esc(q[3] || "")}">
    <p class="stem"><b>${n + 1}.</b>${esc(q[0]).replace("___", "<mark>&nbsp;___&nbsp;</mark>")}</p>
    <div class="opts">${shuffle(q[1].map((_, j) => j)).map((j) => `<button class="opt" data-j="${j}">${esc(q[1][j])}</button>`).join("")}</div></div>`).join("") + `<div class="row res"></div>`;
  el.appendChild(box);
  box.querySelectorAll(".q").forEach((card) => card.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
    const ok = +b.dataset.j === +card.dataset.ans;
    card.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === +card.dataset.ans) x.classList.add("right"); });
    if (ok) right++; else b.classList.add("wrong");
    answered++;
    const why = card.dataset.why;
    card.insertAdjacentHTML("beforeend", `<p class="fb ${ok ? "good" : "miss"}"><b>${ok ? "Correct!" : "Not quite."}</b> ${why}</p>`);
    if (answered === list.length) {
      if (label) record(label, right, list.length, "chapter" in opts ? opts.chapter : S.chapter);
      const r = box.querySelector(".res");
      r.innerHTML = `<p><b>Your score: ${right} / ${list.length}</b> ${right === list.length ? "Excellent work!" : right >= list.length * 0.6 ? "Good. Review the ones you missed." : "Read the rule again and try once more."}</p>${opts.noRetry ? "" : `<button class="btn ghost">Try again</button>`}`;
      const rb = r.querySelector("button"); if (rb) rb.onclick = () => renderStudent();
    }
  })));
}
function grammar(el, P) {
  const list = [].concat(P.grammar[S.chapter]);
  const i = Math.min(S.gTopic || 0, list.length - 1), g = list[i];
  el.innerHTML = `${subChips(list.map((x) => x.title), i, "gTopic")}<h2>${g.title}</h2><details open><summary>Grammar rule</summary><p>${g.rule}</p></details>`;
  quiz(el, g.qs, "Grammar Lab");
}
function reading(el, P) {
  const list = [].concat(P.reading[S.chapter]);
  const i = Math.min(S.rTask || 0, list.length - 1), r = list[i];
  el.innerHTML = `${subChips(list.map((x) => x.title), i, "rTask")}<p class="muted">Read the text, then answer the questions. Look back at the text to find your evidence. <span class="small">(Practice text: people and studies are for practice only.)</span></p>
    <article class="passage"><h2>${esc(r.title)}</h2>${r.text.map((p) => `<p>${esc(p)}</p>`).join("")}</article>`;
  quiz(el, r.qs, "Reading Detective", { keepOrder: true });
}
function vocab(el, P) {
  const words = P.vocab[S.chapter];
  el.innerHTML = `<h2>Word cards</h2><p class="muted">Tap a card to see its meaning, then test yourself below.</p>
    <div class="cards">${words.map(([w, d]) => `<button class="flip" aria-label="${esc(w)}"><div class="in"><div class="f">${esc(w)}</div><div class="b">${esc(d)}</div></div></button>`).join("")}</div>
    <h2>Which word matches?</h2>`;
  el.querySelectorAll(".flip").forEach((c) => (c.onclick = () => c.classList.toggle("on")));
  quiz(el, words.map(([w, d]) => [`"${d}"`, [w, ...shuffle(words.filter((x) => x[0] !== w)).slice(0, 2).map((x) => x[0])], 0, `<b>${esc(w)}</b>: ${esc(d)}.`]), "Vocabulary Lab");
}
function writingChecks(w, t) {
  const low = t.toLowerCase(), words = (t.match(/\b[\w'’-]+\b/g) || []).length;
  const links = w.need.links.filter((l) => low.includes(l));
  const extra = w.need.extra.filter((l) => new RegExp("\\b" + l + "\\b").test(low));
  const sentences = (t.match(/[.!?](\s|$)/g) || []).length;
  const sm = String(w.title).match(/(\d)–(\d) sentences/);
  const sMin = sm ? +sm[1] : 5, sMax = sm ? +sm[2] : 99;
  return [
    [words >= w.need.min && words <= w.need.max, `Length: ${w.need.min}–${w.need.max} words (you have ${words})`],
    [links.length >= (sm ? 2 : 3), `At least ${sm ? 2 : 3} linking words (${links.length ? links.join(", ") : "none yet"})`],
    [extra.length >= 2, `Topic vocabulary, e.g. ${w.need.extra.slice(0, 4).join(", ")}`],
    [sentences >= sMin && sentences <= sMax, sm ? `${sMin}–${sMax} sentences (${sentences})` : `At least 5 complete sentences (${sentences})`],
    [/^[A-Z]/.test(t.trim()), "Start with a capital letter"],
  ];
}
function writingBox(el, w, key, idx = "") {
  el.insertAdjacentHTML("beforeend", `
    <div class="grid2">
      <div style="display:grid;gap:10px;min-width:0"><p><b>Task:</b> ${esc(w.prompt)}</p>
        <label>Your writing<textarea id="draft${idx}" style="min-height:240px" placeholder="Start writing here…"></textarea></label>
        <p class="small muted" id="wc${idx}">0 words · your draft is saved on this device</p></div>
      <div style="display:grid;gap:10px;align-content:start;min-width:0"><span class="eyebrow">Checklist</span><ul class="checks" id="checks${idx}"></ul>
        ${w.model ? `<details class="model"><summary>Show model answer</summary><p>${esc(w.model).replace(/\n/g, "<br>")}</p></details>` : ""}
        <p class="small muted">To hand in writing for marks, use the upload form in My assignments.</p></div>
    </div>`);
  const ta = document.getElementById("draft" + idx); ta.value = store.get(key, "");
  const check = () => {
    const words = (ta.value.match(/\b[\w'’-]+\b/g) || []).length;
    document.getElementById("checks" + idx).innerHTML = writingChecks(w, ta.value).map(([ok, l]) => `<li class="${ok ? "done" : ""}">${esc(l)}</li>`).join("");
    document.getElementById("wc" + idx).textContent = `${words} words · your draft is saved on this device`;
    store.set(key, ta.value);
  };
  ta.oninput = check; check();
  return ta;
}
function writing(el, P) {
  const list = [].concat(P.writing[S.chapter]);
  const i = Math.min(S.wTask || 0, list.length - 1), w = list[i];
  el.innerHTML = `${subChips(list.map((x) => x.title), i, "wTask")}<h2>${esc(w.title)}</h2>`;
  if (w.quiz) {
    el.insertAdjacentHTML("beforeend", `<p class="muted">Short questions on how to build good writing: topic sentences, linking words, facts and opinions, summaries and conclusions.</p>`);
    return quiz(el, w.quiz, "Writing Skills");
  }
  writingBox(el, w, `draft-${S.me.id}-${P.id || ""}-${S.chapter}-${i}`);
}

/* ---- gap passages (Exam MAZE + mock exam) ---- */
function gapPassage(p, prefix, mode) {
  const text = esc(p.text).replace(/\[(\d+)\]/g, (_, n) => `<span class="gap" id="${prefix}-gap-${n}"><b>${n}</b>&nbsp;________</span>`);
  return `<article class="passage maze-text"><h3>${esc(p.title)}</h3><p>${text}</p></article>
    <div class="gap-qs">${p.gaps.map((g, k) => `<div class="q gapq" data-prefix="${prefix}" data-n="${k + 1}" data-ans="${g[1]}" data-why="${esc(g[2] || "")}" data-mode="${mode}">
      <span class="gapno">${k + 1}</span>
      <div class="opts">${shuffle(g[0].map((_, j) => j)).map((j) => `<button class="opt" data-j="${j}" data-word="${esc(g[0][j])}">${["A", "B", "C"][j] ? "" : ""}${esc(g[0][j])}</button>`).join("")}</div></div>`).join("")}</div>`;
}
function wireGaps(root, onDone) {
  root.querySelectorAll(".gapq").forEach((card) => card.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
    const mode = card.dataset.mode, gap = document.getElementById(`${card.dataset.prefix}-gap-${card.dataset.n}`);
    if (mode === "exam") {
      card.querySelectorAll(".opt").forEach((x) => x.classList.remove("picked"));
      b.classList.add("picked"); card.dataset.pick = b.dataset.j;
      if (gap) gap.innerHTML = `<b>${card.dataset.n}</b>&nbsp;${b.dataset.word}`;
      return;
    }
    const ok = +b.dataset.j === +card.dataset.ans;
    card.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === +card.dataset.ans) x.classList.add("right"); });
    if (!ok) b.classList.add("wrong");
    card.dataset.ok = ok ? "1" : "0";
    if (gap) { const right = card.querySelector(".opt.right").dataset.word; gap.innerHTML = `<b>${card.dataset.n}</b>&nbsp;${right}`; gap.classList.add(ok ? "ok" : "bad"); }
    card.insertAdjacentHTML("beforeend", `<p class="fb ${ok ? "good" : "miss"}">${card.dataset.why}</p>`);
    if (onDone && [...root.querySelectorAll(".gapq")].every((c) => c.dataset.ok)) onDone([...root.querySelectorAll(".gapq")].filter((c) => c.dataset.ok === "1").length);
  })));
}
function examMaze(el, P) {
  const list = P.examMaze, i = Math.min(S.mzI || 0, list.length - 1), p = list[i];
  el.innerHTML = `${subChips(list.map((x) => x.title.split("·").slice(0, 2).join("·").trim()), i, "mzPick")}
    <p class="muted">Choose the best word for each numbered gap, as in the EOT exam (A / B / C). The passage fills in as you answer.</p>
    ${gapPassage(p, "mz", "practice")}<div class="row res"></div>`;
  wireGaps(el, (right) => {
    record("Exam MAZE", right, p.gaps.length);
    el.querySelector(".res").innerHTML = `<p><b>Your score: ${right} / ${p.gaps.length}</b></p>${i < list.length - 1 ? `<button class="btn" data-act="mzPick" data-i="${i + 1}">Next passage</button>` : ""}`;
  });
}

/* ---- full mock exam ---- */
function mock(el, P) {
  const M = P.mock;
  const mcq = (sec, prefix) => sec.qs.map((q, n) => `<div class="q mockq" data-ans="${q[2]}" data-why="${esc(q[3] || "")}" data-sec="${prefix}">
    <p class="stem"><b>${n + 1}.</b>${esc(q[0])}</p>
    <div class="opts">${q[1].map((o, j) => j).sort(() => 0).map((j) => `<button class="opt" data-j="${j}">${esc(q[1][j])}</button>`).join("")}</div></div>`).join("");
  el.innerHTML = `
    <div class="card top"><h2>EOT Practice Test</h2><p class="muted">${esc(M.intro)}</p>
      <p class="small">Answer everything, then press <b>Finish and mark</b> at the bottom. Answers are not shown until you finish.</p></div>
    <h2 class="sec">${esc(M.vocab.title)}</h2>${gapPassage(M.vocab, "mv", "exam")}
    <h2 class="sec">${esc(M.grammar.title)}</h2>${gapPassage(M.grammar, "mg", "exam")}
    <h2 class="sec">${esc(M.r3a.title)}</h2><article class="passage">${M.r3a.text.map((x) => `<p>${esc(x)}</p>`).join("")}</article><div class="mockset">${mcq(M.r3a, "a")}</div>
    <h2 class="sec">${esc(M.r3b.title)}</h2><article class="passage">${M.r3b.text.map((x) => `<p>${esc(x)}</p>`).join("")}</article><div class="mockset">${mcq(M.r3b, "b")}</div>
    <h2 class="sec">${esc(M.summary.title)}</h2><div id="mws"></div>
    <h2 class="sec">${esc(M.essay.title)}</h2><div id="mwe"></div>
    <div class="card" id="mockres"><button class="btn" data-act="mockFinish" data-confirm="Click again to finish and mark">Finish and mark</button></div>`;
  // shuffle reading options once
  el.querySelectorAll(".mockq .opts").forEach((o) => [...o.children].sort(() => Math.random() - 0.5).forEach((c) => o.appendChild(c)));
  el.querySelectorAll(".mockq").forEach((card) => card.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
    if (card.dataset.locked) return;
    card.querySelectorAll(".opt").forEach((x) => x.classList.remove("picked")); b.classList.add("picked"); card.dataset.pick = b.dataset.j;
  })));
  wireGaps(el);
  const base = `mock-${S.me.id}-${P.id}`;
  writingBox(document.getElementById("mws"), { ...M.summary, title: M.summary.title }, base + "-s", "S");
  writingBox(document.getElementById("mwe"), M.essay, base + "-e", "E");
  el.querySelectorAll(".model").forEach((d) => (d.hidden = true));
  S._mockEl = el;
}
actions.mockFinish = () => {
  const el = S._mockEl; if (!el) return;
  let score = 0;
  const parts = { mv: 0, mg: 0, a: 0, b: 0 };
  el.querySelectorAll(".gapq").forEach((card) => {
    const ok = card.dataset.pick !== undefined && +card.dataset.pick === +card.dataset.ans;
    card.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === +card.dataset.ans) x.classList.add("right"); else if (x.classList.contains("picked")) x.classList.add("wrong"); });
    const gap = document.getElementById(`${card.dataset.prefix}-gap-${card.dataset.n}`); if (gap) gap.classList.add(ok ? "ok" : "bad");
    card.insertAdjacentHTML("beforeend", `<p class="fb ${ok ? "good" : "miss"}">${card.dataset.why}</p>`);
    if (ok) { parts[card.dataset.prefix] += 2; score += 2; }
  });
  el.querySelectorAll(".mockq").forEach((card) => {
    card.dataset.locked = "1";
    const ok = card.dataset.pick !== undefined && +card.dataset.pick === +card.dataset.ans;
    card.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === +card.dataset.ans) x.classList.add("right"); else if (x.classList.contains("picked")) x.classList.add("wrong"); });
    card.insertAdjacentHTML("beforeend", `<p class="fb ${ok ? "good" : "miss"}">${card.dataset.why}</p>`);
    const pts = card.dataset.sec === "a" ? 3 : 2;
    if (ok) { parts[card.dataset.sec] += pts; score += pts; }
  });
  el.querySelectorAll(".model").forEach((d) => (d.hidden = false));
  record("EOT Practice", score, 60, null);
  document.getElementById("mockres").innerHTML = `<h2>Your result: ${score} / 60</h2>
    <div class="kv"><span>Vocabulary</span><b>${parts.mv} / 10</b><span>Grammar</span><b>${parts.mg} / 10</b><span>Reading 3A</span><b>${parts.a} / 24</b><span>Reading 3B</span><b>${parts.b} / 16</b><span>Writing</span><b>Compare with the model answers (40 marks)</b></div>
    <p class="small muted">Model answers are now open under each writing task. Upload your writing in My assignments if your teacher wants to mark it.</p>
    <div><button class="btn ghost" data-act="pTab" data-tab="mock">Start again</button></div>`;
  document.getElementById("mockres").scrollIntoView({ behavior: "smooth", block: "center" });
};

/* ---- Tense Table ---- */
const ttLine = (marks) => `<div class="tt-line"><div class="tt-axis"><span>Past</span><span class="now">Now</span><span>Future</span></div>${marks.map((m) =>
  m[0] === "d" ? `<span class="tt-dot" style="left:${m[1]}%"></span>`
  : m[0] === "b" ? `<span class="tt-bar" style="left:${m[1]}%;width:${m[2] - m[1]}%"></span>`
  : `<span class="tt-link" style="left:${m[1]}%;width:${m[2] - m[1]}%"></span>`).join("")}</div>`;
function tenseTable(box) {
  const T = window.TENSES; if (!T || !box) return;
  S.ttForm ||= "pos"; S.ttCell ||= "simple-Present";
  const draw = () => {
    const c = T.cells[S.ttCell];
    box.innerHTML = `
      <div class="spread"><div><h2>Tense Table</h2><p class="muted small">12 tenses = 3 times × 4 aspects. Each colour is one aspect. Tap a box to see when to use it.</p></div>
        <div class="theme-switch" role="group" aria-label="Sentence type">${[["pos", "+ Positive"], ["neg", "− Negative"], ["q", "? Question"]].map(([k, l]) => `<button data-act="ttForm" data-k="${k}" aria-pressed="${S.ttForm === k}">${l}</button>`).join("")}</div></div>
      <div class="tt-wrap"><table class="tt"><thead><tr><th></th>${T.times.map((t) => `<th class="tt-time">${t}</th>`).join("")}</tr></thead><tbody>
        ${T.aspects.map((a) => `<tr class="a-${a.key}"><th class="tt-aspect"><b>${a.name}</b><small>${a.hint}</small></th>${T.times.map((t) => {
          const id = `${a.key}-${t}`, x = T.cells[id];
          return `<td><button class="tt-cell ${S.ttCell === id ? "on" : ""}" data-act="ttCell" data-id="${id}"><span class="tt-name">${x.name}</span><span class="tt-form">${x.form}</span><span class="tt-ex">${x[S.ttForm]}</span></button></td>`; }).join("")}</tr>`).join("")}
      </tbody></table></div>
      <div class="tt-detail a-${S.ttCell.split("-")[0]}">
        <div class="spread"><h3>${c.name}</h3><span class="tt-formula">${c.form}</span></div>
        ${ttLine(c.marks)}
        <p><b>Use it for:</b> ${c.use}</p>
        <div class="tt-forms"><span><i>+</i> ${c.pos}</span><span><i>−</i> ${c.neg}</span><span><i>?</i> ${c.q}</span></div>
        <p class="small"><b>Signal words:</b> ${c.signals}</p>
      </div>
      <div class="row"><button class="btn" data-act="ttQuiz">${icon("spark")} Tense Detective · 12 questions</button></div>
      <div id="ttq" style="display:grid;gap:12px"></div>`;
  };
  S._ttDraw = draw; draw();
}
actions.ttForm = (t) => { S.ttForm = t.dataset.k; S._ttDraw?.(); };
actions.ttCell = (t) => { S.ttCell = t.dataset.id; S._ttDraw?.(); document.querySelector(".tt-detail")?.scrollIntoView({ block: "nearest", behavior: "smooth" }); };
actions.ttQuiz = () => {
  const b = document.getElementById("ttq"); if (!b) return;
  b.innerHTML = "";
  quiz(b, window.TENSES.quiz, S.me.role === "student" ? "Tense Detective" : null, { noRetry: true });
  b.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---- Grammar Guide ---- */
const COURSE_NAME = { "10A11G": "Grade 11 General", "11A12G": "Grade 11 Advanced & 12 General", "12A": "Grade 12 Advanced" };
function guideView(el, setId) {
  const G = window.GRAMMAR_GUIDE || [];
  const mine = setId ? G.filter((t) => t.sets.includes(setId)) : [];
  const rest = setId ? G.filter((t) => !t.sets.includes(setId)) : G;
  const card = (t) => `<details class="card gx" id="gx-${t.id}" ${S.gxOpen === t.id ? "open" : ""}>
    <summary><span class="gx-title">${esc(t.title)}</span><span class="gx-group">${esc(t.group)}</span>
      ${setId ? "" : `<span class="gx-sets">${t.sets.filter((s) => COURSE_NAME[s]).map((s) => `<span class="pill later">${COURSE_NAME[s]}</span>`).join(" ")}</span>`}</summary>
    <div class="gx-body">
      <p class="gx-idea">${t.idea}</p>
      <div class="gx-visual">${t.visual}</div>
      <p class="gx-form"><span class="mono">Form</span> ${t.form}</p>
      <div class="gx-ex"><span class="mono">Examples</span><ul>${t.examples.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      <div class="gx-mis"><span class="mono">Common mistake</span><p><s>${t.mistake[0]}</s></p><p>✓ ${t.mistake[1]}</p></div>
      <div class="gx-check" data-check="${t.id}"><span class="mono">Quick check</span></div>
    </div></details>`;
  el.innerHTML = `<section class="card tt-card" id="tt"></section>
    <p class="muted">Illustrated grammar for the Term 1 exam. Open a topic to see the diagram, examples, a common mistake and a quick check.</p>
    ${mine.length ? `<h2 class="sec">Your exam grammar</h2><div class="gx-list">${mine.map(card).join("")}</div>` : ""}
    ${rest.length ? `<h2 class="sec">${setId ? "More grammar" : "All topics"}</h2><div class="gx-list">${rest.map(card).join("")}</div>` : ""}`;
  tenseTable(document.getElementById("tt"));
  el.querySelectorAll("details.gx").forEach((d) => d.addEventListener("toggle", () => {
    if (!d.open) return;
    S.gxOpen = d.id.slice(3);
    const box = d.querySelector(".gx-check");
    if (box.dataset.done) return;
    box.dataset.done = "1";
    const t = G.find((x) => x.id === S.gxOpen);
    quiz(box, t.check.map((q) => [q[0], q[1], q[2], ""]), null, { noRetry: true });
  }));
}

function maze(el, P) {
  const qs = shuffle(P.maze);
  let pos = 0, keys = 3;
  const draw = () => {
    if (pos === qs.length || keys === 0) {
      const win = pos === qs.length;
      record("Maze Challenge", pos, qs.length, null);
      el.innerHTML = `<div class="card top" style="justify-items:start"><h2>${win ? "You escaped the maze!" : "Out of keys"}</h2>
        <p>${win ? `You reached the exit with ${keys} key${keys === 1 ? "" : "s"} left.` : `You reached gate ${pos + 1} of ${qs.length}. Review the labs, then try again.`}</p>
        <div><button class="btn">Play again</button></div></div>`;
      el.querySelector("button").onclick = () => maze(el, P);
      return;
    }
    const [stem, opts, ans] = qs[pos];
    el.innerHTML = `<div class="spread"><h2>Maze Challenge</h2><span aria-label="${keys} keys left" style="font-size:1.1rem;letter-spacing:4px">${"🔑".repeat(keys)}${"·".repeat(3 - keys)}</span></div>
      <p class="muted">Answer correctly to open each gate. A wrong answer costs one key. Questions mix both chapters.</p>
      <div class="track">${qs.map((_, i) => `<div class="cell ${i < pos ? "passed" : i === pos ? "here" : ""}">${i < pos ? "✓" : i + 1}</div>`).join("")}</div>
      <div class="q"><p class="stem"><b>Gate ${pos + 1}.</b>${esc(stem).replace("___", "<mark>&nbsp;___&nbsp;</mark>")}</p>
      <div class="opts">${shuffle(opts.map((_, j) => j)).map((j) => `<button class="opt" data-j="${j}">${esc(opts[j])}</button>`).join("")}</div></div>`;
    el.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
      const ok = +b.dataset.j === ans;
      el.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); });
      if (ok) pos++; else { b.classList.add("wrong"); keys--; }
      setTimeout(draw, ok ? 600 : 1200);
    }));
  };
  draw();
}

boot();
