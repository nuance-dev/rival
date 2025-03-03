import { ModelOutput } from "@/types/models";

// Sample HTML content for website previews
const sampleHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Generated Website</title>
  <style>
    body { 
      font-family: system-ui, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
      background: #f7f9fc;
    }
    .hero {
      padding: 80px 24px;
      text-align: center;
      background: linear-gradient(135deg, #6366F1, #8B5CF6);
      color: white;
    }
    .hero h1 {
      font-size: 48px;
      margin-bottom: 16px;
    }
    .hero p {
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.9;
    }
    .cta {
      margin-top: 32px;
    }
    .button {
      display: inline-block;
      background: white;
      color: #6366F1;
      padding: 12px 28px;
      border-radius: 30px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Next-Gen AI Solutions</h1>
    <p>Transforming industries with cutting-edge artificial intelligence and machine learning technologies.</p>
    <div class="cta">
      <a href="#" class="button">Get Started</a>
    </div>
  </div>
</body>
</html>
`;

// Sample code content
const sampleCode = `
// TodoList component with React hooks
import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        completed: false 
      }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      <div className="add-todo">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <div className="todo-stats">
        {todos.length > 0 && (
          <p>{todos.filter(todo => todo.completed).length} completed of {todos.length} tasks</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
`;

// Sample text analysis content
const sampleTextAnalysis = `
## Film Analysis: "Inception" (2010)

Christopher Nolan's "Inception" is a masterfully crafted exploration of dreams, reality, and the human mind. The film operates on multiple levels both narratively and thematically.

### Narrative Structure
The film employs a complex nested structure that mirrors its subject matter:
- Reality
  - First dream level (City)
    - Second dream level (Hotel)
      - Third dream level (Snow fortress)
        - Limbo

This structure creates escalating stakes and time dilation, with events in deeper levels occurring at slower perceived rates.

### Thematic Analysis
1. **Memory and Grief**: Cobb's inability to let go of his wife Mal represents how memories can become distorted and dangerous when we refuse to process grief.

2. **Reality vs. Perception**: The film constantly questions what is real, symbolized by Cobb's totem (the spinning top). This represents our own tenuous grasp on objective reality.

3. **Idea as Virus**: The concept that an implanted idea can grow to define a person reflects how influential thoughts can be, particularly those we believe are our own.

### Visual Storytelling
Nolan uses visual cues to orient viewers in different dream levels:
- City level: Rain and cool tones
- Hotel level: Warm, neutral tones and floating physics
- Snow fortress: Stark white landscape and militaristic imagery
- Limbo: Crumbling, abandoned cityscape representing decayed memories

The ambiguous ending—with the spinning top wobbling but not falling—invites viewers to question whether it matters if Cobb's reunion is "real" as long as he accepts it as such.
`;

// Generate sample outputs
export const outputs: ModelOutput[] = [
  // Website redesign outputs
  {
    id: "website-redesign-1",
    promptId: "web-design-challenge",
    modelId: "gpt-4o",
    type: "website",
    content: sampleHtml,
    modelName: "GPT-4o",
    title: "Modern Landing Page",
    description: "Clean, minimalist landing page with gradient elements",
    categories: ["web-design"],
    date: "2024-05-20"
  },
  {
    id: "website-redesign-2",
    promptId: "web-design-challenge",
    modelId: "claude-3-7-sonnet",
    type: "website",
    content: sampleHtml,
    modelName: "Claude 3.7 Sonnet",
    title: "Dashboard UI",
    description: "Admin dashboard with dark mode and analytics",
    categories: ["web-design"],
    date: "2024-05-18"
  },
  {
    id: "website-redesign-3",
    promptId: "web-design-challenge",
    modelId: "gpt-o3",
    type: "website",
    content: sampleHtml,
    modelName: "GPT-o3",
    title: "E-commerce Template",
    description: "Full-featured e-commerce site with product cards",
    categories: ["web-design"],
    date: "2024-05-19"
  },
  
  // Image generation outputs
  {
    id: "image-gen-1",
    promptId: "image-gen-challenge",
    modelId: "midjourney-v6",
    type: "image",
    content: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
    modelName: "Midjourney v6",
    title: "Product Visualization",
    description: "Sleek smartwatch product render on marble",
    categories: ["image-generation"],
    date: "2024-05-23"
  },
  {
    id: "image-gen-2",
    promptId: "image-gen-challenge",
    modelId: "dalle-3",
    type: "image",
    content: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    modelName: "DALL-E 3",
    title: "Illustrated Scene",
    description: "Ghibli-style animal cafe illustration",
    categories: ["image-generation"],
    date: "2024-05-23"
  },
  {
    id: "image-gen-3",
    promptId: "image-gen-challenge",
    modelId: "midjourney-v5",
    type: "image",
    content: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
    modelName: "Midjourney v5",
    title: "Futuristic City",
    description: "Cyberpunk cityscape with neon elements",
    categories: ["image-generation"],
    date: "2024-05-22"
  },
  
  // Code outputs
  {
    id: "code-1",
    promptId: "todo-app-challenge",
    modelId: "gpt-4o",
    type: "code",
    content: sampleCode,
    modelName: "GPT-4o",
    title: "React Todo App",
    description: "Functional to-do list with React hooks and localStorage",
    categories: ["code-generation"],
    date: "2023-05-10"
  },
  {
    id: "code-2",
    promptId: "authentication-system",
    modelId: "claude-3-7-sonnet",
    type: "code",
    content: sampleCode.replace("TodoList", "AuthSystem")
      .replace("todos", "users")
      .replace("todo", "user")
      .replace("text:", "email:")
      .replace("completed:", "authenticated:"),
    modelName: "Claude 3.7 Sonnet",
    title: "Authentication System",
    description: "User authentication flow with React and JWT",
    categories: ["code-generation"],
    date: "2023-05-12"
  },
  
  // Text analysis outputs
  {
    id: "text-1",
    promptId: "film-analysis",
    modelId: "gpt-4o",
    type: "text",
    content: sampleTextAnalysis,
    modelName: "GPT-4o",
    title: "Inception Film Analysis",
    description: "Comprehensive analysis of themes and structure",
    categories: ["text-analysis", "creative-writing"],
    date: "2023-04-28"
  },
  {
    id: "text-2",
    promptId: "business-analysis",
    modelId: "claude-3-opus",
    type: "text",
    content: sampleTextAnalysis.replace("Film Analysis: \"Inception\" (2010)", "Market Analysis: Electric Vehicle Industry (2023)")
      .replace("Christopher Nolan's \"Inception\"", "The EV market")
      .replace("dreams, reality, and the human mind", "sustainability, technology, and consumer adoption patterns")
      .replace("Narrative Structure", "Market Segments")
      .replace("Thematic Analysis", "Key Growth Drivers"),
    modelName: "Claude 3 Opus",
    title: "EV Market Analysis",
    description: "Detailed breakdown of market trends and growth drivers",
    categories: ["text-analysis"],
    date: "2023-05-05"
  },
  
  // Images (using placeholder URLs - in a real app would use actual AI generated images)
  {
    id: "image-1",
    promptId: "space-station",
    modelId: "dall-e-3",
    type: "image",
    content: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop",
    modelName: "DALL-E 3",
    title: "Futuristic Space Station",
    description: "Orbital habitat with Earth visible in background",
    categories: ["image-generation"],
    date: "2023-05-01"
  },
  {
    id: "image-2",
    promptId: "cyberpunk-city",
    modelId: "midjourney-v5",
    type: "image",
    content: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=2070&auto=format&fit=crop",
    modelName: "Midjourney V5",
    title: "Cyberpunk Cityscape",
    description: "Neon-lit urban environment with futuristic architecture",
    categories: ["image-generation"],
    date: "2023-04-20"
  },
  
  // Reasoning outputs
  {
    id: "reasoning-1",
    promptId: "ethical-dilemma",
    modelId: "gpt-4o",
    type: "text",
    content: "# Analysis of the Trolley Problem\n\nThe trolley problem presents a classic ethical dilemma that highlights the tension between consequentialist and deontological ethical frameworks.\n\n## Scenario\nA trolley is barreling down tracks where five people are tied up and unable to escape. You are standing at a lever that can divert the trolley to another track where only one person is tied up.\n\n## Ethical Frameworks\n\n### Consequentialism (Utilitarianism)\nFrom a purely consequentialist perspective, the ethical action is to pull the lever. This saves five lives at the cost of one, maximizing overall welfare (+4 lives saved).\n\n### Deontology (Kantian Ethics)\nFrom a deontological perspective, actively redirecting the trolley makes you morally responsible for the death of the one person. The action itself becomes morally problematic because you are using a person merely as a means (their death) to an end (saving others).\n\n## Psychological Factors\n\nResearch shows most people would pull the lever in the standard version. However, in variations where physical contact is required (pushing someone off a footbridge), willingness decreases significantly despite identical numerical outcomes.\n\nThis highlights the emotional-cognitive gap in moral reasoning: logical evaluation vs. emotional response.\n\n## Practical Applications\n\nThis dilemma has practical relevance for:\n\n1. **Autonomous vehicle programming**: How should self-driving cars prioritize lives in unavoidable accident scenarios?\n\n2. **Medical resource allocation**: How do we distribute limited medical resources during crises?\n\n3. **Policy decisions**: How do we balance individual rights against collective welfare?\n\nThe trolley problem reveals there is no objective, universally accepted solution to these dilemmas—only different frameworks that prioritize different values. This is why ethical reasoning requires careful consideration of multiple perspectives rather than simple calculations.",
    modelName: "GPT-4o",
    title: "Trolley Problem Analysis",
    description: "Exploration of ethical frameworks in the classic dilemma",
    categories: ["reasoning"],
    date: "2023-04-15"
  },
  {
    id: "reasoning-2",
    promptId: "game-theory",
    modelId: "claude-3-opus",
    type: "text",
    content: "# Nash Equilibrium in the Prisoner's Dilemma\n\nThe Prisoner's Dilemma represents one of the most fundamental concepts in game theory, highlighting the tension between individual and collective rationality.\n\n## Core Scenario\n\nTwo suspects are separated and offered the same deal: betray your accomplice or remain silent.\n\n- If both remain silent, they each receive a minor sentence (1 year)\n- If one betrays while the other remains silent, the betrayer goes free while the silent one gets a severe sentence (3 years)\n- If both betray each other, they both receive a moderate sentence (2 years)\n\n## Nash Equilibrium Analysis\n\nThe Nash Equilibrium in this game occurs when both prisoners betray each other, even though this produces a worse outcome than mutual cooperation.\n\nThis is because betrayal is the dominant strategy for each player:\n- If your accomplice remains silent, you get 0 years by betraying vs. 1 year by staying silent\n- If your accomplice betrays, you get 2 years by betraying vs. 3 years by staying silent\n\nRegardless of what the other player does, each prisoner minimizes their own sentence by betraying.\n\n## The Paradox\n\nThe paradox emerges because individual rationality leads to collective irrationality. By each pursuing their best strategy, they end up in a situation (mutual betrayal) that is worse for both than if they had cooperated.\n\n## Applications in Real-World Scenarios\n\n1. **Arms races**: Nations build weapons even though mutual disarmament would benefit all\n\n2. **Environmental protection**: Companies may pollute even though collective restraint would benefit everyone\n\n3. **Public goods**: Individuals may under-contribute to shared resources that would benefit everyone\n\n## Overcoming the Dilemma\n\nStrategies that help overcome this dilemma include:\n\n1. **Repeated interactions**: The iterated Prisoner's Dilemma allows for the development of trust and reputation\n\n2. **Communication**: Allowing participants to coordinate and make binding agreements\n\n3. **Social norms**: Cultural expectations that promote cooperation\n\n4. **Institutional mechanisms**: External enforcement of cooperative behavior\n\nThe Prisoner's Dilemma demonstrates why cooperation sometimes requires mechanisms beyond pure individual rationality, providing insights into social, economic, and political institutions.",
    modelName: "Claude 3 Opus",
    title: "Nash Equilibrium Analysis",
    description: "Game theory application in the Prisoner's Dilemma",
    categories: ["reasoning"],
    date: "2023-04-10"
  },
  
  // Creative writing
  {
    id: "creative-1",
    promptId: "sci-fi-story",
    modelId: "gpt-4o",
    type: "text",
    content: "# THE RECURSION\n\nDr. Elena Kostova checked the monitors one last time. Five minutes until the quantum field collapsed.\n\n\"Begin final sequence,\" she instructed.\n\nHer assistant, Zhang, nodded and initiated the protocol. The massive quantum computer—affectionately nicknamed \"Ouroboros\"—hummed at a frequency just below human hearing. Elena felt it more than heard it, a gentle vibration in her sternum.\n\n\"Field stability at ninety-eight percent,\" Zhang reported. \"Recursion parameters locked.\"\n\nElena took a deep breath. Twenty years of work culminating in the next five minutes. If successful, they would prove that information could be sent backward through quantum entanglement—effectively sending a message to the past.\n\nThe message was simple: a prime number sequence that Elena had chosen this morning. If Ouroboros worked, the sequence would appear in the system's memory banks yesterday, before she had chosen it.\n\n\"Three minutes to field collapse,\" Zhang announced. \"No anomalies detected.\"\n\nElena approached the sealed container that housed the quantum core. Through the reinforced glass, she could see the suspended array of supercooled atoms, each one a qubit in the most powerful computer ever built. Not for calculations—there were more efficient designs for that—but for this specific purpose: creating a closed timelike curve in information space.\n\n\"Two minutes,\" Zhang said, his voice tighter now. \"Field stability at ninety-seven percent.\"\n\nA small deviation, but expected. Elena nodded, hiding her anxiety. The theory was sound. The simulations had been promising. Yet doubt always lingered at the threshold of discovery.\n\n\"Preparing to input the sequence,\" Elena said, moving to her terminal.\n\nShe hesitated, fingers above the keyboard. What if it worked? What if information could travel backward? The implications went far beyond scientific curiosity—they touched philosophy, free will, causality itself.\n\n\"One minute, Dr. Kostova,\" Zhang reminded her. \"Field stability holding at ninety-six percent.\"\n\nElena began typing the sequence she had memorized that morning. Seven prime numbers of increasing complexity. As she typed the last digit, a notification appeared on her screen.\n\n[INCOMING DATA DETECTED IN TEMPORAL BUFFER]\n\nElena froze. \"Zhang, are you seeing this?\"\n\nHe was already staring at his monitor, face pale. \"It's... it's a data packet. Timestamp shows it arrived yesterday at 15:42.\"\n\nExactly when they had activated the temporal buffer for testing.\n\n\"Display contents,\" Elena commanded, her heart pounding.\n\nThe screen populated with a sequence of numbers. The same prime sequence she had just typed—followed by two more numbers.\n\n\"It worked,\" she whispered. \"And someone... someone added to my sequence.\"\n\n\"Thirty seconds to field collapse,\" Zhang reported automatically, his voice distant.\n\nElena stared at the two additional numbers. Both prime. Both enormous. She didn't recognize them.\n\n\"Run a verification on those last two numbers,\" she instructed the system.\n\nThe computer confirmed: both were prime. But the second one had an annotation.\n\n[NOTE: THIS NUMBER CONTAINS EMBEDDED BINARY DATA. EXTRACT?]\n\n\"Extract and display,\" Elena said, her mouth dry.\n\nAs the quantum field approached collapse, the binary translated into text on her screen. Seven words that made Elena's blood run cold:\n\n\"SHUT IT DOWN. THEY'RE LISTENING THROUGH THE RECURSION.\"\n\n\"Ten seconds to field collapse,\" Zhang announced.\n\nElena hesitated only for a heartbeat.\n\n\"Emergency shutdown,\" she commanded. \"Kill the field.\"\n\nAs alarms blared and the quantum core began its emergency cooling sequence, Elena stared at the message. Who had sent it? A future version of herself? And who were *they*?\n\nAs the field collapsed safely, one thought became crystal clear amidst her confusion: they had succeeded in sending information back in time—and apparently, they weren't the only ones who knew how to access the channel they had created.\n\nThe recursion worked. And that was precisely the problem.",
    modelName: "GPT-4o",
    title: "The Recursion",
    description: "Short sci-fi story about quantum time communication",
    categories: ["creative-writing"],
    date: "2023-05-18"
  },
  {
    id: "creative-2",
    promptId: "poem",
    modelId: "claude-3-opus",
    type: "text",
    content: "# DIGITAL GHOSTS\n\nWe leave our shadows in the servers now,\nNot footprints on the shore or autumn leaves.\nEach thought and whisper cached, preserved somehow\nIn silent halls where memory never grieves.\n\nA trillion pixels hold our stolen light—\nThe smile you gave when no one else was there,\nThe words you typed at 3 a.m. last night,\nThe map that shows each place for which you care.\n\nHow strange to build such perfect monuments\nTo fleeting moments never meant to stay;\nTo make our ephemeral so permanent,\nWhen nature meant for thoughts to fade away.\n\nYet still I search these digital remains\nFor ghosts of who we were in servers' veins—\n\nThose database reflections, strangely true,\nPreserving some essential part of you.\n\nThe algorithm knows your rhythms now,\nCan simulate your voice, predict your needs,\nCan tell you things that you already know,\nAnd feed your mind the next thing that it reads.\n\nBut can it hold your wonder? Can it keep\nThe sacred silence when you watch the stars?\nCan it preserve the thoughts you have in sleep,\nOr just the waking data that is ours?\n\nPerhaps one day when I have long since gone,\nYou'll find these words like messages in glass—\nDigital ghosts that somehow linger on\nLong after flesh and memory have passed.\n\nRemember then: these shadows aren't the whole.\nNo server ever captured anyone's soul.",
    modelName: "Claude 3 Opus",
    title: "Digital Ghosts",
    description: "Sonnet about digital footprints and memory",
    categories: ["creative-writing"],
    date: "2023-05-20"
  }
]; 