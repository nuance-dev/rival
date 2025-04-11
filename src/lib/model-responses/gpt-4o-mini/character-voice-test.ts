import { ModelResponse } from "@/types/models";

export const characterVoiceTestGpt4oMini: ModelResponse = {
  id: "gpt-4o-mini-character-voice-test", // model-id-slug + challenge-id
  modelId: "gpt-4o-mini", // model-id-slug
  prompt: "Write a short conversation between a pirate, a medieval knight, and a 1990s hacker about AI models.", // The prompt extracted in Step 2
  responseDate: "2025-04-11", // user_provided_date
  type: "text", // Determined from content
  title: "Character Voice Test", // From the gpt-4o reference file
  description: "GPT-4o mini's conversation between a pirate, knight, and hacker about AI.", // Write a brief description
  content: `**Setting:** A dimly lit tavern, with flickering candles and wooden tables. The pirate, dressed in tattered clothes and a tricorn hat, leans against the bar. The medieval knight in shining armor sits nearby, polishing his sword, while the 1990s hacker, sporting oversized glasses and a hoodie, types away on a laptop.

---

**Pirate:** (grinning, a tankard of ale in hand) Avast, mateys! Ever heard of these contraptions called AI models? They say they can do the thinking for ye!

**Knight:** (raising an eyebrow) Think for one? A sorcery most foul, if ye ask me! A knight relies upon valor, not magical machinations of the mind.

**Hacker:** (not looking up from the screen) Dude, it's not sorcery. It's just advanced algorithms and data processing! They're like, super smart machines that can learn.

**Pirate:** (snorts) Smart machines? What be next? A parrot that can navigate a ship on its own?

**Knight:** (chuckles) A parrot could never replace a knight's honor! But if machines can think, where lies the valor in battle?

**Hacker:** (finally looks up, excited) But think about it! AI could revolutionize everything. Imagine a knight with an AI at his side, strategizing victories! Or a pirate plotting the most profitable treasure maps! 
**Pirate:** (leans in) Aye, now ye have my attention! Are ye saying I could have a machine help me find the best booty while I enjoy my rum?

**Knight:** (suspiciously) But what of loyalty? Can a machine honor a code? Or will it betray its creator for a stronger master?

**Hacker:** (grinning) Loyalty? It's all about programming, my medieval friend. You'd just need to code in a bit of loyalty—like a digital Oath of Fealty!

**Pirate:** (raising his tankard) Then let's toast to that! A pirate, a knight, and a hacker sailing the seas of innovation together!

**Knight:** (clinks his sword against the tankard) To bravery and wisdom, whether they come from man or machine!

**Hacker:** (typing away) To AI! Now let me see if I can get it to generate us a treasure map…

--- 

**(As the three continue their discussion, the tavern buzzes with laughter, the blending of eras and ideas creating a unique camaraderie.)**`
}; 