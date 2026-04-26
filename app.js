const STORAGE_KEYS = {
  customPacks: "jp_mvp_custom_packs",
  mistakes: "jp_mvp_mistakes",
  selectedPackId: "jp_mvp_selected_pack",
  packLibrary: "jp_pack_library_json",
};
const PACK_LIBRARY_PATH = "./tipiku-packs-updated.json";

const LEVELS = ["N5", "N4", "N3", "N2", "N1"];
const TYPE_LABEL = {
  noun: "名词",
  verb: "动词",
  adjective: "形容词",
  all: "综合",
};

const BUILTIN_PACKS = [
  {
    id: "n5-noun-core",
    name: "N5 常用名词",
    level: "N5",
    type: "noun",
    words: [
      { term: "水", kana: "みず", meaning: "水" },
      { term: "学校", kana: "がっこう", meaning: "学校" },
      { term: "友達", kana: "ともだち", meaning: "朋友" },
      { term: "先生", kana: "せんせい", meaning: "老师" },
      { term: "日本", kana: "にほん", meaning: "日本" },
      { term: "時間", kana: "じかん", meaning: "时间" },
      { term: "学生", kana: "がくせい", meaning: "学生" },
      { term: "家", kana: "いえ", meaning: "家" },
      { term: "部屋", kana: "へや", meaning: "房间" },
      { term: "駅", kana: "えき", meaning: "车站" },
      { term: "電車", kana: "でんしゃ", meaning: "电车" },
      { term: "車", kana: "くるま", meaning: "汽车" },
      { term: "自転車", kana: "じてんしゃ", meaning: "自行车" },
      { term: "本", kana: "ほん", meaning: "书" },
      { term: "新聞", kana: "しんぶん", meaning: "报纸" },
      { term: "手紙", kana: "てがみ", meaning: "信" },
      { term: "電話", kana: "でんわ", meaning: "电话" },
      { term: "携帯", kana: "けいたい", meaning: "手机" },
      { term: "机", kana: "つくえ", meaning: "桌子" },
      { term: "椅子", kana: "いす", meaning: "椅子" },
      { term: "鉛筆", kana: "えんぴつ", meaning: "铅笔" },
      { term: "紙", kana: "かみ", meaning: "纸" },
      { term: "靴", kana: "くつ", meaning: "鞋" },
      { term: "服", kana: "ふく", meaning: "衣服" },
      { term: "店", kana: "みせ", meaning: "商店" },
      { term: "会社", kana: "かいしゃ", meaning: "公司" },
      { term: "病院", kana: "びょういん", meaning: "医院" },
      { term: "銀行", kana: "ぎんこう", meaning: "银行" },
      { term: "公園", kana: "こうえん", meaning: "公园" },
      { term: "海", kana: "うみ", meaning: "海" },
      { term: "山", kana: "やま", meaning: "山" },
      { term: "川", kana: "かわ", meaning: "河" },
      { term: "天気", kana: "てんき", meaning: "天气" },
      { term: "誕生日", kana: "たんじょうび", meaning: "生日" },
    ],
  },
  {
    id: "n5-verb-core",
    name: "N5 常用动词",
    level: "N5",
    type: "verb",
    words: [
      { term: "食べる", kana: "たべる", meaning: "吃" },
      { term: "行く", kana: "いく", meaning: "去" },
      { term: "見る", kana: "みる", meaning: "看" },
      { term: "飲む", kana: "のむ", meaning: "喝" },
      { term: "読む", kana: "よむ", meaning: "读" },
      { term: "聞く", kana: "きく", meaning: "听" },
      { term: "書く", kana: "かく", meaning: "写" },
      { term: "話す", kana: "はなす", meaning: "说" },
      { term: "買う", kana: "かう", meaning: "买" },
      { term: "会う", kana: "あう", meaning: "见面" },
      { term: "帰る", kana: "かえる", meaning: "回去" },
      { term: "来る", kana: "くる", meaning: "来" },
      { term: "する", kana: "する", meaning: "做" },
      { term: "寝る", kana: "ねる", meaning: "睡觉" },
      { term: "起きる", kana: "おきる", meaning: "起床" },
      { term: "働く", kana: "はたらく", meaning: "工作" },
      { term: "休む", kana: "やすむ", meaning: "休息" },
      { term: "勉強する", kana: "べんきょうする", meaning: "学习" },
      { term: "歩く", kana: "あるく", meaning: "走路" },
      { term: "走る", kana: "はしる", meaning: "跑" },
      { term: "乗る", kana: "のる", meaning: "乘坐" },
      { term: "降りる", kana: "おりる", meaning: "下车" },
      { term: "開ける", kana: "あける", meaning: "打开" },
      { term: "閉める", kana: "しめる", meaning: "关上" },
      { term: "待つ", kana: "まつ", meaning: "等待" },
      { term: "使う", kana: "つかう", meaning: "使用" },
      { term: "作る", kana: "つくる", meaning: "制作" },
      { term: "洗う", kana: "あらう", meaning: "洗" },
      { term: "教える", kana: "おしえる", meaning: "教" },
      { term: "習う", kana: "ならう", meaning: "学习（跟人学）" },
      { term: "分かる", kana: "わかる", meaning: "明白" },
      { term: "持つ", kana: "もつ", meaning: "拿着" },
      { term: "立つ", kana: "たつ", meaning: "站立" },
    ],
  },
  {
    id: "n5-adjective-core",
    name: "N5 常用形容词",
    level: "N5",
    type: "adjective",
    words: [
      { term: "大きい", kana: "おおきい", meaning: "大" },
      { term: "小さい", kana: "ちいさい", meaning: "小" },
      { term: "新しい", kana: "あたらしい", meaning: "新" },
      { term: "古い", kana: "ふるい", meaning: "旧" },
      { term: "暑い", kana: "あつい", meaning: "热" },
      { term: "寒い", kana: "さむい", meaning: "冷" },
      { term: "高い", kana: "たかい", meaning: "高 / 贵" },
      { term: "安い", kana: "やすい", meaning: "便宜" },
      { term: "早い", kana: "はやい", meaning: "早" },
      { term: "遅い", kana: "おそい", meaning: "晚 / 慢" },
      { term: "多い", kana: "おおい", meaning: "多" },
      { term: "少ない", kana: "すくない", meaning: "少" },
      { term: "長い", kana: "ながい", meaning: "长" },
      { term: "短い", kana: "みじかい", meaning: "短" },
      { term: "明るい", kana: "あかるい", meaning: "明亮" },
      { term: "暗い", kana: "くらい", meaning: "暗" },
      { term: "忙しい", kana: "いそがしい", meaning: "忙" },
      { term: "楽しい", kana: "たのしい", meaning: "开心" },
      { term: "難しい", kana: "むずかしい", meaning: "难" },
      { term: "やさしい", kana: "やさしい", meaning: "容易 / 温柔" },
      { term: "おいしい", kana: "おいしい", meaning: "好吃" },
      { term: "まずい", kana: "まずい", meaning: "难吃" },
      { term: "近い", kana: "ちかい", meaning: "近" },
      { term: "遠い", kana: "とおい", meaning: "远" },
      { term: "良い", kana: "いい", meaning: "好" },
      { term: "悪い", kana: "わるい", meaning: "坏" },
      { term: "便利", kana: "べんり", meaning: "方便" },
      { term: "有名", kana: "ゆうめい", meaning: "有名" },
      { term: "元気", kana: "げんき", meaning: "精神" },
      { term: "静か", kana: "しずか", meaning: "安静" },
      { term: "にぎやか", kana: "にぎやか", meaning: "热闹" },
      { term: "きれい", kana: "きれい", meaning: "漂亮 / 干净" },
      { term: "好き", kana: "すき", meaning: "喜欢" },
    ],
  },
  {
    id: "n4-noun-core",
    name: "N4 常用名词",
    level: "N4",
    type: "noun",
    words: [
      { term: "文化", kana: "ぶんか", meaning: "文化" },
      { term: "経験", kana: "けいけん", meaning: "经验" },
      { term: "方法", kana: "ほうほう", meaning: "方法" },
      { term: "気分", kana: "きぶん", meaning: "心情" },
      { term: "理由", kana: "りゆう", meaning: "理由" },
      { term: "世界", kana: "せかい", meaning: "世界" },
    ],
  },
  {
    id: "n4-verb-core",
    name: "N4 常用动词",
    level: "N4",
    type: "verb",
    words: [
      { term: "始める", kana: "はじめる", meaning: "开始" },
      { term: "続ける", kana: "つづける", meaning: "继续" },
      { term: "働く", kana: "はたらく", meaning: "工作" },
      { term: "習う", kana: "ならう", meaning: "学习" },
      { term: "忘れる", kana: "わすれる", meaning: "忘记" },
      { term: "答える", kana: "こたえる", meaning: "回答" },
    ],
  },
  {
    id: "n4-adjective-core",
    name: "N4 常用形容词",
    level: "N4",
    type: "adjective",
    words: [
      { term: "丁寧", kana: "ていねい", meaning: "礼貌" },
      { term: "便利", kana: "べんり", meaning: "方便" },
      { term: "有名", kana: "ゆうめい", meaning: "有名" },
      { term: "特別", kana: "とくべつ", meaning: "特别" },
      { term: "必要", kana: "ひつよう", meaning: "必要" },
      { term: "大切", kana: "たいせつ", meaning: "重要" },
    ],
  },
  {
    id: "n3-noun-core",
    name: "N3 常用名词",
    level: "N3",
    type: "noun",
    words: [
      { term: "環境", kana: "かんきょう", meaning: "环境" },
      { term: "印象", kana: "いんしょう", meaning: "印象" },
      { term: "意見", kana: "いけん", meaning: "意见" },
      { term: "結果", kana: "けっか", meaning: "结果" },
      { term: "技術", kana: "ぎじゅつ", meaning: "技术" },
      { term: "情報", kana: "じょうほう", meaning: "信息" },
    ],
  },
  {
    id: "n3-verb-core",
    name: "N3 常用动词",
    level: "N3",
    type: "verb",
    words: [
      { term: "増える", kana: "ふえる", meaning: "增加（自动）" },
      { term: "減る", kana: "へる", meaning: "减少" },
      { term: "調べる", kana: "しらべる", meaning: "调查" },
      { term: "伝える", kana: "つたえる", meaning: "传达" },
      { term: "比べる", kana: "くらべる", meaning: "比较" },
      { term: "選ぶ", kana: "えらぶ", meaning: "选择" },
    ],
  },
  {
    id: "n3-adjective-core",
    name: "N3 常用形容词",
    level: "N3",
    type: "adjective",
    words: [
      { term: "正確", kana: "せいかく", meaning: "正确" },
      { term: "複雑", kana: "ふくざつ", meaning: "复杂" },
      { term: "急", kana: "きゅう", meaning: "紧急" },
      { term: "安心", kana: "あんしん", meaning: "安心" },
      { term: "自由", kana: "じゆう", meaning: "自由" },
      { term: "豊か", kana: "ゆたか", meaning: "丰富" },
    ],
  },
  {
    id: "n2-noun-core",
    name: "N2 常用名词",
    level: "N2",
    type: "noun",
    words: [
      { term: "責任", kana: "せきにん", meaning: "责任" },
      { term: "制度", kana: "せいど", meaning: "制度" },
      { term: "課題", kana: "かだい", meaning: "课题" },
      { term: "状況", kana: "じょうきょう", meaning: "状况" },
      { term: "傾向", kana: "けいこう", meaning: "倾向" },
      { term: "効果", kana: "こうか", meaning: "效果" },
    ],
  },
  {
    id: "n2-verb-core",
    name: "N2 常用动词",
    level: "N2",
    type: "verb",
    words: [
      { term: "改善する", kana: "かいぜんする", meaning: "改善" },
      { term: "維持する", kana: "いじする", meaning: "维持" },
      { term: "判断する", kana: "はんだんする", meaning: "判断" },
      { term: "対応する", kana: "たいおうする", meaning: "应对" },
      { term: "評価する", kana: "ひょうかする", meaning: "评价" },
      { term: "防ぐ", kana: "ふせぐ", meaning: "防止" },
    ],
  },
  {
    id: "n2-adjective-core",
    name: "N2 常用形容词",
    level: "N2",
    type: "adjective",
    words: [
      { term: "適切", kana: "てきせつ", meaning: "恰当" },
      { term: "明確", kana: "めいかく", meaning: "明确" },
      { term: "重要", kana: "じゅうよう", meaning: "重要" },
      { term: "慎重", kana: "しんちょう", meaning: "慎重" },
      { term: "十分", kana: "じゅうぶん", meaning: "充分" },
      { term: "確実", kana: "かくじつ", meaning: "确实" },
    ],
  },
  {
    id: "n1-noun-core",
    name: "N1 常用名词",
    level: "N1",
    type: "noun",
    words: [
      { term: "概念", kana: "がいねん", meaning: "概念" },
      { term: "根拠", kana: "こんきょ", meaning: "根据" },
      { term: "認識", kana: "にんしき", meaning: "认知" },
      { term: "側面", kana: "そくめん", meaning: "侧面" },
      { term: "実態", kana: "じったい", meaning: "实际状态" },
      { term: "文脈", kana: "ぶんみゃく", meaning: "语境" },
    ],
  },
  {
    id: "n1-verb-core",
    name: "N1 常用动词",
    level: "N1",
    type: "verb",
    words: [
      { term: "見極める", kana: "みきわめる", meaning: "看清" },
      { term: "補う", kana: "おぎなう", meaning: "补充" },
      { term: "担う", kana: "になう", meaning: "承担" },
      { term: "遂げる", kana: "とげる", meaning: "完成" },
      { term: "促す", kana: "うながす", meaning: "促进" },
      { term: "省みる", kana: "かえりみる", meaning: "反省" },
    ],
  },
  {
    id: "n1-adjective-core",
    name: "N1 常用形容词",
    level: "N1",
    type: "adjective",
    words: [
      { term: "顕著", kana: "けんちょ", meaning: "显著" },
      { term: "漠然", kana: "ばくぜん", meaning: "模糊" },
      { term: "妥当", kana: "だとう", meaning: "妥当" },
      { term: "微妙", kana: "びみょう", meaning: "微妙" },
      { term: "膨大", kana: "ぼうだい", meaning: "庞大" },
      { term: "厳密", kana: "げんみつ", meaning: "严密" },
    ],
  },
];

const state = {
  selectedPackId: loadString(STORAGE_KEYS.selectedPackId, ""),
  builtinPacks: [],
  activeWords: [],
  currentIndex: 0,
  activePackName: "",
  correctCount: 0,
  roundMistakeCount: 0,
  moved: false,
  roundDone: false,
  completionChoice: "next",
  currentWordHadMistake: false,
  enterClearReady: false,
  hasTypedCurrentWord: false,
  isComposing: false,
  pendingClearAfterComposition: false,
  wrongSubmitStreak: 0,
  autoHintVisible: false,
  hoverHintVisible: false,
  actionTimer: 0,
  menuOpen: null,
  customPacks: ensureArray(loadJSON(STORAGE_KEYS.customPacks, [])),
  mistakes: ensureObject(loadJSON(STORAGE_KEYS.mistakes, {})),
  fxCtx: null,
  fxParticles: [],
  fxFrame: 0,
  audioCtx: null,
};

const el = {
  fxCanvas: document.getElementById("fx-canvas"),
  topPackSelect: document.getElementById("top-pack-select"),
  importLibraryBtn: document.getElementById("import-library-btn"),
  exportLibraryBtn: document.getElementById("export-library-btn"),
  importLibraryInput: document.getElementById("import-library-input"),
  hamburgerBtn: document.getElementById("hamburger-btn"),
  mobileMenu: document.getElementById("mobile-menu"),
  mobileImportBtn: document.getElementById("mobile-import-btn"),
  mobileExportBtn: document.getElementById("mobile-export-btn"),
  mobileMistakesBtn: document.getElementById("mobile-mistakes-btn"),
  menuBtns: Array.from(document.querySelectorAll(".menu-btn")),
  menuSurface: document.getElementById("menu-surface"),
  closeMenuBtn: document.getElementById("close-menu-btn"),
  menuMistakes: document.getElementById("menu-view-mistakes"),

  practiceMistakeBtn: document.getElementById("practice-mistake-btn"),
  wordWrap: document.getElementById("word-wrap"),
  questionWord: document.getElementById("question-word"),
  answerBubble: document.getElementById("answer-bubble"),
  answerInput: document.getElementById("answer-input"),
  feedback: document.getElementById("feedback"),
  quizActions: document.getElementById("quiz-actions"),
  skipBtn: document.getElementById("skip-btn"),
  restartBtn: document.getElementById("restart-btn"),
  completePanel: document.getElementById("complete-panel"),
  completeErrorCount: document.getElementById("complete-error-count"),
  completeRestartBtn: document.getElementById("complete-restart-btn"),
  completeNextBtn: document.getElementById("complete-next-btn"),

  mistakeTableBody: document.querySelector("#mistake-table tbody"),
};

initApp();

async function initApp() {
  bindEvents();
  initFxCanvas();
  await loadPackLibrary();
  renderPackSelect();
  renderMistakeTable();
  ensureDefaultPackAndStart();
}

function bindEvents() {
  for (const btn of el.menuBtns) {
    btn.addEventListener("click", () => {
      toggleMenu(btn.dataset.menuTarget || "");
    });
  }

  if (el.closeMenuBtn) {
    el.closeMenuBtn.addEventListener("click", closeMenu);
  }

  if (el.topPackSelect) {
    el.topPackSelect.addEventListener("change", () => {
      state.selectedPackId = el.topPackSelect.value;
      persistSelectedPackId();
      startQuiz();
    });
  }

  if (el.importLibraryBtn && el.importLibraryInput) {
    el.importLibraryBtn.addEventListener("click", () => {
      el.importLibraryInput.click();
    });
    el.importLibraryInput.addEventListener("change", async (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement) || !input.files || !input.files[0]) {
        return;
      }
      await importPackLibraryFile(input.files[0]);
      input.value = "";
    });
  }

  if (el.exportLibraryBtn) {
    el.exportLibraryBtn.addEventListener("click", exportPackLibraryFile);
  }

  if (el.hamburgerBtn && el.mobileMenu) {
    el.hamburgerBtn.addEventListener("click", () => {
      toggleMobileMenu();
    });
  }

  if (el.mobileImportBtn && el.importLibraryBtn) {
    el.mobileImportBtn.addEventListener("click", () => {
      closeMobileMenu();
      el.importLibraryBtn.click();
    });
  }

  if (el.mobileExportBtn && el.exportLibraryBtn) {
    el.mobileExportBtn.addEventListener("click", () => {
      closeMobileMenu();
      el.exportLibraryBtn.click();
    });
  }

  if (el.mobileMistakesBtn) {
    el.mobileMistakesBtn.addEventListener("click", () => {
      closeMobileMenu();
      toggleMenu("mistakes");
    });
  }

  el.practiceMistakeBtn.addEventListener("click", () => {
    const packs = buildAllPacks();
    const mistakePack = packs.find((pack) => pack.id === "mistake-book");
    if (!mistakePack || mistakePack.words.length === 0) {
      return;
    }
    state.selectedPackId = mistakePack.id;
    persistSelectedPackId();
    renderPackSelect();
    startQuiz();
    closeMenu();
  });

  el.answerInput.addEventListener("input", onTyping);
  el.answerInput.addEventListener("compositionstart", () => {
    state.isComposing = true;
  });
  el.answerInput.addEventListener("compositionend", () => {
    state.isComposing = false;
    if (state.pendingClearAfterComposition) {
      state.pendingClearAfterComposition = false;
      clearAnswerInputKeepFocus();
    }
    onTyping();
  });
  el.answerInput.addEventListener("keydown", (event) => {
    if (shouldPlayKeyTap(event)) {
      playKeyTapSound();
    }

    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    if (state.roundDone) {
      executeCompletionChoice();
      return;
    }

    const input = el.answerInput.value.trim();
    if (!input) {
      return;
    }

    if (isCorrectInput(input)) {
      if (!state.moved) {
        onTyping();
      }
      return;
    }

    if (state.enterClearReady) {
      state.enterClearReady = false;
      el.answerInput.value = "";
      el.feedback.innerHTML = "";
      return;
    }

    state.enterClearReady = true;
    state.wrongSubmitStreak += 1;
    if (input) {
      registerMistakeForCurrentWord();
    }
    if (state.wrongSubmitStreak >= 3) {
      state.autoHintVisible = true;
      updateAnswerBubble();
    }
    showAssistActions();
    el.feedback.innerHTML =
      '<span class="bad">输入不匹配</span><span class="pending">  再按 Enter 清空</span>';
  });

  el.skipBtn.addEventListener("click", () => {
    if (state.roundDone) {
      startQuiz();
      return;
    }
    registerMistakeForCurrentWord();
    moveNextWord();
  });

  el.restartBtn.addEventListener("click", startQuiz);
  el.completeRestartBtn.addEventListener("click", () => {
    setCompletionChoice("restart");
    executeCompletionChoice();
  });
  el.completeNextBtn.addEventListener("click", () => {
    setCompletionChoice("next");
    executeCompletionChoice();
  });

  if (el.wordWrap) {
    // On mobile, tapping the word area should not blur the input (which would dismiss the keyboard).
    el.wordWrap.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      state.hoverHintVisible = true;
      updateAnswerBubble();
      focusAnswerInput();
    });
    el.wordWrap.addEventListener("mouseenter", () => {
      state.hoverHintVisible = true;
      updateAnswerBubble();
    });
    el.wordWrap.addEventListener("mouseleave", () => {
      state.hoverHintVisible = false;
      updateAnswerBubble();
    });
    el.wordWrap.addEventListener("click", () => {
      // Fallback for browsers that don't fully respect pointerdown prevention.
      focusAnswerInput();
    });
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const inMenu = event.target.closest("#menu-surface");
    const inTopButton = event.target.closest(".menu-btn");
    if (!inMenu && !inTopButton) {
      closeMenu();
    }

    const inMobileMenu = event.target.closest("#mobile-menu");
    const inHamburger = event.target.closest("#hamburger-btn");
    if (!inMobileMenu && !inHamburger) {
      closeMobileMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (state.roundDone) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setCompletionChoice("restart");
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setCompletionChoice("next");
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        executeCompletionChoice();
        return;
      }
    }

    if (event.key === "Escape") {
      closeMenu();
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  if (!el.mobileMenu || !el.hamburgerBtn) {
    return;
  }
  const willShow = el.mobileMenu.hidden;
  el.mobileMenu.hidden = !willShow;
  el.hamburgerBtn.setAttribute("aria-expanded", willShow ? "true" : "false");
}

function closeMobileMenu() {
  if (!el.mobileMenu || !el.hamburgerBtn) {
    return;
  }
  el.mobileMenu.hidden = true;
  el.hamburgerBtn.setAttribute("aria-expanded", "false");
}

async function loadPackLibrary() {
  const cached = normalizePackLibrary(loadJSON(STORAGE_KEYS.packLibrary, []));
  if (cached.length > 0) {
    state.builtinPacks = cached;
    return;
  }

  try {
    const response = await fetch(PACK_LIBRARY_PATH, { cache: "no-store" });
    if (response.ok) {
      const parsed = normalizePackLibrary(await response.json());
      if (parsed.length > 0) {
        state.builtinPacks = parsed;
        return;
      }
    }
  } catch {
    // Fallback to hardcoded packs when local file fetch is blocked.
  }

  state.builtinPacks = normalizePackLibrary(BUILTIN_PACKS);
}

function normalizePackLibrary(input) {
  if (!Array.isArray(input)) {
    return [];
  }

  const output = [];
  for (const pack of input) {
    if (!pack || typeof pack !== "object") {
      continue;
    }
    const id = String(pack.id || "").trim();
    const name = String(pack.name || "").trim();
    const level = String(pack.level || "").trim();
    const type = String(pack.type || "").trim();
    const wordsInput = Array.isArray(pack.words) ? pack.words : [];
    const words = [];

    for (const word of wordsInput) {
      if (!word || typeof word !== "object") {
        continue;
      }
      const term = String(word.term || "").trim();
      const kana = String(word.kana || "").trim();
      if (!term || !kana) {
        continue;
      }
      words.push({
        term,
        kana,
        meaning: String(word.meaning || "").trim(),
      });
    }

    if (!id || !name || !level || !type || words.length === 0) {
      continue;
    }

    output.push({
      id,
      name,
      level,
      type,
      words,
    });
  }

  return output;
}

async function importPackLibraryFile(file) {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const normalized = normalizePackLibrary(parsed);
    if (normalized.length === 0) {
      window.alert("词库文件格式无效，请检查 JSON 内容。");
      return;
    }

    state.builtinPacks = normalized;
    persistPackLibrary();
    renderPackSelect();
    startQuiz();
    window.alert(`词库导入成功：${normalized.length} 个词包`);
  } catch {
    window.alert("词库导入失败，请确认是有效的 JSON 文件。");
  }
}

function exportPackLibraryFile() {
  const packs = normalizePackLibrary(state.builtinPacks);
  if (packs.length === 0) {
    window.alert("当前没有可导出的词包。");
    return;
  }

  const content = JSON.stringify(packs, null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `tipiku-packs-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function buildAllPacks() {
  const custom = state.customPacks.map((pack) => ({
    ...pack,
    source: "custom",
  }));

  const mistakeWords = Object.values(state.mistakes)
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
    .map((item) => ({
      term: item.term,
      kana: item.kana,
      meaning: item.meaning,
      id: item.wordId,
    }));

  const mistakePack = {
    id: "mistake-book",
    name: `错题本（${mistakeWords.length}）`,
    level: "mistake",
    type: "all",
    source: "mistake",
    words: mistakeWords,
  };

  return [
    ...state.builtinPacks.map((pack) => ({ ...pack, source: "builtin" })),
    ...custom,
    mistakePack,
  ];
}

function renderPackSelect() {
  if (!el.topPackSelect) {
    return;
  }

  const packs = getSelectablePacks();

  if (!packs.length) {
    el.topPackSelect.innerHTML = "";
    return;
  }

  const hasSelected = packs.some((pack) => pack.id === state.selectedPackId);
  if (!hasSelected) {
    state.selectedPackId = packs[0].id;
    persistSelectedPackId();
  }

  el.topPackSelect.innerHTML = "";
  for (const pack of packs) {
    const option = document.createElement("option");
    const levelLabel = pack.level === "mistake" ? "错题" : pack.level;
    option.value = pack.id;
    option.textContent = `${pack.name} · ${levelLabel} · ${pack.words.length}`;
    el.topPackSelect.appendChild(option);
  }
  el.topPackSelect.value = state.selectedPackId;
}

function getSelectablePacks() {
  return buildAllPacks().filter((pack) => {
    return pack.id !== "mistake-book" || pack.words.length > 0;
  });
}

function ensureDefaultPackAndStart() {
  renderPackSelect();
  startQuiz();
  focusAnswerInput();
}

function startQuiz() {
  const pack = buildAllPacks().find((item) => item.id === state.selectedPackId);
  if (!pack || pack.words.length === 0) {
    const fallback = buildAllPacks().find((item) => item.words.length > 0 && item.id !== "mistake-book");
    if (!fallback) {
      renderNoWordsState();
      return;
    }
    state.selectedPackId = fallback.id;
    persistSelectedPackId();
    renderPackSelect();
    return startQuiz();
  }

  state.activeWords = shuffle(
    pack.words.map((word, index) => ({
      ...word,
      id: word.id || `${pack.id}-${index}-${word.term}-${word.kana}`,
      sourcePackId: pack.id,
      sourcePackName: pack.name,
    }))
  );

  state.activePackName = pack.name;
  state.currentIndex = 0;
  state.correctCount = 0;
  state.roundMistakeCount = 0;
  state.moved = false;
  state.roundDone = false;
  state.completionChoice = "next";
  state.currentWordHadMistake = false;
  state.enterClearReady = false;
  state.hasTypedCurrentWord = false;
  state.wrongSubmitStreak = 0;
  state.autoHintVisible = false;
  state.hoverHintVisible = false;
  hideAssistActions();
  hideCompletionPanel();
  updateAnswerBubble();

  renderCurrentQuestion();
  focusAnswerInput();
}

function renderNoWordsState() {
  state.activeWords = [];
  state.roundDone = true;
  state.roundMistakeCount = 0;
  state.enterClearReady = false;
  state.wrongSubmitStreak = 0;
  state.autoHintVisible = false;
  state.hoverHintVisible = false;
  hideAssistActions();
  hideCompletionPanel();
  el.questionWord.textContent = "暂无可用词包";
  el.answerInput.value = "";
  el.answerInput.disabled = true;
  el.feedback.innerHTML = "";
  updateAnswerBubble();
}

function onTyping() {
  if (!state.activeWords.length || state.moved || state.roundDone) {
    return;
  }

  const typed = el.answerInput.value;
  if (!typed.trim()) {
    state.enterClearReady = false;
    if (!state.currentWordHadMistake) {
      scheduleAssistActions();
    }
    el.feedback.innerHTML = "";
    return;
  }

  state.hasTypedCurrentWord = true;
  if (state.actionTimer) {
    window.clearTimeout(state.actionTimer);
    state.actionTimer = 0;
  }
  if (!state.currentWordHadMistake) {
    hideAssistActions();
  }

  state.enterClearReady = false;
  const comparison = evaluateCurrentInput(typed);
  el.feedback.innerHTML = comparison.html;

  if (comparison.hasMistake) {
    registerMistakeForCurrentWord();
    showAssistActions();
  }

  if (comparison.isCorrect) {
    state.moved = true;
    state.correctCount += 1;
    state.wrongSubmitStreak = 0;
    state.autoHintVisible = false;
    // If IME is still composing, delay the clear until composition ends (prevents iOS “underlined” ghost text).
    // Still allow auto-advance without requiring Enter.
    if (state.isComposing) {
      state.pendingClearAfterComposition = true;
    } else {
      clearAnswerInputKeepFocus();
    }
    el.feedback.innerHTML = "";
    state.enterClearReady = false;
    triggerConfettiBurst();
    playSuccessSound();
    updateAnswerBubble();
    focusAnswerInput();

    // On mobile, any delay here can “eat” the user's next keystrokes (the input clears on next question).
    // Move immediately so continuous typing feels reliable.
    setTimeout(() => {
      moveNextWord();
    }, 0);
  }
}

function registerMistakeForCurrentWord() {
  if (state.currentWordHadMistake) {
    return;
  }

  const current = state.activeWords[state.currentIndex];
  if (!current) {
    return;
  }

  state.currentWordHadMistake = true;

  const key = current.id;
  const existing = state.mistakes[key] || {
    wordId: key,
    term: current.term,
    kana: current.kana,
    meaning: current.meaning,
    count: 0,
    lastPackName: current.sourcePackName,
  };

  existing.count += 1;
  existing.lastPackName = current.sourcePackName;
  state.mistakes[key] = existing;
  state.roundMistakeCount += 1;

  persistMistakes();
  renderMistakeTable();
  renderPackSelect();
}

function renderCurrentQuestion() {
  const current = state.activeWords[state.currentIndex];

  if (!current) {
    state.roundDone = true;
    state.autoHintVisible = false;
    state.hoverHintVisible = false;
    hideAssistActions();
    showCompletionPanel();
    updateAnswerBubble();
    return;
  }

  state.roundDone = false;
  state.currentWordHadMistake = false;
  state.enterClearReady = false;
  state.hasTypedCurrentWord = false;
  state.wrongSubmitStreak = 0;
  state.autoHintVisible = false;
  state.hoverHintVisible = false;

  el.questionWord.textContent = current.term;
  hideCompletionPanel();
  el.answerInput.disabled = false;
  el.answerInput.classList.remove("is-hidden");
  el.answerInput.value = "";
  el.feedback.classList.remove("is-hidden");
  el.feedback.innerHTML = "";
  updateAnswerBubble();
  hideAssistActions();
  scheduleAssistActions();
  focusAnswerInput();
}

function moveNextWord() {
  state.currentIndex += 1;
  state.moved = false;
  renderCurrentQuestion();
}

function showCompletionPanel() {
  el.questionWord.textContent = "😄";
  el.answerInput.value = "";
  el.answerInput.disabled = true;
  el.answerInput.classList.add("is-hidden");
  el.feedback.innerHTML = "";
  el.feedback.classList.add("is-hidden");
  hideAssistActions();

  el.completeErrorCount.textContent = String(state.roundMistakeCount);
  el.completePanel.hidden = false;
  setCompletionChoice("next");
}

function hideCompletionPanel() {
  if (el.completePanel) {
    el.completePanel.hidden = true;
  }
  el.answerInput.classList.remove("is-hidden");
  el.feedback.classList.remove("is-hidden");
}

function setCompletionChoice(choice) {
  state.completionChoice = choice === "restart" ? "restart" : "next";
  el.completeRestartBtn.classList.toggle("selected", state.completionChoice === "restart");
  el.completeNextBtn.classList.toggle("selected", state.completionChoice === "next");
}

function executeCompletionChoice() {
  if (!state.roundDone) {
    return;
  }
  if (state.completionChoice === "restart") {
    startQuiz();
    return;
  }
  goToNextPack();
}

function goToNextPack() {
  const packs = getSelectablePacks();
  if (!packs.length) {
    startQuiz();
    return;
  }

  let currentIndex = packs.findIndex((pack) => pack.id === state.selectedPackId);
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  const nextPack = packs[(currentIndex + 1) % packs.length];
  if (!nextPack) {
    startQuiz();
    return;
  }

  state.selectedPackId = nextPack.id;
  persistSelectedPackId();
  renderPackSelect();
  startQuiz();
}

function showAssistActions() {
  if (!el.quizActions) {
    return;
  }
  el.quizActions.classList.add("visible");
}

function hideAssistActions() {
  if (state.actionTimer) {
    window.clearTimeout(state.actionTimer);
    state.actionTimer = 0;
  }
  if (!el.quizActions) {
    return;
  }
  el.quizActions.classList.remove("visible");
}

function scheduleAssistActions() {
  if (state.actionTimer) {
    window.clearTimeout(state.actionTimer);
  }
  state.actionTimer = window.setTimeout(() => {
    if (!state.roundDone && !state.hasTypedCurrentWord && !state.currentWordHadMistake) {
      showAssistActions();
    }
  }, 10000);
}

function renderMistakeTable() {
  const entries = Object.values(state.mistakes)
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

  el.practiceMistakeBtn.disabled = entries.length === 0;

  if (!entries.length) {
    el.mistakeTableBody.innerHTML = '<tr><td colspan="3">暂无错题</td></tr>';
    return;
  }

  el.mistakeTableBody.innerHTML = "";

  for (const item of entries) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${escapeHtml(item.term)}</td><td>${escapeHtml(item.kana)}</td><td>${item.count}</td>`;
    el.mistakeTableBody.appendChild(tr);
  }
}

function toggleMenu(target) {
  state.menuOpen = state.menuOpen === target ? null : target;
  renderMenu();
}

function closeMenu() {
  state.menuOpen = null;
  renderMenu();
}

function renderMenu() {
  const open = state.menuOpen;
  el.menuSurface.hidden = !open;
  el.menuMistakes.hidden = open !== "mistakes";

  for (const btn of el.menuBtns) {
    const isActive = btn.dataset.menuTarget === open;
    btn.classList.toggle("active", isActive);
  }
}

function updateAnswerBubble() {
  if (!el.answerBubble) {
    return;
  }

  const current = getCurrentWord();
  const canShow =
    !state.roundDone &&
    !!current &&
    (state.autoHintVisible || state.hoverHintVisible) &&
    !!current.kana;

  if (!canShow) {
    el.answerBubble.classList.remove("visible");
    el.answerBubble.textContent = "";
    return;
  }

  el.answerBubble.textContent = `かな：${current.kana}`;
  el.answerBubble.classList.add("visible");
}

function normalizeKana(input) {
  return (input || "")
    .trim()
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0x30a1 && code <= 0x30f6) {
        return String.fromCharCode(code - 0x60);
      }
      return char;
    })
    .join("");
}

function normalizeForCompare(input) {
  // IME often inserts full-width spaces or minor punctuation; normalize to reduce false negatives.
  return String(input || "")
    .trim()
    .replaceAll(/\s+/g, "")
    .replaceAll("　", "")
    .replaceAll("・", "")
    .replaceAll("〜", "～")
    .replaceAll("～", "");
}

function katakanaFromKana(input) {
  return (input || "")
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0x3041 && code <= 0x3096) {
        return String.fromCharCode(code + 0x60);
      }
      return char;
    })
    .join("");
}

function getCurrentWord() {
  const current = state.activeWords[state.currentIndex];
  if (!current) {
    return null;
  }
  return current;
}

function isCorrectInput(input) {
  const current = getCurrentWord();
  if (!current) {
    return false;
  }

  const typedRaw = normalizeForCompare(input);
  if (!typedRaw) {
    return false;
  }

  const typedKana = normalizeKana(typedRaw);
  const kanaAnswer = normalizeKana(normalizeForCompare(current.kana || ""));
  const termRaw = normalizeForCompare(current.term || "");
  const termKana = normalizeKana(termRaw);

  return typedRaw === termRaw || typedKana === kanaAnswer || typedKana === termKana;
}

function evaluateCurrentInput(input) {
  const current = getCurrentWord();
  if (!current) {
    return {
      isCorrect: false,
      hasMistake: false,
      html: "",
    };
  }

  const typedRaw = normalizeForCompare(input);
  if (!typedRaw) {
    return {
      isCorrect: false,
      hasMistake: false,
      html: "",
    };
  }

  const candidates = [
    { text: normalizeForCompare(current.kana || ""), useKanaNorm: true },
    { text: normalizeForCompare(katakanaFromKana(current.kana || "")), useKanaNorm: true },
    { text: normalizeForCompare((current.term || "").trim()), useKanaNorm: false },
  ].filter((candidate) => candidate.text);

  let best = candidates[0] || { text: current.kana || "", useKanaNorm: true };
  let bestScore = -1;

  for (const candidate of candidates) {
    const score = commonPrefixLength(typedRaw, candidate.text, candidate.useKanaNorm);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }

  const comparison = buildComparison(typedRaw, best.text, best.useKanaNorm);
  return {
    isCorrect: isCorrectInput(typedRaw),
    hasMistake: comparison.hasMistake,
    html: comparison.html,
  };
}

function commonPrefixLength(source, target, useKanaNorm) {
  const len = Math.min(source.length, target.length);
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    const left = useKanaNorm ? normalizeKana(source[i]) : source[i];
    const right = useKanaNorm ? normalizeKana(target[i]) : target[i];
    if (left !== right) {
      break;
    }
    count += 1;
  }

  return count;
}

function buildComparison(typed, target, useKanaNorm = true) {
  if (!typed) {
    return {
      hasMistake: false,
      html: "",
    };
  }

  let hasMistake = false;
  const out = [];

  for (let i = 0; i < typed.length; i += 1) {
    const typedChar = typed[i];
    const targetChar = target[i] || "";
    const left = useKanaNorm ? normalizeKana(typedChar) : typedChar;
    const right = useKanaNorm ? normalizeKana(targetChar) : targetChar;
    const isMatch = i < target.length && left === right;
    if (!isMatch) {
      hasMistake = true;
    }
    out.push(`<span class="${isMatch ? "ok" : "bad"}">${escapeHtml(typedChar)}</span>`);
  }

  return {
    hasMistake,
    html: out.join(""),
  };
}

function getAudioCtx() {
  if (!state.audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      return null;
    }
    state.audioCtx = new Ctx();
  }

  if (state.audioCtx.state === "suspended") {
    state.audioCtx.resume().catch(() => {});
  }

  return state.audioCtx;
}

function shouldPlayKeyTap(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  if (event.key === "Shift" || event.key === "Tab" || event.key === "CapsLock") {
    return false;
  }
  return event.key.length === 1 || event.key === "Backspace" || event.key === "Delete";
}

function playKeyTapSound() {
  const ctx = getAudioCtx();
  if (!ctx) {
    return;
  }

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(180 + Math.random() * 40, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.05, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.07);
}

function playSuccessSound() {
  const ctx = getAudioCtx();
  if (!ctx) {
    return;
  }

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99];

  notes.forEach((freq, index) => {
    const t = now + index * 0.05;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.08, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.18);
  });
}

function initFxCanvas() {
  if (!el.fxCanvas) {
    return;
  }

  const ctx = el.fxCanvas.getContext("2d");
  if (!ctx) {
    return;
  }

  state.fxCtx = ctx;
  resizeFxCanvas();
  window.addEventListener("resize", resizeFxCanvas);
}

function resizeFxCanvas() {
  if (!el.fxCanvas || !state.fxCtx) {
    return;
  }
  const dpr = window.devicePixelRatio || 1;
  el.fxCanvas.width = Math.floor(window.innerWidth * dpr);
  el.fxCanvas.height = Math.floor(window.innerHeight * dpr);
}

function triggerConfettiBurst() {
  if (!state.fxCtx || !el.fxCanvas) {
    return;
  }

  const rect = el.answerInput.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const colors = ["#38bdf8", "#818cf8", "#22c55e", "#f97316", "#e879f9", "#f43f5e"];

  for (let i = 0; i < 46; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.4 + Math.random() * 3.4;
    state.fxParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.8,
      size: 3 + Math.random() * 4,
      color: colors[i % colors.length],
      life: 1,
      decay: 0.015 + Math.random() * 0.015,
    });
  }

  if (!state.fxFrame) {
    state.fxFrame = window.requestAnimationFrame(runFxFrame);
  }
}

function runFxFrame() {
  if (!state.fxCtx || !el.fxCanvas) {
    state.fxFrame = 0;
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = el.fxCanvas.width / dpr;
  const height = el.fxCanvas.height / dpr;
  const ctx = state.fxCtx;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const next = [];
  for (const particle of state.fxParticles) {
    particle.vy += 0.08;
    particle.vx *= 0.992;
    particle.vy *= 0.995;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life -= particle.decay;

    if (particle.life <= 0) {
      continue;
    }

    ctx.globalAlpha = Math.max(0, particle.life);
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    next.push(particle);
  }

  ctx.globalAlpha = 1;
  state.fxParticles = next;

  if (state.fxParticles.length > 0) {
    state.fxFrame = window.requestAnimationFrame(runFxFrame);
  } else {
    state.fxFrame = 0;
    ctx.clearRect(0, 0, width, height);
  }
}

function focusAnswerInput() {
  setTimeout(() => {
    if (!el.answerInput.disabled) {
      el.answerInput.focus();
    }
  }, 0);
}

function clearAnswerInputKeepFocus() {
  el.answerInput.value = "";
  try {
    el.answerInput.setSelectionRange(0, 0);
  } catch {
    // Some input types/browsers can throw; ignore.
  }
  focusAnswerInput();
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function loadString(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return typeof raw === "string" ? raw : fallback;
  } catch {
    return fallback;
  }
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function ensureObject(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  return {};
}

function persistCustomPacks() {
  localStorage.setItem(STORAGE_KEYS.customPacks, JSON.stringify(state.customPacks));
}

function persistMistakes() {
  localStorage.setItem(STORAGE_KEYS.mistakes, JSON.stringify(state.mistakes));
}

function persistSelectedPackId() {
  localStorage.setItem(STORAGE_KEYS.selectedPackId, state.selectedPackId || "");
}

function persistPackLibrary() {
  localStorage.setItem(STORAGE_KEYS.packLibrary, JSON.stringify(state.builtinPacks));
}

function shuffle(list) {
  const cloned = [...list];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
