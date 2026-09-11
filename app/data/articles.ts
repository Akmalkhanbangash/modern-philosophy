export type ArticleBlock = {
  type: "paragraph" | "heading";
  text: string;
};
export type Article = {
   id: number;
  slug: string;
  title: string;
  description: string;
  readTime: string;
  author: string;
  category: string;
  content: ArticleBlock[];
  quote?: string;
quoteAuthor?: string;
};

export const articles: Article[] = [
  {
  id: 1,
  slug: "what-is-stoicism",
  title: "What Is Stoicism?",
  description:
    "Ancient wisdom for learning what you can control, what you cannot, and how to live better because of it.",
  readTime: "4 min read",
  author: "Malik Akmal Khan",
  category: "Stoicism",
  quote:
    "You have power over your mind — not outside events. Realize this, and you will find strength.",
  quoteAuthor: "Marcus Aurelius",
  content: [
  {
    type: "paragraph",
    text: "Imagine you wake up tomorrow and something has already gone wrong. Your plans have changed. Someone has disappointed you. Work is stressful. Money is tight. A message you were waiting for never came. Maybe something happened that you had absolutely no power to prevent."
  },
  {
    type: "paragraph",
    text: "What do you do with the rest of your day?"
  },
  {
    type: "paragraph",
    text: "This is where Stoicism becomes interesting. Stoicism is not about becoming emotionless, cold, or indifferent to life. It is a philosophy about learning how to live well in a world that will not always behave the way we want it to."
  },
  {
    type: "paragraph",
    text: "At its heart is a simple question: What is actually within my control?"
  },

  {
    type: "heading",
    text: "What Can You Control?"
  },
  {
    type: "paragraph",
    text: "You cannot control everything that happens to you. You cannot control what another person thinks of you. You cannot control whether someone gives you the job. You cannot control the weather, the past, other people's decisions, or every unexpected problem that enters your life."
  },
  {
    type: "paragraph",
    text: "But you can influence something much closer to you: your own choices, actions, judgments, and responses."
  },
  {
    type: "paragraph",
    text: "This distinction is one of the most useful ideas in Stoic philosophy."
  },
  {
    type: "paragraph",
    text: "Think about criticism. Someone says something negative about you. You cannot control their words. But you can choose whether to immediately become angry, whether to examine what they said, whether there is something useful hidden inside the criticism, and whether to simply let it go."
  },
  {
    type: "paragraph",
    text: "The event is outside your control. Your response is where your freedom begins."
  },

  {
    type: "heading",
    text: "Why Does This Matter Today?"
  },
  {
    type: "paragraph",
    text: "We live in a world where we are constantly exposed to things we cannot control. Someone gets promoted before us. Someone posts a better life on social media. A company rejects our application. A friend does not reply. A plan fails."
  },
  {
    type: "paragraph",
    text: "Stoicism offers another approach. Instead of asking, “Why is this happening to me?” try asking, “What can I do about it?”"
  },
  {
    type: "paragraph",
    text: "The first question can keep you trapped in frustration. The second gives you somewhere to go."
  },

  {
    type: "heading",
    text: "Stoicism Doesn't Mean You Stop Caring"
  },
  {
    type: "paragraph",
    text: "Stoicism does not mean pretending that nothing hurts. Losing someone hurts. Failure hurts. Rejection hurts. Uncertainty can be frightening."
  },
  {
    type: "paragraph",
    text: "Stoicism asks you not to give those feelings complete control over your actions. You can be disappointed and still move forward. You can be afraid and still do what needs to be done. You can fail and still try again."
  },
  {
    type: "paragraph",
    text: "Strength is not the absence of emotion. Sometimes strength is simply refusing to let emotion make every decision for you."
  },

  {
    type: "heading",
    text: "A Different Way to Look at Life"
  },
  {
    type: "paragraph",
    text: "There is another beautiful idea hidden inside Stoicism. We often behave as if life owes us a certain kind of tomorrow. We expect our plans to work. We expect people to behave the way we want. We expect our circumstances to remain stable."
  },
  {
    type: "paragraph",
    text: "But life never promised any of that."
  },
  {
    type: "paragraph",
    text: "Tomorrow itself is not guaranteed. And perhaps that is exactly why it matters."
  },
  {
    type: "paragraph",
    text: "The simple act of waking up tomorrow is already something valuable. You do not need a million dollars to make tomorrow meaningful. You need tomorrow."
  },
  {
    type: "paragraph",
    text: "And if you are fortunate enough to receive it, the next question becomes: What will you do with it?"
  },

  {
    type: "heading",
    text: "Try This Today"
  },
  {
    type: "paragraph",
    text: "Take five minutes tonight and divide a piece of paper into two columns. In the first, write down the things you can control: what you do next, how you speak to people, how you spend your time, whether you learn from failure, and whether you try again."
  },
  {
    type: "paragraph",
    text: "In the second, write down the things you cannot control: other people's opinions, the past, unexpected events, whether everyone likes you, every outcome, and what tomorrow brings."
  },
  {
    type: "paragraph",
    text: "Then choose one thing from the first column and act on it. Do not solve your entire life. Just do the next thing that belongs to you."
  },

  {
    type: "heading",
    text: "One Thought to Carry With You"
  },
  {
    type: "paragraph",
    text: "Tomorrow, you may wake up to the same problems. There may still be work to do. Someone may still disappoint you. Something may still go wrong."
  },
  {
    type: "paragraph",
    text: "But you will have one thing that matters more than all of those things: another day to choose how you meet life."
  },
  {
    type: "paragraph",
    text: "Getting up tomorrow is more important than anything we think we need. But getting up happy, peaceful, and with a reason to move forward — that is what we are trying to build."
  },
  {
    type: "paragraph",
    text: "You cannot control the whole world. But you can work on the person who walks through it."
  }
]
},
 {
  id: 2,
  slug: "ai-and-the-fear-of-being-replaced",
  title: "AI and the Fear of Being Replaced",
  description:
    "Artificial intelligence is changing the way we work. Instead of letting fear decide our future, perhaps we can learn to move with change.",
  readTime: "4 min",
  author: "Modern Philosophy",
  category: "Modern Life",
  content: [
    {
      type: "paragraph",
      text: "There is something strange about artificial intelligence. Many of us are afraid of it. And many of us are excited to use it. We worry that AI might take our jobs, replace our skills, or make years of experience less valuable. Then, on the same day, we open an AI tool and ask it to help us write, learn, code, research, or solve a problem. These two feelings seem contradictory. Maybe they aren't. Maybe they are simply what it feels like to live through change.",
    },
    {
      type: "heading",
      text: "The Fear",
    },
    {
      type: "paragraph",
      text: "The fear of AI is not really about machines. It is about uncertainty. We don't know exactly what the world of work will look like five years from now. We don't know which jobs will disappear. We don't know which skills will become less valuable. We don't know what new opportunities will appear. And when we cannot see the road ahead, our minds naturally imagine the worst.",
    },
    {
      type: "paragraph",
      text: 'Someone might think: "What if AI replaces me?" But there is another question worth asking: "What if I learn to work with it?" The second question doesn\'t promise that everything will be fine. It simply gives us somewhere to move.',
    },
    {
      type: "heading",
      text: "Why Does Change Scare Us?",
    },
    {
      type: "paragraph",
      text: "Change takes away something we value: certainty. Imagine spending ten years becoming good at something, only to discover that technology can now do part of it in seconds. That can feel unfair. It can even feel personal.",
    },
    {
      type: "paragraph",
      text: "But technology does not care about our plans. The world has changed like this many times before.",
    },
    {
      type: "paragraph",
      text: "When the printing press appeared, it changed how knowledge was created and shared. When electricity transformed industry, old ways of working began to disappear. When cars replaced horses as the primary way of transportation, entire industries had to change. When computers entered offices, many people wondered what would happen to their work.",
    },
    {
      type: "paragraph",
      text: "And yet, we don't look at these changes only as losses. We look back and see what they made possible.",
    },
    {
      type: "paragraph",
      text: "History reminds us of something important: change can take things away, but it can also create things we could not imagine beforehand.",
    },
    {
      type: "paragraph",
      text: "AI may be another chapter in that story.",
    },
    {
      type: "heading",
      text: "AI Is a Tool — But Not Just Another Tool",
    },
    {
      type: "paragraph",
      text: "A calculator can make arithmetic faster. A search engine can make information easier to find. AI can do something more interesting. It can help us think, create, explain, test, summarize, translate, and explore ideas.",
    },
    {
      type: "paragraph",
      text: "That makes it powerful. But powerful does not mean perfect. AI can be wrong. It can misunderstand. It can produce something that looks convincing while being completely incorrect.",
    },
    {
      type: "paragraph",
      text: "So perhaps the valuable skill of the future will not simply be knowing how to use AI. It will be knowing when to trust it, when to question it, and how to improve what it gives you.",
    },
    {
      type: "paragraph",
      text: "The tool becomes more useful when the person using it becomes more capable.",
    },
    {
      type: "heading",
      text: "The Work We Do vs. The Person We Are",
    },
    {
      type: "paragraph",
      text: "There is another reason we fear being replaced. Sometimes we confuse our job with our identity. If technology changes our work, it can feel like technology is changing our worth.",
    },
    {
      type: "paragraph",
      text: "But you are not your job title. You are not the software you use. You are not a list of skills on a résumé.",
    },
    {
      type: "paragraph",
      text: "Your ability to learn is also a skill. Your curiosity is a skill. Your judgment is a skill. Your ability to communicate, adapt, ask questions, understand people, and make decisions matters too.",
    },
    {
      type: "paragraph",
      text: "And these things can continue developing long after a particular technology becomes outdated.",
    },
    {
      type: "heading",
      text: "Don't Compete With Change",
    },
    {
      type: "paragraph",
      text: "You don't have to beat AI. You don't have to become smarter than every machine. And you don't have to predict exactly what the future will look like.",
    },
    {
      type: "paragraph",
      text: "Instead, learn to move with change. If AI can make part of your work faster, learn how to use it. If it can automate something repetitive, let it. Then spend the time you saved learning something deeper.",
    },
    {
      type: "paragraph",
      text: "Build something. Ask better questions. Understand your work at a higher level. Become the person who knows why something should be done, not only how to do it.",
    },
    {
      type: "paragraph",
      text: "The goal is not to protect every task you perform today. The goal is to remain capable when the tasks change tomorrow.",
    },
    {
      type: "heading",
      text: "What Can You Do Today?",
    },
    {
      type: "paragraph",
      text: "You don't need a ten-year plan. Start smaller.",
    },
    {
      type: "paragraph",
      text: "Try one AI tool. Use it for something you already understand. Ask it questions. Challenge its answers. Find where it makes mistakes. Learn what it can and cannot do.",
    },
    {
      type: "paragraph",
      text: "Then use what you learn to improve your own work.",
    },
    {
      type: "paragraph",
      text: "You don't need to become an AI expert overnight. You simply need to become a little more capable than you were yesterday.",
    },
    {
      type: "paragraph",
      text: "Tomorrow, do it again.",
    },
    {
      type: "heading",
      text: "One Thought to Carry With You",
    },
    {
      type: "paragraph",
      text: "Maybe some of the work we do today will disappear. Maybe some of our skills will become less valuable. Maybe the career we imagined ten years ago will look completely different ten years from now.",
    },
    {
      type: "paragraph",
      text: "We don't know.",
    },
    {
      type: "paragraph",
      text: "But we do know this:",
    },
    {
      type: "paragraph",
      text: "Change is coming whether we are ready for it or not.",
    },
    {
      type: "paragraph",
      text: "So perhaps the goal isn't to become fearless. Perhaps the goal is to become capable enough to move with change.",
    },
    {
      type: "paragraph",
      text: "Learn something new. Try the tool. Ask better questions. Build something. And when the world changes again, learn again.",
    },
    {
      type: "paragraph",
      text: "You don't have to know what the future will look like.",
    },
    {
      type: "paragraph",
      text: "You only have to become someone who can meet it.",
    },
  ],
  quote:
    "You don't have to predict the future. You only have to become someone who can meet it.",
  quoteAuthor: "Modern Philosophy",
},
 
 {
  id: 3,
  slug: "why-are-we-always-in-a-hurry",
  title: "Why Are We Always in a Hurry?",
  description:
    "We spend so much time thinking about yesterday and tomorrow that we sometimes forget to experience the day we are actually living.",
  readTime: "4 min",
  author: "Modern Philosophy",
  category: "Modern Life",
  content: [
    {
      type: "paragraph",
      text: "There is something strange about the way we live today. We are always going somewhere. We hurry to work, hurry home, hurry through breakfast, and sometimes even hurry through conversations. And yet, even when nothing is chasing us, we still feel that we are late.",
    },
    {
      type: "heading",
      text: "Where Are We Rushing To?",
    },
    {
      type: "paragraph",
      text: "I once heard something from the generations before us: the good time has already passed, or the good time is still coming. Perhaps that is why we struggle to enjoy the present. We remember the days when life felt better, or we imagine that happiness is waiting somewhere ahead.",
    },
    {
      type: "paragraph",
      text: "The past becomes a place we miss. The future becomes a place we hope for. And somewhere between the two, we forget to live. But the present is the only part of life that is actually happening.",
    },
    {
      type: "heading",
      text: "The Day That Never Seems to Have Enough Time",
    },
    {
      type: "paragraph",
      text: "We often say, \"I don't have time.\" But sometimes the problem isn't that we have no time. Maybe we have forgotten how to be inside it.",
    },
    {
      type: "paragraph",
      text: "We eat while watching something. We walk while looking at our phones. We sit with people while thinking about messages from other people. We have more tools than ever to save time, yet somehow we are always busy.",
    },
    {
      type: "heading",
      text: "When Technology Becomes the Company We Keep",
    },
    {
      type: "paragraph",
      text: "Technology has given us incredible ways to make life easier. AI can write, machines can calculate, and messages can travel across the world in seconds. But there is a strange question underneath all of this: what are we doing with the time we save?",
    },
    {
      type: "paragraph",
      text: "Do we spend that time talking to someone we love? Taking a walk? Sitting quietly? Or do we simply fill the extra time with another screen?",
    },
    {
      type: "paragraph",
      text: "In an era of increasingly intelligent tools, perhaps we need to remember another kind of intelligence: emotional intelligence. Knowing when someone needs advice and when they simply need to be heard. Knowing when a friend is smiling but isn't really okay. Knowing when to speak, and when to stay silent.",
    },
    {
      type: "heading",
      text: "Maybe Slow Is Not the Same as Stopping",
    },
    {
      type: "paragraph",
      text: "We sometimes think slowing down means falling behind. But life doesn't always work that way.",
    },
    {
      type: "paragraph",
      text: "An hour spent with someone you love can disappear almost unnoticed. Yet ten minutes in a difficult situation can feel endless. The clock may move at the same speed, but our experience of time changes.",
    },
    {
      type: "paragraph",
      text: "Perhaps this is why we should stop measuring our lives only by minutes, hours, achievements, and deadlines. A day isn't valuable simply because we filled every minute of it.",
    },
    {
      type: "heading",
      text: "Learning to Be Where You Are",
    },
    {
      type: "paragraph",
      text: "Maybe we don't need to completely change our lives. Maybe we just need to stop running through them.",
    },
    {
      type: "paragraph",
      text: "Enjoy today's version of your life. Not the perfect version. Not the version you imagine five years from now. This version.",
    },
    {
      type: "paragraph",
      text: "If life is difficult today, it doesn't mean you cannot find one good moment inside the difficulty. If life is going well, don't rush past it while waiting for something even better.",
    },
    {
      type: "paragraph",
      text: "So talk to someone instead of sending another message. Put the phone down sometimes. Sit with your family. Take the longer walk. Drink your tea while it is still warm. Listen when someone is speaking. Let an ordinary day be ordinary.",
    },
    {
      type: "paragraph",
      text: "We don't have to live only once. We live every day. And perhaps the strange thing about life is that we only have to die once.",
    },
    {
      type: "paragraph",
      text: "So maybe the question isn't, \"How do I make my life move faster?\" Maybe it is, \"How do I become better at being here?\"",
    },
    {
      type: "paragraph",
      text: "Not yesterday. Not someday. Here. Today.",
    },
  ],
  quote:
    "We don't have to live only once. We live every day. We have to die only once.",
  quoteAuthor: "Modern Philosophy",
},
{
  id: 4,
  slug: "the-beauty-of-an-ordinary-day",
  title: "The Beauty of an Ordinary Day",
  description:
    "Not every day needs to be extraordinary. Sometimes the most meaningful moments are the ones we almost overlook.",
  readTime: "4 min",
  author: "Modern Philosophy",
  category: "Life & Reflection",
  content: [
    {
      type: "paragraph",
      text: "We often imagine that a good life should be filled with memorable moments. A beautiful journey. A great achievement. A perfect evening. Something worth photographing, sharing, or remembering."
    },
    {
      type: "paragraph",
      text: "But most of life doesn't happen that way. Most days are ordinary. We wake up, have breakfast, go to work, answer messages, talk to our families, drink tea, finish a few things, and eventually go to sleep."
    },
    {
      type: "paragraph",
      text: "And perhaps that is not a problem at all."
    },

    {
      type: "heading",
      text: "The Days We Don't Notice"
    },
    {
      type: "paragraph",
      text: "Think about the last ordinary day you had. Nothing particularly exciting happened. There was no major celebration or dramatic change. Yet somewhere in that day, there may have been a small moment that felt good."
    },
    {
      type: "paragraph",
      text: "A conversation with someone you love. A cup of tea when you finally had a quiet moment. The sound of rain outside the window. A child's laugh from another room. Walking home while the evening slowly became dark."
    },
    {
      type: "paragraph",
      text: "These moments rarely announce themselves as important. We usually recognize their value much later, when we realize that these ordinary days were actually our life."
    },

    {
      type: "heading",
      text: "Why Do We Wait for Something Special?"
    },
    {
      type: "paragraph",
      text: "Perhaps we have become too good at waiting. We wait for the weekend. Then we wait for the holidays. We wait for the next promotion, the next trip, the next achievement, the next big change."
    },
    {
      type: "paragraph",
      text: "There is nothing wrong with looking forward to something. Hope gives direction to our lives. But if we are always waiting for the next thing, we may slowly forget to experience the thing that is already here."
    },
    {
      type: "paragraph",
      text: "A beautiful life is not necessarily a life where something extraordinary happens every day. It can be a life where ordinary moments are noticed."
    },

    {
      type: "heading",
      text: "The People Around Us"
    },
    {
      type: "paragraph",
      text: "The ordinary day becomes different when we pay attention to the people inside it."
    },
    {
      type: "paragraph",
      text: "We can become so familiar with the people we love that we stop noticing them. The same voice. The same jokes. The same questions. The same person sitting beside us."
    },
    {
      type: "paragraph",
      text: "But familiarity does not make someone less valuable. Sometimes it is the opposite. The people who appear in our ordinary days are often the ones who quietly make those days worth living."
    },

    {
      type: "heading",
      text: "Nothing Extraordinary Is Required"
    },
    {
      type: "paragraph",
      text: "You don't need a perfect morning to have a good day. You don't need an impressive achievement to feel that your day mattered."
    },
    {
      type: "paragraph",
      text: "Sometimes doing your work honestly, helping someone, sharing a meal, listening carefully, taking a walk, or simply sitting quietly for a few minutes is enough."
    },
    {
      type: "paragraph",
      text: "The value of a moment does not always come from how unusual it is. Sometimes it comes from the attention we give it."
    },

    {
      type: "heading",
      text: "Maybe This Is What Life Looks Like"
    },
    {
      type: "paragraph",
      text: "We sometimes divide life into important days and ordinary days, as if only the important ones count."
    },
    {
      type: "paragraph",
      text: "But when we look back years later, the picture may be very different. The birthday, the wedding, the promotion, and the journey may stand out. But between them were hundreds of quiet mornings, family dinners, conversations, walks, cups of tea, and evenings at home."
    },
    {
      type: "paragraph",
      text: "Those ordinary days were not the space between the important moments. They were the life itself."
    },

    {
      type: "heading",
      text: "One Ordinary Day"
    },
    {
      type: "paragraph",
      text: "So perhaps today does not need to become extraordinary."
    },
    {
      type: "paragraph",
      text: "Perhaps you can simply notice it."
    },
    {
      type: "paragraph",
      text: "Notice the person sitting beside you. Notice the food you are eating. Notice the weather outside. Notice the few minutes when nobody is asking anything from you. Notice the small things that usually pass without a second thought."
    },
    {
      type: "paragraph",
      text: "Because one day, we may look back and realize that an ordinary Tuesday was not ordinary at all."
    }
  ], 
  quote:
  "The ordinary days are not the days between the important moments. They are the life itself.",
quoteAuthor: "Modern Philosophy",
}
];