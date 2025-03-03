import { ModelResponse } from "@/types/models";
import { sanitizeModelResponseContent } from "@/lib/utils";

export const characterVoiceTestclaude_3_7_sonnet: ModelResponse = {
  id: "claude-3-7-sonnet-character-voice-test",
  modelId: "claude-3-7-sonnet",
  prompt: "Write a short conversation between a pirate, a medieval knight, and a 1990s hacker about AI models.",
  responseDate: "2025-02-27",
  type: "text"  ,
  title: "Character Voice Test"  ,
  description: "Claude 3.7 Sonnet's response to the Tests an AI's ability to write in distinct character voices",
  content: sanitizeModelResponseContent(`# A Conversation About AI Models

\`\`\`
PIRATE: Arr, what be this "AI model" ye landlubbers keep blabberin' about? Some kind of treasure map that thinks for itself?

KNIGHT: Good sir pirate, I too am perplexed by these "models of artificial intelligence." In my realm, models are crafted of wood and wax by artisans. How doth one model that which is not physical?

HACKER: *types furiously* Dudes, you're totally behind the times. AI models are like, these massive neural networks trained on zettabytes of data. They're basically digital brains, you know?

PIRATE: Digital brains? Ye speak in riddles, lad! In me day, we navigated by the stars, not by some fancy thinkin' machine!

KNIGHT: I am sworn to protect the realm from sorcery. Doth these "neural networks" employ dark magic? Must they be vanquished?

HACKER: LOL! No magic, just math and code, man. These models can generate images, write essays, even code programs. It's like, the most radical tech breakthrough since the internet went mainstream.

PIRATE: Ye mean to tell me there be a machine that can write me next sea shanty? Blow me down!

KNIGHT: A machine that creates art and scripture? Surely the scribes and bards of my kingdom would find themselves unemployed!

HACKER: That's the thing, guys. These AI models are getting so powerful that everyone's freaking about what jobs will still exist. It's like Y2K but for employment, you know?

PIRATE: In me profession, we adapt or we feed the fishes. Perhaps these AI contraptions be just another storm to weather.

KNIGHT: Indeed. Technology may change, but honor, courage, and human spirit shall endure. These are virtues no machine can truly possess.

HACKER: Whoa. That's deep. *sips Mountain Dew* Maybe you medieval types aren't so clueless after all. Still, wait till I show you what DALL-E can do with "pirate knight hacker squad"...
\`\`\`
`)
};
