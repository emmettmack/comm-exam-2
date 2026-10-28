(function () {
  const C = window.COURSES;
  const app = document.getElementById('app');
  const KEY = 'commexam2.progress.v1';

  let P = {};
  try { P = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { P = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} };
  const prog = id => (P[id] = P[id] || { learn: false, examples: false, best: null });
  const pct = c => {
    const p = prog(c.id);
    return Math.round(((p.learn ? 1 : 0) + (p.examples ? 1 : 0) + (p.best !== null && p.best >= 70 ? 1 : 0)) / 3 * 100);
  };

  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const el = (html) => { app.innerHTML = html; window.scrollTo(0, 0); };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function topProgress() {
    const avg = Math.round(C.reduce((s, c) => s + pct(c), 0) / C.length);
    document.getElementById('topProgress').innerHTML = `<span>${avg}% complete</span><div class="bar"><i style="width:${avg}%"></i></div>`;
  }

  /* ---------- HOME ---------- */
  function home() {
    document.title = 'Comm Exam 2 Study Course';
    const total = C.reduce((s, c) => s + c.quiz.length, 0);
    el(`
      <section class="hero">
        <div class="eyebrow">Comm Exam 2</div>
        <h1>Learn it. See it. Get tested.</h1>
        <p>Ten short courses covering every theory on the exam. Each one teaches the content, walks through examples, then quizzes you.</p>
        <div class="how"><span class="pill"><b>1</b> Learn</span><span class="pill"><b>2</b> Examples</span><span class="pill"><b>3</b> Quiz (70%+ to complete)</span><span class="pill"><b>★</b> Final exam</span></div>
      </section>
      <h2 class="section-title">Courses</h2>
      <div class="grid">
        ${C.map(c => `
          <a class="card" href="#/c/${c.id}/learn">
            <div class="num">Course ${c.num}</div>
            <h3>${c.title}</h3>
            <div class="who">${c.who} · ~${c.mins} min</div>
            <p>${c.blurb}</p>
            <div class="meta"><div class="bar"><i style="width:${pct(c)}%"></i></div><span>${pct(c)}%</span></div>
          </a>`).join('')}
        <a class="card exam" href="#/exam">
          <div class="num">Final</div>
          <h3>Practice Exam</h3>
          <div class="who">${total} questions available · 25 per run</div>
          <p>A random mix of questions from all ten courses. Run it until you stop missing things.</p>
          <div class="meta"><span>${P.exam && P.exam.best !== undefined ? 'Best: ' + P.exam.best + '%' : 'Not taken yet'}</span></div>
        </a>
      </div>`);
  }

  /* ---------- COURSE SHELL ---------- */
  function shell(c, tab, inner) {
    const p = prog(c.id);
    const t = (k, label, done) => `<a class="tab ${tab === k ? 'on' : ''}" href="#/c/${c.id}/${k}">${label}${done ? '<span class="ck">✓</span>' : ''}</a>`;
    document.title = c.title + ' · Comm Exam 2';
    el(`
      <div class="crumbs"><a href="#/">All courses</a> / Course ${c.num}</div>
      <div class="chead"><h1>${c.title}</h1><div class="who">${c.who}</div></div>
      <nav class="tabs">${t('learn', '1 · Learn', p.learn)}${t('examples', '2 · Examples', p.examples)}${t('quiz', '3 · Quiz', p.best !== null && p.best >= 70)}</nav>
      <div class="col">${inner}</div>`);
  }

  /* ---------- LEARN ---------- */
  function learn(c) {
    shell(c, 'learn', `
      ${c.lessons.map((l, i) => `
        <section class="lesson">
          <div class="step">Part ${i + 1} of ${c.lessons.length}</div>
          <h2>${l.title}</h2>
          ${l.body}
        </section>`).join('')}
      <div class="nav"><a class="btn ghost" href="#/">Courses</a><a class="btn" id="next" href="#/c/${c.id}/examples">Next: Examples →</a></div>`);
    document.getElementById('next').addEventListener('click', () => { prog(c.id).learn = true; save(); });
  }

  /* ---------- EXAMPLES ---------- */
  function examples(c) {
    shell(c, 'examples', `
      <p style="color:var(--muted);margin-top:0">Try to answer each one in your head first, then reveal.</p>
      ${c.examples.map((e, i) => `
        <div class="ex" data-i="${i}">
          <h3>${e.title}</h3>
          <div class="scn">${e.scenario}</div>
          <button class="btn ghost reveal">Show answer</button>
          <div class="ans">${e.answer}</div>
        </div>`).join('')}
      <div class="nav"><a class="btn ghost" href="#/c/${c.id}/learn">← Learn</a><a class="btn" id="next" href="#/c/${c.id}/quiz">Next: Quiz →</a></div>`);
    app.querySelectorAll('.reveal').forEach(b => b.addEventListener('click', () => {
      const ex = b.closest('.ex'); ex.classList.toggle('open');
      b.textContent = ex.classList.contains('open') ? 'Hide answer' : 'Show answer';
    }));
    document.getElementById('next').addEventListener('click', () => { prog(c.id).examples = true; save(); });
  }

  /* ---------- QUIZ ENGINE ---------- */
  function runQuiz(questions, ctx) {
    const qs = shuffle(questions).map(q => ({ ...q, order: shuffle(q.o.map((t, i) => i)) }));
    let i = 0, score = 0, missed = [];
    const host = ctx.host;

    function ask() {
      const q = qs[i];
      host.innerHTML = `
        <div class="qprog"><span>Question ${i + 1} of ${qs.length}</span><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div><span>${score} correct</span></div>
        <div class="q">
          <h2>${esc(q.q)}</h2>
          <div id="opts">${q.order.map(oi => `<button class="opt" data-o="${oi}">${esc(q.o[oi])}</button>`).join('')}</div>
          <div id="fb"></div>
        </div>`;
      host.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => pick(b, q)));
    }

    function pick(btn, q) {
      const chosen = +btn.dataset.o, ok = chosen === q.a;
      host.querySelectorAll('.opt').forEach(b => {
        b.disabled = true;
        if (+b.dataset.o === q.a) b.classList.add('right');
      });
      if (!ok) { btn.classList.add('wrong'); missed.push(q); } else score++;
      const last = i === qs.length - 1;
      host.querySelector('#fb').innerHTML = `
        <div class="why ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct' : 'Not quite'}</b>${esc(q.w)}</div>
        <button class="btn" id="go">${last ? 'See results' : 'Next question →'}</button>`;
      host.querySelector('#go').addEventListener('click', () => { i++; last ? finish() : ask(); });
      host.querySelector('#go').focus();
    }

    function finish() {
      const p = Math.round(score / qs.length * 100);
      ctx.onDone(p);
      const msg = p >= 90 ? 'Excellent. You know this.' : p >= 70 ? 'Solid. Review the misses below.' : 'Go back over the lesson and try again.';
      host.innerHTML = `
        <div class="result">
          <div class="score">${p}%</div>
          <h2>${score} of ${qs.length} correct</h2>
          <p>${msg}</p>
          <div class="row">
            <button class="btn" id="again">Try again</button>
            ${ctx.after || ''}
          </div>
        </div>
        ${missed.length ? `<div class="miss"><h3>Review what you missed</h3>${missed.map(q => `<div class="m"><b>${esc(q.q)}</b><span>${esc(q.o[q.a])}</span> — ${esc(q.w)}</div>`).join('')}</div>` : ''}`;
      host.querySelector('#again').addEventListener('click', () => { runQuiz(questions, ctx); });
    }
    ask();
  }

  function quiz(c) {
    const p = prog(c.id);
    shell(c, 'quiz', `<div id="qhost"></div>`);
    runQuiz(c.quiz, {
      host: document.getElementById('qhost'),
      onDone(score) { p.best = Math.max(p.best || 0, score); save(); topProgress(); },
      after: (() => {
        const i = C.findIndex(x => x.id === c.id), n = C[i + 1];
        return n ? `<a class="btn ghost" href="#/c/${n.id}/learn">Next course →</a>` : `<a class="btn ghost" href="#/exam">Final exam →</a>`;
      })()
    });
  }

  /* ---------- FINAL EXAM ---------- */
  function exam() {
    document.title = 'Practice Exam · Comm Exam 2';
    el(`
      <div class="crumbs"><a href="#/">All courses</a> / Final</div>
      <div class="chead"><h1>Practice Exam</h1><div class="who">25 random questions from every course</div></div>
      <div class="col" id="qhost"></div>`);
    const all = C.flatMap(c => c.quiz);
    runQuiz(shuffle(all).slice(0, 25), {
      host: document.getElementById('qhost'),
      onDone(score) { P.exam = P.exam || {}; P.exam.best = Math.max(P.exam.best || 0, score); save(); },
      after: `<a class="btn ghost" href="#/">Back to courses</a>`
    });
    // "Try again" should redraw a fresh set
    document.getElementById('qhost').addEventListener('click', e => {
      if (e.target.id === 'again') { e.stopImmediatePropagation(); exam(); }
    }, true);
  }

  /* ---------- ROUTER ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, '').split('/');
    if (h[0] === 'c') {
      const c = C.find(x => x.id === h[1]);
      if (c) { ({ learn, examples, quiz }[h[2]] || learn)(c); topProgress(); return; }
    }
    if (h[0] === 'exam') { exam(); topProgress(); return; }
    home(); topProgress();
  }
  window.addEventListener('hashchange', route);
  route();
})();
