document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navMenu && navMenu.classList.contains("active") && !e.target.closest("nav")) {
      navMenu.classList.remove("active")
    }
  })

  // Quiz data
  const diffQuizData = [
    {
      question: "Du skal holde en præsentation i klassen, og du føler sommerfugle i maven og er nervøs.",
      answer: "sund",
      image: "https://media.tenor.com/5Nt9InbkXY8AAAAM/your-mom-gif-michael-scott.gif"
    },
    {
      question: "Du undgår at tage til sociale arrangementer, fordi du er bange for, at andre vil dømme dig.",
      answer: "usund",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
    },
    {
      question:
        "Du går alene hjem om aftenen og bliver opmærksom på fodtrin bag dig, hvilket får dit hjerte til at banke hurtigere.",
      answer: "sund",
      image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=2088&auto=format&fit=crop"
    },
    {
      question: "Du kan ikke falde i søvn, fordi du konstant bekymrer dig om ting, der kunne gå galt i fremtiden.",
      answer: "usund",
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1974&auto=format&fit=crop"
    },
    {
      question: "Du føler dig nervøs før en vigtig eksamen, hvilket motiverer dig til at studere mere.",
      answer: "sund",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Du får panikangst, når du skal tage offentlig transport, og undgår derfor at bruge bus eller tog.",
      answer: "usund",
      image: "https://www.tv2kosmopol.dk/img/asset/aW1hZ2VzLzIwMjAvMDkvMjEvMjAxODA1MTQtMDcwNzA5LWEtMTkyMHgxMDg4d2UtMS5qcGc/20180514-070709-a-1920x1088we-1.jpg?fm=jpg&w=1920&h=862.92134831461&s=6fba87d7301a2ca2848e5bf1f864420d"
    },
    {
      question: "Du bliver nervøs, når du ser en stor hund nærme sig, og tager forholdsregler ved at krydse gaden.",
      answer: "sund",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Du tjekker konstant, om du har låst døren, selv om du ved, at du har gjort det flere gange.",
      answer: "usund",
      image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Du føler dig nervøs før en jobsamtale, men bruger energien til at forberede dig grundigt.",
      answer: "sund",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Du bekymrer dig så meget om at fejle, at du ikke tør prøve nye ting.",
      answer: "usund",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop"
    },
  ]

  const selfQuizData = [
    {
      question: "Føler du tit, at noget hele tiden vil gå galt?",
      category: "generaliseret",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Bekymrer du dig ofte om ting, du ikke kan kontrollere?",
      category: "generaliseret",
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1974&auto=format&fit=crop"
    },
    {
      question: "Undgår du situationer, der gør dig nervøs?",
      category: "social",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
    },
    {
      question: "Har du fysiske symptomer som hjertebanken, svedtendens eller rysten i stressende situationer?",
      category: "panik",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Har du svært ved at falde i søvn på grund af bekymringstanker?",
      category: "generaliseret",
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1974&auto=format&fit=crop"
    },
    {
      question: "Er du bange for at blive bedømt negativt af andre?",
      category: "social",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Bekymrer du dig overdrevent om din sundhed?",
      category: "sygdom",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Oplever du pludselige og intense anfald af frygt eller rædsel?",
      category: "panik",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "Er du meget opmærksom på, hvordan din krop reagerer?",
      category: "sygdom",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2129&auto=format&fit=crop"
    },
    {
      question: "Føler du dig ofte overvældet af hverdagssituationer?",
      category: "generaliseret",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop"
    },
  ]

  // Angsttyper Quiz Data
  const typesQuizData = [
    {
      q: "Hvilken type angst opleves som voldsom hjertebanken, svimmelhed og frygt for at dø?",
      options: ["Panikangst", "Sygdomsangst", "OCD", "Agorafobi"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst indebærer en overdreven opmærksomhed på kroppens reaktioner og symptomer?",
      options: ["Panikangst", "Sygdomsangst", "Separationsangst", "OCD"],
      answer: 1,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2129&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst handler om frygt for at blive adskilt fra forældre eller tætte personer?",
      options: ["Agorafobi", "Panikangst", "Separationsangst", "Sygdomsangst"],
      answer: 2,
      image: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?q=80&w=2071&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst indebærer gentagende tvangstanker eller tvangshandlinger?",
      options: ["OCD", "Panikangst", "Sygdomsangst", "Agorafobi"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst handler om at undgå steder, der kan udløse panik eller følelsen af at være fanget?",
      options: ["Agorafobi", "Separationsangst", "Panikangst", "OCD"],
      answer: 0,
      image: "https://i.pinimg.com/originals/d9/5b/55/d95b55da032a6b0a747e7dd307cdc14e.gif"
    },
    {
      q: "Hvilken type angst kan opstå, når man er træt eller udmattet og får tanker, der udløser fysiske symptomer?",
      options: ["Panikangst", "Sygdomsangst", "OCD", "Agorafobi"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst indebærer frygt for at skade andre eller gøre noget forkert?",
      options: ["OCD", "Panikangst", "Sygdomsangst", "Separationsangst"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst indebærer frygt for, at en lille fysisk ændring kan være tegn på en alvorlig sygdom?",
      options: ["Sygdomsangst", "Panikangst", "Agorafobi", "OCD"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst kan føre til mareridt og frygt for, at noget vil ske med ens forældre?",
      options: ["Separationsangst", "Panikangst", "Sygdomsangst", "Agorafobi"],
      answer: 0,
      image: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?q=80&w=2071&auto=format&fit=crop"
    },
    {
      q: "Hvilken type angst indebærer frygt for at være i store åbne områder eller steder med mange mennesker?",
      options: ["Agorafobi", "Panikangst", "OCD", "Sygdomsangst"],
      answer: 0,
      image: "https://media.tenor.com/Hy_wvQe1suEAAAAM/sng-comedy-mob.gif"
    },
  ]

  // Quiz variables
  let diffCurrentQuestion = 0
  let diffAnswers = []
  let selfCurrentQuestion = 0
  let selfAnswers = []

  // Angsttyper Quiz variabler
  let typesCurrentQuestion = 0
  let typesIndex = 0
  let typesAnswers = []
  let typesScore = 0
  let typesRandomQuestions = []

  // Quiz elements
  const startDiffQuizBtn = document.getElementById("start-diff-quiz")
  const startSelfQuizBtn = document.getElementById("start-self-quiz")
  const diffQuiz = document.getElementById("diff-quiz")
  const selfQuiz = document.getElementById("self-quiz")
  const diffQuestion = document.getElementById("diff-question")
  const selfQuestion = document.getElementById("self-question")
  const diffOptions = document.getElementById("diff-options")
  const selfOptions = document.getElementById("self-options")
  const diffPrev = document.getElementById("diff-prev")
  const diffNext = document.getElementById("diff-next")
  const selfPrev = document.getElementById("self-prev")
  const selfNext = document.getElementById("self-next")
  const diffProgress = document.getElementById("diff-progress")
  const selfProgress = document.getElementById("self-progress")
  const diffCurrentQuestionEl = document.getElementById("diff-current-question")
  const diffTotalQuestionsEl = document.getElementById("diff-total-questions")
  const selfCurrentQuestionEl = document.getElementById("self-current-question")
  const selfTotalQuestionsEl = document.getElementById("self-total-questions")
  const diffResult = document.getElementById("diff-result")
  const selfResult = document.getElementById("self-result")
  const quizOptions = document.querySelector(".quiz-options")

  // Angsttyper Quiz elementer
  const startTypesQuizBtn = document.getElementById("start-types-quiz")
  const typesQuiz = document.getElementById("types-quiz")
  const typesQuestion = document.getElementById("types-question")
  const typesOptions = document.getElementById("types-options")
  const typesNext = document.getElementById("types-next")
  const typesProgress = document.getElementById("types-progress")
  const typesCurrentQuestionEl = document.getElementById("types-current-question")
  const typesTotalQuestionsEl = document.getElementById("types-total-questions")
  const typesResult = document.getElementById("types-result")
  const typesTracker = document.getElementById("types-tracker")
  const typesMakeChoice = document.getElementById("types-make-choice")

  // Initialize quizzes
  if (startDiffQuizBtn) {
    startDiffQuizBtn.addEventListener("click", () => {
      if (quizOptions) quizOptions.style.display = "none"
      if (diffQuiz) diffQuiz.style.display = "block"
      initDiffQuiz()
    })
  }

  if (startSelfQuizBtn) {
    startSelfQuizBtn.addEventListener("click", () => {
      if (quizOptions) quizOptions.style.display = "none"
      if (selfQuiz) selfQuiz.style.display = "block"
      initSelfQuiz()
    })
  }

  // Initialiser Angsttyper Quiz
  if (startTypesQuizBtn) {
    startTypesQuizBtn.addEventListener("click", () => {
      if (quizOptions) quizOptions.style.display = "none"
      if (typesQuiz) typesQuiz.style.display = "block"
      initTypesQuiz()
    })
  }

  // Differencierings-quiz functions
  function initDiffQuiz() {
    diffCurrentQuestion = 0
    diffAnswers = Array(diffQuizData.length).fill(null)
    if (diffTotalQuestionsEl) diffTotalQuestionsEl.textContent = diffQuizData.length
    loadDiffQuestion()
  }

  function loadDiffQuestion() {
    if (!diffQuestion || !diffCurrentQuestionEl || !diffProgress) return

    const q = diffQuizData[diffCurrentQuestion]
    
    // Create question container with image
    let questionHTML = `
      <div class="question-container">
        <div class="question-image">
          <img src="${q.image}" alt="Billede til spørgsmål">
        </div>
        <div class="question-text">
          ${q.question}
        </div>
      </div>
    `
    
    diffQuestion.innerHTML = questionHTML
    diffCurrentQuestionEl.textContent = diffCurrentQuestion + 1
    diffProgress.style.width = `${((diffCurrentQuestion + 1) / diffQuizData.length) * 100}%`

    // Update button states
    if (diffPrev) diffPrev.disabled = diffCurrentQuestion === 0
    if (diffNext) diffNext.textContent = diffCurrentQuestion === diffQuizData.length - 1 ? "Afslut" : "Næste"

    // Update selected option
    if (diffOptions) {
      const options = diffOptions.querySelectorAll(".option-btn")
      options.forEach((option) => {
        option.classList.remove("selected")
        if (diffAnswers[diffCurrentQuestion] === option.dataset.value) {
          option.classList.add("selected")
        }
      })
    }
  }

  if (diffOptions) {
    diffOptions.addEventListener("click", (e) => {
      if (e.target.classList.contains("option-btn")) {
        const options = diffOptions.querySelectorAll(".option-btn")
        options.forEach((option) => option.classList.remove("selected"))
        e.target.classList.add("selected")
        diffAnswers[diffCurrentQuestion] = e.target.dataset.value
      }
    })
  }

  if (diffPrev) {
    diffPrev.addEventListener("click", () => {
      if (diffCurrentQuestion > 0) {
        diffCurrentQuestion--
        loadDiffQuestion()
      }
    })
  }

  if (diffNext) {
    diffNext.addEventListener("click", () => {
      if (diffCurrentQuestion < diffQuizData.length - 1) {
        diffCurrentQuestion++
        loadDiffQuestion()
      } else {
        showDiffResult()
      }
    })
  }

  function showDiffResult() {
    if (!diffQuiz || !diffResult) return

    const quizContent = diffQuiz.querySelector(".quiz-content")
    const quizNavigation = diffQuiz.querySelector(".quiz-navigation")

    if (quizContent) quizContent.style.display = "none"
    if (quizNavigation) quizNavigation.style.display = "none"
    diffResult.style.display = "block"

    let correctAnswers = 0
    diffAnswers.forEach((answer, index) => {
      if (answer === diffQuizData[index].answer) {
        correctAnswers++
      }
    })

    const resultHTML = `
            <h3>Quiz Resultat</h3>
            <p class="result-score">Tillykke! Du fik ${correctAnswers}/${diffQuizData.length} rigtige</p>
            <p>Du har nu lært at skelne mellem sund og usund angst. Sund angst hjælper os med at reagere på reelle farer, mens usund angst kan begrænse vores liv unødigt.</p>
            <div class="quiz-buttons" style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center;">
              <button class="btn primary-btn" id="restart-diff-quiz">Tag quizzen igen</button>
              <button class="btn secondary-btn" id="back-to-quizzes">Tilbage til quizzer</button>
            </div>
        `

    diffResult.innerHTML = resultHTML

    document.getElementById("restart-diff-quiz").addEventListener("click", () => {
      diffResult.style.display = "none"
      const quizContent = diffQuiz.querySelector(".quiz-content")
      const quizNavigation = diffQuiz.querySelector(".quiz-navigation")
      if (quizContent) quizContent.style.display = "block"
      if (quizNavigation) quizNavigation.style.display = "flex"
      initDiffQuiz()
    })

    document.getElementById("back-to-quizzes").addEventListener("click", () => {
      if (diffQuiz) diffQuiz.style.display = "none"
      if (diffResult) diffResult.style.display = "none"
      if (quizOptions) quizOptions.style.display = "block"
    })
  }

  // "Har jeg angst?"-quiz functions
  function initSelfQuiz() {
    selfCurrentQuestion = 0
    selfAnswers = Array(selfQuizData.length).fill(null)
    if (selfTotalQuestionsEl) selfTotalQuestionsEl.textContent = selfQuizData.length
    loadSelfQuestion()
  }

  function loadSelfQuestion() {
    if (!selfQuestion || !selfCurrentQuestionEl || !selfProgress) return

    const q = selfQuizData[selfCurrentQuestion]
    
    // Create question container with image
    let questionHTML = `
      <div class="question-container">
        <div class="question-image">
          <img src="${q.image}" alt="Billede til spørgsmål">
        </div>
        <div class="question-text">
          ${q.question}
        </div>
      </div>
    `
    
    selfQuestion.innerHTML = questionHTML
    selfCurrentQuestionEl.textContent = selfCurrentQuestion + 1
    selfProgress.style.width = `${((selfCurrentQuestion + 1) / selfQuizData.length) * 100}%`

    // Update button states
    if (selfPrev) selfPrev.disabled = selfCurrentQuestion === 0
    if (selfNext) selfNext.textContent = selfCurrentQuestion === selfQuizData.length - 1 ? "Afslut" : "Næste"

    // Update selected option
    if (selfOptions) {
      const options = selfOptions.querySelectorAll(".option-btn")
      options.forEach((option) => {
        option.classList.remove("selected")
        if (selfAnswers[selfCurrentQuestion] === option.dataset.value) {
          option.classList.add("selected")
        }
      })
    }
  }

  if (selfOptions) {
    selfOptions.addEventListener("click", (e) => {
      if (e.target.classList.contains("option-btn")) {
        const options = selfOptions.querySelectorAll(".option-btn")
        options.forEach((option) => option.classList.remove("selected"))
        e.target.classList.add("selected")
        selfAnswers[selfCurrentQuestion] = e.target.dataset.value
      }
    })
  }

  if (selfPrev) {
    selfPrev.addEventListener("click", () => {
      if (selfCurrentQuestion > 0) {
        selfCurrentQuestion--
        loadSelfQuestion()
      }
    })
  }

  if (selfNext) {
    selfNext.addEventListener("click", () => {
      if (selfCurrentQuestion < selfQuizData.length - 1) {
        selfCurrentQuestion++
        loadSelfQuestion()
      } else {
        showSelfResult()
      }
    })
  }

  function showSelfResult() {
    if (!selfQuiz || !selfResult) return

    const quizContent = selfQuiz.querySelector(".quiz-content")
    const quizNavigation = selfQuiz.querySelector(".quiz-navigation")

    if (quizContent) quizContent.style.display = "none"
    if (quizNavigation) quizNavigation.style.display = "none"
    selfResult.style.display = "block"

    // Calculate scores for each category
    const scores = {
      generaliseret: 0,
      social: 0,
      panik: 0,
      sygdom: 0,
    }

    let totalScore = 0
    let answeredQuestions = 0

    selfAnswers.forEach((answer, index) => {
      if (answer !== null) {
        const value = Number(answer)
        const category = selfQuizData[index].category
        scores[category] += value
        totalScore += value
        answeredQuestions++
      }
    })

    // Calculate average scores
    const avgScore = totalScore / answeredQuestions

    // Determine primary anxiety type
    let primaryType = "ingen"
    let highestScore = 0

    for (const [type, score] of Object.entries(scores)) {
      const count = selfQuizData.filter((q) => q.category === type).length
      const avgTypeScore = score / count

      if (avgTypeScore > highestScore) {
        highestScore = avgTypeScore
        primaryType = type
      }
    }

    // Determine severity
    let severity = "meget lidt eller ingen"
    if (avgScore > 3) {
      severity = "svær"
    } else if (avgScore > 2) {
      severity = "moderat"
    } else if (avgScore > 1) {
      severity = "mild"
    }

    // Map type to Danish
    const typeMap = {
      generaliseret: "Generaliseret angst",
      social: "Social angst",
      panik: "Panikangst",
      sygdom: "Sygdomsangst",
      ingen: "Ingen specifik angsttype",
    }

    const danishType = typeMap[primaryType]

    const resultHTML = `
            <h3>Quiz Resultat</h3>
            <p class="result-score">Du har muligvis ${severity} ${danishType}</p>
            <div class="result-details" style="margin: 2rem 0; text-align: left;">
              <h4>Om ${danishType}:</h4>
              ${getAnxietyTypeDescription(primaryType)}
            </div>
            <p>Denne quiz er kun vejledende og kan ikke erstatte en professionel vurdering. Hvis du oplever symptomer på angst, der påvirker din hverdag, bør du tale med din læge eller en psykolog.</p>
            <div class="quiz-buttons" style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center;">
              <button class="btn primary-btn" id="restart-self-quiz">Tag quizzen igen</button>
              <button class="btn secondary-btn" id="back-to-quizzes-self">Tilbage til quizzer</button>
            </div>
        `

    selfResult.innerHTML = resultHTML

    document.getElementById("restart-self-quiz").addEventListener("click", () => {
      selfResult.style.display = "none"
      const quizContent = selfQuiz.querySelector(".quiz-content")
      const quizNavigation = selfQuiz.querySelector(".quiz-navigation")
      if (quizContent) quizContent.style.display = "block"
      if (quizNavigation) quizNavigation.style.display = "flex"
      initSelfQuiz()
    })

    document.getElementById("back-to-quizzes-self").addEventListener("click", () => {
      if (selfQuiz) selfQuiz.style.display = "none"
      if (selfResult) selfResult.style.display = "none"
      if (quizOptions) quizOptions.style.display = "block"
    })
  }

  function getAnxietyTypeDescription(type) {
    switch (type) {
      case "generaliseret":
        return `<p>Generaliseret angst er kendetegnet ved vedvarende og overdrevne bekymringer om en lang række emner. Du kan opleve:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                  <li>Konstant nervøsitet og anspændthed</li>
                  <li>Svært ved at kontrollere bekymringer</li>
                  <li>Søvnproblemer</li>
                  <li>Koncentrationsbesvær</li>
                </ul>`
      case "social":
        return `<p>Social angst er kendetegnet ved en intens frygt for sociale situationer. Du kan opleve:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                  <li>Frygt for at blive bedømt negativt af andre</li>
                  <li>Undgåelse af sociale situationer</li>
                  <li>Fysiske symptomer som rødmen, sveden og rysten i sociale sammenhænge</li>
                  <li>Overdreven bekymring for at gøre noget pinligt</li>
                </ul>`
      case "panik":
        return `<p>Panikangst er kendetegnet ved pludselige og intense anfald af frygt. Du kan opleve:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                  <li>Hjertebanken og brystsmerter</li>
                  <li>Åndenød og kvælningsfornemmelse</li>
                  <li>Svimmelhed og uvirkelighedsfølelse</li>
                  <li>Frygt for at miste kontrollen eller at dø</li>
                </ul>`
      case "sygdom":
        return `<p>Sygdomsangst er kendetegnet ved overdreven bekymring for egen sundhed. Du kan opleve:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                  <li>Konstant opmærksomhed på kroppens signaler</li>
                  <li>Overbevisning om at have en alvorlig sygdom</li>
                  <li>Gentagne lægebesøg eller undgåelse af læger</li>
                  <li>Overdreven research om symptomer og sygdomme</li>
                </ul>`
      default:
        return `<p>Baseret på dine svar ser det ikke ud til, at du har symptomer på en specifik angsttype. Det er dog vigtigt at huske, at denne quiz ikke er et diagnostisk værktøj.</p>`
    }
  }

  // Angsttyper Quiz funktioner
  function selectTypesQuestions() {
    // Vælg 5 tilfældige spørgsmål fra typesQuizData
    typesRandomQuestions = []
    const allQuestions = [...typesQuizData]

    for (let i = 0; i < 5; i++) {
      if (allQuestions.length === 0) break
      const randomIndex = Math.floor(Math.random() * allQuestions.length)
      typesRandomQuestions.push(allQuestions[randomIndex])
      allQuestions.splice(randomIndex, 1)
    }
  }

  function initTypesQuiz() {
    typesCurrentQuestion = 0
    typesIndex = 0
    typesScore = 0
    typesAnswers = Array(5).fill(null)

    // Vælg tilfældige spørgsmål
    selectTypesQuestions()

    // Opdater total spørgsmål
    if (typesTotalQuestionsEl) typesTotalQuestionsEl.textContent = typesRandomQuestions.length

    // Opret tracker
    createTypesTracker()

    // Indlæs første spørgsmål
    loadTypesQuestion()
  }

  function createTypesTracker() {
    if (!typesTracker) return

    typesTracker.innerHTML = ""
    for (let i = 0; i < typesRandomQuestions.length; i++) {
      const div = document.createElement("div")
      typesTracker.appendChild(div)
    }
  }

  function updateTypesTracker(className) {
    if (!typesTracker) return

    const boxes = Array.from(typesTracker.children)
    if (boxes[typesIndex]) {
      boxes[typesIndex].classList.add(className)
      typesIndex++
    }
  }

  function loadTypesQuestion() {
    if (!typesQuestion || !typesOptions || !typesCurrentQuestionEl || !typesProgress) return

    const q = typesRandomQuestions[typesCurrentQuestion]
    
    // Create question container with image
    let questionHTML = `
      <div class="question-container">
        <div class="question-image">
          <img src="${q.image}" alt="Billede til spørgsmål">
        </div>
        <div class="question-text">
          ${q.q}
        </div>
      </div>
    `
    
    typesQuestion.innerHTML = questionHTML
    typesCurrentQuestionEl.textContent = typesCurrentQuestion + 1
    typesProgress.style.width = `${((typesCurrentQuestion + 1) / typesRandomQuestions.length) * 100}%`

    // Ryd tidligere svarmuligheder
    typesOptions.innerHTML = ""

    // Tilføj nye svarmuligheder
    for (let i = 0; i < q.options.length; i++) {
      const button = document.createElement("button")
      button.className = "option-btn"
      button.textContent = q.options[i]
      button.dataset.index = i
      typesOptions.appendChild(button)
    }

    // Tilføj event listeners til svarmuligheder
    const optionButtons = typesOptions.querySelectorAll(".option-btn")
    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectTypesOption(button)
      })
    })

    // Nulstil make choice besked
    if (typesMakeChoice) {
      typesMakeChoice.textContent = ""
      typesMakeChoice.style.backgroundColor = ""
    }
  }

  function selectTypesOption(selectedButton) {
    if (!typesOptions) return

    const optionButtons = typesOptions.querySelectorAll(".option-btn")
    optionButtons.forEach((button) => {
      button.classList.remove("selected")
    })

    selectedButton.classList.add("selected")
    typesAnswers[typesCurrentQuestion] = Number.parseInt(selectedButton.dataset.index)
  }

  function checkTypesAnswer() {
    if (typesAnswers[typesCurrentQuestion] === null) {
      if (typesMakeChoice) {
        typesMakeChoice.textContent = "Vælg et svar før du går videre"
        typesMakeChoice.style.backgroundColor = "rgba(255, 101, 101, 0.2)"
      }
      return false
    }

    const selectedIndex = typesAnswers[typesCurrentQuestion]
    const correctIndex = typesRandomQuestions[typesCurrentQuestion].answer

    const optionButtons = typesOptions.querySelectorAll(".option-btn")
    optionButtons.forEach((button) => {
      button.classList.add("disabled")

      const buttonIndex = Number.parseInt(button.dataset.index)
      if (buttonIndex === correctIndex) {
        button.classList.add("correct")
      } else if (buttonIndex === selectedIndex) {
        button.classList.add("wrong")
      }
    })

    if (selectedIndex === correctIndex) {
      typesScore++
      updateTypesTracker("correct")
    } else {
      updateTypesTracker("wrong")
    }

    return true
  }

  if (typesNext) {
    typesNext.addEventListener("click", () => {
      if (typesAnswers[typesCurrentQuestion] === null) {
        if (typesMakeChoice) {
          typesMakeChoice.textContent = "Vælg et svar før du går videre"
          typesMakeChoice.style.backgroundColor = "rgba(255, 101, 101, 0.2)"
        }
        return
      }

      if (!typesOptions.querySelector(".disabled")) {
        checkTypesAnswer()
        return
      }

      if (typesCurrentQuestion < typesRandomQuestions.length - 1) {
        typesCurrentQuestion++
        loadTypesQuestion()
      } else {
        showTypesResult()
      }
    })
  }

  function showTypesResult() {
    if (!typesQuiz || !typesResult) return

    const quizContent = typesQuiz.querySelector(".quiz-content")
    const quizNavigation = typesQuiz.querySelector(".quiz-navigation")
    const quizTracker = typesQuiz.querySelector(".answers-tracker")

    if (quizContent) quizContent.style.display = "none"
    if (quizNavigation) quizNavigation.style.display = "none"
    if (quizTracker) quizTracker.style.display = "none"
    typesResult.style.display = "block"

    const percentage = (typesScore / typesRandomQuestions.length) * 100
    let message = ""

    if (percentage === 0) {
      message = "Øhh... Hallo! Du skal ikke sove vågn op!!"
    } else if (percentage === 20) {
      message = "Det går ikke så godt for dig hva?!! Øv dig lidt mere!!"
    } else if (percentage === 40) {
      message = "Hmm... det går vel. Måske skal du læse lidt mere!!"
    } else if (percentage === 60) {
      message = "Helt ok, men bedre kan du nok!"
    } else if (percentage === 80) {
      message = "Du virker jo til at have ret godt styr på det her med angst!!"
    } else if (percentage === 100) {
      message = "Ooooh, du er fantastisk. Du er jo en angstekspert!!"
    } else {
      message = "Test dine kundskaber igen!!"
    }

    const resultHTML = `
    <h3>${message}</h3>
    <p class="result-score">Du svarede rigtigt på ${typesScore} af ${typesRandomQuestions.length} spørgsmål!</p>
    <p>Det er ${percentage}%</p>
    <div class="quiz-buttons">
      <button class="btn primary-btn" id="restart-types-quiz" style="background-color: #3a6ea5;">Tag quizzen igen</button>
      <button class="btn secondary-btn" id="back-to-quizzes-types">Tilbage til quizzer</button>
    </div>
  `

    typesResult.innerHTML = resultHTML

    document.getElementById("restart-types-quiz").addEventListener("click", () => {
      typesResult.style.display = "none"
      const quizContent = typesQuiz.querySelector(".quiz-content")
      const quizNavigation = typesQuiz.querySelector(".quiz-navigation")
      const quizTracker = typesQuiz.querySelector(".answers-tracker")

      if (quizContent) quizContent.style.display = "block"
      if (quizNavigation) quizNavigation.style.display = "block"
      if (quizTracker) quizTracker.style.display = "flex"

      initTypesQuiz()
    })

    document.getElementById("back-to-quizzes-types").addEventListener("click", () => {
      if (typesQuiz) typesQuiz.style.display = "none"
      if (typesResult) typesResult.style.display = "none"
      if (quizOptions) quizOptions.style.display = "block"
    })
  }
})
