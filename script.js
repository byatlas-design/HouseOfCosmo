const COPY = {
    intro: {
        progressText: "Parfum Selector",
        headline: "Find a parfum you’ll actually wear",
        subhead: "3 questions. One recommendation.",
        supporting: "We’ll match a House of Cosmo parfum to your notes and mood.",
        primaryCta: "Start",
        primaryAria: "Start parfum selector",
        secondaryCta: "Skip",
        secondaryAria: "Skip questions and view suggested parfum"
    },
    offerLine: "10% off your first order",
    steps: {
        atmosphere: {
            progressText: "Step 1 of 3",
            title: "Atmosphere",
            question: "How should your parfum feel?",
            helper: "Think projection and presence.",
            options: [
                { id: "clean", label: "Clean", detail: "crisp, airy, bright" },
                { id: "warm", label: "Warm", detail: "glowing, ambered, smooth" },
                { id: "dark", label: "Dark", detail: "deep, smoky, nocturnal" }
            ],
            primaryCta: "Next"
        },
        notes: {
            progressText: "Step 2 of 3",
            title: "Notes",
            question: "Which note family are you drawn to?",
            helper: "Top notes first — then depth.",
            options: [
                { id: "citrus", label: "Citrus", detail: "spark + lift" },
                { id: "floral", label: "Floral", detail: "soft bloom" },
                { id: "spiced", label: "Spiced", detail: "heat + edge" },
                { id: "gourmand", label: "Gourmand", detail: "sweet depth" }
            ],
            primaryCta: "Next"
        },
        wear: {
            progressText: "Step 3 of 3",
            title: "Wear time",
            question: "When do you want to wear it?",
            helper: "Day = fresh finish. Night = richer trail.",
            options: [
                { id: "day", label: "Day", detail: "fresh presence" },
                { id: "night", label: "Night", detail: "rich trail" },
                { id: "always", label: "Always", detail: "everyday signature" }
            ],
            primaryCta: "See my match"
        }
    },
    result: {
        progressText: "Step 3 of 3",
        title: "Your match",
        shopCta: "Shop this parfum",
        shopAria: "Shop your matched parfum",
        retryCta: "Try again",
        retryAria: "Restart from step one"
    },
    shared: {
        backCta: "Back",
        backAria: "Go back"
    },
    defaults: {
        atmosphere: "clean",
        notes: "citrus",
        wear: "day"
    },
    fallbackImage: "NewEden.jpg.webp"
};

const SCENTS = [
    {
        id: "new-eden",
        name: "New Eden",
        tagline: "A lucid skin scent with radiant lift",
        notesLine: "ozone • grapefruit • cassis",
        description: "Crisp citrus air with transparent depth.",
        image: "NewEden.jpg.webp",
        profile: {
            atmosphere: { clean: 3, warm: 1, dark: 0 },
            notes: { citrus: 3, floral: 1, spiced: 0, gourmand: 0 },
            wear: { day: 3, night: 1, always: 2 }
        }
    },
    {
        id: "polaris",
        name: "Polaris",
        tagline: "Bright floral clarity with composed projection",
        notesLine: "bergamot • iris • white musk",
        description: "Polished bloom with a clear and elegant finish.",
        image: "Polaris.jpg.webp",
        profile: {
            atmosphere: { clean: 2, warm: 2, dark: 0 },
            notes: { citrus: 2, floral: 3, spiced: 0, gourmand: 0 },
            wear: { day: 2, night: 1, always: 3 }
        }
    },
    {
        id: "galaxia",
        name: "Galaxia",
        tagline: "Ambered florals with a satin dry-down",
        notesLine: "mandarin • rose • amber",
        description: "Soft glow and petals wrapped in warm resin.",
        image: "Galaxia.jpg.webp",
        profile: {
            atmosphere: { clean: 1, warm: 3, dark: 1 },
            notes: { citrus: 1, floral: 3, spiced: 2, gourmand: 1 },
            wear: { day: 1, night: 2, always: 3 }
        }
    },
    {
        id: "crimson-aura",
        name: "Crimson Aura",
        tagline: "Smoked spice and velvet sweetness",
        notesLine: "saffron • black plum • cacao",
        description: "Dark warmth with a long, sensual trail.",
        image: "CrimsonAura.jpg.webp",
        profile: {
            atmosphere: { clean: 0, warm: 2, dark: 3 },
            notes: { citrus: 0, floral: 0, spiced: 3, gourmand: 2 },
            wear: { day: 0, night: 3, always: 1 }
        }
    },
    {
        id: "lunar-minerale",
        name: "Lunar Minérale",
        tagline: "Mineral woods with nocturnal clarity",
        notesLine: "juniper • mineral accord • cedar",
        description: "Cool depth and clean smoke for evening wear.",
        image: "LunarMinerale.jpg.webp",
        profile: {
            atmosphere: { clean: 2, warm: 0, dark: 3 },
            notes: { citrus: 1, floral: 0, spiced: 2, gourmand: 0 },
            wear: { day: 1, night: 3, always: 2 }
        }
    }
];

const WHY_PHRASES = {
    atmosphere: {
        clean: ["crisp", "clear", "bright finish"],
        warm: ["glow", "soft warmth", "smooth dry-down"],
        dark: ["depth", "smoke", "long trail"]
    },
    notes: {
        citrus: ["lift", "spark", "bright top"],
        floral: ["soft bloom", "sheer petals"],
        spiced: ["heat", "edge", "warm bite"],
        gourmand: ["sweet depth", "rich comfort"]
    },
    wear: {
        day: "fresh presence",
        night: "richer trail",
        always: "everyday signature"
    }
};

const OPTION_TONES = {
    clean: "118, 173, 255",
    warm: "255, 167, 102",
    dark: "165, 128, 255",
    citrus: "255, 211, 108",
    floral: "235, 156, 210",
    spiced: "238, 140, 92",
    gourmand: "209, 162, 122",
    day: "132, 215, 255",
    night: "130, 126, 255",
    always: "208, 213, 232"
};

const SCREEN_ORDER = ["intro", "atmosphere", "notes", "wear", "result"];
const STEP_KEYS = ["atmosphere", "notes", "wear"];
const AUTO_ADVANCE_DELAY = 180;
const AMBIENT_ACTIVE_ALPHA = "0.52";
const AMBIENT_SWITCH_DELAY = 110;

let autoAdvanceTimeoutId = null;
let ambientToneTimeoutId = null;

const state = {
    currentScreen: "intro",
    selections: {
        atmosphere: null,
        notes: null,
        wear: null
    },
    introSkipped: false,
    chosenScent: null,
    transitioning: false
};

const ad = document.getElementById("ad");
const topBar = document.getElementById("topBar");
const progressText = document.getElementById("progressText");
const offerLine = document.getElementById("offerLine");
const leftAction = document.getElementById("leftAction");
const rightAction = document.getElementById("rightAction");
const textAction = document.getElementById("textAction");
const buttonRow = document.getElementById("buttonRow");
const stepProgress = document.getElementById("stepProgress");
const stepProgressFill = document.getElementById("stepProgressFill");
const stepProgressText = document.getElementById("stepProgressText");

const introScreen = document.getElementById("screen-intro");
const atmosphereScreen = document.getElementById("screen-atmosphere");
const notesScreen = document.getElementById("screen-notes");
const wearScreen = document.getElementById("screen-wear");
const resultScreen = document.getElementById("screen-result");

const resultNameButton = document.getElementById("resultNameButton");
const resultTagline = document.getElementById("resultTagline");
const resultNotes = document.getElementById("resultNotes");
const resultWhy = document.getElementById("resultWhy");
const resultImageButton = document.getElementById("resultImageButton");
const resultImage = document.getElementById("resultImage");

const screens = {
    intro: introScreen,
    atmosphere: atmosphereScreen,
    notes: notesScreen,
    wear: wearScreen,
    result: resultScreen
};

const optionHosts = {
    atmosphere: document.getElementById("options-atmosphere"),
    notes: document.getElementById("options-notes"),
    wear: document.getElementById("options-wear")
};

init();

function init() {
    applyCopy();
    renderStepOptions();
    bindEvents();
    syncOptionStates();
    syncFrame();
}

function applyCopy() {
    introScreen.querySelector(".headline").textContent = COPY.intro.headline;
    introScreen.querySelector(".subhead").textContent = COPY.intro.subhead;
    introScreen.querySelector(".supporting").textContent = COPY.intro.supporting;

    atmosphereScreen.querySelector(".screen-title").textContent = COPY.steps.atmosphere.title;
    atmosphereScreen.querySelector(".question").textContent = COPY.steps.atmosphere.question;
    atmosphereScreen.querySelector(".helper").textContent = COPY.steps.atmosphere.helper;

    notesScreen.querySelector(".screen-title").textContent = COPY.steps.notes.title;
    notesScreen.querySelector(".question").textContent = COPY.steps.notes.question;
    notesScreen.querySelector(".helper").textContent = COPY.steps.notes.helper;

    wearScreen.querySelector(".screen-title").textContent = COPY.steps.wear.title;
    wearScreen.querySelector(".question").textContent = COPY.steps.wear.question;
    wearScreen.querySelector(".helper").textContent = COPY.steps.wear.helper;

    resultScreen.querySelector(".screen-title").textContent = COPY.result.title;
    offerLine.textContent = COPY.offerLine;
}

function renderStepOptions() {
    STEP_KEYS.forEach((stepKey) => {
        optionHosts[stepKey].innerHTML = "";

        COPY.steps[stepKey].options.forEach((option) => {
            const optionButton = document.createElement("button");
            optionButton.type = "button";
            optionButton.className = "option-btn";
            optionButton.dataset.step = stepKey;
            optionButton.dataset.value = option.id;
            optionButton.dataset.noClickout = "true";
            optionButton.style.setProperty("--tone-rgb", OPTION_TONES[option.id] || "242, 241, 238");
            optionButton.setAttribute("aria-label", `Select ${option.label}: ${option.detail}`);
            optionButton.setAttribute("aria-pressed", "false");

            optionButton.addEventListener("pointerenter", onOptionToneEnter);
            optionButton.addEventListener("pointerleave", onOptionToneLeave);
            optionButton.addEventListener("focus", onOptionToneEnter);
            optionButton.addEventListener("blur", onOptionToneLeave);

            optionButton.innerHTML = `
        <span>
          <span class="option-main">${option.label}</span>
          <span class="option-sub">${option.detail}</span>
        </span>
        <span class="option-tick" aria-hidden="true">✓</span>
      `;

            optionHosts[stepKey].appendChild(optionButton);
        });
    });
}

function bindEvents() {
    Object.values(optionHosts).forEach((host) => {
        host.addEventListener("click", onOptionClick);
    });

    leftAction.addEventListener("click", onLeftAction);
    rightAction.addEventListener("click", onRightAction);
    textAction.addEventListener("click", onTextAction);

    resultNameButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openGeneralClickout();
    });

    resultImageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openGeneralClickout();
    });

    ad.addEventListener("click", onAdClick);
}

function onOptionClick(event) {
    const button = event.target.closest(".option-btn");

    if (!button) {
        return;
    }

    const stepKey = button.dataset.step;
    const value = button.dataset.value;

    state.selections[stepKey] = value;
    syncOptionStates();
    syncFrame();
    scheduleAutoAdvance(stepKey, value);
}

function scheduleAutoAdvance(stepKey, selectedValue) {
    clearAutoAdvanceTimer();

    if (state.transitioning || state.currentScreen !== stepKey) {
        return;
    }

    autoAdvanceTimeoutId = window.setTimeout(() => {
        if (state.transitioning || state.currentScreen !== stepKey) {
            return;
        }

        if (state.selections[stepKey] !== selectedValue) {
            return;
        }

        if (stepKey === "atmosphere") {
            transitionTo("notes", 1);
            return;
        }

        if (stepKey === "notes") {
            transitionTo("wear", 1);
            return;
        }

        if (stepKey === "wear") {
            updateResult();
            transitionTo("result", 1);
        }
    }, AUTO_ADVANCE_DELAY);
}

function clearAutoAdvanceTimer() {
    if (autoAdvanceTimeoutId !== null) {
        window.clearTimeout(autoAdvanceTimeoutId);
        autoAdvanceTimeoutId = null;
    }
}

function onOptionToneEnter(event) {
    const toneKey = event.currentTarget.dataset.value;
    const tone = OPTION_TONES[toneKey];

    if (!tone) {
        return;
    }

    if (ambientToneTimeoutId !== null) {
        window.clearTimeout(ambientToneTimeoutId);
        ambientToneTimeoutId = null;
    }

    const currentTone = ad.style.getPropertyValue("--option-rgb").trim();
    const currentAlpha = ad.style.getPropertyValue("--option-alpha").trim();

    if (currentTone === tone && currentAlpha !== "0") {
        ad.style.setProperty("--option-alpha", AMBIENT_ACTIVE_ALPHA);
        return;
    }

    ad.style.setProperty("--option-alpha", "0");

    ambientToneTimeoutId = window.setTimeout(() => {
        ad.style.setProperty("--option-rgb", tone);
        ad.style.setProperty("--option-alpha", AMBIENT_ACTIVE_ALPHA);
        ambientToneTimeoutId = null;
    }, AMBIENT_SWITCH_DELAY);
}

function onOptionToneLeave() {
    clearAmbientTone();
}

function clearAmbientTone() {
    if (ambientToneTimeoutId !== null) {
        window.clearTimeout(ambientToneTimeoutId);
        ambientToneTimeoutId = null;
    }

    ad.style.setProperty("--option-alpha", "0");
}

function onLeftAction(event) {
    event.stopPropagation();
    clearAutoAdvanceTimer();

    if (state.transitioning) {
        return;
    }

    if (state.currentScreen === "atmosphere") {
        transitionTo("intro", -1);
        return;
    }

    if (state.currentScreen === "notes") {
        transitionTo("atmosphere", -1);
        return;
    }

    if (state.currentScreen === "wear") {
        transitionTo("notes", -1);
    }
}

function onRightAction(event) {
    event.stopPropagation();
    clearAutoAdvanceTimer();

    if (state.transitioning) {
        return;
    }

    if (state.currentScreen === "intro") {
        transitionTo("atmosphere", 1);
        return;
    }

    if (state.currentScreen === "atmosphere" && state.selections.atmosphere) {
        transitionTo("notes", 1);
        return;
    }

    if (state.currentScreen === "notes" && state.selections.notes) {
        transitionTo("wear", 1);
        return;
    }

    if (state.currentScreen === "wear" && state.selections.wear) {
        updateResult();
        transitionTo("result", 1);
        return;
    }

    if (state.currentScreen === "result" && state.chosenScent) {
        const chosenScent = state.chosenScent;
        window.open((window.clickTag || "https://houseofcosmo.com") + "?scent=" + encodeURIComponent(chosenScent.id), "_blank");
    }
}

function onTextAction(event) {
    event.stopPropagation();
    clearAutoAdvanceTimer();

    if (state.transitioning) {
        return;
    }

    if (state.currentScreen === "intro") {
        state.introSkipped = true;
        state.selections = {
            atmosphere: COPY.defaults.atmosphere,
            notes: COPY.defaults.notes,
            wear: COPY.defaults.wear
        };
        syncOptionStates();
        updateResult();
        transitionTo("result", 1);
        return;
    }

    if (state.currentScreen === "result") {
        state.selections = {
            atmosphere: null,
            notes: null,
            wear: null
        };
        state.chosenScent = null;
        syncOptionStates();
        transitionTo("atmosphere", -1);
    }
}

function onAdClick(event) {
    if (event.target.closest("[data-no-clickout='true']")) {
        return;
    }

    openGeneralClickout();
}

function openGeneralClickout() {
    window.open(window.clickTag || "https://houseofcosmo.com", "_blank");
}

function transitionTo(nextScreenKey, direction) {
    if (state.currentScreen === nextScreenKey || state.transitioning) {
        return;
    }

    clearAmbientTone();

    const currentScreen = screens[state.currentScreen];
    const nextScreen = screens[nextScreenKey];

    const enterClass = direction >= 0 ? "enter-from-right" : "enter-from-left";
    const exitClass = direction >= 0 ? "exit-to-left" : "exit-to-right";

    state.transitioning = true;

    nextScreen.classList.add("active", enterClass);
    nextScreen.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            nextScreen.classList.remove(enterClass);
            currentScreen.classList.add(exitClass);
            currentScreen.classList.remove("active");
        });
    });

    window.setTimeout(() => {
        currentScreen.classList.remove(exitClass);
        currentScreen.setAttribute("aria-hidden", "true");
        state.currentScreen = nextScreenKey;
        state.transitioning = false;
        syncFrame();
    }, 450);
}

function syncFrame() {
    ad.dataset.screen = state.currentScreen;
    syncTopBar();
    syncActions();
}

function syncTopBar() {
    if (state.currentScreen === "intro") {
        topBar.classList.add("intro-mode");
        progressText.textContent = COPY.intro.progressText;
        return;
    }

    topBar.classList.remove("intro-mode");

    if (state.currentScreen === "atmosphere") {
        progressText.textContent = COPY.steps.atmosphere.progressText;
        return;
    }

    if (state.currentScreen === "notes") {
        progressText.textContent = COPY.steps.notes.progressText;
        return;
    }

    if (state.currentScreen === "wear") {
        progressText.textContent = COPY.steps.wear.progressText;
        return;
    }

    progressText.textContent = COPY.result.progressText;
}

function syncActions() {
    leftAction.classList.add("hidden");
    rightAction.classList.remove("hidden");
    textAction.classList.add("hidden");
    stepProgress.classList.add("hidden");
    buttonRow.classList.remove("single");
    buttonRow.classList.remove("step-mode");

    if (state.currentScreen === "intro") {
        buttonRow.classList.add("single");

        rightAction.textContent = COPY.intro.primaryCta;
        rightAction.disabled = false;
        rightAction.setAttribute("aria-label", COPY.intro.primaryAria);

        textAction.textContent = COPY.intro.secondaryCta;
        textAction.setAttribute("aria-label", COPY.intro.secondaryAria);
        textAction.classList.remove("hidden");
        return;
    }

    if (state.currentScreen === "result") {
        buttonRow.classList.add("single");

        rightAction.textContent = COPY.result.shopCta;
        rightAction.disabled = !state.chosenScent;
        rightAction.setAttribute("aria-label", COPY.result.shopAria);

        textAction.textContent = COPY.result.retryCta;
        textAction.setAttribute("aria-label", COPY.result.retryAria);
        textAction.classList.remove("hidden");
        return;
    }

    leftAction.classList.remove("hidden");
    leftAction.textContent = COPY.shared.backCta;
    leftAction.setAttribute("aria-label", COPY.shared.backAria);

    rightAction.classList.add("hidden");
    stepProgress.classList.remove("hidden");
    buttonRow.classList.add("step-mode");
    syncStepProgress(state.currentScreen);
}

function syncStepProgress(stepKey) {
    const stepNumber = STEP_KEYS.indexOf(stepKey) + 1;

    if (stepNumber <= 0) {
        stepProgressFill.style.width = "0%";
        stepProgressText.textContent = "0 / 3";
        stepProgress.setAttribute("aria-valuenow", "0");
        return;
    }

    const progressPercent = (stepNumber / STEP_KEYS.length) * 100;
    stepProgressFill.style.width = `${progressPercent}%`;
    stepProgressText.textContent = `${stepNumber} / ${STEP_KEYS.length}`;
    stepProgress.setAttribute("aria-valuenow", String(stepNumber));
}

function syncOptionStates() {
    STEP_KEYS.forEach((stepKey) => {
        const selectedValue = state.selections[stepKey];

        optionHosts[stepKey].querySelectorAll(".option-btn").forEach((button) => {
            const isSelected = button.dataset.value === selectedValue;
            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });
    });
}

function updateResult() {
    const selections = state.selections;

    if (!selections.atmosphere || !selections.notes || !selections.wear) {
        return;
    }

    state.chosenScent = chooseScent(selections);

    resultNameButton.textContent = state.chosenScent.name;
    resultTagline.textContent = state.chosenScent.tagline;
    resultNotes.textContent = state.chosenScent.notesLine;
    resultWhy.textContent = buildWhyLine(selections);

    resultImage.src = state.chosenScent.image;
    resultImage.alt = `${state.chosenScent.name} parfum visual`;
    resultImage.dataset.fallbackApplied = "false";
    resultImage.onerror = () => {
        if (resultImage.dataset.fallbackApplied === "true") {
            return;
        }

        resultImage.dataset.fallbackApplied = "true";
        resultImage.src = COPY.fallbackImage;
    };
}

function chooseScent(selections) {
    let bestScent = SCENTS[0];
    let bestScore = -1;

    for (const scent of SCENTS) {
        // Total score uses the selected atmosphere, notes, and wear weights.
        const score =
            scent.profile.atmosphere[selections.atmosphere] +
            scent.profile.notes[selections.notes] +
            scent.profile.wear[selections.wear];

        if (score > bestScore) {
            bestScore = score;
            bestScent = scent;
            continue;
        }

        if (score === bestScore) {
            // Tie-break 1: higher atmosphere weight wins.
            const scentAtmosphereWeight = scent.profile.atmosphere[selections.atmosphere];
            const bestAtmosphereWeight = bestScent.profile.atmosphere[selections.atmosphere];

            if (scentAtmosphereWeight > bestAtmosphereWeight) {
                bestScent = scent;
                continue;
            }

            if (scentAtmosphereWeight === bestAtmosphereWeight) {
                // Tie-break 2: if still tied, higher notes weight wins.
                const scentNotesWeight = scent.profile.notes[selections.notes];
                const bestNotesWeight = bestScent.profile.notes[selections.notes];

                if (scentNotesWeight > bestNotesWeight) {
                    bestScent = scent;
                }
            }
            // Tie-break 3 is array order, so if still tied we keep the current best.
        }
    }

    return bestScent;
}

function buildWhyLine(selections) {
    const atmosphereSet = WHY_PHRASES.atmosphere[selections.atmosphere];
    const noteSet = WHY_PHRASES.notes[selections.notes];
    const wearPhrase = WHY_PHRASES.wear[selections.wear];

    const notePair = noteSet.length > 2 ? `${noteSet[0]} and ${noteSet[2]}` : `${noteSet[0]} and ${noteSet[1]}`;
    const firstWord = capitalize(atmosphereSet[0]);

    return `${firstWord} structure with ${notePair}, shaped for ${wearPhrase} and a ${atmosphereSet[2]}.`;
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}