const riddles = [
    {
      riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      answer: "An echo"
    },
    {
      riddle: "The more you take, the more you leave behind. What am I?",
      answer: "Footsteps"
    },
    {
      riddle: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "A fire"
    },
    {
      riddle: "What has keys but can't open locks?",
      answer: "A piano"
    },
    {
      riddle: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answer: "Pencil lead (graphite)"
    },
    {
      riddle: "I'm not a plant, but I have leaves. I'm not a beast, but I have a spine. What am I?",
      answer: "A book"
    },
    {
      riddle: "I'm found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      answer: "Yarn"
    },
    {
      riddle: "I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?",
      answer: "A cloud"
    },
    {
      riddle: "I am full of holes but still hold water. What am I?",
      answer: "A sponge"
    },
    {
      riddle: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
      answer: "A keyboard"
    },
    {
      riddle: "I'm tall when I'm young and short when I'm old. What am I?",
      answer: "A candle"
    },
    {
      riddle: "I'm always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      riddle: "I can be cracked, made, told, and played. What am I?",
      answer: "A joke"
    },
    {
      riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter 'M'"
    },
    {
      riddle: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answer: "Pencil lead (graphite)"
    },
    {
      riddle: "What has keys but can't open locks?",
      answer: "A piano"
    },
    {
      riddle: "I'm found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      answer: "Yarn"
    },
    {
      riddle: "I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?",
      answer: "A cloud"
    },
    {
      riddle: "I am full of holes but still hold water. What am I?",
      answer: "A sponge"
    },
    {
      riddle: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
      answer: "A keyboard"
    },
    {
      riddle: "I'm tall when I'm young and short when I'm old. What am I?",
      answer: "A candle"
    },
    {
      riddle: "I'm always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      riddle: "I can be cracked, made, told, and played. What am I?",
      answer: "A joke"
    },
    {
      riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter 'M'"
    },
    {
      riddle: "I have keys but open no locks, I have space but no room, You can enter but not go inside, What am I?",
      answer: "A keyboard"
    },
    {
      riddle: "I have keys but can't open locks, I have space but no room, You can enter, but you can't go inside, What am I?",
      answer: "A computer"
    },
    {
      riddle: "The more you take, the more you leave behind. What am I?",
      answer: "Footsteps"
    },
    {
      riddle: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "A fire"
    },
    {
      riddle: "I'm found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      answer: "Yarn"
    },
    {
      riddle: "I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?",
      answer: "A cloud"
    },
    {
      riddle: "I am full of holes but still hold water. What am I?",
      answer: "A sponge"
    },
    {
      riddle: "I'm not a plant, but I have leaves. I'm not a beast, but I have a spine. What am I?",
      answer: "A book"
    },
    {
      riddle: "I'm tall when I'm young and short when I'm old. What am I?",
      answer: "A candle"
    },
    {
      riddle: "I'm always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      riddle: "I can be cracked, made, told, and played. What am I?",
      answer: "A joke"
    },
    {
      riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter 'M'"
    },
    {
      riddle: "I have keys but open no locks, I have space but no room, You can enter but not go inside, What am I?",
      answer: "A keyboard"
    },
    {
      riddle: "I have keys but can't open locks, I have space but no room, You can enter, but you can't go inside, What am I?",
      answer: "A computer"
    },
    {
      riddle: "I have keys but open no locks, I have space but no room, You can enter but not go inside, What am I?",
      answer: "A keyboard"
    },
    {
      riddle: "I have keys but can't open locks, I have space but no room, You can enter, but you can't go inside, What am I?",
      answer: "A computer"
    },
    {
      riddle: "What has keys but can't open locks?",
      answer: "A piano"
    },
    {
      riddle: "I'm found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      answer: "Yarn"
    },
    {
      riddle: "I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?",
      answer: "A cloud"
    },
    {
      riddle: "I am full of holes but still hold water. What am I?",
      answer: "A sponge"
    },
    {
      riddle: "I'm not a plant, but I have leaves. I'm not a beast, but I have a spine. What am I?",
      answer: "A book"
    },
    {
      riddle: "I'm tall when I'm young and short when I'm old. What am I?",
      answer: "A candle"
    },
    {
      riddle: "I'm always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      riddle: "I can be cracked, made, told, and played. What am I?",
      answer: "A joke"
    },
    {
      riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter 'M'"
    },
  ];


  export default riddles;