// Practice content by grade. Add a new grade by copying the Grade 9 block
// and changing the questions. Each question: [question, [options...], correctIndex, explanation]
const G9 = {
 chapters:{1:"Ch 1 · Living Together, Learning Together", 2:"Ch 2 · Shop Till You Drop!"},
 grammar:{
  1:{title:"Present simple or present continuous?",
     rule:"Use the <mark>present simple</mark> for habits, routines and facts (<i>usually, always, every day</i>). Use the <mark>present continuous</mark> for actions happening now or around now (<i>now, look!, this week</i>). Verbs like <i>know, understand, like, believe</i> don't usually take <i>-ing</i>.",
     qs:[
      ["My brother usually ___ to school by bus.",["goes","is going","go"],0,"'Usually' shows a routine → present simple. He → goes."],
      ["Look! The students ___ the school garden.",["are cleaning","clean","cleans"],0,"'Look!' means it is happening now → present continuous."],
      ["I ___ what you mean now.",["understand","am understanding","understands"],0,"'Understand' is a state verb, so we don't use -ing even with 'now'."],
      ["How often ___ your family eat dinner together?",["does","do","is"],0,"'Your family' is singular, and 'how often' asks about habit → does."],
      ["Right now, Ahmed ___ for his science test.",["is studying","studies","study"],0,"'Right now' → present continuous."],
      ["Water ___ at 100°C.",["boils","is boiling","boil"],0,"A scientific fact → present simple."],
      ["This week our class ___ a charity bake sale.",["is organising","organises","organise"],0,"'This week' is a temporary situation around now → present continuous."],
      ["She never ___ late for school.",["arrives","is arriving","arrive"],0,"'Never' is a frequency adverb → present simple, she → arrives."]
     ]},
  2:{title:"Comparatives, superlatives & quantifiers",
     rule:"Short adjectives: <mark>cheap → cheaper → the cheapest</mark>. Long adjectives: <mark>expensive → more expensive → the most expensive</mark>. Use <i>much / a little</i> with uncountable nouns (money, time) and <i>many / a few</i> with countable nouns (shops, eggs).",
     qs:[
      ["This phone is ___ than the one I bought last year.",["cheaper","more cheap","cheapest"],0,"Short adjective + 'than' → cheaper."],
      ["It's the ___ shopping mall in the city.",["biggest","bigger","most big"],0,"'The' + comparing with everything → superlative. Big → biggest (double g)."],
      ["How ___ money do you have?",["much","many","a few"],0,"Money is uncountable → much."],
      ["There aren't ___ shops open early on Friday.",["many","much","a little"],0,"Shops are countable → many."],
      ["The jacket is ___ expensive than the shirt.",["more","most","much"],0,"Long adjective + 'than' → more expensive."],
      ["I only need ___ eggs for the cake.",["a few","a little","much"],0,"Eggs are countable → a few."],
      ["This bag is not as ___ as that one.",["cheap","cheaper","cheapest"],0,"'as … as' always takes the basic adjective."],
      ["Online shopping is ___ convenient way to buy books.",["the most","more","most"],0,"Superlative of a long adjective needs 'the most'."]
     ]}
 },
 vocab:{
  1:[["neighbour","a person who lives next to or near you"],["community","a group of people living in the same area"],["volunteer","to offer to work without being paid"],["respect","to show you value someone's feelings and ideas"],["cooperate","to work together to reach the same goal"],["tradition","a custom passed down from older generations"],["diverse","including many different types of people or things"],["belong","to feel happy and accepted in a group"]],
  2:[["bargain","something bought for less than its usual price"],["receipt","a paper that shows you have paid for something"],["discount","an amount taken off the normal price"],["refund","money given back when you return a product"],["budget","a plan for how much money you can spend"],["afford","to have enough money to pay for something"],["brand","the name a company gives to its products"],["customer","a person who buys goods from a shop"]]
 },
 reading:{
  1:{title:"The Tuesday Table",
     text:["Every Tuesday afternoon, the library at Al Noor Secondary School becomes a little different. Students from Grade 9 sit at a long table with older residents from the neighbourhood. The students help the residents use smartphones, send voice messages and video-call their grandchildren abroad. In return, the residents tell stories about how the area looked fifty years ago, when there were no tall buildings and families got water from a shared well.",
           "The project started when a student named Mariam noticed her grandfather felt lonely after her cousins moved away. She asked her teacher whether the school could invite a few neighbours for one afternoon. Twelve people came the first week. Now more than forty attend, and there is a waiting list.",
           "Teachers say the students have become more patient and more confident speaking to adults. One resident said the best part is not the technology. \"It's that someone young wants to listen,\" he explained."],
     qs:[
      ["What is the main idea of the passage?",["A school project brings young and old people together","Students learn how to fix smartphones","The neighbourhood has changed in fifty years"],0,"The whole passage is about the Tuesday meetings between students and residents."],
      ["What do the residents give the students in return?",["Stories about the past","Money for the library","New smartphones"],0,"Paragraph 1: the residents share stories about how the area used to look."],
      ["Why did Mariam start the project?",["Her grandfather felt lonely","Her teacher asked her to","The library was empty"],0,"Paragraph 2: her grandfather felt lonely after her cousins moved away."],
      ["The word 'attend' in paragraph 2 means…",["come to an event","pay for something","wait in a line"],0,"'More than forty attend' = more than forty people come."],
      ["What can we infer about the project?",["It is popular and growing","It will stop next year","Only teachers like it"],0,"From 12 people to 40+ with a waiting list shows it is growing."]
     ]},
  2:{title:"Is It Really a Bargain?",
     text:["Big red signs saying \"70% OFF!\" are hard to ignore. Shops know this, and they use sales to make customers buy quickly. But a low price does not always mean a good deal.",
           "Before buying, smart shoppers ask three questions. First: Did I plan to buy this before I saw the sign? If the answer is no, the item may not be something you need. Second: Can I compare the price? Many apps and websites let you check the same product in different stores in seconds. Third: What is the return policy? Some sale items cannot be returned, so if the size is wrong, you lose your money.",
           "Experts also suggest keeping a monthly budget. Writing down what you spend, even small amounts like snacks and phone credit, shows where your money really goes. A real bargain is something you need, at a fair price, that you can still afford after your other plans."],
     qs:[
      ["What is the writer's main purpose?",["To give advice about shopping wisely","To advertise a big sale","To describe a shopping mall"],0,"The text gives questions and tips for smart shopping."],
      ["Why do shops use big sale signs?",["To make customers buy quickly","To help customers save money","To follow the law"],0,"Paragraph 1 says shops use sales to make customers buy quickly."],
      ["According to the text, some sale items…",["cannot be returned","are always cheaper online","last longer"],0,"Paragraph 2, third question."],
      ["Why should you write down small amounts like snacks?",["To see where your money really goes","To get a discount","To show your parents"],0,"Paragraph 3 explains this directly."],
      ["Which is a 'real bargain' according to the writer?",["Something you need, at a fair price, that you can afford","Anything with 70% off","The newest brand in the shop"],0,"The final sentence defines a real bargain."]
     ]}
 },
 writing:{
  1:{title:"A paragraph about your community",
     prompt:"Write a paragraph (100–140 words) about one thing people in your community do to help each other. Explain what they do, why it matters, and how you could take part.",
     need:{min:100,max:140,links:["because","also","for example","such as","in addition","however","finally","so"],extra:["community","help","together","volunteer","neighbour","neighbours"]},
     model:"In my community, people help each other during Ramadan. Every evening, families prepare extra food and share it with neighbours and workers in the area. For example, my mother cooks a large pot of harees and my brother and I take plates to the houses on our street. This tradition matters because it makes everyone feel that they belong, even people who live far from their own families. In addition, it teaches young people to think about others before themselves. Next year, I would like to volunteer at the community iftar tent near our mosque. I could help set up the tables and serve water to guests. Small actions like these bring a community together."},
  2:{title:"An email about a shopping problem",
     prompt:"You bought headphones online, but one side does not work. Write an email (100–140 words) to the shop. Say what you bought, explain the problem, and ask for a refund or a replacement.",
     need:{min:100,max:140,links:["because","however","also","unfortunately","therefore","so","i would like","could you"],extra:["dear","receipt","refund","replacement","order","regards"]},
     model:"Dear Customer Service Team,\n\nI am writing about my order number 45821. On 10 October, I bought a pair of wireless headphones from your website for 249 dirhams. Unfortunately, when they arrived, the left side did not work. I tried charging them fully and connecting them to two different phones, but there was still no sound. Therefore, I believe the product is faulty.\n\nI have attached a copy of my receipt. I would like a replacement pair as soon as possible. However, if this model is out of stock, could you please give me a full refund?\n\nThank you for your help. I look forward to your reply.\n\nKind regards,\nOmar Saeed"}
 },
 maze:[
  ["She ___ tea every morning.",["drinks","is drinking","drink"],0],
  ["Quiet please, the baby ___.",["is sleeping","sleeps","sleep"],0],
  ["A ___ is a paper that proves you paid.",["receipt","refund","brand"],0],
  ["This shirt is ___ than that one.",["cheaper","cheapest","more cheap"],0],
  ["People who ___ work without pay.",["volunteer","afford","belong"],0],
  ["How ___ shops are in the mall?",["many","much","a little"],0],
  ["We ___ our grandparents every Friday.",["visit","are visiting","visits"],0],
  ["I can't ___ this watch. It's too expensive.",["afford","budget","respect"],0],
  ["It's the ___ day of the year!",["hottest","hotter","most hot"],0],
  ["Our school is very ___: students come from 20 countries.",["diverse","cheap","lonely"],0]
 ]
};


// Grade 9 Advanced & Grade 10 General — Term 1 starter set
// Chapter names are topic labels until the official CCG titles are added.
const SET_9A10G = {
 chapters:{1:"Ch 1 · Telling stories (past tenses)", 2:"Ch 2 · Plans & predictions (future forms)"},
 grammar:{
  1:{title:"Past simple, past continuous & used to",
     rule:"Use the <mark>past simple</mark> for finished actions at a known time and for a sequence of events (<i>yesterday, last week, then</i>). Use the <mark>past continuous</mark> for an action in progress at a past moment, often interrupted by a shorter action (<i>while, when, at 8 p.m.</i>). Use <mark>used to + base verb</mark> for past habits that are no longer true.",
     qs:[
      ["While I ___ home, it started to rain.",["was walking","walked","am walking"],0,"'While' introduces the longer background action → past continuous."],
      ["She ___ the email yesterday evening.",["sent","was sending","has sent"],0,"A finished action at a stated past time → past simple."],
      ["At 8 p.m. last night, we ___ dinner.",["were having","had","have"],0,"An action in progress at an exact past moment → past continuous."],
      ["My grandfather ___ fish in the Gulf when he was young.",["used to catch","use to catch","was catching"],0,"A past habit that has stopped → used to + base verb."],
      ["I didn't ___ like vegetables, but now I love them.",["use to","used to","using to"],0,"After 'didn't', drop the -d: didn't use to."],
      ["The phone rang while she ___ a shower.",["was taking","took","takes"],0,"The long action (taking a shower) was interrupted by the short one (rang)."],
      ["We ___ the museum and then had lunch at the harbour.",["visited","were visiting","visit"],0,"A sequence of completed actions → past simple."],
      ["What ___ you doing when the power went out?",["were","did","are"],0,"Question form of the past continuous: were + subject + -ing."]
     ]},
  2:{title:"Future forms: will, going to & present continuous",
     rule:"Use <mark>will</mark> for instant decisions, offers, promises and opinions about the future (<i>I think, maybe, probably</i>). Use <mark>be going to</mark> for plans you have already made and predictions based on evidence you can see. Use the <mark>present continuous</mark> for fixed arrangements with a time and place.",
     qs:[
      ["Look at those dark clouds! It ___ rain.",["is going to","will","rains"],0,"A prediction based on evidence you can see → going to."],
      ["We ___ our grandparents on Saturday. We booked the tickets last week.",["are visiting","will visit","visit"],0,"A fixed arrangement already booked → present continuous."],
      ["That bag looks heavy. Don't worry, I ___ carry it for you.",["will","am going to","am carrying"],0,"An offer decided at the moment of speaking → will."],
      ["I think our team ___ the match tomorrow.",["will win","wins","is winning"],0,"An opinion with 'I think' → will."],
      ["She has saved money all year because she ___ buy a laptop.",["is going to","will","buys"],0,"A plan decided earlier → going to."],
      ["I promise I ___ be late again.",["won't","am not going to","don't"],0,"Promises use will / won't."],
      ["Maybe robots ___ teach in classrooms one day.",["will","are teaching","teach"],0,"A guess about the distant future with 'maybe' → will."],
      ["What ___ you going to study at university?",["are","will","do"],0,"Question form: are + you + going to."]
     ]}
 },
 vocab:{
  1:[["heritage","traditions and history passed down in a culture"],["ancestor","a family member who lived long before you"],["generation","people born and living at about the same time"],["recall","to remember something from the past"],["anecdote","a short, interesting story about a real event"],["milestone","an important event or stage in someone's life"],["nostalgic","feeling happy and a little sad when remembering the past"],["vivid","very clear and detailed, easy to picture"]],
  2:[["ambition","a strong wish to achieve something"],["goal","something you plan and work to achieve"],["predict","to say what will happen in the future"],["career","the jobs a person does over their working life"],["achieve","to succeed in doing something after effort"],["determined","not willing to give up"],["opportunity","a chance to do something good"],["deadline","the latest time by which something must be done"]]
 },
 reading:{
  1:{title:"The Pearl Diver's Notebook",
     text:["Last summer, Khalid was helping his family clear out his late grandfather's storeroom when he found a small notebook wrapped in cloth. The pages were yellow, and the handwriting was faded, but he could still read most of it.",
           "The notebook described his grandfather's life as a pearl diver in the 1940s. Every summer, the divers used to leave home for four months. They lived on wooden boats and dived again and again from sunrise to sunset, with only a clip on their nose and a rope around their waist. One entry described a storm: while the men were pulling up their nets, huge waves crashed over the boat, and one diver nearly lost his rope.",
           "When cultured pearls from Japan became cheap, the pearl trade collapsed, and many divers had to find new jobs. Khalid's grandfather became a fisherman and later opened a small shop.",
           "Khalid showed the notebook to his history teacher, who asked him to present it to the class. \"I always knew my grandfather was a diver,\" Khalid said, \"but now I understand how hard his life was.\""],
     qs:[
      ["What is the passage mainly about?",["A boy discovers his grandfather's life story through a notebook","How to become a pearl diver today","Why Japan produces pearls"],0,"The whole text follows Khalid's discovery of the notebook and what it shows."],
      ["How long did the divers stay away from home each summer?",["About four months","Two weeks","One year"],0,"Paragraph 2: 'the divers used to leave home for four months.'"],
      ["What happened during the storm?",["Waves crashed over the boat while the men were pulling up nets","The boat sank and everyone swam home","The divers found a giant pearl"],0,"Paragraph 2 describes the storm in the past continuous: 'while the men were pulling up their nets…'"],
      ["Why did the pearl trade collapse?",["Cheaper cultured pearls arrived from Japan","There were no more oysters","The government banned diving"],0,"Paragraph 3 gives the cause directly."],
      ["What does Khalid realise at the end?",["How difficult his grandfather's life was","That he wants to be a diver","That the notebook is worth a lot of money"],0,"His final quote: 'now I understand how hard his life was.'"]
     ]},
  2:{title:"Meet Your Future Self",
     text:["Ask a group of teenagers what they are going to do in ten years and you will hear many answers: doctor, game designer, pilot, business owner. Fewer of them can explain how they will get there.",
           "Career coaches say the secret is to turn a big dream into smaller goals. A useful method is to make each goal SMART: specific, measurable, achievable, relevant and time-bound. \"I'm going to be good at English\" is a wish. \"I'm going to read one short article in English every day until the end of term\" is a SMART goal.",
           "Coaches also suggest writing a letter to your future self. Describe the person you want to be in five years and the steps you will take this year. Seal it, and open it at the end of Grade 12. Many students say the letter keeps them determined when work gets difficult.",
           "Finally, remember that plans can change. New interests and opportunities will appear, and that is a good thing. A goal is a map, not a cage."],
     qs:[
      ["What problem does paragraph 1 describe?",["Many teenagers have dreams but no clear plan","Teenagers don't want jobs","Too many students want to be pilots"],0,"'Fewer of them can explain how they will get there.'"],
      ["Which of these is a SMART goal?",["I'm going to practise 20 new words every week this term","I'm going to be famous","I will try harder"],0,"It is specific, measurable and has a time limit."],
      ["When should students open the letter to their future self?",["At the end of Grade 12","Next week","After university"],0,"Paragraph 3: 'open it at the end of Grade 12.'"],
      ["The word 'determined' in paragraph 3 is closest in meaning to…",["not willing to give up","confused","bored"],0,"The letter keeps students going 'when work gets difficult'."],
      ["What does the writer mean by 'A goal is a map, not a cage'?",["Goals should guide you but can change","Goals are very difficult","You should never change your plans"],0,"The paragraph says plans can change and that is a good thing."]
     ]}
 },
 writing:{
  1:{title:"A story: a day I will never forget",
     prompt:"Write a short story (120–170 words) about a day you will never forget. Use the past simple, the past continuous and 'used to' at least once each.",
     need:{min:120,max:170,links:["when","while","then","after","suddenly","finally","because","so"],extra:["was","were","used to","remember","never"]},
     model:"I will never forget the day of my first football final. I used to feel very nervous before big matches, and that morning was no different. While we were warming up, I noticed that the stands were full of parents and teachers. My hands were shaking.\n\nThe match started badly. After ten minutes, the other team scored, and our coach looked worried. Then, just before half-time, something changed. I was running down the left side when my friend Saif passed me the ball. I didn't think. I just kicked it as hard as I could, and it flew into the net!\n\nWe scored again in the second half and finally won 2–1. When the whistle blew, my father ran onto the pitch and hugged me. Because of that day, I learned that being nervous is normal, and it doesn't have to stop you."},
  2:{title:"Argumentative paragraph: choosing a career early",
     prompt:"Should students decide on their future career before the end of Grade 10? Write an argumentative response (150–200 words). Give your opinion, two reasons with examples, and a conclusion.",
     need:{min:150,max:200,links:["in my opinion","firstly","secondly","for example","however","therefore","in conclusion","because"],extra:["career","goal","future","opportunity","subjects"]},
     model:"In my opinion, students should not have to choose a final career before the end of Grade 10, but they should start exploring their options.\n\nFirstly, most fifteen-year-olds have not had enough experience to make such a big decision. For example, a student who enjoys biology might think she is going to be a doctor, but she may discover later that she prefers research or teaching. If she decides too early, she may miss a better opportunity.\n\nSecondly, interests change as we grow. Many people find their passion through a summer job, a club or a teacher who inspires them in Grade 11 or 12. Therefore, schools should give students time to try different subjects and activities.\n\nHowever, students should still set short-term goals. Choosing the right subjects and keeping good grades will keep many doors open for the future.\n\nIn conclusion, Grade 10 is a time to explore, not to decide. Students will make better choices if they are given time and good guidance."}
 },
 maze:[
  ["While we ___ TV, the lights went out.",["were watching","watched","watch"],0],
  ["My father ___ walk to school when he was a boy.",["used to","use to","was"],0],
  ["Look out! You ___ fall!",["are going to","will","fall"],0],
  ["A ___ is an important event in your life.",["milestone","deadline","heritage"],0],
  ["She ___ her keys and couldn't open the door.",["lost","was losing","loses"],0],
  ["I'm hungry. I think I ___ make a sandwich.",["will","am going to","make"],0],
  ["Someone who never gives up is ___.",["determined","nostalgic","vivid"],0],
  ["We ___ Dubai Mall at 4 p.m. tomorrow. It's all arranged.",["are meeting at","meet at","will meeting at"],0],
  ["To ___ means to remember.",["recall","predict","achieve"],0],
  ["What ___ you do last weekend?",["did","were","have"],0]
 ]
};

// Grade 11 General (shared course with Grade 10 Advanced) — Term 1 (2026–27)
// Original practice written for the MOE Term 1 scope: A Picture of Health / Infotainment
const SET_10A11G = {
 id: "10A11G",
 course: "Grade 11 General & Grade 10 Advanced",
 chapters: { 1: "Ch 1 · A Picture of Health", 2: "Ch 2 · Infotainment" },
 grammar: {
  1: [
   { title: "Present simple passive",
     rule: "Form: <mark>am / is / are + past participle</mark>. Use it to describe facts and processes when the action matters more than the person who does it: <i>Blood tests <b>are taken</b> in the morning.</i> Use <i>by</i> only when the doer is important.",
     qs: [
      ["Most medicines ___ at room temperature.", ["are stored", "store", "are storing"], 0, "The medicines receive the action → are + past participle."],
      ["A prescription ___ before you can buy this medicine.", ["is needed", "needs", "is needing"], 0, "Singular subject + is + needed."],
      ["Patients ___ to arrive 15 minutes early.", ["are asked", "ask", "asked"], 0, "General rule about a process → are asked."],
      ["This syndrome ___ often ___ in children under five.", ["is / found", "does / find", "is / finding"], 0, "Passive with an adverb: is + often + past participle."],
      ["Where ___ the vaccines ___?", ["are / kept", "do / keep", "are / keeping"], 0, "Passive question: Where + are + subject + past participle."],
      ["Healthy meals ___ in our school canteen every day.", ["are served", "serve", "are serving"], 0, "Regular action, passive → are served."]
     ] },
   { title: "Present perfect continuous",
     rule: "Form: <mark>have / has + been + -ing</mark>. Use it for an activity that started in the past and is still continuing, or has just stopped and has a result now. It often goes with <mark>for</mark> (a period) and <mark>since</mark> (a starting point): <i>I <b>have been feeling</b> tired since Monday.</i>",
     qs: [
      ["I ___ headaches for three days.", ["have been having", "am having", "had"], 0, "Started in the past, still continuing → have been + -ing."],
      ["She ___ at the hospital since 2021.", ["has been working", "is working", "works"], 0, "'Since 2021' + continuing activity → has been working."],
      ["Your eyes are red. ___ you ___ at a screen all night?", ["Have / been looking", "Are / looking", "Did / look"], 0, "A present result of a recent activity → present perfect continuous."],
      ["They have been running ___ two hours.", ["for", "since", "ago"], 0, "'For' + a period of time."],
      ["He has been eating more vegetables ___ his doctor's visit.", ["since", "for", "during"], 0, "'Since' + a starting point."],
      ["How long ___ you been taking this medicine?", ["have", "are", "did"], 0, "Question form: How long + have + subject + been + -ing."]
     ] },
   { title: "Question tags",
     rule: "A question tag checks information. A <b>positive</b> sentence takes a <mark>negative tag</mark>; a <b>negative</b> sentence takes a <mark>positive tag</mark>. Use the same auxiliary verb as the sentence (or <i>do/does/did</i>): <i>You feel better, <b>don't you</b>?</i> Note: <i>I am … , <b>aren't I</b>?</i>",
     qs: [
      ["You've taken your medicine, ___?", ["haven't you", "didn't you", "don't you"], 0, "Positive present perfect → negative tag with 'have'."],
      ["She doesn't eat meat, ___?", ["does she", "doesn't she", "is she"], 0, "Negative sentence → positive tag with 'does'."],
      ["The clinic opens at eight, ___?", ["doesn't it", "isn't it", "does it"], 0, "Present simple positive → doesn't."],
      ["They weren't at the gym yesterday, ___?", ["were they", "weren't they", "did they"], 0, "Negative 'were' → positive 'were they'."],
      ["I'm late for my appointment, ___?", ["aren't I", "amn't I", "am I"], 0, "Special form: I am … aren't I?"],
      ["You will call the doctor, ___?", ["won't you", "will you", "don't you"], 0, "Positive 'will' → negative 'won't'."]
     ] }
  ],
  2: [
   { title: "Participle clauses",
     rule: "Participle clauses make writing shorter. An <mark>-ing clause</mark> has an active meaning (<i><b>Looking</b> at the poster, I remembered the slogan.</i>). A <mark>past participle clause</mark> has a passive meaning (<i><b>Designed</b> for teenagers, the app is very popular.</i>). The subject of both clauses must be the same.",
     qs: [
      ["___ on TV every evening, the advert became famous.", ["Shown", "Showing", "To show"], 0, "The advert was shown → passive meaning → past participle."],
      ["___ through social media, she saw a strange advert.", ["Scrolling", "Scrolled", "Scroll"], 0, "She was scrolling → active meaning → -ing."],
      ["The video, ___ by millions of people, was later removed.", ["watched", "watching", "watches"], 0, "The video was watched → past participle."],
      ["___ the slogan, the students laughed.", ["Hearing", "Heard", "Hear"], 0, "The students heard it → active → -ing."],
      ["Students ___ the online course get a certificate.", ["completing", "completed", "complete"], 0, "Reduced clause: students who complete → completing."],
      ["Which sentence is correct?", ["Written in simple English, the article was easy to read.", "Writing in simple English, the article was easy to read.", "Written in simple English, I read the article easily."], 0, "The article was written → past participle, and the subject (the article) matches."]
     ] },
   { title: "Demonstratives",
     rule: "<mark>this / these</mark> = near (singular / plural). <mark>that / those</mark> = far, or already mentioned. They can also refer back to a whole idea in a text: <i>Some apps sell your data. <b>This</b> worries many parents.</i>",
     qs: [
      ["Look at ___ adverts on the wall over there.", ["those", "these", "this"], 0, "Plural and far away → those."],
      ["___ phone in my hand has the best camera.", ["This", "That", "These"], 0, "Singular and near → this."],
      ["Many teenagers spend six hours online a day. ___ is a worrying number.", ["This", "These", "Those"], 0, "Refers back to the whole idea → this."],
      ["Do you remember ___ advert from our childhood with the singing camel?", ["that", "this", "these"], 0, "Far in time → that."],
      ["___ headphones I'm wearing were cheap but excellent.", ["These", "Those", "This"], 0, "Plural and near → these."],
      ["The company used fake reviews. ___ dishonest method made people angry.", ["That", "Those", "These"], 0, "Singular, referring back to something mentioned → that."]
     ] },
   { title: "Subordinating conjunctions",
     rule: "Subordinating conjunctions join ideas and show how they are linked: <mark>because / since / as</mark> (reason), <mark>although / even though / while</mark> (contrast), <mark>so that</mark> (purpose), <mark>if / unless</mark> (condition), <mark>when / as soon as / until</mark> (time).",
     qs: [
      ["People remember the advert ___ it has a catchy song.", ["because", "although", "unless"], 0, "Reason → because."],
      ["___ the video looks real, it was made with AI.", ["Although", "Because", "So that"], 0, "Contrast → although."],
      ["Companies repeat slogans ___ customers remember them.", ["so that", "unless", "although"], 0, "Purpose → so that."],
      ["Don't believe a health claim ___ a doctor confirms it.", ["unless", "because", "so that"], 0, "Unless = if … not."],
      ["I switched off my phone ___ I finished my homework.", ["until", "although", "since"], 0, "Up to the time when → until."],
      ["___ some ads are funny, others are misleading.", ["While", "Because", "So that"], 0, "'While' can show contrast between two facts."]
     ] },
   { title: "Adverbs of degree",
     rule: "Adverbs of degree show how much: <mark>extremely, very, really, quite, fairly, slightly, too, enough</mark>. <i>Too</i> + adjective = more than acceptable; adjective + <i>enough</i> = as much as needed.",
     qs: [
      ["The advert was ___ loud. Everyone covered their ears.", ["too", "enough", "slightly"], 0, "More than acceptable → too."],
      ["Is the screen bright ___ to read outside?", ["enough", "too", "very"], 0, "'Enough' comes after the adjective."],
      ["The new app is ___ popular. It has 50 million users.", ["extremely", "slightly", "enough"], 0, "Very strong degree → extremely."],
      ["The slogan was ___ memorable, but not the best.", ["fairly", "too", "enough"], 0, "Moderate degree → fairly."],
      ["Prices rose ___, by only one dirham.", ["slightly", "extremely", "totally"], 0, "Very small change → slightly."],
      ["She is ___ good at spotting fake news.", ["really", "enough", "too much"], 0, "'Really' strengthens the adjective."]
     ] }
  ]
 },
 vocab: {
  1: [["symptoms", "signs that show you may have an illness"], ["prescription", "a doctor's written order for medicine"], ["fraudulent", "intended to trick people, often to get money"], ["dishonest", "not telling the truth"], ["syndrome", "a group of symptoms that happen together"], ["diagnosis", "a doctor's decision about what illness someone has"], ["side effect", "an extra, usually unwanted, result of a medicine"], ["wellbeing", "the state of being healthy and happy"], ["remedy", "something that cures or treats an illness"], ["misleading", "giving the wrong idea"]],
  2: [["connectivity", "the ability to connect to the internet or other devices"], ["productivity", "how much work you get done in a period of time"], ["slogan", "a short, memorable phrase used in advertising"], ["commercial", "an advertisement on TV or radio"], ["memorable", "easy to remember"], ["infotainment", "media that mixes information with entertainment"], ["target audience", "the group of people an advert is made for"], ["persuasive", "able to make people believe or do something"], ["sponsor", "to pay for something in return for advertising"], ["credible", "able to be believed and trusted"]]
 },
 reading: {
  1: { title: "The Miracle Tea That Wasn't",
   text: [
    "Last year, an online advert promised that a 'detox tea' could cure tiredness, headaches and even a rare syndrome in just seven days. The video showed a smiling woman in a white coat and the words 'Doctors recommend!' Thousands of people ordered it.",
    "When a team of university students in Al Ain investigated the product as part of a media project, they found several problems. The woman in the video was an actor, not a doctor. The 'research' mentioned on the website was a survey of only 30 customers, all of whom had received free samples. No hospital or health authority had tested the tea.",
    "The students also interviewed a pharmacist. She explained that tiredness and headaches can be symptoms of many different conditions, from lack of sleep to dehydration. 'A product that claims to cure everything usually cures nothing,' she said. 'If symptoms continue, people need a proper diagnosis, not a tea.'",
    "The advert has since been removed, but similar ones appear every month. The students' advice is simple: check who is speaking, look for real evidence, and be careful with any claim that sounds too good to be true."
   ],
   qs: [
    ["What is the main message of the passage?", ["Health adverts should be checked carefully", "Detox tea is good for headaches", "Students should study pharmacy"], 0, "The text shows how a misleading advert was investigated."],
    ["Why did the advert use a woman in a white coat?", ["To make viewers think a doctor recommended it", "Because she invented the tea", "Because she worked for the university"], 0, "She was an actor dressed like a doctor."],
    ["What was wrong with the 'research'?", ["It was a small survey of people given free samples", "It was too long to read", "It was done in another country"], 0, "Paragraph 2: 30 customers with free samples."],
    ["Why does the writer include the pharmacist's comments?", ["To give an expert view based on evidence", "To advertise her pharmacy", "To prove the tea works"], 0, "She explains symptoms and the need for diagnosis."],
    ["The word 'fraudulent' would best describe…", ["the advert's claims", "the pharmacist", "the students' project"], 0, "The claims tricked people into buying the tea."],
    ["What can we infer from 'similar ones appear every month'?", ["Misleading health adverts are a continuing problem", "The tea is now sold in shops", "The students made more videos"], 0, "The problem did not end with one advert."]
   ] },
  2: { title: "Why Do We Remember Some Adverts?",
   text: [
    "Think of an advert you saw as a child. Chances are you can still sing its song or repeat its slogan. Advertisers spend millions trying to make commercials this memorable, and researchers have found a few reasons why some succeed.",
    "First, repetition works. Hearing the same short phrase many times helps it move into long-term memory. Second, emotion matters. Adverts that make us laugh or feel proud are remembered far better than those that simply list facts. Third, a clear target audience helps. An advert designed for teenagers uses different music, colours and language from one made for parents.",
    "However, being memorable is not the same as being honest. Some of the most famous commercials made claims that would not be allowed today. Viewers who understand how adverts are built are better at deciding whether to trust them.",
    "That is why media teachers now ask students to 'read' adverts like texts: Who made this? Who is it for? What does it want me to feel? What evidence does it give? Asking these questions turns passive viewers into active, critical thinkers."
   ],
   qs: [
    ["According to the text, why do we remember some adverts?", ["Repetition, emotion and a clear audience", "They are longer than others", "They are shown at night"], 0, "Paragraph 2 lists three reasons."],
    ["Which kind of advert is remembered better?", ["One that makes us laugh or feel proud", "One that lists many facts", "One with no music"], 0, "Paragraph 2: emotion matters."],
    ["What point does the writer make in paragraph 3?", ["Memorable adverts are not always honest", "All famous adverts are honest", "Laws about adverts have not changed"], 0, "'Being memorable is not the same as being honest.'"],
    ["What does 'read adverts like texts' mean?", ["Analyse them by asking critical questions", "Read the words aloud", "Only watch adverts with subtitles"], 0, "Paragraph 4 lists the questions."],
    ["The word 'passive' in the last sentence is closest in meaning to…", ["not actively thinking", "angry", "well-informed"], 0, "It is contrasted with 'active, critical thinkers'."],
    ["What is the writer's main purpose?", ["To explain how adverts work and encourage critical viewing", "To sell a product", "To criticise media teachers"], 0, "The text explains techniques and recommends questioning them."]
   ] }
 },
 writing: {
  1: [
   { title: "Summary (3–4 sentences)",
     prompt: "Read 'The Miracle Tea That Wasn't' again. Summarise the main ideas in 3–4 sentences (50–80 words). Use your own words.",
     need: { min: 50, max: 80, links: ["however", "also", "because", "therefore", "although", "as a result"], extra: ["advert", "evidence", "symptoms", "students"] },
     model: "An online advert claimed that a detox tea could cure many health problems, so thousands of people bought it. However, university students discovered that the 'doctor' was an actor and the research was a small, unfair survey. A pharmacist also explained that symptoms like tiredness need a proper diagnosis. As a result, the students advise people to check the speaker and the evidence before trusting health claims." },
   { title: "Opinion essay (170+ words)",
     prompt: "Should social media companies remove all health adverts that are not approved by doctors? Write an opinion essay of at least 170 words. Give your opinion, two reasons with examples, and a conclusion.",
     need: { min: 170, max: 260, links: ["in my opinion", "firstly", "secondly", "for example", "however", "therefore", "in conclusion", "because"], extra: ["health", "advert", "evidence", "misleading", "doctors"] },
     model: "Every day, millions of people see health adverts on social media. In my opinion, companies should remove health adverts that have not been checked by doctors, because they can put people in danger.\n\nFirstly, misleading health claims can cause real harm. For example, someone with serious symptoms might buy a 'miracle' product instead of visiting a doctor. By the time they get a proper diagnosis, their illness may be much worse.\n\nSecondly, many users cannot easily tell which adverts are honest. Some adverts use actors in white coats or fake reviews, and they look very professional. Young people and older adults are especially likely to trust them, and they may share them with their families without checking.\n\nHowever, some people say that removing adverts limits freedom and hurts small businesses. This is a fair concern, but businesses could still advertise if they provide real evidence and approval. Therefore, the rule would protect honest companies too.\n\nIn conclusion, health is too important to leave to dishonest advertisers. Social media companies should only allow health adverts that doctors have approved, so that users can trust what they see." }
  ],
  2: [
   { title: "Summary (3–4 sentences)",
     prompt: "Read 'Why Do We Remember Some Adverts?' again. Summarise the main ideas in 3–4 sentences (50–80 words).",
     need: { min: 50, max: 80, links: ["first", "also", "however", "therefore", "because", "in addition"], extra: ["adverts", "memorable", "emotion", "audience"] },
     model: "Some adverts stay in our memory for years because they use repetition, strong emotions and a clear target audience. However, a memorable advert is not always an honest one. Therefore, media teachers encourage students to analyse adverts by asking who made them, who they are for and what evidence they give. This helps young people become critical viewers." },
   { title: "Opinion essay (170+ words)",
     prompt: "Is constant connectivity good for students' productivity? Write an opinion essay of at least 170 words. Give your opinion, two reasons with examples, an opposing view, and a conclusion.",
     need: { min: 170, max: 260, links: ["in my opinion", "firstly", "secondly", "for example", "on the other hand", "however", "therefore", "in conclusion"], extra: ["connectivity", "productivity", "phone", "focus", "online"] },
     model: "Students today are connected to the internet almost every minute of the day. In my opinion, constant connectivity reduces productivity more than it helps.\n\nFirstly, notifications break concentration. For example, a student writing an essay may check a message 'for just a second' and then spend twenty minutes watching videos. Each interruption makes it harder to return to deep focus, and the work takes much longer than planned.\n\nSecondly, being always online can affect sleep and wellbeing. Many teenagers use their phones late at night, and tired students learn less the next day. This lowers their productivity in class, and it can also affect their mood and health.\n\nOn the other hand, connectivity allows students to find information quickly, work together on projects and attend online lessons. These are real advantages. However, they can be enjoyed without being connected all the time.\n\nIn conclusion, the internet is a powerful tool, but constant connectivity distracts students. Therefore, they should plan offline study time, keep phones out of their bedrooms at night, and switch off notifications while they work." }
  ]
 },
 examMaze: [
  { title: "Passage 1 · Vocabulary · A visit to the clinic", focus: "Vocabulary",
    text: "Amna had a sore throat and a high temperature, so she went to the clinic. The doctor asked about her [1] and listened to her chest. After a short examination, he made a [2]: it was a throat infection. He gave her a [3] for antibiotics and explained a possible [4], such as an upset stomach. He also warned her about [5] websites that sell fake medicines online.",
    gaps: [
     [["symptoms", "slogans", "sponsors"], 0, "Signs of an illness → symptoms."],
     [["diagnosis", "commercial", "remedy"], 0, "The doctor's decision about the illness → diagnosis."],
     [["prescription", "syndrome", "connectivity"], 0, "A doctor's written order for medicine → prescription."],
     [["side effect", "target audience", "slogan"], 0, "An unwanted result of a medicine → side effect."],
     [["fraudulent", "memorable", "credible"], 0, "Websites that trick people → fraudulent."]
    ] },
  { title: "Passage 2 · Grammar · Healthy school project", focus: "Grammar",
    text: "Our class [1] a healthy eating project since September. Every morning, fruit [2] to all students at break time. [3] by the school nurse, the project has already reduced sugary snacks. The nurse visits often, [4]? Next month the results will be shared with parents [5] they can support it at home.",
    gaps: [
     [["has been running", "is running", "runs"], 0, "Since September and still continuing → has been running."],
     [["is given", "gives", "is giving"], 0, "Regular action, passive → is given."],
     [["Supported", "Supporting", "Support"], 0, "The project is supported by the nurse → past participle."],
     [["doesn't she", "isn't she", "does she"], 0, "Positive present simple → doesn't she?"],
     [["so that", "although", "unless"], 0, "Purpose → so that."]
    ] },
  { title: "Passage 3 · Vocabulary · Making an advert", focus: "Vocabulary",
    text: "Our team had to create a TV [1] for a new water bottle. First we chose our [2]: teenagers who play sports. Then we wrote a short, catchy [3]: 'Drink smart, play hard.' A local gym agreed to [4] the advert. Our teacher said the final video was very [5] and easy to remember.",
    gaps: [
     [["commercial", "diagnosis", "prescription"], 0, "An advertisement on TV → commercial."],
     [["target audience", "side effect", "productivity"], 0, "The group the advert is made for → target audience."],
     [["slogan", "syndrome", "symptom"], 0, "Short memorable advertising phrase → slogan."],
     [["sponsor", "diagnose", "mislead"], 0, "Pay for something in return for advertising → sponsor."],
     [["memorable", "fraudulent", "dishonest"], 0, "Easy to remember → memorable."]
    ] },
  { title: "Passage 4 · Grammar · Screens and sleep", focus: "Grammar",
    text: "Researchers [1] the effect of screens on sleep for many years. [2] late at night, phones can keep the brain awake. [3] is why doctors suggest switching off one hour before bed. The advice is [4] simple, but many teenagers find it hard. You agree with this, [5]?",
    gaps: [
     [["have been studying", "are studying", "study"], 0, "For many years and continuing → have been studying."],
     [["Used", "Using", "Use"], 0, "Phones are used → past participle (passive meaning)."],
     [["This", "These", "Those"], 0, "Refers back to the whole idea → This."],
     [["fairly", "enough", "too much"], 0, "Moderate degree before an adjective → fairly."],
     [["don't you", "do you", "aren't you"], 0, "Positive present simple → don't you?"]
    ] }
 ],
 maze: [
  ["Medicines ___ in a cool place.", ["are kept", "keep", "are keeping"], 0],
  ["Signs of an illness are called ___.", ["symptoms", "slogans", "sponsors"], 0],
  ["I ___ here since 8 o'clock.", ["have been waiting", "am waiting", "wait"], 0],
  ["You're coming tomorrow, ___?", ["aren't you", "don't you", "isn't it"], 0],
  ["___ by millions, the video went viral.", ["Watched", "Watching", "Watch"], 0],
  ["A short, catchy phrase in an advert is a ___.", ["slogan", "syndrome", "remedy"], 0],
  ["Look at ___ birds over there!", ["those", "these", "this"], 0],
  ["___ the advert was funny, it was misleading.", ["Although", "Because", "So that"], 0],
  ["The music is ___ loud. Please turn it down.", ["too", "enough", "slightly"], 0],
  ["Something easy to remember is ___.", ["memorable", "fraudulent", "rigid"], 0]
 ],
 mock: {
  intro: "EOT 1 style practice · Vocabulary and Grammar 20, Reading 40 (marked here); Writing 40 (checked with the model and your teacher).",
  vocab: { title: "Section 1 · Vocabulary (5 × 2 marks)",
   text: "Online shops sometimes sell [1] health products with fake reviews. Their adverts are often [2] because they hide important information. A [3] source, such as a hospital website, gives clear evidence. Good internet [4] means we can check facts in seconds. Checking facts before buying also improves our [5] because we waste less time on bad products.",
   gaps: [
    [["fraudulent", "memorable", "flexible"], 0, "Intended to trick people → fraudulent."],
    [["misleading", "credible", "productive"], 0, "Giving the wrong idea → misleading."],
    [["credible", "dishonest", "commercial"], 0, "Able to be trusted → credible."],
    [["connectivity", "prescription", "diagnosis"], 0, "Ability to connect to the internet → connectivity."],
    [["productivity", "syndrome", "slogan"], 0, "How much we get done → productivity."]
   ] },
  grammar: { title: "Section 2 · Grammar (5 × 2 marks)",
   text: "My brother [1] for the school football team since last year. Training sessions [2] three times a week. [3] the coach, he learned to eat better. He trains hard, [4]? Now he only drinks water [5] he can stay healthy.",
   gaps: [
    [["has been playing", "is playing", "plays"], 0, "Since last year and continuing → has been playing."],
    [["are held", "hold", "are holding"], 0, "Regular, passive → are held."],
    [["Advised by", "Advising", "Advise"], 0, "He was advised → past participle clause."],
    [["doesn't he", "isn't he", "does he"], 0, "Positive present simple → doesn't he?"],
    [["so that", "unless", "although"], 0, "Purpose → so that."]
   ] },
  r3a: { title: "Reading 3A (8 × 3 marks) · Can You Trust a Health Influencer?",
   text: [
    "Health influencers share tips about food, exercise and sleep with millions of followers. Some are qualified nurses or dietitians, but many have no medical training at all. A recent study of 500 popular health videos found that almost half contained at least one misleading claim.",
    "The most common problems were exaggerated results, such as promising weight loss of ten kilograms in a month, and 'before and after' photos that had been edited. Many videos also failed to mention that a product was sponsored.",
    "However, the study also found useful content. Videos made by qualified professionals were far more accurate, and many explained their sources clearly. The researchers suggest that viewers check three things: the creator's qualifications, whether evidence is given, and whether the video is an advert.",
    "One limitation is that the study only looked at English-language videos. The researchers plan to study Arabic content next year."
   ],
   qs: [
    ["What did the study find about popular health videos?", ["Almost half had at least one misleading claim", "All of them were accurate", "Most were made by doctors"], 0, "Paragraph 1."],
    ["Which is an example of an exaggerated result?", ["Losing ten kilograms in a month", "Sleeping eight hours", "Drinking more water"], 0, "Paragraph 2."],
    ["What did many videos fail to mention?", ["That a product was sponsored", "The creator's name", "The price of food"], 0, "Paragraph 2."],
    ["Which videos were more accurate?", ["Those made by qualified professionals", "The longest videos", "Those with edited photos"], 0, "Paragraph 3."],
    ["How many things do researchers suggest checking?", ["Three", "Two", "Five"], 0, "Qualifications, evidence, advert."],
    ["The word 'exaggerated' means…", ["made to seem bigger than it really is", "carefully measured", "hidden"], 0, "Promising unrealistic results."],
    ["What is a limitation of the study?", ["It only included English-language videos", "It included too many videos", "It was done by influencers"], 0, "Paragraph 4."],
    ["What is the writer's purpose?", ["To help viewers judge health information online", "To promote a health influencer", "To stop people exercising"], 0, "The text informs and gives advice."]
   ] },
  r3b: { title: "Reading 3B (8 × 2 marks) · A Week Without Notifications",
   text: [
    "For one week, a class of Grade 11 students in Ras Al Khaimah agreed to switch off all phone notifications from 8 a.m. to 4 p.m. They could still use their phones, but only when they chose to.",
    "On the first day, many students said they felt anxious. 'I kept thinking I was missing something important,' said Rashed. By Wednesday, however, most reported that they were finishing homework faster and feeling calmer.",
    "Their teacher measured how long it took the class to complete a reading task before and during the experiment. The average time fell from 24 minutes to 17 minutes.",
    "Not everyone was convinced. Two students said they missed messages from their family. The class decided to keep notifications on for family members only, and switch everything else off during lessons."
   ],
   qs: [
    ["What did the students agree to do?", ["Switch off notifications during school hours", "Stop using phones completely", "Delete social media apps"], 0, "Paragraph 1."],
    ["How did many students feel on the first day?", ["Anxious", "Bored", "Excited"], 0, "Paragraph 2."],
    ["When did most students start to feel calmer?", ["By Wednesday", "On Monday", "After two weeks"], 0, "Paragraph 2."],
    ["What happened to the time for the reading task?", ["It fell from 24 to 17 minutes", "It rose to 24 minutes", "It stayed the same"], 0, "Paragraph 3."],
    ["Why were two students not convinced?", ["They missed family messages", "They failed the reading task", "Their phones broke"], 0, "Paragraph 4."],
    ["The word 'convinced' means…", ["sure that something is true or good", "angry", "confused"], 0, "Some students did not agree it was a good idea."],
    ["What did the class decide at the end?", ["Keep family notifications on only", "Switch all notifications back on", "Ban phones from school"], 0, "Paragraph 4."],
    ["What does the experiment suggest?", ["Fewer notifications can improve productivity", "Phones should be banned", "Students prefer more notifications"], 0, "Faster tasks and calmer students."]
   ] },
  summary: { title: "Writing 1.1 · Summary, 3–4 sentences (15 marks)",
   prompt: "Summarise 'Can You Trust a Health Influencer?' (Reading 3A) in 3–4 sentences. Use your own words.",
   need: { min: 50, max: 80, links: ["however", "also", "therefore", "while", "although"], extra: ["influencers", "misleading", "evidence", "study"] },
   model: "A study of 500 health videos found that almost half included misleading claims, such as exaggerated results, edited photos or hidden sponsorship. However, videos by qualified professionals were much more accurate. Therefore, the researchers advise viewers to check the creator's qualifications, the evidence and whether the video is an advert. The study only covered English videos, so Arabic content will be studied next." },
  essay: { title: "Writing 1.2 · Opinion essay (25 marks)",
   prompt: "Should schools teach students how to judge information they see online? Write an opinion essay of at least 170 words. In your essay: (1) give your opinion, (2) give two reasons with examples, (3) write a conclusion.",
   need: { min: 170, max: 260, links: ["in my opinion", "firstly", "secondly", "for example", "however", "therefore", "in conclusion", "because"], extra: ["online", "information", "students", "evidence", "credible"] },
   model: "Students today see hundreds of posts, videos and adverts every day. In my opinion, schools must teach students how to judge online information, because not all of it is true or safe.\n\nFirstly, misleading information can affect students' health and money. For example, a teenager might follow dangerous diet advice from an influencer with no qualifications, or buy a fraudulent product with fake reviews. Lessons on checking sources and spotting sponsored content could prevent these mistakes.\n\nSecondly, these skills help students in every subject. When they research a project, they need to recognise credible sources, compare evidence and notice when a writer is trying to persuade them. These are also skills they will need at university and work.\n\nHowever, some people believe students learn these skills naturally by using the internet. Unfortunately, being comfortable online is not the same as thinking critically about what we see, and even adults are often fooled.\n\nIn conclusion, teaching students to judge online information protects them and improves their learning. Therefore, every school should include media literacy lessons in its timetable." }
 }
};

// Grade 11 Advanced & Grade 12 General — Term 1 (2026–27)
// Original practice written for the MOE Term 1 scope: Money… Talks! / Nail That Job!
// Format of a question: [question, [options], correctIndex (always 0, shuffled on screen), explanation]
const SET_11A12G = {
 id: "11A12G",
 course: "Grade 11 Advanced & Grade 12 General",
 chapters: { 1: "Ch 1 · Money… Talks!", 2: "Ch 2 · Nail That Job!" },
 grammar: {
  1: [
   { title: "Verb patterns: to-infinitive, bare infinitive or -ing",
     rule: "Some verbs take <mark>to + verb</mark> (<i>decide, afford, plan, refuse, manage, hope</i>). Some take <mark>-ing</mark> (<i>avoid, enjoy, consider, keep, risk, can't help</i>). <i>Make</i> and <i>let</i> take the <mark>bare infinitive</mark> (no <i>to</i>): <i>My parents let me choose.</i> After a preposition, always use <i>-ing</i>.",
     qs: [
      ["Many students can't afford ___ a car while they are at university.", ["to buy", "buying", "buy"], 0, "'Afford' is followed by to + verb."],
      ["You should avoid ___ money from friends.", ["borrowing", "to borrow", "borrow"], 0, "'Avoid' is followed by -ing."],
      ["The bank made him ___ a form before opening the account.", ["fill in", "to fill in", "filling in"], 0, "'Make someone do' uses the bare infinitive."],
      ["She is thinking about ___ part of her salary every month.", ["putting aside", "to put aside", "put aside"], 0, "After a preposition (about) we use -ing."],
      ["My father let me ___ how to spend my birthday money.", ["decide", "to decide", "deciding"], 0, "'Let someone do' uses the bare infinitive."],
      ["Small businesses often risk ___ everything in their first year.", ["losing", "to lose", "lose"], 0, "'Risk' is followed by -ing."],
      ["They managed ___ enough capital to open a second café.", ["to raise", "raising", "raise"], 0, "'Manage' is followed by to + verb."]
     ] },
   { title: "Present simple passive",
     rule: "Form: <mark>am / is / are + past participle</mark>. Use it for facts, processes and systems when the action matters more than who does it: <i>Interest <b>is added</b> every month.</i> Add <i>by + agent</i> only when the doer is important.",
     qs: [
      ["Coins ___ at the Central Bank's printing house.", ["are produced", "produce", "are producing"], 0, "The coins receive the action → present simple passive."],
      ["A small fee ___ every time you use another bank's ATM.", ["is charged", "charges", "is charging"], 0, "Singular subject (a fee) + is + past participle."],
      ["Student loans ___ back after graduation.", ["are paid", "pay", "are paying"], 0, "General fact about a process → are + paid."],
      ["Your password ___ never ___ by our staff.", ["is / requested", "does / request", "is / requesting"], 0, "Negative passive: is + never + past participle."],
      ["Most online payments ___ within seconds.", ["are processed", "process", "processed"], 0, "Needs 'are' + past participle; 'processed' alone is not a full passive verb."],
      ["How much tax ___ on this product?", ["is paid", "pays", "does pay"], 0, "Question form: question word + is + subject + past participle."]
     ] },
   { title: "Present continuous passive",
     rule: "Form: <mark>am / is / are + being + past participle</mark>. Use it for actions happening now or around now, when the action matters more than the doer: <i>The new branch <b>is being built</b> this month.</i>",
     qs: [
      ["Sorry, the cash machine ___ at the moment.", ["is being repaired", "is repaired", "is repairing"], 0, "Happening now + passive → is being + past participle."],
      ["New banknotes ___ into the system this year.", ["are being introduced", "are introduced", "are introducing"], 0, "A temporary process around now → are being introduced."],
      ["Look! Our stall ___ by a TV crew.", ["is being filmed", "is filming", "has filmed"], 0, "'Look!' shows it is happening now; the stall receives the action."],
      ["The applications ___ right now, so please wait.", ["are being checked", "are checking", "being checked"], 0, "Needs 'are' before 'being'."],
      ["Is your loan request still ___?", ["being reviewed", "reviewed", "reviewing"], 0, "Question: Is + subject + being + past participle."],
      ["Prices ___ this week because of the summer sale.", ["are being reduced", "are reduced", "reduce"], 0, "'This week' → temporary situation now → present continuous passive."]
     ] },
   { title: "Adverbs of degree",
     rule: "Adverbs of degree make adjectives and adverbs stronger or weaker: <mark>extremely, really, very, quite, fairly, rather, slightly, too, enough</mark>. <i>Too</i> goes <b>before</b> the adjective (<i>too expensive</i>); <i>enough</i> goes <b>after</b> it (<i>old enough</i>) but <b>before</b> a noun (<i>enough money</i>).",
     qs: [
      ["This phone is ___ expensive for me. I can't buy it.", ["too", "enough", "very much"], 0, "'Too' + adjective = more than is possible or acceptable."],
      ["He isn't old ___ to open his own bank account.", ["enough", "too", "very"], 0, "'Enough' comes after an adjective."],
      ["We don't have ___ money to go on holiday this year.", ["enough", "too", "quite"], 0, "'Enough' comes before a noun."],
      ["The price went up only ___, from 20 to 21 dirhams.", ["slightly", "extremely", "totally"], 0, "A very small change → slightly."],
      ["Opening a business is ___ risky, so plan carefully.", ["fairly", "enough", "too much"], 0, "'Fairly' = moderately; it goes before the adjective."],
      ["The course was ___ useful. I learned a lot!", ["extremely", "slightly", "enough"], 0, "Strong positive meaning → extremely."]
     ] }
  ],
  2: [
   { title: "Non-defining relative clauses",
     rule: "A non-defining clause adds <b>extra</b> information about a noun that is already clear. It goes between <mark>commas</mark> and uses <mark>who</mark> (people), <mark>which</mark> (things), <mark>whose</mark> (possession), <mark>where</mark> (places) or <mark>when</mark> (times). Never use <i>that</i> in a non-defining clause.",
     qs: [
      ["My manager, ___ has worked here for 20 years, trained me.", ["who", "that", "which"], 0, "A person in a non-defining clause → who (never 'that')."],
      ["The internship, ___ lasts six weeks, starts in July.", ["which", "that", "who"], 0, "A thing in a non-defining clause → which."],
      ["Ms. Al Ali, ___ company hired me, sent me a welcome email.", ["whose", "who's", "who"], 0, "Possession (her company) → whose."],
      ["Dubai Internet City, ___ many tech firms are based, is near the Marina.", ["where", "which", "that"], 0, "A place followed by a full clause → where."],
      ["The interview was on Monday, ___ I was feeling nervous.", ["when", "which", "where"], 0, "A time → when."],
      ["Which sentence is punctuated correctly?", ["Omar, who studies engineering, wants an internship.", "Omar who studies engineering, wants an internship.", "Omar, that studies engineering, wants an internship."], 0, "Non-defining clauses need two commas and cannot use 'that'."]
     ] },
   { title: "Reported speech",
     rule: "When the reporting verb is in the past, move the tense <mark>one step back</mark>: am/is → was, will → would, can → could, present perfect → past perfect, past simple → past perfect. Change pronouns and time words: <i>today → that day, tomorrow → the next day, here → there</i>. Reported questions use <b>statement word order</b> and no question mark.",
     qs: [
      ["\"I am looking for a part-time job,\" she said. → She said she ___ for a part-time job.", ["was looking", "is looking", "looked"], 0, "Present continuous → past continuous."],
      ["\"We will call you tomorrow.\" → They said they would call me ___.", ["the next day", "tomorrow", "yesterday"], 0, "'Tomorrow' becomes 'the next day'."],
      ["\"Have you worked in a team before?\" → The interviewer asked me if I ___ in a team before.", ["had worked", "have worked", "did work"], 0, "Present perfect → past perfect; 'if' for yes/no questions."],
      ["\"Where do you live?\" → He asked me where ___.", ["I lived", "did I live", "do I live"], 0, "Reported questions use statement word order: subject + verb."],
      ["\"I can start on Sunday.\" → Ali said he ___ start on Sunday.", ["could", "can", "will"], 0, "can → could."],
      ["\"Please send your CV.\" → The manager asked me ___ my CV.", ["to send", "send", "sending"], 0, "Reported requests: ask + object + to + verb."]
     ] },
   { title: "Subordinating conjunctions",
     rule: "Subordinating conjunctions join a main clause to a dependent clause and show the link between ideas: <mark>because / since</mark> (reason), <mark>although / even though</mark> (contrast), <mark>so that</mark> (purpose), <mark>unless</mark> (= if not), <mark>as soon as / until / while</mark> (time). If the dependent clause comes first, add a comma.",
     qs: [
      ["___ she had no experience, the company offered her the job.", ["Although", "Because", "So that"], 0, "Contrast between 'no experience' and 'got the job' → although."],
      ["He took an online course ___ he could improve his CV.", ["so that", "although", "unless"], 0, "Purpose → so that."],
      ["You won't be shortlisted ___ you send all the documents.", ["unless", "because", "while"], 0, "'Unless' = if … not."],
      ["I'll email you ___ I hear from the manager.", ["as soon as", "although", "so that"], 0, "Time: immediately after → as soon as."],
      ["___ the job is flexible, many parents apply for it.", ["Since", "Although", "Unless"], 0, "'Since' here gives a reason (= because)."],
      ["She kept practising ___ she felt confident.", ["until", "unless", "although"], 0, "Up to the time when → until."]
     ] }
  ]
 },
 vocab: {
  1: [["broke", "having no money at all"], ["income", "money you receive regularly from work or investments"], ["make ends meet", "to have just enough money to pay for what you need"], ["raise capital", "to collect money to start or grow a business"], ["student loan", "money borrowed to pay for studies, paid back later"], ["scholarship", "money given to a student to help pay for education"], ["put aside", "to save money for later"], ["withdrawal", "taking money out of a bank account"], ["take risks", "to do something that could lead to loss or failure"], ["risk-taker", "a person who is willing to try things that may fail"], ["influence", "to have an effect on how someone thinks or behaves"], ["persuade", "to make someone agree to do or believe something"]],
  2: [["career", "the series of jobs a person does over their working life"], ["occupation", "a person's job or profession"], ["labour", "work, especially hard physical work; also workers as a group"], ["internship", "a short period of work to gain experience"], ["adaptability", "the ability to change to suit new situations"], ["communication", "sharing information and ideas with other people"], ["experience", "knowledge and skill gained by doing something"], ["shortlisted", "chosen as one of a small group for the final stage"], ["background", "a person's education, family and past experience"], ["flexible", "able to change easily"], ["rigid", "strict and not able to change"]]
 },
 reading: {
  1: { title: "The Lemonade Lesson",
   text: [
    "When Hessa was fourteen, she sold homemade lemonade at a weekend market in Sharjah. On her first day she earned 46 dirhams and felt rich. By the end of the month, however, she realised that she had spent almost all of it on lemons, sugar, cups and the market fee. \"I was busy every weekend and still broke,\" she remembers.",
    "Her uncle, an accountant, sat down with her and drew three columns: income, costs and profit. Together they found that the cups were the biggest problem. Hessa was buying them in small packs from a supermarket. When she started ordering them in bulk from a supplier, her costs fell by a third.",
    "The second change was price. Hessa had been afraid that customers would not pay more, but after a few weeks of testing she discovered that a slightly larger cup at a higher price sold just as well. Her profit doubled.",
    "Today Hessa is studying business at university with the help of a scholarship, and she still uses her uncle's three columns. \"Money talks,\" she says, \"but only if you listen to it. If you don't write it down, you can't understand it.\""
   ],
   qs: [
    ["What is the main idea of the passage?", ["A young seller learned to manage money by tracking her costs", "Lemonade is the most profitable product at markets", "Accountants should work at weekend markets"], 0, "The text follows how Hessa learned to understand income, costs and profit."],
    ["Why was Hessa 'busy every weekend and still broke'?", ["Her costs were almost as high as her income", "Customers did not like her lemonade", "Her uncle took her money"], 0, "Paragraph 1: she spent almost all her money on supplies and fees."],
    ["What was the biggest cost problem?", ["Buying cups in small packs", "The price of lemons", "The market fee"], 0, "Paragraph 2: 'the cups were the biggest problem'."],
    ["In paragraph 2, 'in bulk' most likely means…", ["in large quantities", "very slowly", "at a higher price"], 0, "Ordering in large amounts from a supplier reduced costs."],
    ["What can we infer about Hessa's price change?", ["Customers valued the larger cup enough to pay more", "Customers stopped buying lemonade", "The supplier told her to raise prices"], 0, "It 'sold just as well' at a higher price."],
    ["What does Hessa mean by 'Money talks, but only if you listen to it'?", ["Records of money show you what to change", "Rich people are always right", "You should talk about money with friends"], 0, "She explains it in the next sentence: write it down to understand it."]
   ] },
  2: { title: "What Employers Really Want",
   text: [
    "Every spring, thousands of graduates in the UAE send out their CVs. Many list the same things: a degree, good grades and a long list of software skills. Yet when a recruitment company asked 300 employers what made them choose one applicant over another, the most common answer was not on most CVs at all. It was adaptability.",
    "\"Technical skills can be taught in a few weeks,\" explained one hiring manager in the survey. \"What we can't easily teach is how to stay calm when a plan changes, or how to learn something new without being told twice.\"",
    "Communication came second. Employers said that many applicants could write a correct email but struggled to explain an idea clearly in a meeting. Experience came third, although several managers noted that internships and volunteer work counted as much as paid jobs.",
    "The survey has limits. It only included companies in two cities, and most of them were in the service sector. Still, its message for job seekers is clear: the strongest applications show not just what you know, but how you behave when things do not go as planned."
   ],
   qs: [
    ["What was the most common reason employers gave for choosing an applicant?", ["Adaptability", "Good grades", "Software skills"], 0, "Paragraph 1 ends with this answer."],
    ["Why does the hiring manager say technical skills are less important?", ["They can be taught quickly", "Nobody uses software any more", "Graduates already know them"], 0, "'Technical skills can be taught in a few weeks.'"],
    ["What problem with communication did employers describe?", ["Explaining ideas clearly in meetings", "Writing emails with mistakes", "Speaking too quietly on the phone"], 0, "Paragraph 3: many applicants struggled to explain ideas in meetings."],
    ["According to the text, which counts as useful experience?", ["Internships and volunteer work", "Only paid jobs", "Only jobs abroad"], 0, "Paragraph 3 says they counted as much as paid jobs."],
    ["Why does the writer mention the survey's limits?", ["To show the results may not apply everywhere", "To prove the survey was wrong", "To advertise the recruitment company"], 0, "Only two cities and mostly one sector were included."],
    ["The word 'struggled' in paragraph 3 is closest in meaning to…", ["found it difficult", "refused", "succeeded"], 0, "They could write emails but found speaking clearly difficult."]
   ] }
 },
 writing: {
  1: [
   { title: "Summary (4–5 sentences)",
     prompt: "Read 'The Lemonade Lesson' in Reading Detective again. Summarise the main ideas in 4–5 sentences (60–100 words). Use your own words and do not add your opinion.",
     need: { min: 60, max: 100, links: ["first", "then", "after", "as a result", "however", "finally", "because", "so"], extra: ["costs", "income", "profit", "price"] },
     model: "Hessa started selling lemonade at a market but soon found that her costs were almost as high as her income. Her uncle showed her how to record income, costs and profit in three columns. As a result, she discovered that buying cups in small packs was her biggest expense, so she began ordering them in bulk. She then tested a larger cup at a higher price and doubled her profit. Finally, she continues to track her money today as a university student." },
   { title: "Opinion essay (200+ words)",
     prompt: "Some people believe that teenagers should have a part-time job to learn about money. Others think school should come first. What is your opinion? Write an opinion essay of at least 200 words. Include an introduction, two reasons with examples, an opposing view, and a conclusion.",
     need: { min: 200, max: 300, links: ["in my opinion", "firstly", "secondly", "for example", "however", "on the other hand", "therefore", "in conclusion"], extra: ["income", "save", "experience", "responsibility", "money"] },
     model: "Many teenagers dream of earning their own money, but parents often worry that work will distract them from their studies. In my opinion, a small part-time job can be valuable for teenagers, as long as it is limited to weekends or holidays.\n\nFirstly, a job teaches the real value of money. When a teenager works for four hours to earn 100 dirhams, they think carefully before spending it on something they do not need. For example, my cousin worked at a bookshop last summer and started putting aside half of his income for university.\n\nSecondly, part-time work builds skills that school cannot always teach. Dealing with customers, arriving on time and solving problems quickly all prepare young people for their future careers. Employers also value this experience when they read a CV.\n\nOn the other hand, some people argue that teenagers should focus only on their grades. This is a fair point, because a heavy workload can affect sleep and results. However, this problem can be avoided if students work only a few hours a week or during holidays.\n\nIn conclusion, I believe that a carefully planned part-time job gives teenagers responsibility and financial skills. Therefore, families and schools should help students find the right balance between work and study." }
  ],
  2: [
   { title: "Summary (4–5 sentences)",
     prompt: "Read 'What Employers Really Want' again. Summarise the main ideas in 4–5 sentences (60–100 words). Use your own words.",
     need: { min: 60, max: 100, links: ["according to", "also", "however", "although", "in addition", "finally", "because", "while"], extra: ["employers", "adaptability", "communication", "experience"] },
     model: "According to a survey of 300 employers, adaptability is the quality that most often helps an applicant get a job. Employers explained that technical skills are easy to teach, while staying calm and learning quickly are not. Communication was the second most valued skill, because many graduates find it hard to explain ideas in meetings. In addition, experience matters, and internships or volunteer work are accepted as well as paid jobs. However, the survey only covered two cities, so its results may not apply everywhere." },
   { title: "Opinion essay (200+ words)",
     prompt: "Is a university degree still necessary to have a successful career? Write an opinion essay of at least 200 words. Give your opinion, two supporting reasons with examples, one opposing view, and a conclusion.",
     need: { min: 200, max: 300, links: ["in my opinion", "firstly", "secondly", "for example", "although", "however", "therefore", "in conclusion"], extra: ["career", "degree", "skills", "experience", "employers"] },
     model: "For many years, a university degree was seen as the only route to a good career. In my opinion, a degree is still very useful, but it is no longer the only way to succeed.\n\nFirstly, many careers now value skills more than certificates. For example, some technology companies hire programmers who have learned through online courses and can show a strong portfolio of projects. These employers care more about what applicants can do than where they studied.\n\nSecondly, experience can be as powerful as education. Someone who starts as an intern, shows adaptability and builds good relationships can be promoted quickly. In fields such as hospitality and sales, practical experience and good communication often matter more than a diploma.\n\nHowever, a degree is still essential for some occupations. Nobody would want to see a doctor or an engineer who had not completed years of formal training. In addition, a degree gives students time to mature, build a network and discover their interests.\n\nIn conclusion, although a university degree remains important for many careers, it is not the only key to success. Therefore, young people should choose the path that matches their goals, and keep learning new skills whichever route they take." }
  ]
 },
 examMaze: [
  { title: "Passage 1 · Vocabulary · Saving for the future", focus: "Vocabulary",
    text: "After graduating, Rashid got his first job and a monthly [1]. At first he spent everything and was often [2] by the end of the month. His sister persuaded him to [3] 10 percent of every salary in a savings account. A year later, he had enough to pay off his [4] from university. Now he even plans to [5] for a small online business.",
    gaps: [
     [["income", "withdrawal", "scholarship"], 0, "Money you receive regularly from work → income."],
     [["broke", "flexible", "shortlisted"], 0, "Having no money left → broke."],
     [["put aside", "take risks", "make ends meet"], 0, "To save money for later → put aside."],
     [["student loan", "career", "background"], 0, "Money borrowed to pay for university → student loan."],
     [["raise capital", "make ends meet", "be broke"], 0, "Collect money to start a business → raise capital."]
    ] },
  { title: "Passage 2 · Grammar · A bank that never sleeps", focus: "Grammar",
    text: "These days, millions of payments [1] every second around the world. At this very moment, a new digital banking app [2] by engineers in Abu Dhabi. The app, [3] was designed for young people, lets users [4] their spending in real time. The developers hope [5] it to schools next year.",
    gaps: [
     [["are made", "make", "are making"], 0, "General fact, passive → are made."],
     [["is being developed", "is developed", "is developing"], 0, "Happening now + passive → is being developed."],
     [["which", "that", "who"], 0, "Non-defining clause about a thing → which."],
     [["track", "to track", "tracking"], 0, "let + object + bare infinitive."],
     [["to introduce", "introducing", "introduce"], 0, "hope + to-infinitive."]
    ] },
  { title: "Passage 3 · Vocabulary · Getting the job", focus: "Vocabulary",
    text: "Maryam applied for an [1] at a hotel during the summer. Her application showed her [2] in volunteering and languages, and she was [3] with four other students. At the interview, the manager said the role needed [4] because plans change quickly in hotels. Maryam explained that she was [5] and happy to work different shifts.",
    gaps: [
     [["internship", "occupation", "labour"], 0, "A short period of work for experience → internship."],
     [["background", "withdrawal", "income"], 0, "Past education and experience → background."],
     [["shortlisted", "persuaded", "rigid"], 0, "Chosen for the final stage → shortlisted."],
     [["adaptability", "rigidity", "capital"], 0, "Ability to change with new situations → adaptability."],
     [["flexible", "rigid", "broke"], 0, "Able to change easily → flexible."]
    ] },
  { title: "Passage 4 · Grammar · The interview", focus: "Grammar",
    text: "The interviewer asked Khalid why he [1] the job. He said that he [2] always loved working with people. [3] he was nervous, he answered every question clearly. The manager, [4] had interviewed twenty applicants that week, was impressed. She told him she [5] call him the next day.",
    gaps: [
     [["wanted", "wants", "did he want"], 0, "Reported question: statement order + backshift → wanted."],
     [["had", "has", "have"], 0, "Present perfect 'has loved' → past perfect 'had loved'."],
     [["Although", "Because", "Unless"], 0, "Contrast: nervous but clear → Although."],
     [["who", "which", "whose"], 0, "Non-defining clause about a person → who."],
     [["would", "will", "can"], 0, "will → would in reported speech."]
    ] }
 ],
 maze: [
  ["The bank let me ___ my account online.", ["open", "to open", "opening"], 0],
  ["Someone with no money at all is ___.", ["broke", "flexible", "shortlisted"], 0],
  ["The old bridge ___ at the moment.", ["is being repaired", "is repaired", "repairs"], 0],
  ["She asked me where I ___.", ["worked", "did I work", "do I work"], 0],
  ["A short period of work to gain experience is an ___.", ["internship", "occupation", "income"], 0],
  ["The interview, ___ lasted an hour, went well.", ["which", "that", "who"], 0],
  ["I can't afford ___ a new laptop.", ["to buy", "buying", "buy"], 0],
  ["___ he was tired, he finished the report.", ["Although", "Unless", "So that"], 0],
  ["The jacket is ___ big for me.", ["too", "enough", "quite enough"], 0],
  ["Someone who changes easily to suit new situations is ___.", ["flexible", "rigid", "broke"], 0]
 ],
 mock: {
  intro: "EOT 1 style practice · 100 marks · Vocabulary and Grammar 20, Reading 40 (marked here); Writing 40 (checked with the model and your teacher).",
  vocab: { title: "Section 1 · Vocabulary (5 × 2 marks)",
   text: "Many young people find it hard to [1] when they first live alone. Rent, bills and food take most of their salary. Financial advisers try to [2] them to make a simple budget. They also warn that every unplanned [3] from a savings account makes it harder to reach a goal. People who [4] with their money, such as investing everything in one idea, can lose a lot. Still, a careful [5] can sometimes build a successful business.",
   gaps: [
    [["make ends meet", "raise capital", "be shortlisted"], 0, "Have just enough money for needs → make ends meet."],
    [["persuade", "withdraw", "occupy"], 0, "Make someone agree to do something → persuade."],
    [["withdrawal", "scholarship", "income"], 0, "Taking money out of an account → withdrawal."],
    [["take risks", "put aside", "make ends meet"], 0, "Do something that may lead to loss → take risks."],
    [["risk-taker", "background", "labour"], 0, "A person willing to try things that may fail → risk-taker."]
   ] },
  grammar: { title: "Section 2 · Grammar (5 × 2 marks)",
   text: "Our school careers fair [1] every March. This year, the stands [2] by local companies right now. The head teacher, [3] organised the first fair ten years ago, said she [4] proud of how it had grown. Students are encouraged [5] at least three stands.",
   gaps: [
    [["is held", "holds", "is holding"], 0, "Regular event, passive → is held."],
    [["are being set up", "are set up", "set up"], 0, "Happening now, passive → are being set up."],
    [["who", "which", "that"], 0, "Non-defining clause about a person → who."],
    [["was", "is", "will be"], 0, "Reported speech backshift: am → was."],
    [["to visit", "visiting", "visit"], 0, "be encouraged + to-infinitive."]
   ] },
  r3a: { title: "Reading 3A (8 × 3 marks) · The Rise of the Side Hustle",
   text: [
    "A 'side hustle' is a small business or extra job that someone does alongside their main occupation. In recent years, the idea has become extremely popular among young people in the Gulf, helped by social media and online payment apps.",
    "Supporters say side hustles teach practical skills. Running even a tiny online shop involves marketing, customer service and basic accounting. A study by a regional university found that graduates who had run a side business were more likely to be promoted in their first three years at work.",
    "Critics, however, point out the costs. Some young people work late into the night and their studies or main jobs suffer. Others are persuaded by influencers to spend money on courses that promise quick profits but deliver little.",
    "Experts suggest a middle path: treat a side hustle as a way to learn, not as a fast way to get rich. Set limits on time and money, keep simple records, and stop if it begins to affect your health."
   ],
   qs: [
    ["What is a 'side hustle'?", ["Extra work done alongside a main job", "A full-time business", "A type of bank account"], 0, "Paragraph 1 defines it."],
    ["What helped side hustles become popular?", ["Social media and online payment apps", "Lower rents", "New school subjects"], 0, "Paragraph 1."],
    ["Which skill is NOT mentioned in paragraph 2?", ["Public speaking", "Marketing", "Basic accounting"], 0, "Public speaking is not listed."],
    ["What did the university study find?", ["Side-business graduates were promoted more often", "Side businesses always fail", "Graduates earn less with side jobs"], 0, "Paragraph 2."],
    ["What is one cost mentioned by critics?", ["Studies or main jobs can suffer", "Taxes are too high", "Customers complain online"], 0, "Paragraph 3."],
    ["In paragraph 3, 'persuaded' is closest in meaning to…", ["convinced", "prevented", "paid"], 0, "Influencers make people believe they should buy courses."],
    ["What is the writer's attitude to side hustles?", ["Balanced: useful if done carefully", "Completely negative", "Completely positive"], 0, "The final paragraph suggests a middle path."],
    ["Which advice is given in the last paragraph?", ["Keep simple records", "Borrow money to grow quickly", "Quit your main job"], 0, "Paragraph 4."]
   ] },
  r3b: { title: "Reading 3B (8 × 2 marks) · A Day in the Life of a Recruiter",
   text: [
    "Noor Al Hammadi has worked as a recruiter for a logistics company for six years. Her day starts at 7:30 with a coffee and a quick look at new applications. On a busy morning she may read more than fifty CVs.",
    "\"I spend about thirty seconds on each CV at first,\" she admits. \"I look for clear structure, relevant experience and no spelling mistakes. A messy CV tells me the person might not check their work.\"",
    "In the afternoon, Noor interviews the shortlisted applicants. She prefers questions that ask for real examples, such as describing a time when a plan failed. \"I'm not looking for perfect answers,\" she says. \"I want to see how people think and whether they can adapt.\"",
    "Her best advice for school leavers? \"Get some experience, even unpaid. And practise talking about it. Many people have done interesting things but can't explain them.\""
   ],
   qs: [
    ["How long has Noor worked as a recruiter?", ["Six years", "Thirty seconds", "Fifty days"], 0, "Paragraph 1."],
    ["How long does she first spend on each CV?", ["About thirty seconds", "About five minutes", "About an hour"], 0, "Paragraph 2."],
    ["What does a messy CV suggest to her?", ["The applicant may not check their work", "The applicant is creative", "The applicant is very busy"], 0, "Paragraph 2."],
    ["When does she interview applicants?", ["In the afternoon", "At 7:30", "At weekends"], 0, "Paragraph 3."],
    ["What kind of interview questions does she prefer?", ["Questions asking for real examples", "Questions about salary", "Yes/no questions"], 0, "Paragraph 3."],
    ["The word 'adapt' in paragraph 3 means…", ["change to suit a new situation", "apply for a job", "repeat an answer"], 0, "She wants to see if people can handle change."],
    ["What does she advise school leavers to do?", ["Get experience and practise explaining it", "Only apply to large companies", "Write very long CVs"], 0, "Paragraph 4."],
    ["What is the main purpose of the text?", ["To show what a recruiter looks for", "To advertise a logistics company", "To explain how to become a recruiter"], 0, "It describes her work and what she values."]
   ] },
  summary: { title: "Writing 1.1 · Summary, 4–5 sentences (15 marks)",
   prompt: "Summarise 'The Rise of the Side Hustle' (Reading 3A) in 4–5 sentences. Use your own words.",
   need: { min: 60, max: 100, links: ["however", "also", "although", "therefore", "while", "in addition"], extra: ["side", "skills", "costs", "experts"] },
   model: "Side hustles are small businesses or extra jobs that many young people in the Gulf now run alongside their main work. Supporters say they build useful skills such as marketing and accounting, and one study found that graduates with side businesses were promoted more often. However, critics warn that some people damage their studies or health, or waste money on courses promoted by influencers. Therefore, experts recommend treating a side hustle as a learning experience with clear limits on time and money." },
  essay: { title: "Writing 1.2 · Opinion essay (25 marks)",
   prompt: "Should financial education start in primary school? Write an opinion essay of at least 200 words. In your essay: (1) state your opinion clearly, (2) give two reasons with examples, (3) respond to one opposing view.",
   need: { min: 200, max: 320, links: ["in my opinion", "firstly", "secondly", "for example", "however", "on the other hand", "therefore", "in conclusion"], extra: ["money", "save", "children", "budget", "habits"] },
   model: "Most adults learn about money through their own mistakes. In my opinion, financial education should start in primary school, because good habits are easier to build when children are young.\n\nFirstly, young children are already making small money decisions. They receive pocket money, ask for toys and see their parents pay for things. For example, a simple lesson about saving half of their pocket money in a jar can show them how patience leads to bigger rewards. These early experiences shape how they behave as adults.\n\nSecondly, early lessons protect young people from debt later. Teenagers today can shop online with a few clicks, and many do not understand interest or loans. If children learn basic ideas such as needs, wants and budgets at the age of eight or nine, they will be better prepared when they earn their first income.\n\nOn the other hand, some people believe that money is a family matter and that young children are too young for such topics. However, lessons can be simple and fun, such as games with toy shops, and they can support what parents already teach at home.\n\nIn conclusion, starting financial education in primary school gives every child the same chance to develop healthy money habits. Therefore, schools should include short, practical money lessons from an early age." }
 }
};

// Grade 12 Advanced — Term 1 (2026–27)
// Original practice written for the MOE Term 1 scope: Pushing Boundaries / Rise to the Challenge!
const SET_12A = {
 id: "12A",
 course: "Grade 12 Advanced",
 chapters: { 1: "Unit 1 · Pushing Boundaries", 2: "Unit 2 · Rise to the Challenge!" },
 grammar: {
  1: [
   { title: "Zero conditional",
     rule: "Form: <mark>If / When + present simple, present simple</mark>. Use it for facts, scientific truths and things that always happen in the same situation: <i>If a sensor <b>detects</b> movement, the light <b>switches</b> on.</i> <i>When</i> can replace <i>if</i> with almost the same meaning.",
     qs: [
      ["If you ___ water to 100°C, it boils.", ["heat", "will heat", "heated"], 0, "Zero conditional: present simple in both clauses."],
      ["When the battery is low, the robot ___ to its charging station.", ["returns", "will return", "returned"], 0, "A rule that always happens → present simple."],
      ["If people ___ their location, apps can track them.", ["share", "will share", "shared"], 0, "Present simple in the if-clause."],
      ["Smart doors ___ automatically if they recognise your face.", ["open", "opened", "would open"], 0, "Result clause of a general truth → present simple."],
      ["If you don't update your software, it ___ easier to hack.", ["becomes", "would become", "became"], 0, "General result → present simple."],
      ["Which sentence is a zero conditional?", ["If you press this button, the screen turns off.", "If you press this button, the screen will turn off.", "If you pressed this button, the screen would turn off."], 0, "Only the first uses present + present for a general rule."]
     ] },
   { title: "Present simple passive",
     rule: "Form: <mark>am / is / are + past participle</mark>. It is common in scientific and technical writing to describe processes: <i>Data <b>is collected</b> by sensors and <b>sent</b> to a central server.</i>",
     qs: [
      ["Millions of photos ___ online every day.", ["are uploaded", "upload", "are uploading"], 0, "Photos receive the action → are uploaded."],
      ["Your personal data ___ without your permission.", ["is not shared", "does not share", "not shared"], 0, "Negative passive → is not + past participle."],
      ["In many warehouses, parcels ___ by robots.", ["are sorted", "sort", "sorted"], 0, "Passive with agent 'by robots'."],
      ["How ___ the information ___?", ["is / protected", "does / protect", "is / protecting"], 0, "Passive question → is + subject + past participle."],
      ["Driverless cars ___ in several cities.", ["are tested", "test", "testing"], 0, "General fact, passive → are tested."],
      ["The results ___ to the public every year.", ["are published", "publish", "are publishing"], 0, "Regular process, passive → are published."]
     ] },
   { title: "Indirect questions",
     rule: "Indirect questions are more polite and formal. They start with phrases like <mark>Could you tell me…? / I wonder… / Do you know…?</mark> and use <b>statement word order</b> (subject + verb), with no <i>do/does/did</i>. Use <mark>if / whether</mark> for yes/no questions: <i>Could you tell me <b>whether the app stores</b> my data?</i>",
     qs: [
      ["Could you tell me where ___?", ["the server is located", "is the server located", "does the server locate"], 0, "Statement order: subject + verb."],
      ["I wonder ___ robots will replace teachers.", ["whether", "do", "that"], 0, "Yes/no indirect question → whether / if."],
      ["Do you know how much ___?", ["this drone costs", "does this drone cost", "costs this drone"], 0, "No 'does'; subject before verb."],
      ["Can you explain why ___ so popular?", ["automation has become", "has automation become", "did automation become"], 0, "Statement order in indirect questions."],
      ["I'd like to know ___ my data is deleted after a year.", ["if", "does", "what"], 0, "Yes/no question → if."],
      ["Which question is correct?", ["Do you know when the update will be released?", "Do you know when will the update be released?", "Do you know when the update will be released."], 0, "Statement order, and a question mark because the whole sentence is a question."]
     ] },
   { title: "Adverbs of quantity",
     rule: "Adverbs and quantifiers of amount: <mark>much / many</mark> (large), <mark>a lot of / lots of</mark> (large, informal), <mark>little / few</mark> (not enough, negative), <mark>a little / a few</mark> (some, positive), <mark>hardly any / barely</mark> (almost none). Use <i>many / few</i> with countable nouns and <i>much / little</i> with uncountable nouns.",
     qs: [
      ["There is ___ privacy left when every street has cameras.", ["little", "few", "many"], 0, "Privacy is uncountable; negative meaning → little."],
      ["Only ___ companies can afford their own satellites.", ["a few", "a little", "much"], 0, "Companies is countable; some → a few."],
      ["Automation saves ___ time in factories.", ["a lot of", "many", "few"], 0, "Time is uncountable; large amount → a lot of."],
      ["We have ___ information about the new robot. Can you send more?", ["hardly any", "many", "a few"], 0, "Almost none + uncountable → hardly any."],
      ["How ___ interruptions do you get during online lessons?", ["many", "much", "little"], 0, "Interruptions is countable → many."],
      ["I have ___ free time this week, so I can help you.", ["a little", "little", "few"], 0, "Some (positive meaning) + uncountable → a little."]
     ] }
  ],
  2: [
   { title: "Comparative adjectives",
     rule: "Short adjectives add <mark>-er</mark> (<i>cheaper, bigger, busier</i>). Long adjectives use <mark>more / less</mark> (<i>more crowded, less polluted</i>). Irregular: <i>good → better, bad → worse, far → further</i>. Make comparisons stronger with <mark>much / far / a lot</mark>, and weaker with <mark>slightly / a bit</mark>. Use <mark>the … the …</mark> for things that change together.",
     qs: [
      ["Traffic in the city centre is ___ than in the suburbs.", ["worse", "badder", "more bad"], 0, "'Bad' is irregular → worse."],
      ["Public transport is ___ more cost-effective than driving.", ["much", "very", "too"], 0, "Strengthen a comparative with much / far / a lot, not 'very'."],
      ["This metro line is ___ than the old one.", ["faster", "more fast", "fastest"], 0, "Short adjective → -er."],
      ["Megacities are becoming ___ crowded every year.", ["more and more", "most", "the more"], 0, "Gradual change → more and more."],
      ["The more people move to cities, the ___ infrastructure is needed.", ["more", "most", "much"], 0, "'The … the …' structure → the more."],
      ["The air in our town is ___ polluted than it was ten years ago.", ["less", "fewer", "lesser"], 0, "Long adjective, opposite of 'more' → less."]
     ] },
   { title: "Adverbial linkers",
     rule: "Linkers connect ideas across sentences: <mark>however / nevertheless</mark> (contrast), <mark>therefore / as a result / consequently</mark> (result), <mark>moreover / furthermore / in addition</mark> (adding), <mark>for instance / for example</mark> (example). At the start of a sentence they are followed by a comma.",
     qs: [
      ["Cities create jobs. ___, they also create pollution.", ["However", "Therefore", "For instance"], 0, "Contrast → However."],
      ["Many roads were built. ___, traffic got even worse.", ["Nevertheless", "Furthermore", "For example"], 0, "Unexpected contrast → Nevertheless."],
      ["The city added 200 electric buses. ___, air quality improved.", ["As a result", "However", "Moreover"], 0, "Result → As a result."],
      ["Green roofs reduce heat. ___, they provide homes for birds.", ["Moreover", "Therefore", "However"], 0, "Adding a point → Moreover."],
      ["Some cities are very dense. ___, Mumbai has over 20,000 people per square kilometre.", ["For instance", "Consequently", "Nevertheless"], 0, "Giving an example → For instance."],
      ["Rents are rising quickly. ___, many young people live with their parents.", ["Consequently", "Furthermore", "For example"], 0, "Result → Consequently."]
     ] },
   { title: "Sequencing adverbs",
     rule: "Sequencing adverbs show the order of steps or events: <mark>first / firstly, to begin with</mark> → <mark>then, next, after that, subsequently</mark> → <mark>finally, lastly, eventually</mark>. <i>Eventually</i> means 'after a long time or many problems'.",
     qs: [
      ["___, engineers study the land. Then they design the bridge.", ["First", "Finally", "Eventually"], 0, "The first step → First."],
      ["After years of delays, the tunnel was ___ opened.", ["eventually", "firstly", "next"], 0, "After a long time and problems → eventually."],
      ["Collect the data. ___, analyse it carefully.", ["Next", "Lastly", "To begin with"], 0, "A middle step → Next."],
      ["___, I want to thank everyone who helped with the project.", ["Finally", "To begin with", "Then"], 0, "The last point in a speech → Finally."],
      ["The plan was approved in May and building work ___ began in June.", ["subsequently", "firstly", "lastly"], 0, "'Subsequently' = after that (formal)."],
      ["___, let me explain why the city needs a new metro line.", ["To begin with", "Eventually", "Lastly"], 0, "Starting a presentation → To begin with."]
     ] }
  ]
 },
 vocab: {
  1: [["privacy", "the right to keep your personal life and information to yourself"], ["freedom", "the right to act, speak or think without limits"], ["automation", "using machines or computers to do work that people did"], ["cost-effective", "giving good results for the money spent"], ["interruptions", "things that stop an activity for a short time"], ["surveillance", "careful watching of people, often by cameras"], ["innovation", "a new idea, method or invention"], ["autonomous", "able to work or make decisions without human control"], ["breakthrough", "an important new discovery"], ["boundary", "a limit of what is possible or allowed"]],
  2: [["megacity", "a very large city with more than ten million people"], ["urbanisation", "the movement of people from the countryside to cities"], ["congestion", "too much traffic, causing slow movement"], ["pollution", "damage to air, water or land by harmful substances"], ["infrastructure", "basic systems a city needs, such as roads, power and water"], ["sustainable", "able to continue without harming the environment"], ["commute", "to travel regularly between home and work or school"], ["density", "how many people live in an area"], ["overcrowding", "too many people in one place"], ["resilience", "the ability to recover quickly from difficulties"]]
 },
 reading: {
  1: { title: "The Robot in the Classroom",
   text: [
    "In a pilot project at three secondary schools in the UAE, a small robot assistant helped teachers during science lessons. The robot answered basic questions, reminded students about deadlines and recorded which topics each student found difficult. If a student asked the same question twice, the robot notified the teacher.",
    "Teachers reported clear benefits. Lessons had fewer interruptions, and they spent less time repeating instructions. One chemistry teacher said she could finally give more attention to students who needed real help. The schools also found the robot cost-effective, because one device could support several classes.",
    "However, some parents raised concerns about privacy. The robot stored information about every student's questions and mistakes. Who could see this data? How long was it kept? The project leaders answered that the data was deleted at the end of each term and only teachers could access it.",
    "The project will be reviewed next year. Its leaders say the goal is not to replace teachers but to push the boundaries of what one teacher can do in a busy classroom."
   ],
   qs: [
    ["What is the passage mainly about?", ["A trial of robot assistants in schools", "How to build a robot", "Why parents dislike technology"], 0, "The text describes a pilot project and reactions to it."],
    ["What happened if a student asked the same question twice?", ["The robot notified the teacher", "The robot refused to answer", "The student lost marks"], 0, "Paragraph 1 — a zero conditional describing the rule."],
    ["Why did schools find the robot cost-effective?", ["One device could support several classes", "It was free", "It replaced teachers"], 0, "Paragraph 2."],
    ["Why are two questions included in paragraph 3?", ["To show the concerns parents had", "To test the reader", "To show the robot's answers"], 0, "They report the parents' privacy worries."],
    ["The word 'pilot' in paragraph 1 means…", ["a small trial before wider use", "a person who flies planes", "a permanent plan"], 0, "A test project in three schools."],
    ["What is the project's main goal according to its leaders?", ["To extend what one teacher can do", "To replace teachers", "To collect student data"], 0, "Last paragraph."]
   ] },
  2: { title: "Cooler Cities",
   text: [
    "By 2050, nearly seven out of ten people in the world will live in cities. Rapid urbanisation brings jobs and opportunities, but it also brings congestion, pollution and heat. Because concrete and asphalt absorb sunlight, city centres can be several degrees hotter than the countryside around them.",
    "Some cities are fighting back with creative ideas. In Singapore, buildings are covered with gardens that cool the air. In Medellín, Colombia, 'green corridors' of trees along busy roads have reduced temperatures in those streets by about two degrees. Closer to home, new districts in the Gulf are being designed with narrow shaded streets, like traditional neighbourhoods, so that people can walk comfortably.",
    "These solutions are not always cheap. Green walls need water and maintenance, and planting trees takes years to show results. Nevertheless, experts argue that the cost of doing nothing is far higher, in health problems, energy bills and lost productivity.",
    "The challenge, they say, is to think of infrastructure not only as roads and pipes, but also as trees, shade and open space."
   ],
   qs: [
    ["Why are city centres often hotter than the countryside?", ["Concrete and asphalt absorb sunlight", "There are more people breathing", "Cities are closer to the sun"], 0, "Paragraph 1."],
    ["What is the purpose of paragraph 2?", ["To give examples of solutions", "To describe problems", "To criticise Singapore"], 0, "It lists what cities are doing."],
    ["What did Medellín's green corridors achieve?", ["Lower temperatures of about two degrees", "Less traffic", "More jobs"], 0, "Paragraph 2."],
    ["Why are new Gulf districts designed with narrow shaded streets?", ["So people can walk comfortably", "To reduce building costs", "To stop cars entering"], 0, "Paragraph 2."],
    ["What does 'Nevertheless' introduce in paragraph 3?", ["An argument against the disadvantages", "Another disadvantage", "An example"], 0, "Despite the costs, experts say doing nothing costs more."],
    ["What new way of thinking about infrastructure is suggested?", ["Including trees, shade and open space", "Building more roads", "Using only underground pipes"], 0, "Last paragraph."]
   ] }
 },
 writing: {
  1: [
   { title: "Summary (4–5 sentences)",
     prompt: "Read 'The Robot in the Classroom' again. Summarise the main ideas in 4–5 sentences (60–100 words). Use your own words.",
     need: { min: 60, max: 100, links: ["however", "also", "as a result", "although", "therefore", "while"], extra: ["robot", "teachers", "privacy", "data"] },
     model: "Three UAE schools tested a robot assistant that answered simple questions, sent reminders and recorded students' difficulties. As a result, teachers had fewer interruptions and more time for students who needed help, and the robot was cost-effective. However, parents worried about the privacy of the data it collected. The project leaders said the data was deleted every term and only teachers could see it. The project will be reviewed next year, and its aim is to support teachers rather than replace them." },
   { title: "Comparative essay (220+ words)",
     prompt: "Compare learning from a human teacher with learning from an AI tutor. Write a comparative essay of at least 220 words. Discuss similarities and differences, and give your conclusion about which is more effective for secondary students.",
     need: { min: 220, max: 320, links: ["similarly", "whereas", "in contrast", "on the other hand", "both", "however", "therefore", "to conclude"], extra: ["teacher", "tutor", "students", "feedback", "learning"] },
     model: "Artificial intelligence is changing the way students learn, and many now use AI tutors alongside their teachers. Both can be valuable, but they offer very different experiences.\n\nThere are some important similarities. Both a human teacher and an AI tutor can explain ideas, set practice tasks and give feedback. Similarly, both can adapt to a student's level, for example by giving easier questions after a mistake.\n\nHowever, the differences are significant. An AI tutor is available at any time and never becomes tired, whereas a teacher has limited time and many students. In addition, an AI tutor can give instant feedback on hundreds of questions, which is far more cost-effective for practice.\n\nIn contrast, a human teacher understands emotions and motivation much better. A teacher can notice when a student is worried, encourage them, and connect learning to real life. Teachers also teach values, teamwork and communication, which are harder for a machine to develop.\n\nOn the other hand, AI tutors raise questions about privacy and accuracy. They collect data about every answer, and they sometimes give confident but incorrect explanations.\n\nTo conclude, an AI tutor is an excellent tool for extra practice, but it cannot replace a good teacher. Therefore, I believe the most effective approach for secondary students combines both, with the teacher guiding how the technology is used." }
  ],
  2: [
   { title: "Summary (4–5 sentences)",
     prompt: "Read 'Cooler Cities' again. Summarise the main ideas in 4–5 sentences (60–100 words).",
     need: { min: 60, max: 100, links: ["however", "for example", "also", "nevertheless", "because", "therefore"], extra: ["cities", "heat", "trees", "infrastructure"] },
     model: "As more people move to cities, urban areas face congestion, pollution and extra heat, because concrete and asphalt absorb sunlight. Several cities are responding creatively; for example, Singapore uses green buildings and Medellín has planted green corridors that lower temperatures. New Gulf districts also use shaded streets to make walking comfortable. Although these ideas need money and time, experts say doing nothing would cost more. Therefore, they argue that trees and shade should be seen as part of a city's infrastructure." },
   { title: "Comparative essay (220+ words)",
     prompt: "Compare living in a megacity with living in a small town. Write a comparative essay of at least 220 words. Discuss at least two similarities or differences, and give your conclusion about which is better for young people.",
     need: { min: 220, max: 320, links: ["similarly", "whereas", "in contrast", "on the other hand", "both", "however", "therefore", "to conclude"], extra: ["megacity", "town", "congestion", "opportunities", "community"] },
     model: "More young people than ever are moving to megacities, while others prefer the quieter life of a small town. Each option has clear advantages and disadvantages.\n\nThe biggest difference is opportunity. A megacity offers far more jobs, universities and cultural events, whereas a small town usually has fewer choices. For an ambitious graduate, this can make a huge difference to their career.\n\nIn contrast, daily life is often easier in a small town. Commutes are shorter, there is less congestion and pollution, and housing is much cheaper. In a megacity, a young worker may spend two hours a day travelling and a large part of their salary on rent.\n\nSocial life is also different. Megacities are diverse and exciting, but people can feel lonely among millions of strangers. On the other hand, small towns usually have a stronger sense of community, where neighbours know and help each other.\n\nThere are also similarities. Both places depend on good infrastructure, such as reliable transport, internet and healthcare. Similarly, both are changing quickly as technology allows more people to work remotely.\n\nTo conclude, a megacity is better for young people who want to build a career quickly, while a small town suits those who value calm and community. Therefore, I believe young people should start their careers in a big city, and choose later where they want to settle." }
  ]
 },
 examMaze: [
  { title: "Passage 1 · Vocabulary · Machines at work", focus: "Vocabulary",
    text: "In many factories, [1] has changed the way products are made. Robots work day and night without [2], which makes production more [3]. However, cameras that monitor workers raise questions about [4]. Some experts call this constant [5] a step too far.",
    gaps: [
     [["automation", "urbanisation", "density"], 0, "Using machines to do work → automation."],
     [["interruptions", "boundaries", "breakthroughs"], 0, "Things that stop an activity → interruptions."],
     [["cost-effective", "autonomous", "overcrowded"], 0, "Giving good results for the money → cost-effective."],
     [["privacy", "pollution", "commute"], 0, "The right to keep information to yourself → privacy."],
     [["surveillance", "innovation", "resilience"], 0, "Careful watching of people → surveillance."]
    ] },
  { title: "Passage 2 · Grammar · Smart homes", focus: "Grammar",
    text: "In a smart home, lights [1] automatically when you enter a room. Information about your habits [2] by sensors. Many people wonder [3] this data is safe. There is [4] doubt that smart homes save energy. [5], users should always read the privacy settings.",
    gaps: [
     [["switch on", "will switch on", "switched on"], 0, "Zero conditional (when + present, present) → switch on."],
     [["is collected", "collects", "is collecting"], 0, "Process, passive → is collected."],
     [["whether", "does", "is"], 0, "Indirect yes/no question → whether."],
     [["little", "few", "many"], 0, "Doubt is uncountable; almost none → little."],
     [["However", "For instance", "Firstly"], 0, "Contrast with the previous idea → However."]
    ] },
  { title: "Passage 3 · Vocabulary · Growing cities", focus: "Vocabulary",
    text: "Lagos is one of Africa's fastest-growing [1]. Rapid [2] has brought millions of people from rural areas. As a result, heavy [3] makes the daily [4] very long. The city is investing in roads, power and water, but its [5] struggles to keep up.",
    gaps: [
     [["megacities", "boundaries", "remedies"], 0, "Very large cities → megacities."],
     [["urbanisation", "automation", "surveillance"], 0, "Movement of people to cities → urbanisation."],
     [["congestion", "privacy", "freedom"], 0, "Too much traffic → congestion."],
     [["commute", "breakthrough", "density"], 0, "Regular travel to work → commute."],
     [["infrastructure", "innovation", "interruption"], 0, "Basic systems like roads and water → infrastructure."]
    ] },
  { title: "Passage 4 · Grammar · Building a metro", focus: "Grammar",
    text: "Building a metro line takes many years. [1], engineers study the city's traffic. [2], they design the routes and stations. A metro is much [3] than a road for moving large numbers of people. [4], it produces less pollution. After many challenges, the line is [5] opened to the public.",
    gaps: [
     [["First", "Finally", "Eventually"], 0, "The first step → First."],
     [["Next", "To begin with", "Lastly"], 0, "A middle step → Next."],
     [["more efficient", "efficienter", "most efficient"], 0, "Long adjective → more efficient."],
     [["Moreover", "However", "For instance"], 0, "Adding another advantage → Moreover."],
     [["eventually", "firstly", "next"], 0, "After a long time and difficulties → eventually."]
    ] }
 ],
 maze: [
  ["If you heat ice, it ___.", ["melts", "will melt", "melted"], 0],
  ["The right to keep your information to yourself is ___.", ["privacy", "density", "congestion"], 0],
  ["Thousands of parcels ___ by drones every day.", ["are delivered", "deliver", "are delivering"], 0],
  ["Could you tell me where ___?", ["the station is", "is the station", "does the station"], 0],
  ["Too much traffic is called ___.", ["congestion", "automation", "freedom"], 0],
  ["This road is ___ than the old one.", ["wider", "more wide", "widest"], 0],
  ["There are ___ green spaces in the city centre. We need more!", ["few", "little", "much"], 0],
  ["Cities create jobs. ___, they create pollution.", ["However", "Therefore", "Firstly"], 0],
  ["After years of work, the bridge was ___ finished.", ["eventually", "firstly", "next"], 0],
  ["Basic systems such as roads and water are ___.", ["infrastructure", "surveillance", "interruptions"], 0]
 ],
 mock: {
  intro: "EOT 1 style practice · Vocabulary and Grammar 20, Reading 40 (marked here); Writing 40 (checked with the model and your teacher).",
  vocab: { title: "Section 1 · Vocabulary (5 × 2 marks)",
   text: "Delivery drones are a new [1] in many cities. They are [2], which means they can fly without a pilot. Supporters say they are more [3] than delivery vans and reduce [4] on the roads. Critics, however, worry about noise and the loss of [5] when drones fly over homes with cameras.",
   gaps: [
    [["innovation", "density", "commute"], 0, "A new idea or invention → innovation."],
    [["autonomous", "overcrowded", "sustainable"], 0, "Able to work without human control → autonomous."],
    [["cost-effective", "resilient", "congested"], 0, "Good results for the money → cost-effective."],
    [["congestion", "privacy", "freedom"], 0, "Too much traffic → congestion."],
    [["privacy", "pollution", "urbanisation"], 0, "Right to keep personal life private → privacy."]
   ] },
  grammar: { title: "Section 2 · Grammar (5 × 2 marks)",
   text: "When more people [1] bicycles, the air becomes cleaner. In Copenhagen, bike lanes [2] every winter. Visitors often ask [3] so many people cycle in the cold. The answer is simple: cycling is [4] than driving in the city centre. [5], it is healthier.",
   gaps: [
    [["use", "will use", "used"], 0, "Zero conditional → present simple."],
    [["are cleared", "clear", "are clearing"], 0, "Regular process, passive → are cleared."],
    [["why", "why do", "why are"], 0, "Indirect question: 'why so many people cycle' (statement order)."],
    [["faster", "more fast", "fastest"], 0, "Short adjective comparative → faster."],
    [["Furthermore", "However", "Eventually"], 0, "Adding a point → Furthermore."]
   ] },
  r3a: { title: "Reading 3A (8 × 3 marks) · The Four-Day Week Experiment",
   text: [
    "In a recent trial, sixty companies in several countries tested a four-day working week. Employees worked 32 hours instead of 40 but received the same salary. The aim was to find out whether people could be just as productive in less time.",
    "Most companies reported positive results. Productivity stayed the same or rose slightly, and the number of sick days fell by around a third. Employees said they had more time for family, exercise and study, and fewer felt exhausted at the end of the week.",
    "However, the experiment was more difficult for some sectors. Hospitals and shops, which must stay open every day, needed more staff to cover the missing hours, and this increased their costs. A few managers also reported that meetings became shorter but more stressful.",
    "Researchers say the results are encouraging but not final. The trial lasted only six months, and the companies volunteered to take part, so they may have been more willing than average to make it work."
   ],
   qs: [
    ["What was the aim of the experiment?", ["To see if people could be equally productive in less time", "To reduce salaries", "To close companies on Fridays forever"], 0, "Paragraph 1."],
    ["How many hours did employees work in the trial?", ["32", "40", "36"], 0, "Paragraph 1."],
    ["What happened to sick days?", ["They fell by about a third", "They doubled", "They stayed the same"], 0, "Paragraph 2."],
    ["Which sectors found the experiment harder?", ["Hospitals and shops", "Technology and banking", "Schools and universities"], 0, "Paragraph 3."],
    ["Why did costs rise for some companies?", ["They needed more staff to cover hours", "Salaries were increased", "Meetings became longer"], 0, "Paragraph 3."],
    ["The word 'exhausted' is closest in meaning to…", ["extremely tired", "bored", "excited"], 0, "Fewer felt very tired at the end of the week."],
    ["Why are the researchers careful about the results?", ["The trial was short and companies volunteered", "The results were negative", "Employees did not answer questions"], 0, "Paragraph 4 gives two limitations."],
    ["What is the writer's overall view?", ["Results are promising but more research is needed", "The four-day week should be banned", "Every company should change immediately"], 0, "'Encouraging but not final.'"]
   ] },
  r3b: { title: "Reading 3B (8 × 2 marks) · Life in a Vertical Village",
   text: [
    "In some of the world's densest cities, architects are designing 'vertical villages': tall buildings that combine homes, offices, shops, schools and parks. Residents can live, work and relax without leaving the building.",
    "Supporters say vertical villages reduce commutes and congestion. If people work and shop in the same building, they make fewer car journeys. Shared gardens on different floors also give residents space to meet their neighbours.",
    "Critics are less sure. They point out that tall buildings are expensive to build and maintain, and that residents may feel cut off from the rest of the city. Others ask what happens in an emergency, such as a fire or power cut.",
    "The first vertical villages have only recently opened, so it is too early to judge them fully. Their success will depend on whether they become real communities or simply very tall apartment blocks."
   ],
   qs: [
    ["What is a 'vertical village'?", ["A tall building combining homes, work and leisure", "A village in the mountains", "A small town with tall trees"], 0, "Paragraph 1."],
    ["According to supporters, how do they reduce congestion?", ["People make fewer car journeys", "Cars are banned", "Roads are built inside"], 0, "Paragraph 2."],
    ["What is the purpose of the shared gardens?", ["To help residents meet neighbours", "To grow food for sale", "To reduce noise"], 0, "Paragraph 2."],
    ["What is one criticism mentioned?", ["Residents may feel cut off from the city", "They are too small", "They have no shops"], 0, "Paragraph 3."],
    ["Which emergency is mentioned?", ["A power cut", "A flood", "An earthquake"], 0, "Paragraph 3 mentions fire and power cuts."],
    ["The word 'densest' means…", ["having the most people in an area", "the hottest", "the oldest"], 0, "Density = how many people live in an area."],
    ["Why is it too early to judge vertical villages?", ["The first ones have only recently opened", "Nobody lives in them", "They are still being designed"], 0, "Paragraph 4."],
    ["What will their success depend on?", ["Whether they become real communities", "How tall they are", "How cheap the apartments are"], 0, "Last sentence."]
   ] },
  summary: { title: "Writing 1.1 · Summary, 4–5 sentences (15 marks)",
   prompt: "Summarise 'The Four-Day Week Experiment' (Reading 3A) in 4–5 sentences. Use your own words.",
   need: { min: 60, max: 100, links: ["however", "also", "although", "therefore", "while", "as a result"], extra: ["companies", "productivity", "hours", "trial"] },
   model: "In a recent trial, sixty companies tested a four-day week in which staff worked fewer hours for the same pay. Most found that productivity stayed the same or improved, and employees took fewer sick days and felt less tired. However, hospitals and shops found it harder because they needed extra staff, which increased costs. Researchers also warn that the trial was short and involved only volunteer companies. Therefore, the results are promising but not yet conclusive." },
  essay: { title: "Writing 1.2 · Comparative essay (25 marks)",
   prompt: "Compare working from home with working in an office. Write a comparative essay of at least 220 words. In your essay: (1) discuss similarities and differences, (2) use comparison language, (3) give a clear conclusion.",
   need: { min: 220, max: 320, links: ["similarly", "whereas", "in contrast", "on the other hand", "both", "however", "therefore", "to conclude"], extra: ["home", "office", "productivity", "commute", "colleagues"] },
   model: "Since the pandemic, millions of people have experienced both working from home and working in an office. Each option affects productivity, wellbeing and teamwork in different ways.\n\nOne clear difference is time. Working from home removes the daily commute, whereas office workers in large cities may spend hours in congestion every week. As a result, home workers often have more time for family and exercise.\n\nIn contrast, the office is usually better for teamwork. Colleagues can solve problems quickly in person, and new employees learn by watching experienced staff. At home, communication depends on messages and video calls, which can lead to misunderstandings.\n\nFocus is another important factor. Some people concentrate better at home with fewer interruptions. On the other hand, others find home distracting because of noise, family responsibilities or the temptation to relax.\n\nThere are also similarities. Both settings require good organisation and reliable technology. Similarly, in both cases productivity depends more on clear goals, trust and good management than on location. Neither option works well if employees do not know what is expected of them.\n\nTo conclude, working from home is better for individual, focused tasks, while the office is better for collaboration and learning. Therefore, I believe a hybrid model, with some days at home and some in the office, offers the best balance for most workers." }
 }
};

// ---- Extra practice: Grade 11 Advanced & Grade 12 General ----
SET_11A12G.grammar[1].push({ title: "Mixed review · Money… Talks!",
 rule: "This test mixes all the Chapter 1 grammar: <mark>verb patterns</mark>, <mark>present simple passive</mark>, <mark>present continuous passive</mark> and <mark>adverbs of degree</mark>. Read the whole sentence before you choose.",
 qs: [
  ["Most students can't afford ___ their own flat.", ["to rent", "renting", "rent"], 0, "afford + to-infinitive."],
  ["Interest ___ to savings accounts every month.", ["is added", "adds", "is adding"], 0, "Regular process, passive → is added."],
  ["Sorry, your card ___ right now. Please wait.", ["is being checked", "is checked", "checks"], 0, "Happening now + passive → is being checked."],
  ["The bank made us ___ two forms of ID.", ["show", "to show", "showing"], 0, "make + object + bare infinitive."],
  ["That laptop is ___ expensive for a student budget.", ["too", "enough", "slightly enough"], 0, "too + adjective = more than acceptable."],
  ["We should avoid ___ money on things we don't need.", ["wasting", "to waste", "waste"], 0, "avoid + -ing."],
  ["New coins ___ by the Central Bank this year.", ["are being introduced", "are introducing", "introduce"], 0, "Temporary process now, passive → are being introduced."],
  ["Is the course cheap ___ for everyone to join?", ["enough", "too", "very"], 0, "adjective + enough."]
 ] });
SET_11A12G.grammar[2].push({ title: "Mixed review · Nail That Job!",
 rule: "This test mixes all the Chapter 2 grammar: <mark>non-defining relative clauses</mark>, <mark>reported speech</mark> and <mark>subordinating conjunctions</mark>.",
 qs: [
  ["My cousin, ___ works as a pilot, flies to London every week.", ["who", "that", "which"], 0, "Non-defining clause about a person → who."],
  ["\"I have finished the report.\" → She said she ___ the report.", ["had finished", "has finished", "finished"], 0, "Present perfect → past perfect."],
  ["___ he had little experience, the company hired him.", ["Although", "Because", "So that"], 0, "Contrast → Although."],
  ["The office, ___ is next to the metro, is easy to reach.", ["which", "that", "who"], 0, "Non-defining clause about a thing → which."],
  ["The manager asked me ___ I could start on Sunday.", ["if", "that", "do"], 0, "Reported yes/no question → if / whether."],
  ["Save your work often ___ you don't lose it.", ["so that", "unless", "although"], 0, "Purpose → so that."],
  ["\"We will call you.\" → They said they ___ call me.", ["would", "will", "can"], 0, "will → would."],
  ["Mr. Khalid, ___ son is in my class, is an engineer.", ["whose", "who's", "who"], 0, "Possession → whose."]
 ] });

SET_11A12G.reading[1] = [SET_11A12G.reading[1], { title: "Should Parents Pay for Chores?",
 text: [
  "In many homes, children earn pocket money by washing the car, tidying their rooms or helping with the shopping. Supporters of this system say it teaches an important lesson: money is earned through effort. A family counsellor in Dubai explained, \"When children connect work with income, they spend more carefully.\"",
  "Not everyone agrees. Some parents argue that household tasks are part of family life and should not be paid. \"I don't get paid for cooking dinner,\" one mother said. \"Why should my son get paid for making his bed?\" These parents give a fixed allowance instead, and expect help at home without extra money.",
  "A third group mixes both ideas. Basic jobs, such as keeping your room tidy, are expected and unpaid. Bigger jobs, such as washing the car or helping in a family business, earn money. Researchers who studied 400 families found that children in this group were the most likely to save regularly.",
  "Whatever system a family chooses, experts agree on one point: children need to make small money decisions while they are young. Making a mistake with 20 dirhams at the age of ten is much cheaper than making the same mistake with a credit card at twenty."
 ],
 qs: [
  ["[Main idea] What is the passage mainly about?", ["Different ways families handle pocket money and chores", "How to wash a car", "Why children should not help at home"], 0, "The text compares three approaches."],
  ["[Detail] What do supporters of paid chores believe children learn?", ["Money is earned through effort", "Cooking is important", "Credit cards are dangerous"], 0, "Paragraph 1."],
  ["[Purpose] Why does the writer quote the mother in paragraph 2?", ["To show an opposing view", "To give a recipe", "To support paid chores"], 0, "She argues against paying for chores."],
  ["[Detail] Which children were most likely to save regularly?", ["Those with unpaid basic jobs and paid bigger jobs", "Those paid for every job", "Those with no allowance"], 0, "Paragraph 3: the mixed group."],
  ["[Vocabulary] 'allowance' in paragraph 2 is closest in meaning to…", ["money given regularly", "a type of chore", "a bank loan"], 0, "A fixed amount of pocket money."],
  ["[Inference] What does the last sentence suggest?", ["Early small mistakes help avoid bigger ones later", "Children should have credit cards", "20 dirhams is too much pocket money"], 0, "Learning young is cheaper."]
 ] }];
SET_11A12G.reading[2] = [SET_11A12G.reading[2], { title: "From Intern to Manager",
 text: [
  "Six years ago, Latifa Al Suwaidi began a three-month internship at a hotel in Abu Dhabi. She was nineteen, nervous and had never worked anywhere before. Her first task was to answer guests' emails, which she found surprisingly difficult. \"I had to be polite, clear and fast at the same time,\" she remembers.",
  "Instead of only doing what she was told, Latifa asked questions. She spent her breaks watching how the reception team solved problems and offered to help in other departments when they were busy. At the end of her internship, the manager offered her a part-time job while she finished university.",
  "Today Latifa manages a team of twelve. When she interviews applicants, she does not focus only on their CVs. \"I look for curiosity,\" she says. \"Skills can be learned, but if someone never asks why, they will stop growing.\"",
  "Her advice to students is practical: treat every internship like a long interview, keep a list of what you learn each week, and never be afraid to say, 'I don't know yet, but I'll find out.'"
 ],
 qs: [
  ["[Main idea] What is the text mainly about?", ["How an intern's attitude helped her career grow", "How to manage a hotel", "Why emails are difficult"], 0, "It follows Latifa's progress."],
  ["[Detail] Why was answering emails difficult for Latifa?", ["She had to be polite, clear and fast", "Her English was weak", "The computer was slow"], 0, "Paragraph 1."],
  ["[Detail] What did Latifa do during her breaks?", ["Watched how the reception team solved problems", "Studied for exams", "Answered more emails"], 0, "Paragraph 2."],
  ["[Inference] Why was she probably offered a part-time job?", ["She showed interest and helped beyond her tasks", "Nobody else applied", "Her family owned the hotel"], 0, "Her extra effort impressed the manager."],
  ["[Vocabulary] 'curiosity' in paragraph 3 means…", ["a strong wish to learn and know", "being on time", "good handwriting"], 0, "She links it to asking 'why'."],
  ["[Purpose] What is the purpose of the last paragraph?", ["To give advice to students", "To describe the hotel", "To criticise interns"], 0, "It lists practical tips."]
 ] }];

SET_11A12G.writing[1].push({ title: "Writing skills quiz", quiz: [
  ["Which is the best topic sentence for a paragraph about saving money?", ["Saving a small amount every month can make a big difference over time.", "My brother has a blue wallet.", "Banks open at 8 a.m."], 0, "A topic sentence states the main idea of the paragraph."],
  ["Choose the best linker: 'Part-time jobs build skills. ___, they help students understand money.'", ["In addition", "However", "For example"], 0, "Adding a second advantage → In addition."],
  ["Which sentence does NOT belong in a paragraph about budgeting?", ["My favourite colour is green.", "A budget shows where your money goes.", "Writing down every expense helps you plan."], 0, "It is off-topic."],
  ["Which is the strongest conclusion for an opinion essay?", ["In conclusion, learning to manage money early prepares young people for adult life.", "That is all I want to say.", "Money is money."], 0, "It restates the opinion clearly."],
  ["Which sentence is an opinion, not a fact?", ["Students should learn about loans at school.", "The bank charges a 2% fee.", "The course lasts six weeks."], 0, "'Should' signals an opinion."],
  ["In a summary, you should…", ["use your own words and include only main ideas", "copy long sentences from the text", "add your personal opinion"], 0, "Summaries paraphrase main ideas without opinion."]
 ] });
SET_11A12G.writing[2].push({ title: "Writing skills quiz", quiz: [
  ["Which is the clearest thesis statement?", ["In my opinion, internships are more valuable than a perfect grade average.", "Internships exist in many countries.", "Some people like jobs."], 0, "A thesis gives a clear, arguable position."],
  ["Choose the best formal opening for a job application email.", ["Dear Ms. Al Ali,", "Hey there!", "Hi buddy,"], 0, "Formal emails start with Dear + title + name."],
  ["Which phrase introduces an opposing view?", ["On the other hand, some people argue that…", "Firstly, I believe…", "In conclusion,…"], 0, "It signals the other side of the argument."],
  ["Which is the best paraphrase of 'Employers value adaptability'?", ["Companies appreciate workers who can adjust to change.", "Employers value adaptability a lot.", "Workers must never change."], 0, "Same meaning, different words."],
  ["Which sentence is the best supporting example for 'Communication skills matter at work'?", ["For example, a nurse must explain treatment clearly to patients.", "Communication is a long word.", "I like talking to my friends at weekends."], 0, "A specific example connected to work."],
  ["Which ending is best for a formal email?", ["I look forward to hearing from you. Kind regards,", "See ya!", "Bye for now :)"], 0, "Formal closing phrase + sign-off."]
 ] });

SET_11A12G.examMaze.push(
 { title: "Passage 5 · Mixed · The scholarship", focus: "Mixed",
   text: "Noura dreamed of studying engineering abroad, but her family could not [1] the fees. Her teacher, [2] had studied in Canada, encouraged her to apply for a [3]. The application [4] by a panel of professors every spring. Noura managed [5] all the documents before the deadline. Two months later, she was told that she [6] been selected.",
   gaps: [
    [["afford", "persuade", "withdraw"], 0, "afford = have enough money for."],
    [["who", "which", "that"], 0, "Non-defining clause about a person → who."],
    [["scholarship", "student loan", "withdrawal"], 0, "Money given to pay for study → scholarship."],
    [["is reviewed", "reviews", "is reviewing"], 0, "Regular process, passive → is reviewed."],
    [["to send", "sending", "send"], 0, "manage + to-infinitive."],
    [["had", "has", "have"], 0, "Reported speech: has been → had been."]
   ] },
 { title: "Passage 6 · Mixed · First day at work", focus: "Mixed",
   text: "On his first day, Saeed felt [1] nervous, but his manager was kind. She told him that the team [2] a new website that month. [3] he had no experience in design, he offered to help with testing. The project, [4] was finished in June, became the company's most popular service. His manager later said he was [5] and adapted quickly. Today, Saeed advises interns [6] questions from day one.",
   gaps: [
    [["slightly", "enough", "too much"], 0, "slightly + adjective = a little."],
    [["was building", "is building", "builds"], 0, "Reported speech: is building → was building."],
    [["Although", "Because", "So that"], 0, "Contrast → Although."],
    [["which", "that", "who"], 0, "Non-defining clause about a thing → which."],
    [["flexible", "rigid", "broke"], 0, "Adapted quickly → flexible."],
    [["to ask", "asking", "ask"], 0, "advise + object + to-infinitive."]
   ] });

// ---- Extra practice: Grade 11 General (with Grade 10 Advanced) ----
SET_10A11G.grammar[1].push({ title: "Mixed review · A Picture of Health",
 rule: "This test mixes all the Chapter 1 grammar: <mark>present simple passive</mark>, <mark>present perfect continuous</mark> and <mark>question tags</mark>.",
 qs: [
  ["Vitamins ___ in many fruits and vegetables.", ["are found", "find", "are finding"], 0, "General fact, passive → are found."],
  ["She ___ for the marathon since January.", ["has been training", "is training", "trains"], 0, "Since + continuing activity → has been training."],
  ["You don't eat fast food, ___?", ["do you", "don't you", "are you"], 0, "Negative sentence → positive tag."],
  ["How long ___ you been feeling dizzy?", ["have", "are", "did"], 0, "How long + have + been + -ing."],
  ["Patients ___ not ___ to use their phones in this room.", ["are / allowed", "do / allow", "are / allowing"], 0, "Passive negative: are not allowed."],
  ["He's been sleeping badly, ___?", ["hasn't he", "isn't he", "doesn't he"], 0, "He's been = he has been → hasn't he."],
  ["Blood tests ___ before breakfast.", ["are taken", "take", "are taking"], 0, "Regular process, passive → are taken."],
  ["My eyes hurt because I ___ at the screen all day.", ["have been looking", "looked", "am looking"], 0, "Recent activity with a result now → present perfect continuous."]
 ] });
SET_10A11G.grammar[2].push({ title: "Mixed review · Infotainment",
 rule: "This test mixes all the Chapter 2 grammar: <mark>participle clauses</mark>, <mark>demonstratives</mark>, <mark>subordinating conjunctions</mark> and <mark>adverbs of degree</mark>.",
 qs: [
  ["___ by a famous footballer, the advert was very popular.", ["Presented", "Presenting", "Present"], 0, "The advert was presented → past participle."],
  ["Many apps collect our data. ___ worries privacy experts.", ["This", "These", "Those"], 0, "Refers back to the whole idea → This."],
  ["___ the slogan is short, everyone remembers it.", ["Because", "Although", "Unless"], 0, "Reason → Because."],
  ["The video was ___ long, so most people stopped watching.", ["too", "enough", "slightly enough"], 0, "too + adjective."],
  ["___ online, she found a cheaper price.", ["Searching", "Searched", "Search"], 0, "She was searching → -ing clause."],
  ["Can you see ___ posters on the far wall?", ["those", "these", "this"], 0, "Plural and far → those."],
  ["Don't share a news story ___ you have checked the source.", ["unless", "because", "so that"], 0, "unless = if … not."],
  ["The new app is ___ useful for students. I use it daily.", ["really", "enough", "too much"], 0, "really + adjective."]
 ] });

SET_10A11G.reading[1] = [SET_10A11G.reading[1], { title: "Sleep: The Free Medicine",
 text: [
  "Teenagers need between eight and ten hours of sleep a night, but surveys suggest that many get fewer than seven. The reasons are familiar: homework, social media and late-night gaming. Yet sleep is not wasted time. While we sleep, the brain stores what we learned during the day and the body repairs muscles.",
  "When teenagers do not sleep enough, the symptoms appear quickly. They find it harder to concentrate, feel more irritable and are more likely to catch colds. Some studies have also linked poor sleep with lower exam results.",
  "Doctors recommend a few simple habits. Go to bed at a similar time every night, even at weekends. Switch off screens at least an hour before bed, because their light tells the brain it is still daytime. Avoid energy drinks after lunch, and keep the bedroom cool and dark.",
  "\"Sleep is the cheapest medicine there is,\" says a school nurse in Abu Dhabi. \"It has no side effects and no prescription is needed. The only cost is a little discipline.\""
 ],
 qs: [
  ["[Main idea] What is the main message of the text?", ["Good sleep is important and easy to improve", "Teenagers should stop doing homework", "Energy drinks help you sleep"], 0, "The text explains why sleep matters and how to improve it."],
  ["[Detail] What does the brain do during sleep?", ["Stores what we learned", "Stops working completely", "Makes us hungry"], 0, "Paragraph 1."],
  ["[Detail] Which is NOT a symptom mentioned?", ["Headaches", "Trouble concentrating", "Catching colds"], 0, "Headaches are not listed."],
  ["[Detail] Why should screens be switched off before bed?", ["Their light tells the brain it is daytime", "They use too much electricity", "They are too loud"], 0, "Paragraph 3."],
  ["[Vocabulary] 'irritable' in paragraph 2 means…", ["easily annoyed", "very hungry", "sleepy"], 0, "A symptom of poor sleep: getting annoyed easily."],
  ["[Purpose] Why does the nurse call sleep 'the cheapest medicine'?", ["It helps health and costs nothing", "Sleeping pills are cheap", "Doctors sell sleep"], 0, "No side effects, no prescription, no money."]
 ] }];
SET_10A11G.reading[2] = [SET_10A11G.reading[2], { title: "The Influencer Who Said No",
 text: [
  "Fatma runs a cooking channel with 300,000 followers. Last year, a company offered her a large payment to advertise a 'fat-burning' drink. The message was simple: drink it every morning and lose weight without exercise. Fatma said no.",
  "\"I read the ingredients and checked with a dietitian,\" she explains. \"There was no evidence that it worked. My followers trust me. If I promote something dishonest, I lose that trust, and that is worth more than any payment.\"",
  "Not all influencers make the same choice. A study of sponsored posts found that many did not clearly say they had been paid. In several countries, advertising rules now require influencers to label paid content with words such as 'Ad' or 'Sponsored'.",
  "Fatma still works with brands, but only with products she uses herself. Her advice to young creators is to think long term: \"Your audience will follow you for years if you are honest. One misleading advert can end that in a day.\""
 ],
 qs: [
  ["[Main idea] What is the text mainly about?", ["An influencer who refused a misleading advert", "How to make a cooking video", "How to lose weight quickly"], 0, "The text centres on Fatma's decision."],
  ["[Detail] What did the drink promise?", ["Weight loss without exercise", "Better sleep", "More followers"], 0, "Paragraph 1."],
  ["[Detail] What did Fatma do before deciding?", ["Read the ingredients and asked a dietitian", "Tried the drink for a month", "Asked her followers"], 0, "Paragraph 2."],
  ["[Inference] Why does Fatma value trust so much?", ["Her followers' trust keeps her channel successful", "She does not need money", "The company asked her to"], 0, "She says trust is worth more than payment."],
  ["[Detail] What do some advertising rules now require?", ["Labels such as 'Ad' or 'Sponsored'", "No adverts at all", "Only food adverts"], 0, "Paragraph 3."],
  ["[Vocabulary] 'misleading' in the last paragraph means…", ["giving a false idea", "very funny", "long and boring"], 0, "An advert that tricks people."]
 ] }];

SET_10A11G.writing[1].push({ title: "Writing skills quiz", quiz: [
  ["Which is the best topic sentence for a paragraph about exercise?", ["Regular exercise improves both physical and mental health.", "I have a red bicycle.", "The gym is on Sheikh Zayed Road."], 0, "It states the paragraph's main idea."],
  ["Choose the best linker: 'Fast food is cheap. ___, it is often unhealthy.'", ["However", "Moreover", "For example"], 0, "Contrast → However."],
  ["Which sentence does NOT belong in a paragraph about sleep?", ["My uncle drives a taxi.", "Screens before bed reduce sleep quality.", "Teenagers need eight to ten hours of sleep."], 0, "Off-topic."],
  ["A summary of 3–4 sentences should…", ["give only the main ideas in your own words", "include every example from the text", "start with your opinion"], 0, "Main ideas, own words, no opinion."],
  ["Which is the best example to support 'Health adverts can be misleading'?", ["For example, one tea claimed to cure many illnesses without any evidence.", "For example, I watch TV every day.", "For example, adverts are colourful."], 0, "Specific and relevant."],
  ["Which conclusion fits an essay against unapproved health adverts?", ["In conclusion, only adverts approved by doctors should be allowed.", "In conclusion, I like adverts with music.", "In conclusion, tea is tasty."], 0, "It restates the essay's position."]
 ] });
SET_10A11G.writing[2].push({ title: "Writing skills quiz", quiz: [
  ["Which is the clearest opinion statement?", ["I believe students should switch off notifications while studying.", "Phones have screens.", "Some people have phones."], 0, "It gives a clear position."],
  ["Choose the best linker: 'Adverts use catchy songs. ___, they repeat slogans many times.'", ["In addition", "However", "Unless"], 0, "Adding a point → In addition."],
  ["Which sentence is a FACT?", ["The app has 50 million users.", "The app is the best in the world.", "Everyone should download the app."], 0, "It can be checked."],
  ["Which phrase introduces an opposing view?", ["Some people argue that…", "To sum up,…", "Firstly,…"], 0, "It presents the other side."],
  ["Which is the best paraphrase of 'The slogan is memorable'?", ["The slogan is easy to remember.", "The slogan is memorable and catchy.", "The slogan is forgotten."], 0, "Same meaning, different words."],
  ["How many words should your opinion essay have?", ["At least 170", "Exactly 50", "About 20"], 0, "Grade 11 General essay: at least 170 words."]
 ] });

SET_10A11G.examMaze.push(
 { title: "Passage 5 · Mixed · The health app", focus: "Mixed",
   text: "Many students now use a health app on their phones. It [1] by thousands of people every day. [2] steps and sleep, the app gives simple advice. My sister [3] it for two months, and she says she feels [4] healthier. However, doctors warn that apps cannot give a [5]. If you have worrying [6], you should still see a doctor.",
   gaps: [
    [["is used", "uses", "is using"], 0, "Passive present simple → is used."],
    [["Tracking", "Tracked", "Track"], 0, "The app tracks → -ing clause (active)."],
    [["has been using", "is using", "uses"], 0, "For two months, still continuing → has been using."],
    [["much", "enough", "too"], 0, "much + comparative (healthier)."],
    [["diagnosis", "slogan", "commercial"], 0, "A doctor's decision about an illness → diagnosis."],
    [["symptoms", "sponsors", "slogans"], 0, "Signs of illness → symptoms."]
   ] },
 { title: "Passage 6 · Mixed · Behind the advert", focus: "Mixed",
   text: "The new phone advert is very [1]. Everyone at school repeats its [2]. [3] in only one day, it cost less than people think. The company chose teenagers as its [4] audience. [5] is why the music is so modern. Still, some viewers say it is [6] because it hides the real price.",
   gaps: [
    [["memorable", "fraudulent", "dishonest"], 0, "Easy to remember → memorable."],
    [["slogan", "syndrome", "diagnosis"], 0, "Short advertising phrase → slogan."],
    [["Filmed", "Filming", "Film"], 0, "The advert was filmed → past participle."],
    [["target", "symptom", "remedy"], 0, "target audience = the group an advert is for."],
    [["That", "These", "Those"], 0, "Refers back to the whole idea → That is why."],
    [["misleading", "memorable", "credible"], 0, "Hiding the price gives a false idea → misleading."]
   ] });

// ---- Extra practice: Grade 12 Advanced ----
SET_12A.grammar[1].push({ title: "Mixed review · Pushing Boundaries",
 rule: "This test mixes all the Unit 1 grammar: <mark>zero conditional</mark>, <mark>present simple passive</mark>, <mark>indirect questions</mark> and <mark>adverbs of quantity</mark>.",
 qs: [
  ["If a robot ___ an obstacle, it stops automatically.", ["detects", "will detect", "detected"], 0, "Zero conditional → present simple."],
  ["Most smartphones ___ in Asia.", ["are made", "make", "are making"], 0, "General fact, passive → are made."],
  ["Could you tell me how ___?", ["this app works", "does this app work", "works this app"], 0, "Indirect question → statement order."],
  ["There are ___ jobs that robots cannot do yet.", ["many", "much", "little"], 0, "Jobs is countable, large number → many."],
  ["When you share your location, apps ___ where you are.", ["know", "will know", "knew"], 0, "Zero conditional with when → present simple."],
  ["I wonder ___ driverless cars are safe in sandstorms.", ["whether", "do", "that"], 0, "Yes/no indirect question → whether."],
  ["We have ___ time before the deadline, so let's hurry.", ["little", "few", "many"], 0, "Time is uncountable; not enough → little."],
  ["Your face ___ by the camera before the gate opens.", ["is scanned", "scans", "is scanning"], 0, "Process, passive → is scanned."]
 ] });
SET_12A.grammar[2].push({ title: "Mixed review · Rise to the Challenge!",
 rule: "This test mixes all the Unit 2 grammar: <mark>comparative adjectives</mark>, <mark>adverbial linkers</mark> and <mark>sequencing adverbs</mark>.",
 qs: [
  ["The new tram is ___ than the bus.", ["quieter", "more quieter", "quietest"], 0, "Short adjective → -er."],
  ["Traffic got worse. ___, the city built a metro.", ["As a result", "However", "For instance"], 0, "Result → As a result."],
  ["___, the planners surveyed residents. Then they drew the map.", ["First", "Finally", "Eventually"], 0, "First step → First."],
  ["Living in the suburbs is ___ cheaper than in the centre.", ["far", "very", "too"], 0, "Strengthen comparatives with far/much."],
  ["Green roofs cool buildings. ___, they reduce flooding.", ["Moreover", "However", "Consequently"], 0, "Adding a point → Moreover."],
  ["After years of debate, the park was ___ built.", ["eventually", "firstly", "next"], 0, "After a long time → eventually."],
  ["The more trees we plant, the ___ the air becomes.", ["cleaner", "cleanest", "more clean"], 0, "the + comparative, the + comparative."],
  ["The plan was expensive. ___, most residents supported it.", ["Nevertheless", "Therefore", "For example"], 0, "Unexpected contrast → Nevertheless."]
 ] });

SET_12A.reading[1] = [SET_12A.reading[1], { title: "Who Owns Your Face?",
 text: [
  "Facial recognition cameras can now identify a person in a crowd in less than a second. Airports use them to speed up passport checks, and some shops use them to recognise regular customers. Supporters say the technology saves time and helps police find missing people.",
  "Critics, however, ask a difficult question: who owns your face? Unlike a password, you cannot change your face if the data is stolen. Privacy groups also warn that people may behave less freely if they know they are always being watched.",
  "Some cities have responded with clear rules. Cameras may be used at borders and in police investigations, but not for advertising. Data must be deleted after a fixed period, and people must be told when a camera is recording.",
  "Experts believe the debate is not about stopping innovation, but about setting boundaries. As one researcher put it, \"The question is not whether the technology works. It is whether we have agreed how it should be used.\""
 ],
 qs: [
  ["[Main idea] What is the text mainly about?", ["The benefits and privacy concerns of facial recognition", "How to build a camera", "Why airports are slow"], 0, "Both sides are presented."],
  ["[Detail] Which is a benefit mentioned by supporters?", ["Helping police find missing people", "Cheaper phones", "Better photos"], 0, "Paragraph 1."],
  ["[Inference] Why is a stolen face scan worse than a stolen password?", ["You cannot change your face", "Faces are more expensive", "Passwords are longer"], 0, "Paragraph 2."],
  ["[Detail] What are cameras NOT allowed for in some cities?", ["Advertising", "Border checks", "Police investigations"], 0, "Paragraph 3."],
  ["[Vocabulary] 'boundaries' in paragraph 4 means…", ["limits or rules", "new inventions", "city walls"], 0, "Setting limits on how technology is used."],
  ["[Purpose] Why does the writer quote the researcher at the end?", ["To summarise the central issue", "To advertise cameras", "To disagree with all rules"], 0, "The quote sums up the debate."]
 ] }];
SET_12A.reading[2] = [SET_12A.reading[2], { title: "The City That Learned to Walk",
 text: [
  "Twenty years ago, the centre of the imaginary city of Rivermouth was full of congestion. Cars filled every street, and the air quality was among the worst in the region. Walking was unpleasant and, in summer, almost impossible.",
  "The city's plan was simple but bold. First, it closed three central streets to cars and planted shade trees along them. Next, it built a tram line connecting the suburbs to the centre. Finally, it offered small shops lower rents if they opened on the new pedestrian streets.",
  "The changes were not popular at first. Shop owners feared that customers who drove would stop coming. However, within two years, the number of visitors to the centre had risen by forty percent, and many shops reported higher sales than before.",
  "Rivermouth is not a perfect city. Rents have risen, and some long-time residents can no longer afford to live in the centre. Nevertheless, planners from other cities now visit to learn how a car-dependent centre became a place where people choose to walk."
 ],
 qs: [
  ["[Main idea] What is the text mainly about?", ["How a city centre was changed to favour walking", "The history of trams", "Why rents always rise"], 0, "It describes the city's transformation."],
  ["[Detail] What was the FIRST step in the plan?", ["Closing three central streets to cars", "Building a tram line", "Lowering shop rents"], 0, "Paragraph 2: First…"],
  ["[Detail] Why were shop owners worried at first?", ["They feared losing customers who drove", "They disliked trees", "Their rents increased"], 0, "Paragraph 3."],
  ["[Detail] What happened to visitor numbers within two years?", ["They rose by forty percent", "They fell sharply", "They stayed the same"], 0, "Paragraph 3."],
  ["[Inference] What problem does paragraph 4 suggest?", ["Success made the centre less affordable for some", "The tram stopped working", "Visitors became bored"], 0, "Rents rose and some residents left."],
  ["[Vocabulary] 'car-dependent' in the last sentence means…", ["relying on cars to get around", "selling cars", "without any cars"], 0, "People needed cars before the changes."]
 ] }];

SET_12A.writing[1].push({ title: "Writing skills quiz", quiz: [
  ["Which is the best thesis for a comparative essay?", ["Although both AI tutors and teachers help students, teachers are better at motivation.", "AI is a technology.", "My teacher is called Ms. Noor."], 0, "It names both subjects and a clear position."],
  ["Choose the linker for a difference: 'An AI tutor is available all day, ___ a teacher has fixed hours.'", ["whereas", "similarly", "moreover"], 0, "Contrast between two subjects → whereas."],
  ["Choose the linker for a similarity: 'Teachers give feedback. ___, AI tutors mark answers instantly.'", ["Similarly", "In contrast", "However"], 0, "Similarity → Similarly."],
  ["Which structure suits a comparative essay?", ["Introduction, similarities, differences, conclusion", "Only one long paragraph", "A list of words"], 0, "A clear compare-contrast structure."],
  ["Which sentence is the best evidence for 'Automation saves money'?", ["One factory cut its costs by 20% after installing robots.", "Robots are interesting.", "Some people like machines."], 0, "Specific, measurable evidence."],
  ["Which is the best concluding sentence?", ["To conclude, AI tutors are useful tools, but they work best alongside teachers.", "To conclude, I am tired now.", "To conclude, robots."], 0, "It gives a balanced final judgement."]
 ] });
SET_12A.writing[2].push({ title: "Writing skills quiz", quiz: [
  ["Which topic sentence best introduces a paragraph about congestion?", ["Congestion is one of the biggest problems facing growing cities.", "Cars come in many colours.", "I took a taxi yesterday."], 0, "It introduces the paragraph's focus."],
  ["Choose the linker: 'Megacities offer many jobs. ___, housing is expensive.'", ["In contrast", "Similarly", "Moreover"], 0, "Contrast → In contrast."],
  ["Which sentence uses comparison language correctly?", ["Small towns are much quieter than megacities.", "Small towns are very quieter than megacities.", "Small towns are more quiet that megacities."], 0, "much + comparative + than."],
  ["Which sentence does NOT belong in a paragraph about pollution?", ["My favourite food is pizza.", "Traffic is a major source of air pollution.", "Trees help clean the air."], 0, "Off-topic."],
  ["For Writing 1.1, a summary should be…", ["4–5 sentences with the main ideas", "one word", "a full essay with your opinion"], 0, "Summary length and focus."],
  ["How many words should the Grade 12 Advanced comparative essay have?", ["At least 220", "About 100", "Exactly 50"], 0, "EOT requirement: at least 220 words."]
 ] });

SET_12A.examMaze.push(
 { title: "Passage 5 · Mixed · Delivery robots", focus: "Mixed",
   text: "In some neighbourhoods, small robots now deliver food. If a robot [1] a crossing, it waits for the green light. Thousands of orders [2] this way every week. Customers often ask [3] the robots are safe. Experts say they are [4] safer than scooters because they move slowly. Still, there is [5] agreement about who is responsible if an accident happens. Many people also worry about their [6].",
   gaps: [
    [["reaches", "will reach", "reached"], 0, "Zero conditional → present simple."],
    [["are delivered", "deliver", "are delivering"], 0, "Passive present simple → are delivered."],
    [["whether", "do", "are"], 0, "Indirect yes/no question → whether."],
    [["much", "very", "too"], 0, "much + comparative."],
    [["little", "few", "many"], 0, "Agreement is uncountable; not enough → little."],
    [["privacy", "congestion", "infrastructure"], 0, "Worry about personal information → privacy."]
   ] },
 { title: "Passage 6 · Mixed · Building a greener district", focus: "Mixed",
   text: "[1], the planners studied how residents travel. [2], they designed wide, shaded paths for walking. The new district is [3] than the old one, with more trees and less noise. [4], it uses solar power for its streetlights. Building took four years, and the district was [5] opened last spring. It is now a model of [6] city design.",
   gaps: [
    [["To begin with", "Finally", "Eventually"], 0, "First step → To begin with."],
    [["Next", "Lastly", "Firstly"], 0, "Middle step → Next."],
    [["greener", "more greener", "greenest"], 0, "Comparative of green → greener."],
    [["Moreover", "However", "Consequently"], 0, "Adding a point → Moreover."],
    [["eventually", "firstly", "next"], 0, "After a long time → eventually."],
    [["sustainable", "overcrowded", "congested"], 0, "Not harming the environment → sustainable."]
   ] });

// ---- Tense Table: the 12 tenses with colours, forms, timelines and a quiz ----
window.TENSES = {
 aspects: [
  { key: "simple", name: "Simple", hint: "facts, habits, finished actions" },
  { key: "cont", name: "Continuous", hint: "in progress at a moment" },
  { key: "perf", name: "Perfect", hint: "completed before a point" },
  { key: "perfcont", name: "Perfect continuous", hint: "duration up to a point" }
 ],
 times: ["Past", "Present", "Future"],
 // marks: d = dot at %, b = bar [from,to], k = dashed link [from,to]
 cells: {
  "simple-Past":    { name: "Past simple", form: "verb + -ed / V2", pos: "She <b>studied</b> yesterday.", neg: "She <b>didn't study</b> yesterday.", q: "<b>Did</b> she <b>study</b> yesterday?", use: "A finished action at a known time in the past.", signals: "yesterday, last week, in 2020, two days ago", marks: [["d", 25]] },
  "simple-Present": { name: "Present simple", form: "verb / verb + -s", pos: "She <b>studies</b> every day.", neg: "She <b>doesn't study</b> on Fridays.", q: "<b>Does</b> she <b>study</b> every day?", use: "Habits, routines, facts and timetables.", signals: "always, usually, often, every day, never", marks: [["d", 12], ["d", 27], ["d", 42], ["d", 58], ["d", 73], ["d", 88]] },
  "simple-Future":  { name: "Future simple", form: "will + verb", pos: "She <b>will study</b> tomorrow.", neg: "She <b>won't study</b> tomorrow.", q: "<b>Will</b> she <b>study</b> tomorrow?", use: "Predictions, promises, offers and quick decisions. (Plans: <i>be going to</i>.)", signals: "tomorrow, next week, I think, probably, soon", marks: [["d", 75]] },
  "cont-Past":      { name: "Past continuous", form: "was / were + verb-ing", pos: "She <b>was studying</b> at 8 p.m.", neg: "She <b>wasn't studying</b> at 8 p.m.", q: "<b>Was</b> she <b>studying</b> at 8 p.m.?", use: "An action in progress at a moment in the past, often interrupted.", signals: "while, when, at 8 p.m. yesterday, all evening", marks: [["b", 12, 38], ["d", 25]] },
  "cont-Present":   { name: "Present continuous", form: "am / is / are + verb-ing", pos: "She <b>is studying</b> now.", neg: "She <b>isn't studying</b> now.", q: "<b>Is</b> she <b>studying</b> now?", use: "Actions happening now or around now; fixed future arrangements.", signals: "now, at the moment, this week, Look!, Listen!", marks: [["b", 40, 60]] },
  "cont-Future":    { name: "Future continuous", form: "will be + verb-ing", pos: "She <b>will be studying</b> at 8 p.m. tomorrow.", neg: "She <b>won't be studying</b> at 8 p.m.", q: "<b>Will</b> she <b>be studying</b> at 8 p.m.?", use: "An action in progress at a moment in the future.", signals: "at this time tomorrow, at 8 p.m. tonight, this time next week", marks: [["b", 62, 88], ["d", 75]] },
  "perf-Past":      { name: "Past perfect", form: "had + past participle (V3)", pos: "She <b>had studied</b> before the test.", neg: "She <b>hadn't studied</b> before the test.", q: "<b>Had</b> she <b>studied</b> before the test?", use: "An action completed before another past action.", signals: "before, after, by the time, already, when", marks: [["d", 14], ["k", 14, 34], ["d", 34]] },
  "perf-Present":   { name: "Present perfect", form: "have / has + past participle (V3)", pos: "She <b>has studied</b> this unit.", neg: "She <b>hasn't studied</b> it yet.", q: "<b>Has</b> she <b>studied</b> it yet?", use: "Life experience, recent actions with a result now, or a time period not finished.", signals: "just, already, yet, ever, never, since, for", marks: [["d", 28], ["k", 28, 50]] },
  "perf-Future":    { name: "Future perfect", form: "will have + past participle (V3)", pos: "She <b>will have studied</b> it by Friday.", neg: "She <b>won't have studied</b> it by Friday.", q: "<b>Will</b> she <b>have studied</b> it by Friday?", use: "An action that will be complete before a future time.", signals: "by tomorrow, by Friday, by the end of, by then", marks: [["d", 68], ["k", 68, 86], ["d", 86]] },
  "perfcont-Past":    { name: "Past perfect continuous", form: "had been + verb-ing", pos: "She <b>had been studying</b> for hours when I called.", neg: "She <b>hadn't been studying</b> long.", q: "<b>Had</b> she <b>been studying</b> long?", use: "How long an action continued before a moment in the past.", signals: "for, since, how long, before, when", marks: [["b", 8, 34], ["d", 34]] },
  "perfcont-Present": { name: "Present perfect continuous", form: "have / has been + verb-ing", pos: "She <b>has been studying</b> for two hours.", neg: "She <b>hasn't been studying</b> long.", q: "<b>Has</b> she <b>been studying</b> long?", use: "An action that started in the past and is still continuing (or just stopped).", signals: "for, since, all day, how long, lately", marks: [["b", 22, 50]] },
  "perfcont-Future":  { name: "Future perfect continuous", form: "will have been + verb-ing", pos: "By June, she <b>will have been studying</b> here for a year.", neg: "She <b>won't have been studying</b> long.", q: "<b>Will</b> she <b>have been studying</b> for a year?", use: "How long an action will have continued up to a future point.", signals: "by … for …, by next year, by the time", marks: [["b", 50, 86], ["d", 86]] }
 },
 quiz: [
  ["Which tense is this? 'They were playing football when it started to rain.'", ["Past continuous", "Past simple", "Present perfect"], 0, "was/were + -ing → past continuous."],
  ["Which tense is this? 'I have never been to Japan.'", ["Present perfect", "Past simple", "Present simple"], 0, "have + V3 → present perfect."],
  ["Which tense is this? 'By 2030, she will have finished university.'", ["Future perfect", "Future simple", "Future continuous"], 0, "will have + V3 → future perfect."],
  ["Which tense is this? 'He has been waiting for an hour.'", ["Present perfect continuous", "Present continuous", "Past perfect continuous"], 0, "has been + -ing → present perfect continuous."],
  ["Which tense is this? 'When we arrived, the film had started.'", ["Past perfect", "Past simple", "Present perfect"], 0, "had + V3 → past perfect."],
  ["Which tense is this? 'This time tomorrow, I will be flying to Cairo.'", ["Future continuous", "Future simple", "Present continuous"], 0, "will be + -ing → future continuous."],
  ["Choose the correct form: 'Water ___ at 100°C.'", ["boils", "is boiling", "has boiled"], 0, "A scientific fact → present simple."],
  ["Choose the correct form: 'Look! The baby ___.'", ["is sleeping", "sleeps", "slept"], 0, "Look! → happening now → present continuous."],
  ["Choose the correct form: 'I ___ my homework yesterday.'", ["finished", "have finished", "finish"], 0, "'yesterday' → past simple."],
  ["Choose the correct form: 'She ___ here since 2020.'", ["has lived", "lived", "lives"], 0, "since + up to now → present perfect."],
  ["Choose the correct form: 'They ___ for two hours before the bus came.'", ["had been waiting", "have been waiting", "were waited"], 0, "Duration before a past moment → past perfect continuous."],
  ["Choose the correct form: 'I think it ___ tomorrow.'", ["will rain", "is raining", "rained"], 0, "'I think' + prediction → will."]
 ]
};


(() => {
// Grammar Guide — original illustrated explanations for the Grade 11–12 Term 1 grammar points.
// sets: which courses have this point in their exam scope (10A11G = Grade 11 General, 11A12G = Grade 11 Adv & 12 Gen, 12A = Grade 12 Adv)
const tl = (bars, labels = ["Past", "Now", "Future"]) =>
  `<div class="gx-tl"><div class="gx-axis"><span>${labels[0]}</span><span class="now">${labels[1]}</span><span>${labels[2]}</span></div>${bars}</div>`;
const flow = (steps) => `<div class="gx-flow">${steps.map((s, i) => `${i ? '<span class="gx-arrow">→</span>' : ""}<div class="gx-box">${s}</div>`).join("")}</div>`;
const table = (head, rows) => `<div class="gx-table"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const scale = (items) => `<div class="gx-scale">${items.map((t, i) => `<span style="--i:${i};--n:${items.length}">${t}</span>`).join("")}</div>`;

window.GRAMMAR_GUIDE = [
 { id: "pres-passive", title: "Present simple passive", group: "Passive voice", sets: ["10A11G", "11A12G", "12A"],
   idea: "Use the passive when the action or the thing receiving it matters more than who does it.",
   visual: flow(["<b>Active</b><br>The bank <u>charges</u> a fee.", "Object moves to the front", "<b>Passive</b><br>A fee <u>is charged</u> (by the bank)."]),
   form: "am / is / are + past participle",
   examples: ["Data <b>is stored</b> on a secure server.", "These cars <b>are made</b> in Japan.", "Breakfast <b>isn't served</b> after 10 a.m."],
   mistake: ["The results publish every year.", "The results <b>are published</b> every year."],
   check: [["Coffee ___ in many countries.", ["is grown", "grows", "is growing"], 0], ["The rooms ___ every morning.", ["are cleaned", "clean", "cleaned"], 0], ["___ your password ___ anywhere?", ["Is / saved", "Does / save", "Is / saving"], 0]] },
 { id: "cont-passive", title: "Present continuous passive", group: "Passive voice", sets: ["11A12G"],
   idea: "Something is being done to the subject right now, or around now.",
   visual: tl('<div class="gx-bar" style="left:42%;width:20%"><i>is being built</i></div>'),
   form: "am / is / are + being + past participle",
   examples: ["The road <b>is being repaired</b> this week.", "Your order <b>is being prepared</b>.", "Are the tests <b>being marked</b> now?"],
   mistake: ["The bridge is building at the moment.", "The bridge <b>is being built</b> at the moment."],
   check: [["The house ___ at the moment.", ["is being painted", "is painted", "is painting"], 0], ["New phones ___ this month.", ["are being launched", "are launched", "launch"], 0], ["Is the room ___ now?", ["being cleaned", "cleaned", "cleaning"], 0]] },
 { id: "ppc", title: "Present perfect continuous", group: "Tenses", sets: ["10A11G"],
   idea: "An activity started in the past and is still going on, or has just stopped with a result now.",
   visual: tl('<div class="gx-bar" style="left:12%;width:40%"><i>has been raining</i></div><div class="gx-dot" style="left:12%">since 9 a.m.</div>'),
   form: "have / has + been + -ing  ·  for + period  ·  since + starting point",
   examples: ["I <b>have been studying</b> for two hours.", "She <b>has been working</b> here since 2020.", "Why are you wet? <b>Have</b> you <b>been running</b>?"],
   mistake: ["I am waiting here since 8 o'clock.", "I <b>have been waiting</b> here since 8 o'clock."],
   check: [["We ___ for an hour.", ["have been walking", "are walking", "walk"], 0], ["He has been coughing ___ Monday.", ["since", "for", "ago"], 0], ["How long ___ you been learning English?", ["have", "are", "do"], 0]] },
 { id: "verb-patterns", title: "Verb patterns", group: "Verbs", sets: ["11A12G"],
   idea: "The first verb decides the form of the second verb.",
   visual: table(["+ to-infinitive", "+ -ing", "+ bare infinitive"], [["decide, afford, plan", "avoid, enjoy, consider", "make (sb) do"], ["hope, manage, refuse", "keep, risk, finish", "let (sb) do"], ["want, agree, offer", "mind, can't help, suggest", "modals: can, must…"]]),
   form: "verb + to do · verb + doing · make / let + object + do",
   examples: ["She <b>decided to apply</b>.", "He <b>avoids spending</b> too much.", "My parents <b>let me choose</b>."],
   mistake: ["They made us to wait outside.", "They made us <b>wait</b> outside."],
   check: [["I enjoy ___ new things.", ["learning", "to learn", "learn"], 0], ["We can't afford ___ a car.", ["to buy", "buying", "buy"], 0], ["The teacher let us ___ early.", ["leave", "to leave", "leaving"], 0]] },
 { id: "ndrc", title: "Non-defining relative clauses", group: "Clauses", sets: ["11A12G"],
   idea: "Extra information about a noun that is already clear. Remove the clause and the sentence still makes sense.",
   visual: `<div class="gx-sent">My cousin<span class="gx-extra">, <b>who</b> lives in Fujairah,</span> is a nurse.</div><p class="gx-note">The part in the box is extra. It sits between commas.</p>`,
   form: "who (people) · which (things) · whose (possession) · where (places) · when (times) — never <i>that</i>",
   examples: ["Al Ain, <b>where</b> I was born, is very green.", "The laptop, <b>which</b> was new, stopped working.", "Mr. Saeed, <b>whose</b> son is in my class, is a pilot."],
   mistake: ["My phone, that I bought last year, is broken.", "My phone, <b>which</b> I bought last year, is broken."],
   check: [["My brother, ___ is 20, is at university.", ["who", "that", "which"], 0], ["The museum, ___ opened in 2017, is popular.", ["which", "that", "who"], 0], ["Dubai, ___ my aunt lives, is busy.", ["where", "which", "when"], 0]] },
 { id: "reported", title: "Reported speech", group: "Reporting", sets: ["11A12G"],
   idea: "When the reporting verb is past (said, told, asked), move the tense one step back.",
   visual: table(["Direct speech", "Reported speech"], [["am / is", "was"], ["will", "would"], ["can", "could"], ["present perfect", "past perfect"], ["past simple", "past perfect"], ["today / tomorrow", "that day / the next day"]]),
   form: "said (that) … · told + person (that) … · asked if / whether … · asked + person + to do",
   examples: ["\"I'm tired.\" → She said she <b>was</b> tired.", "\"Will you come?\" → He asked <b>if I would</b> come.", "\"Sit down.\" → The teacher told us <b>to sit</b> down."],
   mistake: ["She asked me where did I live.", "She asked me where <b>I lived</b>."],
   check: [["\"I can swim.\" → He said he ___ swim.", ["could", "can", "will"], 0], ["\"I'm leaving tomorrow.\" → She said she was leaving ___.", ["the next day", "tomorrow", "yesterday"], 0], ["\"Where is the bank?\" → He asked where ___.", ["the bank was", "was the bank", "is the bank"], 0]] },
 { id: "degree", title: "Adverbs of degree", group: "Adverbs", sets: ["10A11G", "11A12G"],
   idea: "They make an adjective weaker or stronger.",
   visual: scale(["slightly", "fairly", "quite", "very", "really", "extremely"]) + `<p class="gx-note"><b>too</b> + adjective = more than OK · adjective + <b>enough</b> = as much as needed · <b>enough</b> + noun</p>`,
   form: "adverb + adjective · too + adjective · adjective + enough",
   examples: ["The test was <b>fairly</b> easy.", "This bag is <b>too</b> heavy to carry.", "Is the room big <b>enough</b>?"],
   mistake: ["He isn't enough tall to play.", "He isn't <b>tall enough</b> to play."],
   check: [["It's ___ cold to swim today.", ["too", "enough", "slightly"], 0], ["Are you old ___ to drive?", ["enough", "too", "very"], 0], ["Prices rose ___, by 1%.", ["slightly", "extremely", "too"], 0]] },
 { id: "subconj", title: "Subordinating conjunctions", group: "Linking", sets: ["10A11G", "11A12G"],
   idea: "They join a main clause and a dependent clause and show how the ideas are linked.",
   visual: table(["Meaning", "Conjunctions"], [["Reason", "because, since, as"], ["Contrast", "although, even though, while"], ["Purpose", "so that"], ["Condition", "if, unless (= if not)"], ["Time", "when, as soon as, until, while"]]),
   form: "Main clause + conjunction + clause · Conjunction + clause<b>,</b> main clause",
   examples: ["<b>Although</b> it rained, we played.", "Call me <b>as soon as</b> you arrive.", "Speak slowly <b>so that</b> everyone understands."],
   mistake: ["Although it was late but we continued.", "<b>Although</b> it was late, we continued."],
   check: [["___ he was ill, he went to school.", ["Although", "Because", "So that"], 0], ["You'll fail ___ you study.", ["unless", "because", "so that"], 0], ["Wait here ___ I come back.", ["until", "although", "so that"], 0]] },
 { id: "participle", title: "Participle clauses", group: "Clauses", sets: ["10A11G"],
   idea: "Short clauses that replace longer ones. Both parts must have the same subject.",
   visual: flow(["<b>-ing</b> = active<br><i>Walking home, I saw Ali.</i><br>(I was walking)", "<b>past participle</b> = passive<br><i>Built in 1990, the mall is old.</i><br>(The mall was built)"]),
   form: "-ing clause (active) · past participle clause (passive)",
   examples: ["<b>Feeling</b> tired, she went to bed early.", "<b>Made</b> by hand, the bags are expensive.", "Students <b>wanting</b> extra help can stay after class."],
   mistake: ["Walking to school, the rain started.", "Walking to school, <b>I</b> got caught in the rain."],
   check: [["___ in 1971, the UAE is a young country.", ["Founded", "Founding", "Found"], 0], ["___ the news, she smiled.", ["Hearing", "Heard", "Hear"], 0], ["The video, ___ by millions, went viral.", ["watched", "watching", "watches"], 0]] },
 { id: "demonstratives", title: "Demonstratives", group: "Determiners", sets: ["10A11G"],
   idea: "They point to things near or far, or to an idea already mentioned.",
   visual: table(["", "Singular", "Plural"], [["Near (here / now)", "this", "these"], ["Far (there / then)", "that", "those"]]) + `<p class="gx-note">In writing, <b>This</b> often refers back to a whole idea: <i>Prices rose. <b>This</b> surprised everyone.</i></p>`,
   form: "this / that + singular · these / those + plural",
   examples: ["<b>These</b> shoes are new.", "Do you remember <b>that</b> day?", "Many apps track us. <b>This</b> worries parents."],
   mistake: ["Look at that birds!", "Look at <b>those</b> birds!"],
   check: [["___ books on my desk are mine.", ["These", "This", "That"], 0], ["Who is ___ man over there?", ["that", "these", "those"], 0], ["Sales fell. ___ was a big problem.", ["This", "These", "Those"], 0]] },
 { id: "tags", title: "Question tags", group: "Questions", sets: ["10A11G"],
   idea: "A short question at the end of a sentence to check information.",
   visual: `<div class="gx-pair"><div class="gx-box">Positive sentence <span class="gx-arrow">→</span> <b>negative</b> tag<br><i>You're ready, <b>aren't you</b>?</i></div><div class="gx-box">Negative sentence <span class="gx-arrow">→</span> <b>positive</b> tag<br><i>She can't swim, <b>can she</b>?</i></div></div>`,
   form: "same auxiliary (be, have, will, can…) or do / does / did · I am → aren't I?",
   examples: ["It's hot, <b>isn't it</b>?", "They went home, <b>didn't they</b>?", "You won't forget, <b>will you</b>?"],
   mistake: ["He likes football, isn't it?", "He likes football, <b>doesn't he</b>?"],
   check: [["You've finished, ___?", ["haven't you", "didn't you", "don't you"], 0], ["She isn't here, ___?", ["is she", "isn't she", "does she"], 0], ["I'm right, ___?", ["aren't I", "amn't I", "am I"], 0]] },
 { id: "zero", title: "Zero conditional", group: "Conditionals", sets: ["12A"],
   idea: "Facts and rules that are always true: if A happens, B always happens.",
   visual: flow(["<b>If / When</b> + present simple<br><i>If you heat ice,</i>", "present simple<br><i>it melts.</i>"]),
   form: "If / When + present simple, present simple",
   examples: ["If you <b>mix</b> red and blue, you <b>get</b> purple.", "When the alarm <b>rings</b>, everyone <b>leaves</b>.", "If plants <b>don't get</b> water, they <b>die</b>."],
   mistake: ["If you heat water to 100°C, it will boil.", "If you heat water to 100°C, it <b>boils</b>. (a general fact)"],
   check: [["If you press this, the door ___.", ["opens", "will open", "opened"], 0], ["When it ___, the roads get wet.", ["rains", "will rain", "rained"], 0], ["If you don't sleep, you ___ tired.", ["feel", "felt", "would feel"], 0]] },
 { id: "comparatives", title: "Comparative adjectives", group: "Adjectives", sets: ["12A"],
   idea: "Compare two things, and show how big the difference is.",
   visual: table(["Adjective", "Comparative"], [["short: cheap, fast", "cheaper, faster"], ["ends in -y: busy", "busier"], ["long: crowded", "more / less crowded"], ["irregular: good, bad, far", "better, worse, further"]]) + scale(["slightly", "a bit", "much", "far", "a lot"]),
   form: "-er than · more / less … than · much / far / slightly + comparative · the more…, the more…",
   examples: ["Dubai is <b>much busier</b> than Fujairah.", "The new phone is <b>slightly cheaper</b>.", "<b>The more</b> you read, <b>the better</b> you write."],
   mistake: ["This road is very more dangerous.", "This road is <b>much more</b> dangerous."],
   check: [["Today is ___ than yesterday.", ["hotter", "more hot", "hottest"], 0], ["Buses are ___ cheaper than taxis.", ["much", "very", "too"], 0], ["The film was ___ than the book.", ["worse", "badder", "more bad"], 0]] },
 { id: "quantity", title: "Adverbs of quantity", group: "Quantity", sets: ["12A"],
   idea: "Show how much or how many — and whether that feels like enough.",
   visual: table(["", "Countable (people, cars)", "Uncountable (time, money)"], [["Large", "many, a lot of", "much, a lot of"], ["Some (positive)", "a few", "a little"], ["Not enough (negative)", "few", "little"], ["Almost none", "hardly any", "hardly any"]]),
   form: "many / few + plural noun · much / little + uncountable noun",
   examples: ["I have <b>a few</b> friends here, so I'm happy.", "There is <b>little</b> hope of rain this week.", "We have <b>hardly any</b> time left."],
   mistake: ["There are much cars in the city.", "There are <b>many</b> cars in the city."],
   check: [["How ___ money do you need?", ["much", "many", "few"], 0], ["Only ___ students came, so the room was empty.", ["a few", "a little", "much"], 0], ["There is ___ water left. We must buy more.", ["little", "few", "many"], 0]] },
 { id: "indirect", title: "Indirect questions", group: "Questions", sets: ["12A"],
   idea: "A more polite way to ask. After the opening phrase, use normal statement word order.",
   visual: flow(["<b>Direct</b><br><i>Where <u>is</u> the station?</i>", "Could you tell me…", "<b>Indirect</b><br><i>…where the station <u>is</u>?</i>"]),
   form: "Could you tell me / Do you know / I wonder + question word or if / whether + subject + verb",
   examples: ["Do you know <b>what time the shop opens</b>?", "I wonder <b>whether</b> it will rain.", "Can you tell me <b>how much this costs</b>?"],
   mistake: ["Can you tell me where does she live?", "Can you tell me where <b>she lives</b>?"],
   check: [["Do you know where ___?", ["the library is", "is the library", "the library does"], 0], ["I wonder ___ he is coming.", ["if", "does", "that"], 0], ["Could you tell me what time ___?", ["the bus leaves", "does the bus leave", "leaves the bus"], 0]] },
 { id: "linkers", title: "Adverbial linkers", group: "Linking", sets: ["12A"],
   idea: "Connect ideas across two sentences. Put a comma after them at the start of a sentence.",
   visual: table(["Function", "Linkers"], [["Contrast", "However, Nevertheless, On the other hand"], ["Result", "Therefore, As a result, Consequently"], ["Adding", "Moreover, Furthermore, In addition"], ["Example", "For example, For instance"]]),
   form: "Sentence 1. Linker, sentence 2.",
   examples: ["The plan was expensive. <b>However</b>, it worked.", "It rained all week. <b>As a result</b>, the match was cancelled.", "The app is free. <b>Moreover</b>, it has no adverts."],
   mistake: ["It was cold, however we went out.", "It was cold. <b>However</b>, we went out."],
   check: [["He studied hard. ___, he passed.", ["Therefore", "However", "For example"], 0], ["The phone is fast. ___, it's cheap.", ["Moreover", "However", "Consequently"], 0], ["Cities are growing. ___, Cairo has 22 million people.", ["For instance", "Nevertheless", "Therefore"], 0]] },
 { id: "sequencing", title: "Sequencing adverbs", group: "Linking", sets: ["12A"],
   idea: "Show the order of steps in a process or story.",
   visual: flow(["<b>First / To begin with</b>", "<b>Then / Next / After that</b>", "<b>Subsequently</b>", "<b>Finally / Lastly / Eventually</b>"]),
   form: "First → Then / Next → After that → Finally · Eventually = after a long time or problems",
   examples: ["<b>First</b>, boil the water.", "<b>Next</b>, add the rice.", "After hours of waiting, the bus <b>eventually</b> arrived."],
   mistake: ["Finally, let me begin with the history.", "<b>To begin with</b>, let me explain the history."],
   check: [["___, read the question carefully.", ["First", "Finally", "Eventually"], 0], ["After many delays, the flight ___ left.", ["eventually", "firstly", "next"], 0], ["Wash the fruit. ___, cut it.", ["Then", "Lastly", "To begin with"], 0]] }
];

})();

// Which practice set each class uses (grade + A/G). Shared courses use the same set.
window.PRACTICE = {
  "9G": G9,
  "9A": SET_9A10G,  "10G": SET_9A10G,
  "10A": SET_10A11G, "11G": SET_10A11G,
  "11A": SET_11A12G, "12G": SET_11A12G,
  "12A": SET_12A
};
