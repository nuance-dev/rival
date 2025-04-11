import { ModelResponse } from "@/types/models";

export const countLettersOptimusAlpha: ModelResponse = {
  id: "optimus-alpha-count-letters",
  modelId: "optimus-alpha",
  prompt: "How many \"L\" are in \"LOLLAPALOOZA\"",
  responseDate: "2025-04-11",
  type: "text",
  title: "Count the Letters",
  description: "Optimus Alpha's response testing its attention to detail.",
  content: `Let's count the number of **"L"** letters in **"LOLLAPALOOZA"**:

LOLLAPALOOZA

Let's break it down letter by letter:

L  
O  
L  
L  
A  
P  
A  
L  
O  
O  
Z  
A  

Now, let's count the **L's**:

1. First L (1st letter)
2. Second L (3rd letter)
3. Third L (4th letter)
4. Fourth L (8th letter)

There are **4** "L"s in "LOLLAPALOOZA".`
}; 