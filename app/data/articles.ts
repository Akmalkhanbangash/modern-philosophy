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
  slug: "stoicism-in-modern-life",
  title: "Stoicism in Modern Life",
  description: "Ancient wisdom for dealing with stress and uncertainty today.",
  readTime: "6 min read",
  author: "Malik Akmal Khan",
  category: "Philosophy",
 content: [
  {
    type: "paragraph",
    text: "Stoicism teaches us to focus on what we can control, accept what we cannot, and develop resilience in everyday life."
  }
]
}
];